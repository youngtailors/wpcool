import { ObjectType, Field, Int } from 'type-graphql'
import {
  Author,
  Discussion,
  PostThumbnail,
  Capabilities,
  Terms,
  Tags,
  Meta,
} from '../entities'
import * as JSON from 'graphql-type-json'

@ObjectType()
export class Post {
  @Field(() => Int)
  ID: number

  @Field(() => Int)
  siteID: number

  @Field(() => Author)
  author: Author

  @Field(() => String)
  date: string

  @Field(() => String)
  modified: string

  @Field(() => String)
  title: string

  @Field(() => String)
  URL: string

  @Field(() => String)
  shortURL: string

  @Field(() => String)
  content: string

  @Field(() => String)
  excerpt: string

  @Field(() => String)
  slug: string

  @Field(() => String)
  guid: string

  @Field(() => String)
  status: string

  @Field(() => Boolean)
  sticky: boolean

  @Field(() => String)
  password: string

  @Field(() => Boolean)
  parent: boolean

  @Field(() => String)
  type: string

  @Field(() => Discussion)
  discussion: Discussion

  @Field(() => Boolean)
  likesEnabled: boolean

  @Field(() => Boolean)
  sharingEnabled: boolean

  @Field(() => Int)
  likeCount: number

  @Field(() => Boolean)
  iLike: boolean

  @Field(() => Boolean)
  isReblogged: boolean

  @Field(() => Boolean)
  isFollowing: boolean

  @Field(() => String)
  globalID: string

  @Field(() => String)
  featuredImage: string

  @Field(() => PostThumbnail, { nullable: true })
  postThumbnail: PostThumbnail

  @Field(() => String)
  format: string

  @Field(() => Boolean)
  geo: boolean

  @Field(() => Int)
  menuOrder: number

  @Field(() => String)
  pageTemplate: string

  @Field(() => JSON)
  publicizeURLs: any

  @Field(() => Terms)
  terms: Terms

  @Field(() => Tags)
  tags: Tags

  @Field(() => JSON)
  categories: any

  @Field(() => JSON)
  attachments: any

  @Field(() => Int)
  attachmentCount: number

  @Field(() => JSON)
  metadata: any

  @Field(() => Meta)
  meta: Meta

  @Field(() => Capabilities)
  capabilities: Capabilities

  @Field(() => JSON)
  otherURLs: any
}
