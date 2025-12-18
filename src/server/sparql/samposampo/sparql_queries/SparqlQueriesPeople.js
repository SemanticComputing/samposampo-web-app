const perspectiveID = 'people'

export const personPropertiesFacetResults = `
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
    ?id sch:image ?image__id ;
      skos:prefLabel ?image__description ;
      skos:prefLabel ?image__title .
    # BIND (CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=200") as ?image__url)
    BIND (?image__id as ?image__url)
  }
  UNION
  {
    <SUBQUERY>
    ?id sch:gender ?gender__id .
    ?gender__id skos:prefLabel ?gender__prefLabel .
  }
  UNION
  { 
    <SUBQUERY>
    ?proxy foaf:focus ?id
    {
      ?proxy sch:birthPlace ?birth_place__id .
      ?birth_place__id skos:prefLabel ?birth_place__prefLabel .
      BIND (CONCAT("/places/page/", REPLACE(STR(?birth_place__id), "^.*\\\\/(.+)", "$1")) AS ?birth_place__dataProviderUrl)
    }
    UNION
    {
      ?proxy sampos:birth_time ?birth_Timespan__id .
      ?birth_Timespan__id skos:prefLabel ?birth_Timespan__prefLabel ;
        time:hasBeginning ?birth_Timespan__start ;
        time:hasEnd ?birth_Timespan__end  
    }
    UNION
    {
      ?proxy sampos:death_time ?death_Timespan__id .
      ?death_Timespan__id skos:prefLabel ?death_Timespan__prefLabel ;
        time:hasBeginning ?death_Timespan__start ;
        time:hasEnd ?death_Timespan__end
    }
    UNION
    {
      ?proxy sch:deathPlace ?death_place__id .
      ?death_place__id skos:prefLabel ?death_place__prefLabel .
      BIND (CONCAT("/places/page/", REPLACE(STR(?death_place__id), "^.*\\\\/(.+)", "$1")) AS ?death_place__dataProviderUrl)
    }
    UNION
    {
      ?proxy foaf:page ?website__id .
      ?website__id a/skos:prefLabel ?website__prefLabel .
      BIND (?website__id as ?website__dataProviderUrl)
    }
    UNION
    {
      ?proxy owl:sameAs ?external__id .
      ?external__id a/skos:prefLabel ?external__prefLabel .
      BIND (?external__id as ?external__dataProviderUrl)
    }
  }
`

