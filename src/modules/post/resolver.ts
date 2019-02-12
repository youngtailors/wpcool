import { Resolver, Query, Args } from 'type-graphql'
import { Post } from '../../entities/Post'
import { PostByIDArgs } from './types'
import { getPostById } from '../../services/wp'

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
      return result.data
    } catch (error) {
      throw error
    }
  }
}
