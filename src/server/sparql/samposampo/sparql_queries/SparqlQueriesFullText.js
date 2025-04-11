export const fullTextSearchProperties = `
VALUES (?type__id ?type__prefLabel ?pagetype)
{
  (sampos:PersonProxy "Person" "/people")
  (sampos:OrganizationProxy "Organization" "/groups")
  (sampos:PlaceProxy "Place" "/places")
}

?id a ?type__id .
OPTIONAL { ?id foaf:focus ?provided }
BIND (COALESCE(?provided, ?id) AS ?match)

?match skos:prefLabel ?prefLabel__id .
BIND(?prefLabel__id as ?prefLabel__prefLabel)
BIND(CONCAT(?pagetype, "/page/", REPLACE(STR(?match), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)

OPTIONAL {
  ?match sch:image ?image__id ;
    	skos:prefLabel ?image__description ;
    	skos:prefLabel ?image__title .
  BIND(CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=40") as ?image__url)
}
`