export const personPropertiesInstancePage = `
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
  {
    BIND (<ID> as ?id)
    ?id sch:image ?image__id ;
      skos:prefLabel ?image__description ;
      skos:prefLabel ?image__title .
    BIND (CONCAT(REPLACE(STR(?image__id), "https*:", ""), "?width=200") as ?image__url)
  }
  UNION
  {
    BIND (<ID> as ?id)
    [] foaf:focus ?id ; (skosxl:prefLabel|skosxl:altLabel)/skos:closeMatch? ?_label .
    ?_label (^(skosxl:prefLabel|skosxl:altLabel))/skos:closeMatch?/foaf:focus ?namesake__id .
    FILTER (STR(?id) != STR(?namesake__id))
    ?namesake__id skos:prefLabel ?namesake__prefLabel .
    BIND(CONCAT("/people/page/", REPLACE(STR(?namesake__id), "^.*\\\\/(.+)", "$1")) AS ?namesake__dataProviderUrl)
  }
  UNION
  {
    BIND (<ID> as ?id)
    ?id ^relations:personSubject ?relation__id .
    ?relation__id skos:prefLabel ?relation__prefLabel .
    BIND(CONCAT("/place_relations/page/", REPLACE(STR(?relation__id), "^.*\\\\/(.+)", "$1")) 
      AS ?relation__dataProviderUrl)
  }
  UNION
  {
    BIND (<ID> as ?id)
    GRAPH ?g { ?proxy foaf:focus ?id }
    ?proxy sch:gender ?gender__id .
    ?gender__id skos:prefLabel ?gender__prefLabel .
    BIND(CONCAT("/proxies/page/", REPLACE(STR(?proxy), "^.*\\\\/(.+)", "$1")) AS ?gender__dataProviderUrl)

    ?g skos:prefLabel ?gender__source__prefLabel .
    BIND (?proxy AS ?gender__source__id)
    BIND (CONCAT("/proxies/page/", REPLACE(STR(?proxy), "^.*\\\\/(.+)", "$1")) AS ?gender__source__dataProviderUrl)
  
    OPTIONAL {
      GRAPH <http://ldf.fi/sampo/inconsistencies> {
        ?proxy sch:gender ?gender__id
      }
      BIND("red" as ?gender__color)
    }
  }
  UNION 
  {
    BIND (<ID> as ?id)
    GRAPH ?g { ?proxy foaf:focus ?id }
    ?proxy skos:prefLabel ?proxyPrefLabel__id .
    BIND (?proxyPrefLabel__id AS ?proxyPrefLabel__prefLabel)
    
    ?g skos:prefLabel ?proxyPrefLabel__source__prefLabel .
    BIND(?proxy AS ?proxyPrefLabel__source__id)
    BIND(CONCAT("/proxies/page/", REPLACE(STR(?proxy), "^.*\\\\/(.+)", "$1")) AS ?proxyPrefLabel__source__dataProviderUrl)
  }
  UNION 
  {
    BIND (<ID> as ?id)
    GRAPH ?g { ?proxy foaf:focus ?id }
    ?proxy skos:altLabel ?proxyAltLabel__id .
    BIND (?proxyAltLabel__id AS ?proxyAltLabel__prefLabel)
    
    ?g skos:prefLabel ?proxyAltLabel__source__prefLabel .
    BIND(?proxy AS ?proxyAltLabel__source__id)
    BIND(CONCAT("/proxies/page/", REPLACE(STR(?proxy), "^.*\\\\/(.+)", "$1")) AS ?proxyAltLabel__source__dataProviderUrl)
  }
  UNION
  {
    BIND (<ID> as ?id)
    GRAPH ?g { ?proxy foaf:focus ?id }
    ?proxy sampos:birth_time ?birth_Timespan__id .
    ?birth_Timespan__id skos:prefLabel ?birth_Timespan__prefLabel .
    OPTIONAL { ?birth_Timespan__id time:hasBeginning ?birth_Timespan__start }
    OPTIONAL { ?birth_Timespan__id time:hasEnd ?birth_Timespan__end } 

    ?g skos:prefLabel ?birth_Timespan__source__prefLabel .
    BIND (?proxy AS ?birth_Timespan__source__id)
    BIND (CONCAT("/proxies/page/", REPLACE(STR(?proxy), "^.*\\\\/(.+)", "$1")) AS ?birth_Timespan__source__dataProviderUrl)

    OPTIONAL {
      GRAPH <http://ldf.fi/sampo/inconsistencies> {
        ?proxy sampos:birth_time ?birth_Timespan__id
      }
      BIND("red" as ?birth_Timespan__color)
    }
  }
  UNION
  {
    BIND (<ID> as ?id)
    GRAPH ?g { ?proxy foaf:focus ?id }
    ?proxy sch:birthPlace ?birth_place__id .
    ?birth_place__id skos:prefLabel ?birth_place__prefLabel .
    BIND (CONCAT("/places/page/", REPLACE(STR(?birth_place__id), "^.*\\\\/(.+)", "$1")) AS ?birth_place__dataProviderUrl)

    ?g skos:prefLabel ?birth_place__source__prefLabel .
    BIND (?proxy AS ?birth_place__source__id)
    BIND (CONCAT("/proxies/page/", REPLACE(STR(?proxy), "^.*\\\\/(.+)", "$1")) AS ?birth_place__source__dataProviderUrl)

    OPTIONAL {
      GRAPH <http://ldf.fi/sampo/inconsistencies> {
        ?proxy sch:birthPlace ?birth_place__id
      }
      BIND("red" as ?birth_place__color)
    }
  }
  UNION
  {
    BIND (<ID> as ?id)
    GRAPH ?g { ?proxy foaf:focus ?id }
    ?proxy sampos:death_time ?death_Timespan__id .
    ?death_Timespan__id skos:prefLabel ?death_Timespan__prefLabel .
    OPTIONAL { ?death_Timespan__id time:hasBeginning ?death_Timespan__start }
    OPTIONAL { ?death_Timespan__id time:hasEnd ?death_Timespan__end }

    ?g skos:prefLabel ?death_Timespan__source__prefLabel .
    BIND (?proxy AS ?death_Timespan__source__id)
    BIND (CONCAT("/proxies/page/", REPLACE(STR(?proxy), "^.*\\\\/(.+)", "$1")) AS ?death_Timespan__source__dataProviderUrl)

    OPTIONAL {
      GRAPH <http://ldf.fi/sampo/inconsistencies> {
        ?proxy sampos:death_time ?death_Timespan__id
      }
      BIND("red" as ?death_Timespan__color)
    }
  }
  UNION
  {
    BIND (<ID> as ?id)
    GRAPH ?g { ?proxy foaf:focus ?id }
    ?proxy sch:deathPlace ?death_place__id .
    ?death_place__id skos:prefLabel ?death_place__prefLabel .
    BIND (CONCAT("/places/page/", REPLACE(STR(?death_place__id), "^.*\\\\/(.+)", "$1")) AS ?death_place__dataProviderUrl)

    ?g skos:prefLabel ?death_place__source__prefLabel .
    BIND (?proxy AS ?death_place__source__id)
    BIND (CONCAT("/proxies/page/", REPLACE(STR(?proxy), "^.*\\\\/(.+)", "$1")) AS ?death_place__source__dataProviderUrl)

    OPTIONAL {
      GRAPH <http://ldf.fi/sampo/inconsistencies> {
        ?proxy sch:deathPlace ?death_place__id
      }
      BIND("red" as ?death_place__color)
    }
  }
  UNION
  {
    BIND (<ID> as ?id)
    ?id (^foaf:focus)/foaf:page ?website__id .
    ?website__id a/skos:prefLabel ?website__prefLabel .
    BIND (?website__id as ?website__dataProviderUrl)
  }
  UNION
  {
    BIND (<ID> as ?id)
    ?id (^foaf:focus)/owl:sameAs ?external__id .
    ?external__id a/skos:prefLabel ?external__prefLabel .
    BIND (?external__id as ?external__dataProviderUrl)
  }
`

