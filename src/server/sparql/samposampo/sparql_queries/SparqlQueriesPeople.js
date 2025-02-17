const perspectiveID = 'people'

export const personPropertiesFacetResults = `
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
      ?proxy sch:gender/skos:prefLabel ?gender 
    }
    UNION
    {
      ?proxy sch:birthPlace ?birth_place__id .
      ?birth_place__id skos:prefLabel ?birth_place__prefLabel .
      BIND (CONCAT("/places/page/", REPLACE(STR(?birth_place__id), "^.*\\\\/(.+)", "$1")) AS ?birth_place__dataProviderUrl)
    }
    UNION
    {
      ?proxy sampos:birth_time ?birth_time__id .
      ?birth_time__id skos:prefLabel ?birth_time__prefLabel .
      OPTIONAL { ?birth_time__id time:hasBeginning ?birth_time__start }
      OPTIONAL { ?birth_time__id time:hasEnd ?birth_time__end }    
    }
    UNION
    {
      ?proxy sampos:death_time ?death_time__id .
      ?death_time__id skos:prefLabel ?death_time__prefLabel .
      OPTIONAL { ?death_time__id time:hasBeginning ?death_time__start }
      OPTIONAL { ?death_time__id time:hasEnd ?death_time__end } 
    }
    UNION
    {
      ?proxy sch:deathPlace ?death_place__id .
      ?death_place__id skos:prefLabel ?death_place__prefLabel .
      BIND (CONCAT("/places/page/", REPLACE(STR(?death_place__id), "^.*\\\\/(.+)", "$1")) AS ?death_place__dataProviderUrl)
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

export const personPropertiesInstancePage = `
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
  UNION
  {
    GRAPH ?g { ?proxy foaf:focus ?id }
    {
      ?proxy sch:gender ?gender__id .
      ?gender__id skos:prefLabel ?gender__prefLabel .
      BIND(CONCAT("/proxies/page/", REPLACE(STR(?proxy), "^.*\\\\/(.+)", "$1")) AS ?gender__dataProviderUrl)

      ?g skos:prefLabel ?gender__source__prefLabel .
      BIND (?proxy AS ?gender__source__id)
      BIND (CONCAT("/proxies/page/", REPLACE(STR(?proxy), "^.*\\\\/(.+)", "$1")) AS ?gender__source__dataProviderUrl)
    }
    UNION
    {
      ?proxy skos:prefLabel ?altLabel__id .
      BIND(?altLabel__id AS ?altLabel__prefLabel)
      BIND(CONCAT("/proxies/page/", REPLACE(STR(?proxy), "^.*\\\\/(.+)", "$1")) AS ?altLabel__dataProviderUrl)

      ?g skos:prefLabel ?altLabel__source__prefLabel .
      BIND (?proxy AS ?altLabel__source__id)
      BIND (CONCAT("/proxies/page/", REPLACE(STR(?proxy), "^.*\\\\/(.+)", "$1")) AS ?altLabel__source__dataProviderUrl)
    }
    UNION
    {
      ?proxy sampos:birth_time ?birth_time__id .
      ?birth_time__id skos:prefLabel ?birth_time__prefLabel .
      OPTIONAL { ?birth_time__id time:hasBeginning ?birth_time__start }
      OPTIONAL { ?birth_time__id time:hasEnd ?birth_time__end } 

      ?g skos:prefLabel ?birth_time__source__prefLabel .
      BIND (?proxy AS ?birth_time__source__id)
      BIND (CONCAT("/proxies/page/", REPLACE(STR(?proxy), "^.*\\\\/(.+)", "$1")) AS ?birth_time__source__dataProviderUrl)
    }
    UNION
    {
      ?proxy sch:birthPlace ?birth_place__id .
      ?birth_place__id skos:prefLabel ?birth_place__prefLabel .
      BIND (CONCAT("/places/page/", REPLACE(STR(?birth_place__id), "^.*\\\\/(.+)", "$1")) AS ?birth_place__dataProviderUrl)

      ?g skos:prefLabel ?birth_place__source__prefLabel .
      BIND (?proxy AS ?birth_place__source__id)
      BIND (CONCAT("/places/page/", REPLACE(STR(?birth_place__id), "^.*\\\\/(.+)", "$1")) AS ?birth_place__source__dataProviderUrl)
    }
    UNION
    {
      ?proxy sampos:death_time ?death_time__id .
      ?death_time__id skos:prefLabel ?death_time__prefLabel .
      OPTIONAL { ?death_time__id time:hasBeginning ?death_time__start }
      OPTIONAL { ?death_time__id time:hasEnd ?death_time__end }

      ?g skos:prefLabel ?death_time__source__prefLabel .
      BIND (?proxy AS ?death_time__source__id)
      BIND (CONCAT("/proxies/page/", REPLACE(STR(?proxy), "^.*\\\\/(.+)", "$1")) AS ?death_time__source__dataProviderUrl)
    }
    UNION
    {
      ?proxy sch:deathPlace ?death_place__id .
      ?death_place__id skos:prefLabel ?death_place__prefLabel .
      BIND (CONCAT("/places/page/", REPLACE(STR(?death_place__id), "^.*\\\\/(.+)", "$1")) AS ?death_place__dataProviderUrl)

      ?g skos:prefLabel ?death_place__source__prefLabel .
      BIND (?proxy AS ?death_place__source__id)
      BIND (CONCAT("/places/page/", REPLACE(STR(?death_place__id), "^.*\\\\/(.+)", "$1")) AS ?death_place__source__dataProviderUrl)
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

