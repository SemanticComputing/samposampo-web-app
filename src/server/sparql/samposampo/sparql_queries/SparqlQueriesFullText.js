export const fullTextSearchProperties = `
VALUES (?type__id ?type__label ?pagetype)
{
  (sampos:PersonProxy "Person" "/people")
  (sampos:GroupProxy "Organization" "/groups")
  (sampos:PlaceProxy "Place" "/places")
}

?id a ?type__id .
OPTIONAL { ?id foaf:focus ?provided }
BIND (COALESCE(?provided, ?id) AS ?match)

BIND (COALESCE(?type__class, ?type__label) AS ?type__prefLabel)

?match skos:prefLabel ?prefLabel__id .
BIND(?prefLabel__id as ?prefLabel__prefLabel)
BIND(CONCAT(?pagetype, "/page/", REPLACE(STR(?match), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)

OPTIONAL {
  ?match ^foaf:focus? [
        sch:image ?image__id ;
    	skos:prefLabel ?image__description ;
    	skos:prefLabel ?image__title 
    ]
  BIND(CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=40") as ?image__url)
}
`
