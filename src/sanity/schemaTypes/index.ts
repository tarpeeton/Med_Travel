import { type SchemaTypeDefinition } from 'sanity'
import banner from './banner.ts'
import history from './history.ts'
import blogCotegory from './blog-cotegory.ts'
import blog from './blog.ts'
import comment from './comment.ts'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner , history , blogCotegory  , blog , comment],
}
