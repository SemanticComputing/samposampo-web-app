import { runSelectQuery } from './SparqlApi'
import { fullTextQuery } from './samposampo/sparql_queries/SparqlQueriesFullText'
import { makeObjectList } from './Mappers'

export const queryQLeverIndex = async ({
  backendSearchConfig,
  queryTerm,
  resultClass,
  resultFormat
}) => {
  let q = fullTextQuery
  const perspectiveConfig = backendSearchConfig[resultClass]
  const { endpoint, propertiesQueryBlock } = perspectiveConfig

  /**
   * Query block for QLever full text search:
   * example with search "Kekkonen, Urho Kal*":
   * SERVICE textSearch: { ?t textSearch:contains [ textSearch:word 'kekkonen' ] ; textSearch:contains [ textSearch:word 'urho' ] ; textSearch:contains [ textSearch:word 'kal*' ] ; textSearch:contains [ textSearch:entity ?_label ] }
   */
  const formattedWords = queryTerm
    .split(/[\s,-]+/)
    .filter(word => word.trim().length > 0) // Remove empty words from results
    .map(word => `textSearch:contains [ textSearch:word '${word.toLowerCase()}' ]`)
    .join(' ; ')

  q = q.replace('<QUERY>', `SERVICE textSearch: { ?t ${formattedWords} ; textSearch:contains [ textSearch:entity ?_label ] }`)

  q = q.replace('<RESULT_SET_PROPERTIES>', propertiesQueryBlock)
  
  const results = await runSelectQuery({
    query: endpoint.prefixes + q,
    endpoint: endpoint.url,
    useAuth: endpoint.useAuth,
    resultMapper: makeObjectList,
    resultFormat
  })
  return results
}
