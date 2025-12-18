const perspectiveID = 'groups'

export const groupPropertiesFacetResults = `
  {
    <SUBQUERY>
    ?id skos:prefLabel ?prefLabel__id .
    BIND(?prefLabel__id AS ?prefLabel__prefLabel)
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
    BIND(?id as ?uri__id)
    BIND(?id as ?uri__dataProviderUrl)
    BIND(?id as ?uri__prefLabel)
  }
  UNION
  {
    <SUBQUERY>
    ?id sch:image ?image__id ;
    skos:prefLabel ?image__description ;
    skos:prefLabel ?image__title .
    # BIND (CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=200") as ?image__url)
    BIND (?image__id as ?image__url)
  }
  UNION
  {
    <SUBQUERY>
    ?proxy foaf:focus ?id
    {
      ?proxy skos:prefLabel ?altLabel
    }
    UNION
    {
      ?proxy sch:location ?location__id .
      ?location__id skos:prefLabel ?location__prefLabel .
      FILTER (LANG(?location__prefLabel)='en')
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
    BIND (<ID> as ?id)
    ?id skos:prefLabel ?prefLabel__id .
    BIND(?prefLabel__id AS ?prefLabel__prefLabel)
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
    BIND(?id as ?uri__id)
    BIND(?id as ?uri__dataProviderUrl)
    BIND(?id as ?uri__prefLabel)
  }
  UNION
  {
    BIND (<ID> as ?id)
    ?id sch:image ?image__id ;
      skos:prefLabel ?image__description ;
      skos:prefLabel ?image__title .
    BIND (CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=200") as ?image__url)
  }
  UNiON
  { 
    SELECT DISTINCT ?id (CONCAT(STR(MIN(YEAR(?_start))), '-', STR(MaX(YEAR(?_end)))) AS ?estimated_time)
    WHERE {
    BIND (<ID> as ?id)
    [] foaf:focus ?id ;
       sampos:estimated_time [ time:hasBeginning ?_start ; time:hasEnd ?_end ]
    } GROUP BY ?id
  }
  UNION
  {
    BIND (<ID> as ?id)
    ?id skos:closeMatch? ?namesake__id .
    FILTER (STR(?id) != STR(?namesake__id))
    
    ?namesake__id skos:prefLabel ?namesake__prefLabel .
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?namesake__id), "^.*\\\\/(.+)", "$1")) AS ?namesake__dataProviderUrl)
  }
  UNION
  {
    BIND (<ID> as ?id)
    ?sentence__id wlink:references/owl:sameAs/^owl:sameAs/foaf:focus ?id ;
          skos:prefLabel ?_label .
    
    ?referenced_person__id (^foaf:focus)/wlink:has_reference ?sentence__id ;
          a sch:Person ;
          skos:prefLabel ?referenced_person__prefLabel  .

    BIND (CONCAT(
      REPLACE(?referenced_person__prefLabel, "^(.+) [0-9()-]+$","$1"),
      ": ", 
      ?_label) AS ?sentence__prefLabel)
    BIND (CONCAT("/people/page/", REPLACE(STR(?referenced_person__id), "^.*\\\\/(.+)", "$1")) AS ?referenced_person__dataProviderUrl)
    BIND (CONCAT("/people/page/", REPLACE(STR(?referenced_person__id), "^.*\\\\/(.+)", "$1")) AS ?sentence__dataProviderUrl)
  }
  UNION
  {
    BIND (<ID> as ?id)
    GRAPH ?g { ?proxy foaf:focus ?id }
    ?proxy owl:sameAs ?link .
    [] owl:sameAs ?link ; a sampos:PlaceProxy ; foaf:focus ?place__id .
    ?place__id skos:prefLabel ?place__prefLabel .
    FILTER (LANG(?place__prefLabel)='en')
    BIND (CONCAT("/places/page/", REPLACE(STR(?place__id), "^.*\\\\/(.+)", "$1")) AS ?place__dataProviderUrl)
  }
  UNION
  {
    BIND (<ID> as ?id)
    GRAPH ?g { ?proxy foaf:focus ?id }
    ?proxy skos:prefLabel|skos:altLabel ?altLabel__id .
    BIND(?altLabel__id AS ?altLabel__prefLabel)
    BIND(CONCAT("/group_proxies/page/", REPLACE(STR(?proxy), "^.*\\\\/(.+)", "$1")) AS ?altLabel__dataProviderUrl)

    ?g skos:prefLabel ?altLabel__source__prefLabel .
    BIND (?proxy AS ?altLabel__source__id)
    BIND (CONCAT("/group_proxies/page/", REPLACE(STR(?proxy), "^.*\\\\/(.+)", "$1")) AS ?altLabel__source__dataProviderUrl)
  }
  UNION
  {
    BIND (<ID> as ?id)
    ?id (^foaf:focus)/sampos:category ?category
  }
  UNION
  {
    BIND (<ID> as ?id)
    ?id (^foaf:focus)/sch:location ?location__id .
    ?location__id skos:prefLabel ?location__prefLabel .
    BIND (CONCAT("/places/page/", REPLACE(STR(?location__id), "^.*\\\\/(.+)", "$1")) AS ?location__dataProviderUrl)
  }
  UNION
  {
    BIND (<ID> as ?id)
    ?id (^foaf:focus)/foaf:page ?website__id ; skos:prefLabel ?_label .
    ?website__id a/skos:prefLabel ?_label2 .
    BIND (CONCAT(?_label2, ' (', ?_label, ')') AS ?website__prefLabel)
    BIND (?website__id as ?website__dataProviderUrl)
  }
  UNION
  {
    BIND (<ID> as ?id)
    ?id (^foaf:focus)/owl:sameAs ?external__id  ; skos:prefLabel ?_label .
    ?external__id a/skos:prefLabel  ?_label2 .
    BIND (CONCAT(?_label2, ' (', ?_label, ')') AS ?external__prefLabel)
    BIND (?external__id as ?external__dataProviderUrl)
  }
`

