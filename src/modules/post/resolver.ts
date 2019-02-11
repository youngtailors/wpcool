import { Resolver, Query, Args } from 'type-graphql'
import { Post } from '../../entities/Post'
import { PostByIDArgs } from './types'
import { getPostById } from '../../services/wp'
import { camelize } from '../../utils/camel'

@Resolver(Post)
export class PostResolver {
  @Query(() => Post, { nullable: true })
  async post(@Args() { ID, slug, site }: PostByIDArgs) {
    if (!ID && !slug) {
      throw new Error('Must provide ID or slug')
    }
    if (ID && slug) {
      throw new Error('Must provide only ID or slug')
    }
    if (isNaN(Number(site))) {
      site = site.replace(/(http|https):\/\//, '')
      if (site[site.length - 1] === '/') {
        site = site.slice(0, -1)
      }
    }
    try {
      const result = await getPostById(site, ID, slug)
      const post = result.data
      return camelize(post)
    } catch (error) {
      throw error
    }
  }
}
