import { Resolver, Query, Args } from 'type-graphql'
import { Post } from '../../entities/Post'
import { PostByIDArgs } from './types'
import { getPostById } from '../../services/wp'

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
      const result = await getPostById(site, ID)
      return JSON.parse(result.data)
    } catch (error) {
      throw error
    }
  }
}
