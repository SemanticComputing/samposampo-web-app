const perspectiveID = 'place_relations'

export const placeRelationProperties = `
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
    { # New model, link to Provided person
        <SUBQUERY>
        ?id relations:personSubject ?person__id .
        ?person__id skos:prefLabel ?person__prefLabel ; a sch:Person .
        BIND (CONCAT("/people/page/", REPLACE(STR(?person__id), "^.*\\\\/(.+)", "$1")) AS ?person__dataProviderUrl)
    }
    UNION
    { # New model
        <SUBQUERY>
        ?id relations:placeObject ?place__id .
        ?place__id skos:prefLabel ?place__prefLabel .
        FILTER (LANG(?place__prefLabel) = "fi")
        BIND (CONCAT("/places/page/", REPLACE(STR(?place__id), "^.*\\\\/(.+)", "$1")) AS ?place__dataProviderUrl)

    }
    UNION
    {   
        <SUBQUERY>
        ?id relations:relationType ?type__id .
        ?type__id skos:prefLabel ?type__prefLabel .
    }
    UNION
    {
        <SUBQUERY>
        ?id dct:source ?datasource__id .
        ?datasource__id skos:prefLabel ?datasource__prefLabel .
    	
	    OPTIONAL { ?id relations:source ?_link }
    	OPTIONAL { ?id foaf:webpage ?_link2 }
    	
    	BIND (COALESCE(?_link, ?_link2, "#") AS ?datasource__dataProviderUrl)
    }
    UNION
    {
        <SUBQUERY>
        ?id relations:gptSource ?additionalSource__id .
        ?additionalSource__id relations:sourceName ?additionalSource__prefLabel .
        ?additionalSource__id relations:sourceLink ?additionalSource__dataProviderUrl .
    }
    UNION 
    {   # e.g. Warsa photographs refering to multiple people or places
        <SUBQUERY>
    	?id relations:sourceLink/(^relations:sourceLink) ?related__id .
    	FILTER (?id != ?related__id)
	    ?related__id skos:prefLabel ?related__prefLabel .
    	BIND (CONCAT("/place_relations/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
  	}
`

export const placeRelationInstancePageProperties = `
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
    { # New model, link to Provided person
        BIND (<ID> as ?id)
        ?id relations:personSubject ?person__id .
        ?person__id skos:prefLabel ?person__prefLabel ; a sch:Person .
        BIND (CONCAT("/people/page/", REPLACE(STR(?person__id), "^.*\\\\/(.+)", "$1")) AS ?person__dataProviderUrl)
    }
    UNION
    { # New model
        BIND (<ID> as ?id)
        ?id relations:placeObject ?place__id .
        ?place__id skos:prefLabel ?place__prefLabel .
        FILTER (LANG(?place__prefLabel) = "fi")
        BIND (CONCAT("/places/page/", REPLACE(STR(?place__id), "^.*\\\\/(.+)", "$1")) AS ?place__dataProviderUrl)

    }
    UNION
    {   
        BIND (<ID> as ?id)
        ?id relations:relationType ?type__id .
        ?type__id skos:prefLabel ?type__prefLabel .
    }
    UNION
    {
        BIND (<ID> as ?id)
        ?id dct:source ?datasource__id .
        ?datasource__id skos:prefLabel ?datasource__prefLabel .
    	
	    OPTIONAL { ?id relations:source ?_link }
    	OPTIONAL { ?id foaf:webpage ?_link2 }
    	
    	BIND (COALESCE(?_link, ?_link2, "#") AS ?datasource__dataProviderUrl)
    }
    UNION
    {
        BIND (<ID> as ?id)
        ?id relations:gptSource ?additionalSource__id .
        ?additionalSource__id relations:sourceName ?additionalSource__prefLabel .
        ?additionalSource__id relations:sourceLink ?additionalSource__dataProviderUrl .
    }
    UNION 
    {   # e.g. Warsa photographs refering to multiple people or places
        BIND (<ID> as ?id)
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