export const wikipediaInstancePageQuery = `
SELECT DISTINCT * 
WHERE {
  {
    BIND (<ID> as ?id)
    BIND (?id as ?uri__id)
    BIND (?id as ?uri__prefLabel)
    BIND (?id as ?uri__dataProviderUrl)
  }
  UNION
  {
    BIND (<ID> as ?id)
    ?id skos:prefLabel ?prefLabel__id 
    BIND (?prefLabel__id AS ?prefLabel__prefLabel)
  }
  UNION
  {
    BIND (<ID> as ?id)
    ?id skos:prefLabel []
    FILTER NOT EXISTS { GRAPH <http://ldf.fi/sampo/wikipedia_extracts> { [] foaf:focus ?id }}
    BIND (<> AS ?sentence__id)
    BIND ("This person has no Wikipedia extracts." AS ?sentence__prefLabel)
    BIND ("#" AS ?sentence__dataProviderUrl)
  }
  UNION
  {
    BIND (<ID> as ?id)
    GRAPH <http://ldf.fi/sampo/wikipedia_extracts> { ?proxy foaf:focus ?id }
    ?proxy foaf:page ?website__id .
      ?website__id a/skos:prefLabel ?website__prefLabel .
      BIND (?website__id as ?website__dataProviderUrl)
    }
    UNION
    {

      SELECT DISTINCT ?proxy ?sentence__id ?sentence__prefLabel 
    	(CONCAT("/references/page/", REPLACE(STR(?sentence__id), "^.*\\\\/(.+)", "$1")) AS ?sentence__dataProviderUrl)
      WHERE {
        BIND (<ID> as ?id)
        GRAPH <http://ldf.fi/sampo/wikipedia_extracts> { ?proxy foaf:focus ?id }
    
        ?proxy wlink:has_reference ?sentence__id .
        ?sentence__id skos:prefLabel ?sentence__prefLabel ; wlink:order ?_order .
        }
        ORDER BY ?_order
    }
    UNION
    {
      BIND (<ID> as ?id)
      GRAPH <http://ldf.fi/sampo/wikipedia_extracts> { ?proxy foaf:focus ?id }
    
      ?proxy wlink:has_reference/wlink:references/owl:sameAs/^owl:sameAs/foaf:focus ?referenced_group__id .
      ?referenced_group__id a sch:Organization ; skos:prefLabel ?referenced_group__prefLabel .
	    FILTER (LANG(?referenced_group__prefLabel) = 'fi')
      BIND (CONCAT("/groups/page/", REPLACE(STR(?referenced_group__id), "^.*\\\\/(.+)", "$1")) AS ?referenced_group__dataProviderUrl)
    }
    UNION
    {
      BIND (<ID> as ?id)
      GRAPH <http://ldf.fi/sampo/wikipedia_extracts> { ?proxy foaf:focus ?id }
    
      ?proxy wlink:has_reference/wlink:references/owl:sameAs/^owl:sameAs/foaf:focus ?referenced_place__id .
      ?referenced_place__id a sch:Place ; skos:prefLabel ?referenced_place__prefLabel .
	    FILTER (LANG(?referenced_place__prefLabel) = 'fi')
      BIND (CONCAT("/places/page/", REPLACE(STR(?referenced_place__id), "^.*\\\\/(.+)", "$1")) AS ?referenced_place__dataProviderUrl)
    }
    UNION
    {
      BIND (<ID> as ?id)
      GRAPH <http://ldf.fi/sampo/wikipedia_extracts> { ?proxy foaf:focus ?id }
    
      ?proxy wlink:has_reference/wlink:references/foaf:focus ?referenced_person__id .
      ?referenced_person__id a sch:Person ; skos:prefLabel ?referenced_person__prefLabel .
      BIND (CONCAT("/people/page/", REPLACE(STR(?referenced_person__id), "^.*\\\\/(.+)", "$1")) AS ?referenced_person__dataProviderUrl)
    }
    UNION
    {
      BIND (<ID> as ?id)
      GRAPH <http://ldf.fi/sampo/wikipedia_extracts> { ?proxy foaf:focus ?id }
    
      ?proxy wlink:has_reference/wlink:references ?reference__id .
      FILTER NOT EXISTS { ?reference__id foaf:focus [] }
      FILTER NOT EXISTS { ?reference__id owl:sameAs/^owl:sameAs/foaf:focus/a sch:Place }
      FILTER NOT EXISTS { ?reference__id owl:sameAs/^owl:sameAs/foaf:focus/a sch:Organization }
      ?reference__id skos:prefLabel ?reference__prefLabel .
      BIND (CONCAT("/wikipedia_extracts/page/", REPLACE(STR(?reference__id), "^.*\\\\/(.+)", "$1")) AS ?reference__dataProviderUrl)
    }
    UNION
    {
      BIND (<ID> as ?id)
      GRAPH <http://ldf.fi/sampo/wikipedia_extracts> { ?proxy foaf:focus ?id }
    
      ?referenced_by__id (^foaf:focus)/wlink:has_reference/wlink:references ?proxy .
      ?referenced_by__id skos:prefLabel ?referenced_by__prefLabel .
      BIND (CONCAT("/people/page/", REPLACE(STR(?referenced_by__id), "^.*\\\\/(.+)", "$1"), "/wikipedia_extract") AS ?referenced_by__dataProviderUrl)
    }
    UNION
    {
      SELECT DISTINCT ?proxy ?similar__id 
      (CONCAT(?_label, " (", GROUP_CONCAT(DISTINCT ?link; separator="; "), ")") AS ?similar__prefLabel)
      (CONCAT("/people/page/", REPLACE(STR(?similar__id), "^.*\\\\/(.+)", "$1")) AS ?similar__dataProviderUrl)
      WHERE {
        BIND (<ID> as ?id)
        GRAPH <http://ldf.fi/sampo/wikipedia_extracts> { ?proxy foaf:focus ?id }
    
        ?proxy ^wlink:relates_to [ a wlink:Distance ; wlink:relates_to ?_similar ; wlink:value ?value ; wlink:link_by/skos:prefLabel ?link ] .
        FILTER (STR(?proxy) != STR(?_similar))
        ?_similar foaf:focus ?similar__id .
        ?similar__id skos:prefLabel ?_label .
      } 
    GROUP BY ?proxy ?similar__id ?_label ORDER BY ?value
    }
  UNION
  {
    BIND (<ID> as ?id)
    ?id sch:image ?image__id ;
      skos:prefLabel ?image__description ;
      skos:prefLabel ?image__title .
    BIND (?image__id as ?image__url)
  }
}
`

