import { type SchemaTypeDefinition } from 'sanity'
import banner from './banner'
import blog from './blog'
import comment from './comment'
import reviews from './reviews'
import team from './team'
import partners from './partners'
import clinicks from './clinicks'
import clinickCotegory from './clinick-cotegory'
import hotels from './hotels'
import gallery from './gallery'
import sanatoriums from './sanatoriums'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    banner,
    blog,
    comment,
    reviews,
    team,
    partners,
    clinicks,
    clinickCotegory,
    sanatoriums,
    hotels,
    gallery
  ]
}
