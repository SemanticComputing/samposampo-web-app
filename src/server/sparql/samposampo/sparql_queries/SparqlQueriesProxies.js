const perspectiveID = 'proxies'

export const proxyPropertiesInstancePage = `
  BIND (?id as ?uri__id)
  BIND (?id as ?uri__prefLabel)
  BIND (?id as ?uri__dataProviderUrl)

  {
    GRAPH ?g { ?id skos:prefLabel ?prefLabel__id }
    ?g skos:prefLabel ?datasource
    BIND (CONCAT(?prefLabel__id, ' (', ?datasource, ')') as ?prefLabel__prefLabel)
    BIND (CONCAT("/proxies/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
  }
  UNION
  {
  	?id foaf:focus ?provided__id .
    ?provided__id skos:prefLabel ?provided__prefLabel .
    BIND (CONCAT("/people/page/", REPLACE(STR(?provided__id), "^.*\\\\/(.+)", "$1")) AS ?provided__dataProviderUrl)
    OPTIONAL { 
      ?provided__id ^foaf:focus ?other__id .
      FILTER (?other__id != ?id)
      GRAPH ?g { ?other__id skos:prefLabel ?_label }
      ?g skos:prefLabel ?_label2 .
      BIND (CONCAT(?_label, ' (', ?_label2, ')') AS ?other__prefLabel)
      BIND (CONCAT("/proxies/page/", REPLACE(STR(?other__id), "^.*\\\\/(.+)", "$1")) AS ?other__dataProviderUrl)
    }
  }
  UNION
  { 
    ?id skos:altLabel ?altLabel__id 
    BIND (?altLabel__id AS ?altLabel__prefLabel)
    BIND (?altLabel__id AS ?altLabel__dataProviderUrl)
    
  }
  UNION
  { 
    ?id sampos:birth_time/skos:prefLabel ?birth_Timespan 
  }
  UNION
  { 
    ?id sch:birthPlace ?birth_place__id .
    ?birth_place__id skos:prefLabel ?birth_place__prefLabel .
    BIND (CONCAT("/places/page/", REPLACE(STR(?birth_place__id), "^.*\\\\/(.+)", "$1")) AS ?birth_place__dataProviderUrl)
    FILTER (LANG(?birth_place__prefLabel)='fi')
  }
  UNION
  { 
    ?id sampos:death_time/skos:prefLabel ?death_Timespan
  }
  UNION
  { 
    ?id sch:deathPlace ?death_place__id .
    ?death_place__id skos:prefLabel ?death_place__prefLabel .
    BIND (CONCAT("/places/page/", REPLACE(STR(?death_place__id), "^.*\\\\/(.+)", "$1")) AS ?death_place__dataProviderUrl)
    FILTER (LANG(?death_place__prefLabel)='fi')
  }
  UNION
  {
    GRAPH ?g { ?id foaf:page ?external__id }

    ?g skos:prefLabel ?datasource .
    ?external__id a/skos:prefLabel ?external__classlabel .
    FILTER (STR(?external__classlabel) = STR(?datasource))
    
    BIND (CONCAT(COALESCE(?external__classlabel, ?external__id), " (webpage)") AS ?external__prefLabel)
    BIND (?external__id AS ?external__dataProviderUrl)
    BIND('<iframe width="100%" src="' + STR(?external__id) + '"></iframe>' AS ?webpage_preview)
  }
  UNION
  {
    GRAPH ?g { ?id owl:sameAs ?external__id }
    FILTER NOT EXISTS { ?id foaf:page ?external__id }
    ?g skos:prefLabel ?datasource .
    ?external__id a/skos:prefLabel ?external__classlabel .
    FILTER (STR(?external__classlabel) = STR(?datasource))
    
    BIND (CONCAT(COALESCE(?external__classlabel, ?external__id), " (datasource)") AS ?external__prefLabel)
    BIND (?external__id AS ?external__dataProviderUrl)
    BIND('<iframe width="100%" src="' + STR(?external__id) + '"></iframe>' AS ?datasource_preview)
  }
`
