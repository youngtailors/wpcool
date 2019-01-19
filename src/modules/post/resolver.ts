import { Resolver, Query, Args } from 'type-graphql'
import axios from 'axios'
import { Post } from '../../entities/Post'
import { PostByIDArgs } from './types'

@Resolver(Post)
export class PostResolver {
  @Query(() => Post, { nullable: true })
  async post(@Args() { ID, siteID, siteURL }: PostByIDArgs) {
    if (!siteID && !siteURL) {
      throw new Error('Must provide siteID or siteURL')
    }
    if (siteID && siteURL) {
      throw new Error('Must provide only siteID or siteURL')
    }
    const site = siteID || siteURL.replace(/(http|https):\/\//, '')
    try {
      const result = await axios.get(
        `https://public-api.wordpress.com/rest/v1.1/sites/${site}/posts/${ID}`,
      )
      const post = result.data
      return post
    } catch (error) {
      throw error
    }
  }
}
