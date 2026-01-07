export default {
  languageLabel: "English",
  html: {
    title: "SampoSampo",
    description: "..."
  },
  appTitle: {
    short: "SampoSampo<sup>beta</sup>",
    mobile: "SampoSampo",
    long: "&nbsp; &nbsp; SampoSampo &nbsp; &nbsp;",
    subheading: "\"Connecting Everything to Everything Else\""
  },
  "appDescription1": "Sampo is a web service for searching and studying place names. The search results can be viewed as a table, on maps, and as statistical distributions. Historical and current background maps are provided.",
  "appDescription2": "Start by choosing source dataset(s) and input a place name on the search field. Alternatively you can search by area.",
  selectPerspective: "Select a perspective to search and browse the knowledge graph:",
  mainPageImageLicence: "Images used under license from Shutterstock.com",
  backendErrorText: "One of the backend services is not available at the moment. Please try again later.",
  infoHeader: {
    toggleInstructions: "Click to show or hide instructions"
  },
  mainPageLinkText: "Select example searches, visualizations, and linked information",
  mainPageLinks: [
      {
        title: 'Instance page of Mikael Agricola',
        link: '/people/page/p5571210016405644958/table'
      },
      {
        title: 'Places related to C.G.E. Mannerheim',
        link: '/people/page/p2838987257481784015/map'
      },
      {
        title: 'Lifetimes of WarSampo people',
        link: '/en/people/faceted-search/lifeyears?constraints=%5B%7B%22facetId%22%3A%22external%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B12%5D%2C%22node%22%3A%7B%22id%22%3A%22http%3A%2F%2Fldf.fi%2Fsampo%2Fdatasets%2FWarSampo%22%2C%22prefLabel%22%3A%22WarSampo%22%2C%22instanceCount%22%3A4154%7D%7D%7D%5D'
      },
      {
        title: 'Performance venues in OperaSampo',
        link: '/en/groups/faceted-search/map?constraints=%5B%7B%22facetId%22%3A%22external%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B10%5D%2C%22node%22%3A%7B%22id%22%3A%22http%3A%2F%2Fldf.fi%2Fsampo%2Fdatasets%2FOperaSampo%22%2C%22prefLabel%22%3A%22OperaSampo%22%2C%22instanceCount%22%3A134%7D%7D%7D%5D'
      },
      {
        title: 'Lifelines of Female Artists in Art Sampo',
        link: '/en/people/faceted-search/migrations?constraints=%5B%7B%22facetId%22%3A%22gender%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B1%5D%2C%22node%22%3A%7B%22id%22%3A%22https%3A%2F%2Fschema.org%2FFemale%22%2C%22prefLabel%22%3A%22Female%22%2C%22instanceCount%22%3A19754%7D%7D%7D%2C%7B%22facetId%22%3A%22external%22%2C%22filterType%22%3A%22uriFilter%22%2C%22value%22%3A%7B%22path%22%3A%5B17%5D%2C%22node%22%3A%7B%22id%22%3A%22http%3A%2F%2Fldf.fi%2Fsampo%2Fdatasets%2FArtSampo%22%2C%22prefLabel%22%3A%22ArtSampo%22%2C%22instanceCount%22%3A170%7D%7D%7D%5D'
      },
      {
        title: 'People related to Symbolism by their Wikipedia pages',
        link: '/en/wikipedia_extracts/page/Symbolismi/table'
      },
      {
        title: 'People related to The Hitchhiker’s Guide to the Galaxy by their Wikipedia pages',
        link: '/en/wikipedia_extracts/page/Linnunradan_käsikirja_liftareille/table'
      }
  ],
  topBar: {
    feedback: "feedback",
    info: {
      info: "Info",
      blog: "Project homepage",
      blogUrl: "https://seco.cs.aalto.fi/projects/ss/",
      aboutThePortal: "About the Portal"
    },
    searchBarPlaceHolder: "Search all content",
    searchBarPlaceHolderShort: "Search",
    instructions: "instructions",
    instructionsUrl: "https://seco.cs.aalto.fi/projects/ss/samposampo-instructions.pdf",
  },
  facetBar: {
    results: "Results",
    filters: "Filters",
    activeFilters: "Active filters:",
    removeAllFilters: "Remove all",
    narrowDownBy: "Narrow down by",
    filterOptions: "Filter options",
    filterByName: "Filter by name",
    filterByBoundingBox: "Filter by bounding box",
    selectionOptions: "Selection options",
    selectAlsoSubconcepts: "Automatically select all subconcepts",
    doNotSelectSubconcepts: "Do not select subconcepts",
    sortingOptions: "Sorting options",
    sortAlphabetically: "Sort alphabetically",
    sortByNumberOfSearchResults: "Sort by number of search results",
    useDisjunction: "Use logical OR between selections",
    useConjuction: "Use logical AND between selections",
    minYear: "Min year",
    maxYear: "Max year",
    min: "Min",
    max: "Max",
    facetSearchFieldPlaceholder: "Search...",
    applyFacetSelection: "apply",
    pieChart: {
      tooltip: "Pie chart"
    },
    barChart: {
      tooltip: "Bar chart",
      language: {
        title: "Language",
        xaxisTitle: "Language",
        yaxisTitle: "Manuscript count",
        seriesTitle: "Manuscript count"
      }
    },
    lineChart: {
      tooltip: "Line chart",
      productionTimespan: {
        title: "Manuscript production by decade",
        xaxisTitle: "Decade",
        yaxisTitle: "Manuscript count",
        seriesTitle: "Manuscript count"
      }
    }
  },
  tabs: {
    table: "table",
    map: "map",
    csv: "csv",
    sparql: "sparql",
    production_places: "production places",
    production_places_heatmap: "production heatmap",
    last_known_locations: "last known locations",
    lifeyears: "Years of Living",
    charts: "Charts",
    migrations: "Lifelines",
    network: "network",
    export: "export",
    production_dates: "production dates",
    event_dates: "event dates",
    map_clusters: "clustered map",
    map_markers: "map",
    heatmap: "heatmap",
    statistics: "statistics",
    emloLetterNetwork: "Network of letters",
    emloSentReceived: "Sent and received letters",
    download: "download",
    recommendations: "recommendations",
    share: "share",
    wikipedia_extract: "Wikipedia Extracts"
  },
  table: {
    rowsPerPage: "Rows per page",
    of: "of"
  },
  lineChart: {
    productionCount: "Production",
    transferCount: "Transfer of custody",
    observationCount: "Observation",
    sentCount: "Sent",
    receivedCount: "Received",
    allCount: "All"
  },
  apexCharts: {
    grouping: "Sort by:",
    property: "Ominaisuus:",
    chartType: "Chart type:",
    pie: "Pie chart",
    bar: "Column chart",
    resultClasses: {
      peopleByGender: "Gender",
      peopleByBirthPlace: "Birth place",
      peopleByDeathPlace: "Death place",
      peopleByDatasources: "Data source",
      peopleByNumberOfDatasources: "Number of data sources",
      peopleByWikipedia: "Related Wikipedia pages",
      peopleByInconsistencies: "Inconsistencies"
    }
  },
  exportToYasgui: "open the result table query in yasgui sparql editor",
  openInLinkedDataBrowser: "open in linked data browser",
  resultsAsCSV: "download the search results as a CSV table",
  facets: {
    dateFacet: {
      invalidDate: "Epäkelpo päivämäärä.",
      toBeforeFrom: "Alkupäivämäärän täytyy olla ennen loppupäivämäärää.",
      minDate: "Aikaisin sallittu päivämäärä on {minDate}",
      maxDate: "Myöhäisin sallittu päivämäärä on {maxDate}",
      cancel: "Peruuta",
      fromLabel: "Alku",
      toLabel: "Loppu"
    },
    textFacet: {
      inputLabel: "Etsi nimellä"
    },
    sliderFacet: {
      invalidStartOrEnd: "Min value must be smaller than max value. The smallest value can be {min} and the largest value can be {max}."
    }
  },
  leafletMap: {
    basemaps: {
      mapbox: {
        "light-v10": "Mapbox Light (OpenStreetMap)"
      },
      googleRoadmap: "Google Maps",
      topographicalMapNLS: "Topographical map (National Land Survey of Finland)",
      backgroundMapNLS: "Background map (National Land Survey of Finland)",
      airMapNLS: "Aerial map (National Land Survey of Finland)"
    },
    externalLayers: {
      "WFS_MV_Kulttuuriymparisto:Arkeologiset_kohteet_alue": "Register of Archaeological Sites, areas (Finnish Heritage Agency)",
      "WFS_MV_Kulttuuriymparisto:Arkeologiset_kohteet_piste": "Register of Archaeological Sites, points (Finnish Heritage Agency)",
      "WFS_MV_KulttuuriymparistoSuojellut:Muinaisjaannokset_alue": "Register of Archaeological Sites, areas (Finnish Heritage Agency)",
      "WFS_MV_KulttuuriymparistoSuojellut:Muinaisjaannokset_piste": "Register of Archaeological Sites, points (Finnish Heritage Agency)",
      fhaLidar: "Elevation model (Finnish Heritage Agency)",
      karelianMaps: "Karelian maps, 1:100 000 topographic (SeCo)",
      senateAtlas: "Senate atlas, 1:21 000 topographic (SeCo)",
      "kotus:pitajat": "Finnish parishes in 1938 (Institute for the Languages of Finland)",
      "kotus:rajat-sms-alueet": "Dialectical regions in Finland (Institute for the Languages of Finland)",
      "kotus:rajat-sms-alueosat": "Dialectical subregions in Finland (Institute for the Languages of Finland)",
      "kotus:rajat-lansi-ita": "Border between western and eastern dialects in Finland (Institute for the Languages of Finland)"
    },
    mapModeButtons: {
      markers: "Markers",
      heatmap: "Heatmap"
    },
    wrongZoomLevel: "The map zoom level has to at least 11",
    wrongZoomLevelFHA: "The map zoom level has to be at least 13 in order to show this layer",
    tooManyResults: "More than 500 results, please use clustered map or heatmap"
  },
  instancePageGeneral: {
    introduction: "<p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> This landing page provides a human-readable summary of the data points that link to this {entity}. The data included in this summary reflect only those data points used in the SampoSampo Portal. Click the Open in Linked Data Browser on button on the Export tab to view the complete set of classes and properties linked to this record. </p> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> To cite this record, use its url. You can use also use the url to return directly to the record at any time. </p>",
    repetition: "<h6 class=\"MuiTypography-root MuiTypography-h6\"> Repetition of data </h6> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> The same or similar data may appear within a single data field multiple times. This repetition occurs due to the merging of multiple records from different data sources to create the SampoSampo record. </p>"
  },
  deckGlMap: {
    arcColouring: "Arc colouring:",
    showMoreInformation: "Click to show more information.",
    placesMsMigrations: {
      legendTitle: "Arc colouring",
      legendFrom: "Manuscript production place",
      legendTo: "Last known location",
      from: "Production place:",
      to: "Last known location:",
      count: "Manuscript count",
      listHeadingSingleInstance: "Manuscript:",
      listHeadingMultipleInstances: "Manuscripts:"
    }
  },
  perspectives: {
      fullTextSearch: {
        properties: {
          prefLabel: {
            label: "Label"
          },
          type: {
            label: "Type"
          },
          image: {
            label: "Image"
          }
        }
      },
    people: {
      label: "People",
      facetResultsType: "people",
      shortDescription: "Historical Finnish people",
      longDescription: `<p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
From this perspective, you can search for information about the historical people in this dataset.  The data is exported from multiple data sources, see facet 'Datasources' at the bottom left. You can use the facets to limit the results by chosen biographical features.<br>

NB.: much of the data is generated through computation. Erroneous or repetitive records may be present due to errors in the source data or the processing.<br>
</p>
<p>The result view can be selected using the tabs:
  <ul class="MuiTypography-root MuiTypography-body1">
    <li>
      The <strong>TABLE</STRONG> tab lists all the people in the data. One row of the table contains the information related to one person. Selecting the name of an result takes you to a more detailed person instance page. Image(s): Wikidata/Wikimedia Commons.
    </li>
    <li>
      The <strong>CHARTS</strong> tab allows you to visualize several biographical features with column or bar charts.
    </li>
    <li>
      The <strong>YEARS OF LIVING</strong> tab shows a time series of the years of birth and death.
    </li>
    <li>
      The <strong>MAP</strong> tab visualises the places of birth and death associated with the actors. Clicking on the place markers will open a list of people associated with the place.
    </li>
    <li>
      The <strong>MIGRATIONS</strong> tab visualises the places of birth (blue end of the arcs) and death (red end) of the people. First howering over and then clicking on an arc shows an popup window with a list of people associated with the places.
    </li>
    <li>
      The <strong>CSV</strong> tab allows you to download the results in tabular form to your own computer.
      </li>
      <li>
      From the <strong>SPARQL</strong> query tab, you can follow the link to the Yasgui service and see the query used to retrieve the results from the database.
      </li>
      <li>
      The <strong>SHARE</strong> tab provides a permanent link to the search you have made. You can use it to find the search later and to refer to the material.
    </li>
  </ul>
</p>
<p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">General information about the project is available at the 
<a href="https://seco.cs.aalto.fi/projects/ss/"  target="_blank" rel="noopener noreferrer">Project homepage</a>.
</p>`,
      instancePage: {
        label: "Person",
        description: `<p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        The result view can be selected using the tabs:
        </p>
        <p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            The <strong>TABLE</STRONG> tab lists detailed information about the person like biographical details extracted for various datasources, links to related resources in SampoSampo portal and to external sources.
            <br>
            Image source: Wikidata/Wikimedia Commons. 
          </li>
          <li>
            The <strong>WIKIPEDIA EXTRACTS</strong> shows the sentences extracted from the Finnish Wikipedia page of the person as well as links to related resources, e.g., other people, organizations, places and general Wikipedia pages.
            <br>
            NB. This view contains information only for those that have a page in Finnish Wikipedia.
          </li>
          <li>
            The <strong>MAP</strong> tab visualises the places of birth and death associated with the person as well as places associated with the lifetime of the person. 
            <br>
            Clicking on the place markers will open a list of events explaining the connection to the place.
          </li>
          <li>
            The <strong>EXPORT</strong> view allows you to view the SPARQL query used to generate the result table view into YASGUI query editor or examine the person data in the Saha editor.
          </li>
        </ul>
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">General information about the project is available at the 
      <a href="https://seco.cs.aalto.fi/projects/ss/"  target="_blank" rel="noopener noreferrer">Project homepage</a>.
      </p>`
      },
      properties: {
        prefLabel: {
          label: "Name",
          description: "The name of the person.",
          textFacetInputPlaceholder: "Search..."
        },
        altLabel: {
          label: "Alternative names",
          description: "Alternative names of the person."
        },
        proxyPrefLabel: {
          label: "Preferred labels per proxy",
          description: "The preferred labels of the person from all proxies."
        },
        proxyAltLabel: {
          label: "Alternative labels per proxy",
          description: "The alternative labels of the person from all proxies."
        },
        image: {
          label: "Image",
          description: "Image of the person."
        },
        gender: {
          label: "Gender",
          description: "Gender of the person. The value 'Unknown' appears when the information has not been available in the source datasets."
        },
        birth_Timespan: {
          label: "Time of birth",
          description: "Time of birth."
        },
        birth_place: {
          label: "Place of birth",
          description: "Place of birth."
        },
        death_Timespan: {
          label: "Time of death",
          description: "Time of death."
        },
        death_place: {
          label: "Place of death",
          description: "Place of death."
        },
        relation: {
          label: "Person-place relations",
          description: "Person-place relations involving the person"
        },
        namesake: {
          label: "Namesakes",
          description: "People with same or similar names."
        },
        data_source: {
          label: "Data source",
          description: "Data source that has provided information about the person to SampoSampo."
        },
        external: {
          label: "External data links",
          description: "Link to external data providing information about the person in machine-readable format."
        },
        sentence: {
          label: "Sentence",
          description: "Sentences extracted from Wikipedia descriptions."
        },
        referenced_person: {
          label: "Referenced person",
          description: "References extracted from Wikipedia descriptions."
        },
        referenced_place: {
          label: "Referenced place",
          description: "References extracted from Wikipedia descriptions."
        },
        referenced_group: {
          label: "Referenced organization",
          description: "References extracted from Wikipedia descriptions."
        },
        reference: {
          label: "Reference in Wikipedia",
          description: "References extracted from Wikipedia descriptions."
        },
        referenced_by: {
          label: "Referenced by",
          description: "Referenced by another Wikipedia page."
        },
        similar: {
          label: "Similar people",
          description: "People linked to same entities."
        },
        website: {
          label: "External web pages",
          description: "Web pages containing information about the person."
        },
        uri: {
          label: "URI",
          description: "Uniform Resource Identifier"
        },
        "pagelinks":{
          label: "Number of data sources",
          description: "Number of Data sources providing information about a person."
        },
        "wikipedias": {
          label: "Referenced Wikipedia pages",
          description: "References in the Wikipedia page of this person."
        },
        "inconsistencies":{
          label: "Inconsistencies",
          description: "Inconsistencies in biographical data between different datasources."
        }
      }
    },
    groups: {
      label: "Organizations",
      facetResultsType: "organization",
      shortDescription: "Organizations, companies, schools, groups etc.",
      longDescription: `<p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
From this perspective, you can search for information about the organizations in the dataset.  The data is exported from multiple data sources, see facet 'Datasources' at the bottom left. You can use the facets to limit the results by chosen features.<br>

NB.: much of the data is generated through computation. Erroneous or repetitive records may be present due to errors in the source data or the processing.<br>
</p>
<p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">The result view can be selected using the tabs:
  <ul>
    <li>
      The <strong>TABLE</STRONG> tab lists all the organizations in the data. One row of the table contains the information related to one organization. Selecting the name of an result takes you to a more detailed Organization instance page. Image(s): Wikidata/Wikimedia Commons.
    </li>
    <li>
      The <strong>MAP</strong> tab visualises the locations associated with the organizations. Clicking on the place markers will open a list of organizations associated with the place.
    </li>
    <li>
      The <strong>CSV</strong> tab allows you to download the results in tabular form to your own computer.
      </li>
    <li>
      From the <strong>SPARQL</strong> query tab, you can follow the link to the Yasgui service and see the query used to retrieve the results from the database.
    </li>
    <li>
      The <strong>SHARE</strong> tab provides a permanent link to the search you have made. You can use it to find the search later and to refer to the material.
    </li>
  </ul>
</p>
<p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
General information about the project is available at the 
<a href="https://seco.cs.aalto.fi/projects/ss/"  target="_blank" rel="noopener noreferrer">Project homepage</a>.
</p>`,
      instancePage: {
        label: "Organization",
        description: `<p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        The result view can be selected using the tabs:
        </p>
        <p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            The <strong>TABLE</STRONG> tab lists detailed information about the organization extracted for various datasources, links to related resources in SampoSampo portal and to external sources.
            <br>
            Image source: Wikidata/Wikimedia Commons. 
          </li>
          <li>
            The <strong>EXPORT</strong> view allows you to view the SPARQL query used to generate the result table view into YASGUI query editor or examine the organization data in the Saha editor.
          </li>
        </ul>
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">General information about the project is available at the 
      <a href="https://seco.cs.aalto.fi/projects/ss/"  target="_blank" rel="noopener noreferrer">Project homepage</a>.
      </p>`
      },
      properties: {
        prefLabel: {
          label: "Name",
          description: "The name of the organization.",
          textFacetInputPlaceholder: "Search..."
        },
        altLabel: {
          label: "Alternative names",
          description: "Alternative names of the organization."
        },
        image: {
          label: "Image",
          description: "Possible image representing the organization."
        },
        estimated_time: {
          label: "Estimated time",
          description: "Estimated time of activity. NB. if this information is not directly available at the datasources, it is infered e.g. from the durations of person memberships."
        },
        location: {
          label: "Location",
          description: "Place of the headquarter or an area of activity"
        },
        place: {
          label: "Related place",
          description: "Related resource in the ontology of places."
        },
        category: {
          label: "Category",
          description: "Category of the group."
        },
        external: {
          label: "Data sources",
          description: "Data sources providing information about the organization."
        },
        other: {
          label: "Other data sources",
          description: "Same organization in other datasources."
        },
        webpage_preview: {
          label: "Web page preview",
          description: "Web page preview."
        },
        datasource_preview: {
          label: "Datasource preview",
          description: "Datasource preview."
        },
        sentence: {
          label: "Sentence",
          description: "Sentences extracted from Finnish Wikipedia descriptions refering this group."
        },
        referenced_person: {
          label: "Linked people",
          description: "People whose Finnish Wikipedia pages have references to this resource."
        },
        namesake: {
          label: "Similar organizations",
          description: "Organizations with same or similar names."
        },
        website: {
          label: "External web pages",
          description: "External web pages containing information about the organization."
        },
        uri: {
          label: "URI",
          description: "Uniform Resource Identifier"
        },
        pagelinks: {
          label: "Number of data sources",
          description: "Number of Data sources providing information about an organization."
        },
      }
    },
    group_proxies: {
      label: "Proxy",
      facetResultsType: "group",
      shortDescription: "Proxy perspective description",
      longDescription: "<p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">...</p>",
      instancePage: {
        label: "Organization information in one datasource",
        description: `<p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        The result view can be selected using the tabs:
        </p>
        <p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            The <strong>TABLE</STRONG> tab lists detailed information about the organization extracted from one of the data sources, links to related resources in SampoSampo portal and to external sources.
            <br>
            Image source: Wikidata/Wikimedia Commons. 
          </li>
          <li>
            The <strong>EXPORT</strong> view allows you to view the SPARQL query used to generate the result table view into YASGUI query editor or examine the organization data in the Saha editor.
          </li>
        </ul>
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">General information about the project is available at the 
      <a href="https://seco.cs.aalto.fi/projects/ss/"  target="_blank" rel="noopener noreferrer">Project homepage</a>.
      </p>`
      },
      properties: {
        prefLabel: {
          label: "Name",
          description: "The name of the organization.",
          textFacetInputPlaceholder: "Search..."
        },
        altLabel: {
          label: "Alternative names",
          description: "Alternative names of the Organization in datasource"
        },
        provided: {
          label: "Provided",
          description: "Provided resource."
        },
        image: {
          label: "Image",
          description: "Image of the Organization."
        },
        external: {
          label: "Data sources",
          description: "Data sources providing information about the Organization."
        },
        other: {
          label: "Other data sources",
          description: "Same Organization in other datasources."
        },
        webpage_preview: {
          label: "Web page preview",
          description: "Web page preview."
        },
        datasource_preview: {
          label: "Datasource preview",
          description: "Datasource preview."
        },
        website: {
          label: "External web pages",
          description: "External web pages containing information about the Organization."
        },
        uri: {
          label: "URI",
          description: "Uniform Resource Identifier"
        }
      }
    },
    proxies: {
      label: "Proxy",
      facetResultsType: "people",
      shortDescription: "Proxy perspective description",
      longDescription: "<p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">...</p>",
      instancePage: {
        label: "Person information in one datasource",
        description: "<p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">...</p>"
      },
      properties: {
        prefLabel: {
          label: "Name",
          description: "The name of the person.",
          textFacetInputPlaceholder: "Search..."
        },
        altLabel: {
          label: "Alternative names",
          description: "Alternative names of the person in datasource"
        },
        provided: {
          label: "Provided",
          description: "Provided resource."
        },
        image: {
          label: "Image",
          description: "Image of the person."
        },
        gender: {
          label: "Gender",
          description: "Gender of the person."
        },
        birth_Timespan: {
          label: "Time of birth",
          description: "Time of birth."
        },
        birth_place: {
          label: "Place of birth",
          description: "Place of birth."
        },
        death_Timespan: {
          label: "Time of death",
          description: "Time of death."
        },
        death_place: {
          label: "Place of death",
          description: "Place of death."
        },
        external: {
          label: "Data sources",
          description: "Data sources providing information about the person."
        },
        other: {
          label: "Other data sources",
          description: "Same person in other data sources."
        },
        webpage_preview: {
          label: "Web page preview",
          description: "Web page preview."
        },
        datasource_preview: {
          label: "Datasource preview",
          description: "Datasource preview."
        },
        website: {
          label: "External web pages",
          description: "External web pages containing information about the person."
        },
        uri: {
          label: "URI",
          description: "Uniform Resource Identifier"
        }
      }
    },
    wikipedia_extracts: {
      label: "Wikipedia extracts",
      facetResultsType: "people",
      shortDescription: "Extracts from biographies in Wikipedia",
      longDescription: "<p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">...</p>",
      instancePage: {
        label: "Wikipedia extract",
        description: "<p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">...</p>"
      },
      properties: {
        prefLabel: {
          label: "Name",
          description: "The name of the person.",
          textFacetInputPlaceholder: "Search..."
        },
        altLabel: {
          label: "Alternative names",
          description: "Alternative names of the person."
        },
        image: {
          label: "Image",
          description: "Image of the person."
        },
        provided: {
          label: "SampoSampo resource",
          description: "SampoSampo resource."
        },
        sentence: {
          label: "Sentence",
          description: "Sentences extracted from Wikipedia descriptions."
        },
        reference: {
          label: "Reference",
          description: "References extracted from Wikipedia descriptions."
        },
        referenced_by: {
          label: "Referenced by",
          description: "Referenced by another Wikipedia page."
        },
        
        similar: {
          label: "Similar resources",
          description: "Resources linked to same people."
        },
        type: {
          label: "Type",
          description: "Type of the resource"
        },
        website: {
          label: "External web pages",
          description: "External web pages containing information about the person."
        },
        uri: {
          label: "URI",
          description: "Uniform Resource Identifier"
        }
      }
    },
    places: {
      label: "Places",
      facetResultsType: "places",
      shortDescription: "Buildings, cities, counties, municipalities, etc.",
      longDescription: `<p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
From this perspective, you can search for information about the places in the dataset.  The data is exported from multiple data sources, see facet 'Data sources' at the bottom left. You can use the facets to limit the results by chosen features.<br>

NB.: much of the data is generated through computation. Erroneous or repetitive records may be present due to errors in the source data or the processing.<br>
</p>
<p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">The result view can be selected using the tabs:
  <ul>
    <li>
      The <strong>TABLE</STRONG> tab lists all the places in the data. One row of the table contains the information related to one place. Selecting the name of an result takes you to a more detailed Place instance page.
    </li>
    <li>
      The <strong>MAP</strong> tab visualises the places on a map using their sampled coordinates. Clicking on the place markers will open a tooltip containing a link to the place located at that coordinate.<br>
      Sampled coordinates are calculated using all of the available coordinates for a place (from its different proxies) and identifying those coordinates that have the <i>lowest distance on average to all the other coordinates</i>, which will become the sampled coordinates for the place.
    </li>
    <li>
      The <strong>SHARE</strong> tab provides a permanent link to the search you have made. You can use it to find the search later and to refer to the material.
    </li>
  </ul>
</p>
<p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
General information about the project is available at the 
<a href="https://seco.cs.aalto.fi/projects/ss/"  target="_blank" rel="noopener noreferrer">Project homepage</a>.
</p>`,
      instancePage: {
        label: "Place",
        description: `<p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        The result view can be selected using the tabs:
        </p>
        <p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            The <strong>TABLE</STRONG> tab lists detailed information about the place like labels and coordinates extracted for various data sources, links to related resources in SampoSampo portal and to external sources.
          </li>
          <li>
            The <strong>MAP</strong> tab visualises the different coordinates extracted from data sources for the place on a map. 
            <br>
            Clicking on the place markers will open a tooltip containing a link to the specific proxy that particular coordinate set is from.
          </li>
        </ul>
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">General information about the project is available at the 
      <a href="https://seco.cs.aalto.fi/projects/ss/"  target="_blank" rel="noopener noreferrer">Project homepage</a>.
      </p>`
      },
      properties: {
        uri: {
          label: "URI",
          description: "The Uniform Resource Identifier (URI) of the place"
        },
        prefLabel: {
          label: "Name",
          description: "The name of the place.",
          textFacetInputPlaceholder: "Search..."
        },
        proxyPrefLabel: {
          label: "Preferred labels per proxy",
          description: "The preferred labels of the Place from all proxies. Includes different language variations (e.g., Finnish, Swedish and English) available from proxies."
        },
        proxyAltLabel: {
          label: "Alternative labels per proxy",
          description: "The alternative labels of the place from all proxies. Includes different language variations (e.g., Finnish, Swedish and English) available from proxies."
        },
        onMap: {
          label: "Viewable on a map",
          description: "Whether the Place can be viewed on a map (has coordinates)"
        },
        sampledLatitude: {
          label: "Sampled latitude",
          description: "Sampled latitude of the place (used for map visualizations). These sampled coordinates are the coordinates that were calculated to be the closest on average to all other coordinates available to the place."
        },
        sampledLongitude: {
          label: "Sampled longitude",
          description: "Sampled longitude of the place (used for map visualizations). These sampled coordinates are the coordinates that were calculated to be the closest on average to all other coordinates available to the place."
        },
        latitude: {
          label: "Latitude",
          description: "Latitude of the place"
        },
        longitude: {
          label: "Longitude",
          description: "Longitude of the place"
        },
        relatedPeople: {
          label: "Related to person",
          description: "People with the Place as their place of birth or death"
        },
        peopleBirth: {
          label: "Related to person (birth place)",
          description: "People with the Place as their place of birth"
        },
        peopleDeath: {
          label: "Related to person (death place)",
          description: "People with the Place as their place of death"
        },
        relation: {
          label: "Part of a person-place relation",
          description: "Person-place relations involving the Place"
        },
        group: {
          label: "Related organizations",
          description: "Organizations with activities in this place"
        },
        website: {
          label: "External web pages",
          description: "External web pages containing information about the Place."
        },
        source: {
          label: "Data sources",
          description: "The data sources of the Place"
        },
        inconsistencies:{
          label: "Inconsistencies",
          description: "Inconsistencies in place data between different data sources."
        }
      }
    },
    historical_events: {
      label: "Events",
      facetResultsType: "events",
      shortDescription: "Historical events",
      longDescription: "<p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">...</p>",
      instancePage: {
        label: "Historical event",
        description: "<p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">...</p>"
      },
      properties: {
          uri: {
            label: "URI",
            description: "Uniform Resource Identifier"
          },
          prefLabel: {
            label: "Name",
            description: "The name of the Place.",
            textFacetInputPlaceholder: "Search..."
          },
          place: {
            label: "Place",
            description: "Place of the event"
          },
          historyField: {
            label: "Field of history",
            description: ""
          },
          eventType: {
            label: "Type of event",
            description: ""
          },
          description: {
            label: "Description",
            description: ""
          },
          time: {
            label: "Time span",
            description: ""
          },
          participant: {
            label: "Participant",
            description: "Actor related to the event"
          }
      }
    },
    place_proxies: {
      label: "Place proxies",
      facetResultsType: "place proxies",
      shortDescription: "Proxies of buildings, cities, counties, municipalities, etc.",
      longDescription: "<p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">...</p>",
      instancePage: {
        label: "Place information in one data source",
        description: `<p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        The result view can be selected using the tabs:
        </p>
        <p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            The <strong>TABLE</STRONG> tab lists detailed information about this particular place proxy like its labels and coordinates.
          </li>
        </ul>
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">General information about the project is available at the 
      <a href="https://seco.cs.aalto.fi/projects/ss/"  target="_blank" rel="noopener noreferrer">Project homepage</a>.
      </p>`
      },
      properties: {
        provided: {
          label: "Provided resource",
          description: "The provided resource of the place proxy."
        },
        prefLabel: {
          label: "Name",
          description: "The name of the place proxy.",
          textFacetInputPlaceholder: "Search..."
        },
        altLabel: {
          label: "Alternative labels",
          description: "The alternative labels of the place proxy."
        },
        latitude: {
          label: "Latitude",
          description: "Latitude of the place proxy"
        },
        longitude: {
          label: "Longitude",
          description: "Longitude of the place proxy"
        },
        source: {
          label: "Data source",
          description: "The data source of the place Proxy"
        },
        uri: {
          label: "URI",
          description: "The Uniform Resource Identifier (URI) of the place proxy"
        },
        otherSource: {
          label: "Other data sources",
          description: "The same place in other data sources"
        }
      }
    },
    place_relations: {
      label: "Person-place relations",
      facetResultsType: "relations",
      shortDescription: "Search relation between persons and places",
      longDescription: "<p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">...</p>",
      instancePage: {
        label: "Relation",
        description: "<p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">...</p>"
      },
      properties: {
        uri: {
          label: "URI",
          description: "Uniform Resource Identifier"
        },
        prefLabel: {
          label: "Description",
          description: "Human readable description of the relation."
        },
        person: {
          label: "Person",
          description: ""
        },
        place: {
          label: "Place",
          description: ""
        },
        title: {
          label: "Title or occupation",
          description: ""
        },
        type: {
          label: "Relation type",
          description: ""
        },
        datasource: {
          label: "Data source",
          description: "The database from where these relations are extracted."
        },
        person_datasource: {
          label: "Data source of the person",
          description: "The databases containing information about the people."
        },
        related: {
          label: "Related relations",
          description: "Other related relations, e.g., in cases where multiple people or places are mentioned in the same event."
        },
        additionalSource: {
          label: "Additional source(s)",
          description: "Additional sources for the relation. For AI-generated relations, these are the sources provided by the model for its generated relation."
        }
      }
    },
    datasources: {
      label: "Data sources",
      facetResultsType: "data sources",
      shortDescription: "Overview of data sources",
      longDescription: `<p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
From this perspective, you can search for information about the data sources of the SampoSampo dataset.
<br>
In this overview you can see the amounts of people, organizations, places, and relations extracted from each data source.
</p>

<p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
General information about the project is available at the 
<a href="https://seco.cs.aalto.fi/projects/ss/"  target="_blank" rel="noopener noreferrer">Project homepage</a>.
</p>`,
      properties: {
        prefLabel: {
          label: "Title",
          description: "Name of the data source"
        },
        number_of_people: {
          label: "Number of people",
          description: "Number of people extracted from the data source"
        },
        number_of_organizations: {
          label: "Number of organizations",
          description: "Number of organizations extracted from the data source"
        },
        number_of_places: {
          label: "Number of places",
          description: "Number of places extracted from the data source"
        },
        number_of_relations: {
          label: "Number of relations",
          description: "Number of person-place relations extracted from the data source"
        },
        website: {
          label: "Website",
          description: ""
        }
      }
    }
  },
  aboutThePortalPartOne: `<h1 class=\"MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom\"> About the Portal </h1> 
  <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">
  <a href=\"https://seco.cs.aalto.fi/projects/ss/\">SampoSampo</a> is a linked open data service and semantic meta portal that links numerous <a href=\"https://seco.cs.aalto.fi/applications/sampo/\">Sampo systems</a> and external data services to each other. 
  Its data service is similar to the international online service <a href=\"https://viaf.org/\">VIAF: The Virtual International Authority File</a>, which links together the authority databases and other registers of national libraries in different countries. 
  However, SampoSampo has been adapted to fit into the national <a href=\"https://seco.cs.aalto.fi/projects/fin-clariah/\">FIN-CLARIAH/DARIAH-FI research infrastructure</a> and also includes a semantic SampoSampo portal developed in accordance with the Sampo model, which does not require programming skills to use.
  </p>
  <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">
  Interfaces such as SampoSampo's linking service can be used to enrich data when developing new data services. 
  This has already been utilized in enriching the massive <a href=\"https://seco.cs.aalto.fi/projects/coco/\">LetterSampo Finland</a> data published in spring 2025. 
  SampoSampo's innovations include:
  <ol>
  <li>The ability to search, browse, and analyze data globally across different databases. For example, the system can be used to find information on nearly 100,000 historical figures from Finland.</li>
  <li>The ability to verify the quality of different data sources by comparing their information with each other. For example, there is surprisingly contradictory information about Mikael Agricola.</li>
  <li>The ability to search for connections between entities belonging to the whole, such as people and places, and the Finnish-language explanations between them. For example, how are Finnish artists connected to Italy or Carl Gustaf Emil Mannerheim to Germany? This utilizes both the connections in Sampo systems' knowledge graphs and extensive language models of artificial intelligence (neuro-symbolic AI, hybrid AI, explainable AI).</li>
  </ol>
  </p>
  <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\">
  SampoSampo has been developed using the <a href=\"https://doi.org/10.3233/SW-223034\">Sampo model</a> and <a href=\"https://seco.cs.aalto.fi/tools/sampo-ui/\">Sampo UI tool</a> developed at Aalto University and the University of Helsinki. 
  The diverse data behind the service has been collected, harmonized, and converted into open linked data and a data service in accordance with the <a href=\"https://www.go-fair.org/\">FAIR principles</a> (Findable, Accessible, Interoperable, Re-usable data). 
  This enables material retrieval, browsing, digital humanities data analysis, and intelligent knowledge discovery. 
  The data service has been published on the <a href=\"https://ldf.fi/\">Linked Data Finland LDF.fi</a> platform, whose SPARQL interface has been used to develop the SampoSampo portal. 
  This allows anyone to easily search, browse, analyze, and visualize data without programming skills.
  </p>`,
  aboutThePortalPartTwo: "",
  instructions: "<h1 class=\"MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom\"> Instructions </h1> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> The search functionality of this semantic portal is based on the <a href=\"https://doi.org/10.2200/S00190ED1V01Y200904ICR005\" target='_blank' rel='noopener noreferrer'> faceted search</a> paradigm. By default each perspective displays all results from the corresponding class. This default result set can be narrowed down by using the filters on the left. </p> <h2 class=\"MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom\"> Using a single filter </h2> <h3 class=\"MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom\"> Selecting values within a filter </h3> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> All possible values for a filter are displayed either as a list or as a hierarchical tree structure (if available). The number of results is shown in brackets for each value. Once a value is selected, the results are automatically updated. To prevent further selections that do not return any results, also the possible values for all other filters are updated at the same time. </p> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> Multiple values can be selected within a single filter. Selecting multiple values generates results that contain any of the selected values. For example, selecting both <i>Saint Augustine</i> and <i>Saint Jerome</i> as an Author returns results that include either <i>Saint Augustine</i> <strong>OR</strong> <i>Saint Jerome</i> as an Author. </p> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> Selected values of a filter appear in the Active filters section at the top of the list of filters. To deselect a filter, click the X mark next to it within the Active filters section. You can also deselect a filter value by unchecking the checkmark in the filter’s value list. The Active filters section only appears if there are filter values currently selected. </p> <h3 class=\"MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom\"> Searching within a filter </h3> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> Search within a filter by using the search field at the top of each filter. All possible values of a filter remain visible at all times. The values of the filter that match the search term are indicated by a purple underline. </p> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> Steps for searching within filters: </p> <ol class=\"MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom\"> <li> Type search term into search field. If there are matches, a number will appear to the right of the search field, indicating the number of filter values that match the search term. </li> <li> Click the arrows to the right of the search field to cycle through the results. As you click the arrow, a different filter value will appear at the top of the list. Matched filters are underlined in purple. </li> <li> Click the checkmark next to a filter value to activate it. The results (and also other filters) are automatically updated. </li> </ol> <h2 class=\"MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom\"> Using multiple filters simultaneously </h2> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> The effectiveness of faceted search is realized when multiple filters are applied at the same time. As in many e-commerce sites, a logical AND is always used between the filters. For example selecting <i>Saint Augustine </i> and <i>Saint Jerome</i> as an Author and <i>Sir Thomas Phillipps</i> and <i> Thomas Thorpe</i> as an Owner, the results are narrowed down as follows: </p> <p class=\"MuiTypography-root MuiTypography-body1\"> (Author: <i>Saint Augustine</i> <strong>OR</strong> Author: <i>Saint Jerome</i>) </p> <p class=\"MuiTypography-root MuiTypography-body1\"> <strong>AND</strong> </p> <p class=\"MuiTypography-root MuiTypography-body1\"> (Owner: <i>Sir Thomas Phillipps</i> <strong>OR</strong> Owner: <i>Thomas Thorpe</i>) </p>",
  feedback: "<h1 class=\"MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom\"> Feedback </h1> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> This semantic portal has been developed by ... </p> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> We are interested in your feedback on the functionality, coverage, and usefulness of the portal and its data. </p> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> Please complete our <a href=\"\" target='_blank' rel='noopener noreferrer'>Feedback Survey Form (add link).</a> </p> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> You can also contact us via email: ... or DM us on Twitter: ... </p> <p class=\"MuiTypography-root MuiTypography-body1 MuiTypography-paragraph\"> Please be aware that this portal’s response times may be affected by the size and complexity of the underlying knowledge graph. </p>",
  exportLink: {
    viewLabel: "Tab",
    viewInstructions: "Choose the tab in which the query will open",
    fieldLabel: "Generated link (read-only)",
    infoBody: "You can share the query you made by using the link below. The link is generated based on what you have selected for different facets and will open the search view of this perpsective with those choices on the selected tab. You can change the opened tab to any of the supported ones using the dropdown menu below. If you make additional choices while on this page, the link will be automatically updated to include those.",
    warningTitle: "Generated link might be too long for some browsers",
    warningBody: "The current length of the generated link is more than 2,000 characters. Browsers have different limits for the maximum lengths of links they can handle. <strong>This link might not work on all browsers</strong> — you can reduce the length of the link by deselecting some facet options.",
    errorTitle: "Generated link is too long",
    errorBody: "The current length of the generated link is more than 15,800 characters. <strong>The server will refuse to handle requests that go over certain length limits</strong> — you can reduce the length of the link by deselecting some facet options.",
    copyLinkToClipboard: "Copy link to clipboard"
  }
}