export const peopleByGenderQuery = `
SELECT DISTINCT ?category ?prefLabel (COUNT(DISTINCT ?person__id) AS ?instanceCount)
WHERE {
  ?person__id a sch:Person .
  
  <FILTER>
  
  OPTIONAL { ?person__id sch:gender ?_category .
  	?_category skos:prefLabel ?_label .
  	FILTER (LANG(?_label)='en')
  }
  BIND (COALESCE(?_label, "Unknown") AS ?prefLabel)
  BIND (COALESCE(?_category, sch:Unknown) AS ?category)
} 
GROUP BY ?category ?prefLabel 
ORDER BY DESC(?instanceCount)
`

export const peopleByBirthPlaceQuery = `
SELECT DISTINCT ?category ?prefLabel (COUNT(DISTINCT ?person__id) AS ?instanceCount)
WHERE {
  ?person__id a sch:Person .
  
  <FILTER>
  
  ?person__id (^foaf:focus)/sch:birthPlace ?category .
  ?category skos:prefLabel ?prefLabel .
  FILTER (LANG(?prefLabel)='fi')
} 
GROUP BY ?category ?prefLabel 
ORDER BY DESC(?instanceCount)
LIMIT 30
`

export const peopleByDeathPlaceQuery = `
SELECT DISTINCT ?category ?prefLabel (COUNT(DISTINCT ?person__id) AS ?instanceCount)
WHERE {
  ?person__id a sch:Person .
  
  <FILTER>
  
  ?person__id (^foaf:focus)/sch:deathPlace ?category .
  ?category skos:prefLabel ?prefLabel .
  FILTER (LANG(?prefLabel)='fi')
} 
GROUP BY ?category ?prefLabel 
ORDER BY DESC(?instanceCount)
LIMIT 30
`

