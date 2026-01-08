const perspectiveID = 'place_proxies'

export const placeProxyProperties = `
  {
    ?id skos:prefLabel ?prefLabel__id .
    ?id dce:source ?source__id .
    ?source__id skos:prefLabel ?source__prefLabel .
    FILTER (LANG(?source__prefLabel) = 'en')
    ?id owl:sameAs ?source__dataProviderUrl .
    BIND(?prefLabel__id as ?prefLabel__prefLabel)
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
    BIND(?id as ?uri__id)
    BIND(?id as ?uri__dataProviderUrl)
    BIND(?id as ?uri__prefLabel)
  }
  UNION {
    ?id foaf:focus ?provided__id .
    ?provided__id skos:prefLabel ?provided__prefLabel .
    FILTER(LANG(?provided__prefLabel) = 'fi')
    BIND(CONCAT("/places/page/", REPLACE(STR(?provided__id), "^.*\\\\/(.+)", "$1")) AS ?provided__dataProviderUrl)
  }
  UNION {
    ?id skos:altLabel ?altLabel .
  }
  UNION {
    ?id wgs84:lat ?latitude .
  }
  UNION {
    ?id wgs84:long ?longitude .
  }
  UNION {
    ?id foaf:focus ?provided__id .
    ?otherSource__id foaf:focus ?provided__id .
    FILTER (STR(?otherSource__id) != STR(?id))
    ?otherSource__id skos:prefLabel ?_label ;
                      dce:source/skos:prefLabel ?_sourceLabel .
    FILTER (LANG(?_sourceLabel) = 'en')
    BIND(CONCAT(?_label, " (", ?_sourceLabel, ")") as ?otherSource__prefLabel)
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?otherSource__id), "^.*\\\\/(.+)", "$1")) AS ?otherSource__dataProviderUrl)
  }
`
