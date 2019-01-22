import { Resolver, Query, Args } from 'type-graphql'
import axios from 'axios'
import { Post } from '../../entities/Post'
import { PostByIDArgs } from './types'

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
    const url = `https://public-api.wordpress.com/rest/v1.1/sites/${site}/posts/${
      ID ? ID : 'slug:' + slug
    }`
    try {
      const result = await axios.get(url)
      const post = result.data
      return post
    } catch (error) {
      throw error
    }
  }
}
