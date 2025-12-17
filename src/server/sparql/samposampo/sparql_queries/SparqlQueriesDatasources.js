const perspectiveID = 'datasources'

export const datasourceProperties = `
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
  {
    <SUBQUERY>
    ?id foaf:webpage ?website__id .
    BIND (STR(?website__id) AS ?website__prefLabel)
    BIND (?website__id AS ?website__dataProviderUrl)
  }
  UNION
  { 
    SELECT DISTINCT ?id 
        (COUNT(?prs) AS ?number_of_people) 
        (COUNT(?org) AS ?number_of_organizations) 
        (COUNT(?plc) AS ?number_of_places)
    WHERE {
        <SUBQUERY>
        {
        ?prs a sch:Person ; sampos:in_dataset ?id
        }
        UNION
        {
        ?org a sch:Organization ; sampos:in_dataset ?id
        }
        UNION
        {
          ?plc a sampos:PlaceProxy ; dce:source ?id
        }
      }
      GROUP BY ?id 
    }
`