import { Resolver, Query, Args } from 'type-graphql'
import axios from 'axios'
import { Post } from '../../entities/Post'
import { PostByIDArgs } from './types'
import { camelizeKeys } from 'humps'

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
      const post = camelizeKeys(result.data)
      return post
    } catch (error) {
      throw error
    }
  }

  @Query(() => [Post], { nullable: true })
  async posts(@Args()
  {
    siteID,
    siteURL,
    number,
    order,
    orderBy,
    category,
    author,
    search,
  }: PostByIDArgs) {
    if (!siteID && !siteURL) {
      throw new Error('Must provide siteID or siteURL')
    }
    if (siteID && siteURL) {
      throw new Error('Must provide only siteID or siteURL')
    }
    const site = siteID || siteURL.replace(/(http|https):\/\//, '')
    // const args = {number, order, orderBy, category, author, search}
    // let params = ''
    // Object.keys(args).forEach(key => {
    //   if (args[key]) {
    //     params += '?' + decamelizeKeys(key) + '=' + args[key]
    //   }
    // })
    try {
      const result = await axios.get(
        `https://public-api.wordpress.com/rest/v1.1/sites/${site}/posts`,
        {
          params: {
            number,
            order,
            orderBy,
            category,
            author,
            search,
          },
        },
      )
      const posts = camelizeKeys(result.data.posts)
      return posts
    } catch (error) {
      throw error
    }
  }
}