export const peopleByDatasourcesQuery = `
SELECT DISTINCT ?category ?prefLabel (COUNT(DISTINCT ?person__id) AS ?instanceCount)
WHERE {
  ?person__id a sch:Person .
  
  <FILTER>
  
  ?person__id sampos:in_dataset ?category .
  ?category skos:prefLabel ?prefLabel
} 
GROUP BY ?category ?prefLabel 
ORDER BY DESC(?instanceCount)
`

export const peopleByNumberOfDatasourcesQuery = `
SELECT DISTINCT ?category ?prefLabel (COUNT(DISTINCT ?person__id) AS ?instanceCount)
WHERE {
  ?person__id a sch:Person .
  
  <FILTER>
  
  ?person__id sampos:pagelinks ?category .
  BIND (str(?category) AS ?prefLabel)
}
GROUP BY ?category ?prefLabel
ORDER BY ?category
`

export const peopleByInconsistenciesQuery = `
SELECT DISTINCT ?category ?prefLabel (COUNT(DISTINCT ?person__id) AS ?instanceCount)
WHERE {
  ?person__id a sch:Person .
  
  <FILTER>
  
  ?person__id sampos:has_inconsistency ?category .
  ?category skos:prefLabel ?prefLabel
}
GROUP BY ?category ?prefLabel
ORDER BY ?category
`

