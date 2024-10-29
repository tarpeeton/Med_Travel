import { type SchemaTypeDefinition } from 'sanity'
import banner from './banner'
import history from './history'
import blogCotegory from './blog-cotegory'
import blog from './blog'
import comment from './comment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner , history , blogCotegory  , blog , comment],
}
