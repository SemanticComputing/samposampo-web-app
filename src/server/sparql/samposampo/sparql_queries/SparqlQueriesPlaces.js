const perspectiveID = 'places'

export const placeProperties = `
  {
    ?id skos:prefLabel ?prefLabel__id .
    BIND(?prefLabel__id AS ?prefLabel__prefLabel)
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
    BIND(?id as ?uri__id)
    BIND(?id as ?uri__dataProviderUrl)
    BIND(?id as ?uri__prefLabel)
  }
  UNION {
    ?id ^foaf:focus ?proxy .
    ?proxy skos:prefLabel ?proxyPrefLabel__id, ?proxyPrefLabel__prefLabel .
    
    ?proxy dce:source ?proxyPrefLabel__source__prefLabel .
    BIND(?proxy AS ?proxyPrefLabel__source__id)
    BIND(CONCAT("/place_proxies/page/", REPLACE(STR(?proxy), "^.*\\\\/(.+)", "$1")) AS ?proxyPrefLabel__source__dataProviderUrl)
  }
  UNION {
    ?id ^foaf:focus ?proxy .
    ?proxy skos:altLabel ?proxyAltLabel__id, ?proxyAltLabel__prefLabel .
    
    ?proxy dce:source ?proxyAltLabel__source__prefLabel .
    BIND(?proxy AS ?proxyAltLabel__source__id)
    BIND(CONCAT("/place_proxies/page/", REPLACE(STR(?proxy), "^.*\\\\/(.+)", "$1")) AS ?proxyAltLabel__source__dataProviderUrl)
  }
  UNION {
    ?id wgs84:lat ?sampledLatitude ;
        wgs84:long ?sampledLongitude .
  }
  UNION {
    ?id ^foaf:focus ?proxy .
    ?proxy wgs84:lat ?latitude__id, ?latitude__prefLabel ;
            wgs84:long ?longitude__id, ?longitude__prefLabel .
    
    ?proxy dce:source ?latitude__source__prefLabel, ?longitude__source__prefLabel .
    BIND(?proxy AS ?latitude__source__id)
    BIND(?proxy AS ?longitude__source__id)
    BIND(CONCAT("/place_proxies/page/", REPLACE(STR(?proxy), "^.*\\\\/(.+)", "$1")) AS ?latitude__source__dataProviderUrl)
    BIND(CONCAT("/place_proxies/page/", REPLACE(STR(?proxy), "^.*\\\\/(.+)", "$1")) AS ?longitude__source__dataProviderUrl)
  }
  UNION {
    ?id ^sch:birthPlace/foaf:focus ?peopleBirth__id .
    ?peopleBirth__id skos:prefLabel ?peopleBirth__prefLabel .
    BIND(CONCAT("/people/page/", REPLACE(STR(?peopleBirth__id), "^.*\\\\/(.+)", "$1")) AS ?peopleBirth__dataProviderUrl)
  }
    UNION {
    ?id ^sch:deathPlace/foaf:focus ?peopleDeath__id .
    ?peopleDeath__id skos:prefLabel ?peopleDeath__prefLabel .
    BIND(CONCAT("/people/page/", REPLACE(STR(?peopleDeath__id), "^.*\\\\/(.+)", "$1")) AS ?peopleDeath__dataProviderUrl)
  }
  UNION {
    ?id ^foaf:focus/dce:source ?source .
  }
`

export const placesMapQuery = `
  SELECT DISTINCT ?id ?lat ?long (COUNT(DISTINCT ?id) AS ?instanceCount)
  WHERE {
    <FILTER>
    ?id a sch:Place ;
      wgs84:lat ?lat ; 
      wgs84:long ?long .
  }
  GROUP BY ?id ?lat ?long
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
      sch:birthPlace ?id .
    }
    UNION
    { [] foaf:focus ?related__id ;
      sch:deathPlace ?id .
    }
    ?related__id skos:prefLabel ?related__prefLabel .
    BIND (CONCAT("/people/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
  }
`