export const csvQueryPeople = `SELECT DISTINCT ?id 
  ?name ?gender 
  ?pagelinks 
	?birth_times  ?birth_places
	?death_times  ?death_places
	?datasources  ?webpages
WHERE {
  <FILTER> 
  FILTER(BOUND(?id))
  ?id a sch:Person ; skos:prefLabel ?name .
  
  OPTIONAL {
    ?id sch:gender/skos:prefLabel ?gender .
    FILTER (LANG(?gender)='en')
  }
  
  OPTIONAL {
    SELECT DISTINCT ?id (GROUP_CONCAT(DISTINCT STR(?_btime); separator=";") AS ?birth_times) WHERE {
      ?proxy foaf:focus ?id ; sampos:birth_time/skos:prefLabel ?_btime
    } GROUP BY ?id 
  }
  
  OPTIONAL {
    SELECT DISTINCT ?id (GROUP_CONCAT(DISTINCT STR(?_dtime); separator=";") AS ?death_times) WHERE {
      ?proxy foaf:focus ?id ; sampos:death_time/skos:prefLabel ?_dtime
    } GROUP BY ?id 
  }
  
  OPTIONAL {
    SELECT DISTINCT ?id (GROUP_CONCAT(DISTINCT STR(?_bplace); separator=";") AS ?birth_places) WHERE {
      ?proxy foaf:focus ?id ;sch:birthPlace/skos:prefLabel ?_bplace
        FILTER (LANG(?_bplace)='en')
    } GROUP BY ?id
  }
  
  OPTIONAL {
    SELECT DISTINCT ?id (GROUP_CONCAT(DISTINCT STR(?_dplace); separator=";") AS ?death_places) WHERE {
      ?proxy foaf:focus ?id ;sch:deathPlace/skos:prefLabel ?_dplace
        FILTER (LANG(?_dplace)='en')
    } GROUP BY ?id 
  }
  
  OPTIONAL {
    SELECT DISTINCT ?id (GROUP_CONCAT(DISTINCT STR(?_datasource); separator=";") AS ?datasources) WHERE {
      ?proxy foaf:focus ?id ; owl:sameAs ?_datasource 
    } GROUP BY ?id 
  }
  
  OPTIONAL {
    SELECT DISTINCT ?id (GROUP_CONCAT(DISTINCT STR(?_webpage); separator=";") AS ?webpages) WHERE {
      ?proxy foaf:focus ?id ; foaf:page ?_webpage 
    } GROUP BY ?id 
  }
  
  OPTIONAL { ?id sampos:pagelinks ?pagelinks }
}
ORDER BY DESC(COALESCE(?pagelinks, 0)) ?name 
`

export const peopleMapQuery = `
SELECT DISTINCT ?id ?lat ?long 
(COUNT(DISTINCT ?person) AS ?instanceCount)
WHERE {
  <FILTER>
  { 
    [] foaf:focus ?person ;
      sch:birthPlace ?id 
  }
  UNION
  { 
    [] foaf:focus ?person ;
      sch:deathPlace ?id 
  }

  ?id wgs84:lat ?lat ; wgs84:long ?long .
  
} GROUP BY ?id ?lat ?long
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
      sch:birthPlace ?id
    }
    UNION
    { [] foaf:focus ?related__id ;
      sch:deathPlace ?id
    }
    ?related__id skos:prefLabel ?related__prefLabel .
    BIND (CONCAT("/people/page/", REPLACE(STR(?related__id), "^.*\\\\/(.+)", "$1")) AS ?related__dataProviderUrl)
  }
`

