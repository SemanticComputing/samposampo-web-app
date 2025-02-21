const perspectiveID = 'historical_events'

export const histoPropertiesFacetResults = `
    {
        ?id rdfs:label ?prefLabel__id .
        BIND(?prefLabel__id AS ?prefLabel__prefLabel)
        FILTER (LANG(?prefLabel__prefLabel) = 'fi')
        BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
        BIND(?id as ?uri__id)
        BIND(?id as ?uri__dataProviderUrl)
        BIND(?id as ?uri__prefLabel)
    }
    UNION
    {
        ?id crm-org:P7_took_place_at ?place__id .
        ?place__id rdfs:label ?place__prefLabel .
    }
    UNION
    {
        ?id crm-org:P11_had_participant ?participant__id .
        ?participant__id rdfs:label ?participant__prefLabel .
    }
    UNION
    {
        ?id crm-org:P2_has_type ?eventType__id .
        ?eventType__id rdfs:label ?eventType__prefLabel .
    }
    UNION
    {
        ?id crm-org:P130_shows_features_of ?historyField__id .
        ?historyField__id rdfs:label ?historyField__prefLabel .
    }
    UNION
    {
        ?id crm-org:P4_has_time-span ?time__id .
        ?time__id rdfs:label ?time__prefLabel .
    }
    UNION
    {
        ?id dce:description ?description .
    }
`