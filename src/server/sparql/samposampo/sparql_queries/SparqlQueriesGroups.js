const perspectiveID = 'groups'

export const groupPropertiesFacetResults = `
  {
    ?id skos:prefLabel ?prefLabel__id .
    BIND(?prefLabel__id AS ?prefLabel__prefLabel)
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
    BIND(?id as ?uri__id)
    BIND(?id as ?uri__dataProviderUrl)
    BIND(?id as ?uri__prefLabel)
  }
  UNION
  {
    ?id sch:image ?image__id ;
    skos:prefLabel ?image__description ;
    skos:prefLabel ?image__title .
    # BIND (CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=200") as ?image__url)
    BIND (?image__id as ?image__url)
  }
  UNION
  {
    ?proxy foaf:focus ?id
    {
      ?proxy skos:prefLabel ?altLabel
    }
    UNION
    {
      ?proxy sch:location ?location__id .
      ?location__id skos:prefLabel ?location__prefLabel .
      BIND (CONCAT("/places/page/", REPLACE(STR(?location__id), "^.*\\\\/(.+)", "$1")) AS ?location__dataProviderUrl)
    }
    UNION
    {
      ?proxy foaf:page ?website__id .
      ?website__id a/skos:prefLabel ?website__prefLabel .
      BIND (?website__id as ?website__dataProviderUrl)
    }
    UNION
    {
      ?proxy owl:sameAs ?external__id .
      ?external__id a/skos:prefLabel ?external__prefLabel .
      BIND (?external__id as ?external__dataProviderUrl)
    }
  }
`

export const groupPropertiesInstancePage = `
  {
    ?id skos:prefLabel ?prefLabel__id .
    BIND(?prefLabel__id AS ?prefLabel__prefLabel)
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
    BIND(?id as ?uri__id)
    BIND(?id as ?uri__dataProviderUrl)
    BIND(?id as ?uri__prefLabel)
  }
  UNION
  {
    ?id sch:image ?image__id ;
      skos:prefLabel ?image__description ;
      skos:prefLabel ?image__title .
    BIND (CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=200") as ?image__url)
  }
  UNiON
  { 
    SELECT DISTINCT ?id (CONCAT(STR(MIN(YEAR(?_start))), '-', STR(MaX(YEAR(?_end)))) AS ?estimated_time)
    WHERE {
    [] foaf:focus ?id ;
       sampos:estimated_time [ time:hasBeginning ?_start ; time:hasEnd ?_end ]
    } GROUPBY ?id
  }
  UNION
  {
    ?id skos:closeMatch? ?namesake__id .
    FILTER (STR(?id) != STR(?namesake__id))
    
    ?namesake__id skos:prefLabel ?namesake__prefLabel .
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?namesake__id), "^.*\\\\/(.+)", "$1")) AS ?namesake__dataProviderUrl)
  }
  UNION
  {
    GRAPH ?g { ?proxy foaf:focus ?id }
    {
      ?proxy skos:prefLabel|skos:altLabel ?altLabel__id .
      BIND(?altLabel__id AS ?altLabel__prefLabel)
      BIND(CONCAT("/proxies/page/", REPLACE(STR(?proxy), "^.*\\\\/(.+)", "$1")) AS ?altLabel__dataProviderUrl)

      ?g skos:prefLabel ?altLabel__source__prefLabel .
      BIND (?proxy AS ?altLabel__source__id)
      BIND (CONCAT("/proxies/page/", REPLACE(STR(?proxy), "^.*\\\\/(.+)", "$1")) AS ?altLabel__source__dataProviderUrl)
    }
    UNION
    {
      ?proxy sampos:category ?category
    }
    UNION
    {
      ?proxy sch:location ?location__id .
      ?location__id skos:prefLabel ?location__prefLabel .
      BIND (CONCAT("/places/page/", REPLACE(STR(?location__id), "^.*\\\\/(.+)", "$1")) AS ?location__dataProviderUrl)
    }
    UNION
    {
      ?proxy foaf:page ?website__id ; skos:prefLabel ?_label .
      ?website__id a/skos:prefLabel ?_label2 .
      BIND (CONCAT(?_label2, ' (', ?_label, ')') AS ?website__prefLabel)
      BIND (?website__id as ?website__dataProviderUrl)
    }
    UNION
    {
      ?proxy owl:sameAs ?external__id  ; skos:prefLabel ?_label .
      ?external__id a/skos:prefLabel  ?_label2 .
      BIND (CONCAT(?_label2, ' (', ?_label, ')') AS ?external__prefLabel)
      BIND (?external__id as ?external__dataProviderUrl)
    }
  }
`