export const groupsMapQuery = `
SELECT DISTINCT ?id ?lat ?long 
(COUNT(DISTINCT ?group) AS ?instanceCount)
WHERE {
  <FILTER>

  [] foaf:focus ?group ;
     sch:location ?id .
  
  ?id wgs84:lat ?lat ; wgs84:long ?long .

} GROUP BY ?id ?lat ?long
`

export const placePropertiesInfoWindow = `
  OPTIONAL { ?id skos:prefLabel ?_label }
  FILTER (LANG(?_label) = "en")
  BIND (COALESCE(?_label, "<place>") AS ?prefLabel__id)
  BIND (?prefLabel__id AS ?prefLabel__prefLabel)
  BIND (CONCAT("/places/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
`

export const groupsRelatedTo = `
  OPTIONAL {
    <FILTER>
    
    [] foaf:focus ?related__id ;
       sch:location ?id .
    
    ?related__id skos:prefLabel ?related__prefLabel .
    BIND (CONCAT("/${perspectiveID}/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
  }
`

export const csvQueryGroups = `SELECT DISTINCT ?id 
  ?name ?name_sv ?name_en
  ?location 
  ?datasources
  ?webpages 
  ?pagelinks 
WHERE {
  <FILTER>
  FILTER(BOUND(?id))
  
  ?id a sch:Organization .
  OPTIONAL { ?id skos:prefLabel ?name }
  
  OPTIONAL {
    SELECT DISTINCT ?id (GROUP_CONCAT(DISTINCT STR(?_label); separator=";") AS ?name_sv) WHERE {
      ?id (^foaf:focus)/skos:prefLabel ?_label
        FILTER (LANG(?_label)='sv')
    } GROUP BY ?id
  }
  
  OPTIONAL {
    SELECT DISTINCT ?id (GROUP_CONCAT(DISTINCT STR(?_label); separator=";") AS ?name_en) WHERE {
      ?id (^foaf:focus)/skos:prefLabel ?_label
        FILTER (LANG(?_label)='en')
    } GROUP BY ?id
  }
  
  # NB these blocks currently result to a timeout:
  OPTIONAL {
    SELECT DISTINCT ?id (GROUP_CONCAT(DISTINCT STR(?_place); separator=";") AS ?location) WHERE {
      ?id (^foaf:focus)/sch:location/skos:prefLabel ?_place
        FILTER (LANG(?_place)='en')
    } GROUP BY ?id
  }
  
  OPTIONAL {
    SELECT DISTINCT ?id (GROUP_CONCAT(DISTINCT STR(?_datasource); separator=";") AS ?datasources) WHERE {
      ?id (^foaf:focus)/owl:sameAs ?_datasource 
    } GROUP BY ?id 
  }
  
  OPTIONAL {
    SELECT DISTINCT ?id (GROUP_CONCAT(DISTINCT STR(?_webpage); separator=";") AS ?webpages) WHERE {
      ?id (^foaf:focus)/foaf:page ?_webpage 
    } GROUP BY ?id 
  }
  
  OPTIONAL { ?id sampos:pagelinks ?pagelinks }
}
ORDER BY DESC(COALESCE(?pagelinks, 0)) ?name 
`
