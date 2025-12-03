import { runSelectQuery } from './SparqlApi'
// import { fullTextQuery } from './SparqlQueriesGeneral'
import { fullTextQuery } from './samposampo/sparql_queries/SparqlQueriesFullText'
import { makeObjectList } from './Mappers'

export const queryJenaIndex = async ({
  backendSearchConfig,
  queryTerm,
  resultClass,
  resultFormat
}) => {
  let q = fullTextQuery
  const perspectiveConfig = backendSearchConfig[resultClass]
  const { endpoint, propertiesQueryBlock } = perspectiveConfig
  q = q.replace('<QUERY>', `(?proxy ?score) text:query ('${queryTerm.toLowerCase()}' 25000) .`)
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
