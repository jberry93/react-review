import { Environment, Network, RecordSource, Store } from 'relay-runtime'
import { constants } from '../utils/constants'

function fetchQuery (operation, variables) {
  return fetch(constants.RELAY_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // Authorization: `Bearer ${AUTH_TOKEN}`
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => response.json())
}

const network = Network.create(fetchQuery)
const source = new RecordSource()
const store = new Store(source)
const environment = new Environment({ network, store })

export default environment