export const proxiesMapQuery = `
SELECT DISTINCT ?id ?lat ?long 
  (CONCAT(?popup_text, ": ", ?place_label, ' (', GROUP_CONCAT(DISTINCT ?dataset; separator=', '), ')') as ?prefLabel)
  ?dataProviderUrl ?markerColor
WHERE {
  VALUES ?person { <ID> }
  
  ?person a sch:Person .
  ?proxy foaf:focus ?person .
  
  {
    GRAPH <http://ldf.fi/sampo/relations> {
      [] relations:personSubject ?person ;
      	relations:placeObject ?id ;
        skos:prefLabel ?dataset 
    } 
    BIND ("yellow" AS ?markerColor)
    BIND ("Relation to place" AS ?popup_text)
  }
  UNION
  {
  	GRAPH ?g { ?proxy sch:deathPlace ?id }
    ?g skos:prefLabel ?dataset 
    BIND ("red" AS ?markerColor)
    BIND ("Death" AS ?popup_text)
  }
  UNION
  {
    GRAPH ?g { ?proxy sch:birthPlace ?id }
    ?g skos:prefLabel ?dataset 
  	BIND ("blue" AS ?markerColor)
    BIND ("Birth" AS ?popup_text)
  }

  ?id wgs84:lat ?lat ;
    wgs84:long ?long ;
    skos:prefLabel ?place_label .
  FILTER (LANG(?place_label) = 'fi')

  BIND(CONCAT("/places/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?dataProviderUrl)
}
GROUP BY ?id ?lat ?long ?dataProviderUrl ?markerColor ?place_label ?popup_text
`

export const ageQuery = ` SELECT ?category (count(DISTINCT ?born) AS ?Births) (count(DISTINCT ?deceased) AS ?Deaths)
WHERE {
  
  { SELECT DISTINCT ?person__id (SAMPLE(?_proxy) AS ?proxy) WHERE {
      <FILTER>

	  	?person__id a sch:Person .
      ?_proxy foaf:focus ?person__id ; sampos:birth_time/time:hasBeginning [] .
    } GROUP BY ?person__id }
  FILTER (BOUND(?proxy))
  {
    ?proxy sampos:birth_time/time:hasBeginning ?time .
    BIND (?proxy AS ?born)
  }
  UNION
  {
    ?proxy  sampos:death_time/time:hasEnd ?time .
    BIND (?proxy AS ?deceased)
  }
  
  BIND (STR(year(?time)) AS ?category)
  FILTER (?category <= STR(YEAR(NOW())))
} GROUP BY ?category ORDER BY ?category
`

export const peopleMigrationsQuery = `
SELECT DISTINCT ?id 
?from__id ?from__prefLabel ?from__lat ?from__long
?to__id ?to__prefLabel ?to__lat ?to__long
(CONCAT("/places/page/", REPLACE(STR(?from__id), "^.*\\\\/(.+)", "$1")) AS ?from__dataProviderUrl)
(CONCAT("/places/page/", REPLACE(STR(?to__id), "^.*\\\\/(.+)", "$1")) AS ?to__dataProviderUrl)
(COUNT(DISTINCT ?person) as ?instanceCount)
WHERE {
  <FILTER>
  ?person a sch:Person ;
    ^foaf:focus [ sch:birthPlace ?from__id ;
                sch:deathPlace ?to__id ] .
  
  FILTER(?from__id != ?to__id)

  ?from__id skos:prefLabel ?from__prefLabel .
  FILTER (lang(?from__prefLabel)="fi")
  ?from__id wgs84:lat ?from__lat ; wgs84:long ?from__long .
  
  ?to__id skos:prefLabel ?to__prefLabel .
  FILTER (lang(?to__prefLabel)="fi")
  ?to__id wgs84:lat ?to__lat ; wgs84:long ?to__long .

  BIND (IRI(CONCAT(STR(?from__id), "-", REPLACE(STR(?to__id), "^.*\\\\/(.+)", "$1"))) as ?id)
}
GROUP BY ?id 
?from__id ?from__prefLabel ?from__lat ?from__long
?to__id ?to__prefLabel ?to__lat ?to__long
ORDER BY desc(?instanceCount)
`

//  facet perspective, migrarions tab
export const peopleMigrationsDialogQuery = `
SELECT * {
  <FILTER>
  ?proxy sch:deathPlace <TO_ID> ;
    sch:birthPlace <FROM_ID> ;
    foaf:focus ?id .
  ?id skos:prefLabel ?prefLabel .
  BIND(CONCAT("/people/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?dataProviderUrl)
}
`