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
    ?proxy owl:sameAs ?source__id .
    BIND(?source__id as ?source__dataProviderUrl)
    ?proxy dce:source/skos:prefLabel ?source__prefLabel .
  }
  UNION {
    ?id ^foaf:focus ?proxy .
    ?proxy foaf:page ?website__id .
    BIND(?website__id as ?website__dataProviderUrl)
    ?proxy dce:source/skos:prefLabel ?website__prefLabel .
  }
`

export const placeInstancePageProperties = `
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
    
    ?proxy dce:source/skos:prefLabel ?proxyPrefLabel__source__prefLabel .
    BIND(?proxy AS ?proxyPrefLabel__source__id)
    BIND(CONCAT("/place_proxies/page/", REPLACE(STR(?proxy), "^.*\\\\/(.+)", "$1")) AS ?proxyPrefLabel__source__dataProviderUrl)
  }
  UNION {
    ?id ^foaf:focus ?proxy .
    ?proxy skos:altLabel ?proxyAltLabel__id, ?proxyAltLabel__prefLabel .
    
    ?proxy dce:source/skos:prefLabel ?proxyAltLabel__source__prefLabel .
    BIND(?proxy AS ?proxyAltLabel__source__id)
    BIND(CONCAT("/place_proxies/page/", REPLACE(STR(?proxy), "^.*\\\\/(.+)", "$1")) AS ?proxyAltLabel__source__dataProviderUrl)
  }
  UNION {
    ?id wgs84:lat ?sampledLatitude ;
        wgs84:long ?sampledLongitude .
  }
  UNION {
    ?id ^foaf:focus ?proxy .
    ?proxy wgs84:lat ?latitude__id, ?latitude__prefLabel .
    ?proxy dce:source/skos:prefLabel ?latitude__source__prefLabel .
    BIND(?proxy AS ?latitude__source__id)
    BIND(CONCAT("/place_proxies/page/", REPLACE(STR(?proxy), "^.*\\\\/(.+)", "$1")) AS ?latitude__source__dataProviderUrl)

    OPTIONAL {
      GRAPH <http://ldf.fi/sampo/inconsistencies> {
        ?proxy wgs84:lat ?latitude__id .
      }
      BIND("red" as ?latitude__color)
    }
  }
  UNION {
    ?id ^foaf:focus ?proxy .
    ?proxy wgs84:long ?longitude__id, ?longitude__prefLabel .
    ?proxy dce:source/skos:prefLabel ?longitude__source__prefLabel .
    BIND(?proxy AS ?longitude__source__id)
    BIND(CONCAT("/place_proxies/page/", REPLACE(STR(?proxy), "^.*\\\\/(.+)", "$1")) AS ?longitude__source__dataProviderUrl)

    OPTIONAL {
      GRAPH <http://ldf.fi/sampo/inconsistencies> {
        ?proxy wgs84:long ?longitude__id .
      }
      BIND("red" as ?longitude__color)
    }
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
    ?id ^relations:placeObject ?relation__id .
    ?relation__id skos:prefLabel ?relation__prefLabel .
    BIND(CONCAT("/place_relations/page/", REPLACE(STR(?relation__id), "^.*\\\\/(.+)", "$1")) AS ?relation__dataProviderUrl)
  }
  UNION {
    ?id (^sch:location)/foaf:focus ?group__id .
    ?group__id skos:prefLabel ?group__prefLabel .
    BIND(CONCAT("/groups/page/", REPLACE(STR(?group__id), "^.*\\\\/(.+)", "$1")) AS ?group__dataProviderUrl)
  }
  UNION
  {
    ?id ^foaf:focus ?proxy .
    ?proxy owl:sameAs ?source__id .
    BIND(?source__id as ?source__dataProviderUrl)
    ?proxy dce:source/skos:prefLabel ?source__prefLabel .

    OPTIONAL {
      [] owl:sameAs ?source__id ; 
         a sampos:OrganizationProxy ;
         foaf:focus ?group__id .
      ?group__id skos:prefLabel ?group__prefLabel .
	    BIND (CONCAT("/groups/page/", REPLACE(STR(?group__id), "^.*\\\\/(.+)", "$1")) AS ?group__dataProviderUrl)
    }
  }
  UNION {
    ?id ^foaf:focus ?proxy .
    ?proxy foaf:page ?website__id .
    BIND(?website__id as ?website__dataProviderUrl)
    ?proxy dce:source/skos:prefLabel ?website__prefLabel .

    OPTIONAL {
      [] foaf:page ?website__id ; 
         a sampos:OrganizationProxy ;
         foaf:focus ?group__id .
      ?group__id skos:prefLabel ?group__prefLabel .
	    BIND (CONCAT("/groups/page/", REPLACE(STR(?group__id), "^.*\\\\/(.+)", "$1")) AS ?group__dataProviderUrl)
    }
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

export const proxiesMapQuery = `
  SELECT DISTINCT ?id ?lat ?long ?prefLabel ?dataProviderUrl ?markerColor
  WHERE {
    VALUES ?place { <ID> }
    ?place a sch:Place .
    ?id foaf:focus ?place .
    ?id skos:prefLabel ?proxy_pref_fi .
    FILTER(LANG(?proxy_pref_fi) = 'fi')
    ?id skos:prefLabel ?proxy_pref_other .
    BIND(COALESCE(?proxy_pref_fi, ?proxy_pref_other) as ?proxy_pref)
    ?id dce:source/skos:prefLabel ?source_pref .
    ?id wgs84:lat ?lat ; 
      wgs84:long ?long .
    
    BIND(CONCAT(?proxy_pref, ' (in ', ?source_pref, ')') as ?prefLabel)
    BIND(CONCAT("/place_proxies/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?dataProviderUrl)

    OPTIONAL {
      GRAPH <http://ldf.fi/sampo/inconsistencies> {
        ?id wgs84:long ?long .
      }
      BIND("red" as ?markerColor)
    }
    OPTIONAL {
      GRAPH <http://ldf.fi/sampo/inconsistencies> {
        ?id wgs84:lat ?lat .
      }
      BIND("red" as ?markerColor)
    }
  }
  GROUP BY ?id ?lat ?long ?prefLabel ?dataProviderUrl ?markerColor
`