export const peopleMapQuery = `
SELECT DISTINCT ?id ?lat ?long 
(COUNT(DISTINCT ?person) AS ?instanceCount)
WHERE {
  <FILTER>
  { 
    [] foaf:focus ?person ;
      sch:birthPlace ?id 
  }
  UNION
  { 
    [] foaf:focus ?person ;
      sch:deathPlace ?id 
  }

[] foaf:focus ?id ;
   wgs84:lat ?lat ; wgs84:long ?long .

} GROUP BY ?id ?lat ?long
`

export const placePropertiesInfoWindow = `
  OPTIONAL { ?id skos:prefLabel ?_label }
  BIND (COALESCE(?_label, "<place>") AS ?prefLabel__id)
  BIND (?prefLabel__id AS ?prefLabel__prefLabel)
  BIND (CONCAT("/places/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
`

export const peopleRelatedTo = `
  OPTIONAL {
    <FILTER>
    
    { [] foaf:focus ?related__id ;
      sch:birthPlace ?id
    }
    UNION
    { [] foaf:focus ?related__id ;
      sch:deathPlace ?id
    }
    ?related__id skos:prefLabel ?related__prefLabel .
    BIND (CONCAT("/people/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
  }
`

export const ageQuery = ` SELECT ?category (count(DISTINCT ?born) AS ?Births) (count(DISTINCT ?deceased) AS ?Deaths)
WHERE {
  
  { SELECT DISTINCT ?person__id (SAMPLE(?_proxy) AS ?proxy) WHERE {
      <FILTER>

	  	?person__id a sch:Person .
      ?_proxy foaf:focus ?person__id ; sampos:birth_time/time:hasBeginning [] .
    } GROUPBY ?person__id }
  FILTER (BOUND(?proxy))
  {
    ?proxy sampos:birth_time/time:hasBeginning ?time .
    BIND (?proxy AS ?born)
  }
  UNION
  {
    ?proxy  sampos:death_time/time:hasEnd ?time .
    BIND (?proxy AS ?deceased)
  }
  
  BIND (STR(year(?time)) AS ?category)
  FILTER (?category <= STR(YEAR(NOW())))
} GROUPBY ?category ORDER BY ?category
`

export const peopleMigrationsQuery = `
SELECT DISTINCT ?id 
?from__id ?from__prefLabel ?from__lat ?from__long
?to__id ?to__prefLabel ?to__lat ?to__long
(CONCAT("/places/page/", REPLACE(STR(?from__id), "^.*\\\\/(.+)", "$1")) AS ?from__dataProviderUrl)
(CONCAT("/places/page/", REPLACE(STR(?to__id), "^.*\\\\/(.+)", "$1")) AS ?to__dataProviderUrl)
(COUNT(DISTINCT ?person) as ?instanceCount)
WHERE {
  <FILTER>
  ?person a sch:Person ;
    ^foaf:focus [ sch:birthPlace ?from__id ;
                sch:deathPlace ?to__id ] .
  
  FILTER(?from__id != ?to__id)

  ?from__id skos:prefLabel ?from__prefLabel .
  FILTER (lang(?from__prefLabel)="fi")
  
  { SELECT DISTINCT ?from__id (SAMPLE(?_from_proxy) AS ?from_proxy) 
      WHERE { ?_from_proxy foaf:focus ?from__id ; 
    			wgs84:lat [] } 
    GROUPBY ?from__id }
  ?from_proxy wgs84:lat ?from__lat ; wgs84:long ?from__long .
  
  
  ?to__id skos:prefLabel ?to__prefLabel .
  FILTER (lang(?to__prefLabel)="fi")
  { SELECT DISTINCT ?to__id (SAMPLE(?_to_proxy) AS ?to_proxy) 
      WHERE { ?_to_proxy foaf:focus ?to__id ; 
    			wgs84:lat [] }
    GROUPBY ?to__id }
  
  ?to_proxy wgs84:lat ?to__lat ; wgs84:long ?to__long .

  BIND (IRI(CONCAT(STR(?from__id), "-", REPLACE(STR(?to__id), "^.*\\\\/(.+)", "$1"))) as ?id)
}
GROUP BY ?id 
?from__id ?from__prefLabel ?from__lat ?from__long
?to__id ?to__prefLabel ?to__lat ?to__long
ORDER BY desc(?instanceCount)
`

