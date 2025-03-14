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
    {
        ?id relations:personSubject/^owl:sameAs ?person__id .
        ?person__id skos:prefLabel ?person__prefLabel .
    }
    UNION
    {
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
`