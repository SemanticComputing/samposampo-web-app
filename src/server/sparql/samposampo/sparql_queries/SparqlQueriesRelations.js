const perspectiveID = 'place_relations'

export const placeRelationProperties = `
    {
        ?id skos:prefLabel ?prefLabel__id .
        BIND(?prefLabel__id AS ?prefLabel__prefLabel)
        BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
        BIND(?id as ?uri__id)
        BIND(?id as ?uri__dataProviderUrl)
        BIND(?id as ?uri__prefLabel)
    }
    UNION
    { # New model, link to Provided person
        ?id relations:personSubject ?person__id .
        ?person__id skos:prefLabel ?person__prefLabel ; a sch:Person .
        BIND (CONCAT("/people/page/", REPLACE(STR(?person__id), "^.*\\\\/(.+)", "$1")) AS ?person__dataProviderUrl)
    }
    UNION
    { # Earlier model, delete when updated
        ?id relations:personSubject/^owl:sameAs ?person__id .
        ?person__id skos:prefLabel ?person__prefLabel .
    }
    UNION
    { # New model
        ?id relations:placeObject ?place__id .
        ?place__id skos:prefLabel ?place__prefLabel .
        FILTER (LANG(?place__prefLabel) = "fi")
        BIND (CONCAT("/places/page/", REPLACE(STR(?place__id), "^.*\\\\/(.+)", "$1")) AS ?place__dataProviderUrl)

    }
    { # Earlier model
        ?id relations:placeObject/relations:nbf ?place__id .
        ?place__id skos:prefLabel ?place__prefLabel .
    }
    UNION
    {
        ?id relations:relationType ?type__id .
        ?type__id skos:prefLabel ?type__prefLabel .
    }
    UNION
    {
        ?id relations:personSubject/^owl:sameAs/foaf:focus/^bioc:inheres_in/nbf:has_title ?title__id .
        ?title__id skos:prefLabel ?title__prefLabel .
    }
    UNION
    {
        ?id dct:source ?datasource__id .
        ?datasource__id skos:prefLabel ?datasource__prefLabel .
    	
	    OPTIONAL { ?id relations:source ?_link }
    	OPTIONAL { ?id foaf:webpage ?_link2 }
    	
    	BIND (COALESCE(?_link, ?_link2, "#") AS ?datasource__dataProviderUrl)
    }
    UNION
    {
        ?id relations:gptSource ?additionalSource__id .
        ?additionalSource__id relations:sourceName ?additionalSource__prefLabel .
        ?additionalSource__id relations:sourceLink ?additionalSource__dataProviderUrl .
    }
    UNION 
    {   # e.g. Warsa photographs refering to multiple people or places
    	?id relations:sourceLink/(^relations:sourceLink) ?related__id .
    	FILTER (?id != ?related__id)
	    ?related__id skos:prefLabel ?related__prefLabel .
    	BIND (CONCAT("/place_relations/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
  	}
`

export const relationMapQuery = `
    SELECT DISTINCT ?id ?lat ?long 
(COUNT(DISTINCT ?relation) AS ?instanceCount)
WHERE {
  <FILTER>
  ?relation relations:placeObject ?id .

  ?id wgs84:lat ?lat ; wgs84:long ?long .
  
} GROUP BY ?id ?lat ?long
`

export const placePropertiesInfoWindow = `
  OPTIONAL { ?id skos:prefLabel ?_label }
  BIND (COALESCE(?_label, "<place>") AS ?prefLabel__id)
  BIND (?prefLabel__id AS ?prefLabel__prefLabel)
  BIND (CONCAT("/places/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
`

export const relatedRelations = `
  OPTIONAL {
    <FILTER>
    
    ?id ^relations:placeObject ?related__id .

    ?related__id skos:prefLabel ?related__prefLabel .
    BIND (CONCAT("/${perspectiveID}/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
  }
`
