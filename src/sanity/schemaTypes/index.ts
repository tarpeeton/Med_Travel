import { type SchemaTypeDefinition } from 'sanity'
import banner from './banner.ts'
import history from './history.ts'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner , history],
}
