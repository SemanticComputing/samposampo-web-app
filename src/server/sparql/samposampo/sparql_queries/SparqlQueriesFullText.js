export const fullTextSearchProperties = `
VALUES (?type__id ?type__prefLabel ?pagetype)
{
  (sampos:PersonProxy "Person" "/people")
  (sampos:OrganizationProxy "Organization" "/groups")
  (sampos:PlaceProxy "Place" "/places")
}

?proxy skos:prefLabel|skos:altLabel ?_label ; a ?type__id ; foaf:focus ?id .

?id skos:prefLabel ?prefLabel__id .
BIND(?prefLabel__id as ?prefLabel__prefLabel)
BIND(CONCAT(?pagetype, "/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)

OPTIONAL {
  ?id sch:image ?image__id ;
    	skos:prefLabel ?image__description ;
    	skos:prefLabel ?image__title .
  BIND(CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=40") as ?image__url)
}

OPTIONAL { ?id sampos:pagelinks ?pagelinks }
`

export const fullTextQuery = `
  SELECT DISTINCT ?id ?prefLabel__id ?prefLabel__prefLabel ?prefLabel__dataProviderUrl ?type__id ?type__prefLabel 
   ?image__id ?image__description ?image__title ?image__url
  WHERE {
    <QUERY>
    <RESULT_SET_PROPERTIES>
  }
  ORDER BY DESC(COALESCE(?pagelinks, 5)) STR(?prefLabel__id)
`
