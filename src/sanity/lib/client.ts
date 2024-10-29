import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:'skCYCK08GEQf1HXAAIX40XLmIR1o5wNMVUdmWhfYsO5HXz6YtvM9mrd8nzjo9cT5pbMyZUXOBUnvZcgok3cM1jXhcnt9s8kdnONXpZWyNo6NvFKJ4hfyL5Bc0miIXQ76uVa6fhtzFbMow1MsgiZkJ9gzZInI46oPEJ0CboEvoiFc9rcxDHgO'
})
