const perspectiveID = 'wikipedia_extracts'

export const wikipediaPropertiesFacetResults = `
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
    ?id wlink:has_reference ?reference__id .
    ?reference__id skos:prefLabel ?reference__prefLabel .
    BIND (CONCAT("/references/page/", REPLACE(STR(?reference__id), "^.*\\\\/(.+)", "$1")) AS ?reference__dataProviderUrl)
  }
  UNION
  {
    ?id sch:gender ?gender__id .
    ?gender__id skos:prefLabel ?gender__prefLabel .
  }
  UNION
  { 
    ?proxy foaf:focus ?id
    {
      ?proxy sch:birthPlace ?birth_place__id .
      ?birth_place__id skos:prefLabel ?birth_place__prefLabel .
      BIND (CONCAT("/places/page/", REPLACE(STR(?birth_place__id), "^.*\\\\/(.+)", "$1")) AS ?birth_place__dataProviderUrl)
    }
    UNION
    {
      ?proxy sampos:birth_time ?birth_time__id .
      ?birth_time__id skos:prefLabel ?birth_time__prefLabel ;
        time:hasBeginning ?birth_time__start ;
        time:hasEnd ?birth_time__end  
    }
    UNION
    {
      ?proxy sampos:death_time ?death_time__id .
      ?death_time__id skos:prefLabel ?death_time__prefLabel ;
        time:hasBeginning ?death_time__start ;
        time:hasEnd ?death_time__end
    }
    UNION
    {
      ?proxy sch:deathPlace ?death_place__id .
      ?death_place__id skos:prefLabel ?death_place__prefLabel .
      BIND (CONCAT("/places/page/", REPLACE(STR(?death_place__id), "^.*\\\\/(.+)", "$1")) AS ?death_place__dataProviderUrl)
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

