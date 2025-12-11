const perspectiveID = 'wikipedia_extracts'

export const wikipediaPropertiesFacetResults = `
  {
    ?id skos:prefLabel ?prefLabel__id
    BIND(?prefLabel__id AS ?prefLabel__prefLabel)
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
    BIND(?id as ?uri__id)
    BIND(?id as ?uri__dataProviderUrl)
    BIND(?id as ?uri__prefLabel)
  }
  UNION
  {
    ?id foaf:focus/sch:image ?image__id ;
      skos:prefLabel ?image__description ;
      skos:prefLabel ?image__title .
    # BIND (CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=200") as ?image__url)
    BIND (?image__id as ?image__url)
  }
  UNION
  {
    ?id wlink:has_reference ?sentence__id .
    ?sentence__id skos:prefLabel ?sentence__prefLabel .
    BIND (CONCAT("/references/page/", REPLACE(STR(?sentence__id), "^.*\\\\/(.+)", "$1")) AS ?sentence__dataProviderUrl)
  }
  UNION
  {
    ?id foaf:focus/sch:gender ?gender__id .
    ?gender__id skos:prefLabel ?gender__prefLabel .
  }
  UNION
  { 
    ?id foaf:focus/(^foaf:focus) ?proxy
    {
      ?proxy sch:birthPlace ?birth_place__id .
      ?birth_place__id skos:prefLabel ?birth_place__prefLabel .
      BIND (CONCAT("/places/page/", REPLACE(STR(?birth_place__id), "^.*\\\\/(.+)", "$1")) AS ?birth_place__dataProviderUrl)
    }
    UNION
    {
      ?proxy sampos:birth_time ?birth_Timespan__id .
      ?birth_Timespan__id skos:prefLabel ?birth_Timespan__prefLabel ;
        time:hasBeginning ?birth_Timespan__start ;
        time:hasEnd ?birth_Timespan__end
    }
    UNION
    {
      ?proxy sampos:death_time ?death_Timespan__id .
      ?death_Timespan__id skos:prefLabel ?death_Timespan__prefLabel ;
        time:hasBeginning ?death_Timespan__start ;
        time:hasEnd ?death_Timespan__end
    }
    UNION
    {
      ?proxy sch:deathPlace ?death_place__id .
      ?death_place__id skos:prefLabel ?death_place__prefLabel .
      BIND (CONCAT("/places/page/", REPLACE(STR(?death_place__id), "^.*\\\\/(.+)", "$1")) AS ?death_place__dataProviderUrl)
    }
  }
`

export const wikipediaPropertiesInstancePage = `
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
    ?id foaf:focus ?provided__id .
    ?provided__id skos:prefLabel ?provided__prefLabel
    BIND(CONCAT("/people/page/", REPLACE(STR(?provided__id), "^.*\\\\/(.+)", "$1")) AS ?provided__dataProviderUrl)
  }
  UNION
  {
    ?id <http://schema.org/image> ?image__id ;
      skos:prefLabel ?image__description ;
      skos:prefLabel ?image__title .
    # BIND (CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=200") as ?image__url)
    BIND (?image__id as ?image__url)
  }
  UNION
  {
      ?id wlink:has_reference/wlink:references ?reference__id .
      ?reference__id skos:prefLabel ?reference__prefLabel .
      BIND (CONCAT("/wikipedia_extracts/page/", REPLACE(STR(?reference__id), "^.*\\\\/(.+)", "$1")) AS ?reference__dataProviderUrl)
  }
  UNION
  {
    ?sentence__id wlink:references ?id ; skos:prefLabel ?_label .
    [] wlink:has_reference ?sentence__id ;
    	foaf:focus ?referenced_by__id .
    ?referenced_by__id skos:prefLabel ?referenced_by__prefLabel .
    BIND (CONCAT(
      REPLACE(?referenced_by__prefLabel, "^(.+) [0-9()-]+$","$1"),
      ": ", 
      ?_label) AS ?sentence__prefLabel)
    BIND (CONCAT("/people/page/", REPLACE(STR(?referenced_by__id), "^.*\\\\/(.+)", "$1")) AS ?referenced_by__dataProviderUrl)
    BIND (?referenced_by__dataProviderUrl AS ?sentence__dataProviderUrl)
  }
  UNION
  {
    SELECT DISTINCT ?id (GROUP_CONCAT(?_type; SEPARATOR=", ") AS ?type) 
    WHERE {
      ?id wlink:type/skos:prefLabel ?_type .
      FILTER (LANG(?_type) = 'fi')
  		} GROUP BY ?id ORDER BY ?_type
  }
  UNION
  {
    SELECT DISTINCT ?id
      ?similar__id 
    (CONCAT(?_label, " (", STR(COUNT(?proxy)), ")") AS ?similar__prefLabel)
      (CONCAT("/wikipedia_extracts/page/", REPLACE(STR(?similar__id), "^.*\\\\/(.+)", "$1")) AS ?similar__dataProviderUrl)
    WHERE {
      ?proxy wlink:has_reference/wlink:references ?id ;
             wlink:has_reference/wlink:references ?similar__id .
      FILTER (?id != ?similar__id)
      FILTER NOT EXISTS { ?similar__id owl:sameAs/^owl:sameAs/foaf:focus/a sch:Person }
      FILTER NOT EXISTS { ?similar__id owl:sameAs/^owl:sameAs/foaf:focus/a sch:Place }
      FILTER NOT EXISTS { ?similar__id owl:sameAs/^owl:sameAs/foaf:focus/a sch:Organization }
      ?similar__id skos:prefLabel ?_label .
    } GROUPBY ?id ?similar__id ?_label ORDER BY DESC(COUNT(?proxy))
  }
`
