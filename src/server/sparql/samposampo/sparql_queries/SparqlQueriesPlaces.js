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
    ?id wgs84:lat ?sampledLatitude ;
        wgs84:long ?sampledLongitude .
  }
  UNION {
    ?id ^foaf:focus ?proxy .
    ?proxy wgs84:lat ?latitude ;
            wgs84:long ?longitude .
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
