import { Field, ArgsType, Int } from 'type-graphql'

@ArgsType()
export class Site {
  @Field(() => Int, { nullable: true })
  siteID: number
  @Field(() => String, { nullable: true })
  siteURL: string
  // types of matching posts
  @Field(() => Int, { nullable: true })
  number: number
  @Field(() => Int, { nullable: true })
  offset: number
  @Field(() => Int, { nullable: true })
  page: number
  @Field(() => String, { nullable: true })
  pageHandle: string
  @Field(() => String, { nullable: true })
  order: string
  @Field(() => String, { nullable: true })
  orderBy: string
  @Field(() => String, { nullable: true })
  tag: string
  @Field(() => String, { nullable: true })
  type: string
  @Field(() => String, { nullable: true })
  category: string
  @Field(() => Number, { nullable: true })
  parentId: number
  @Field(() => Int, { nullable: true })
  author: number
  @Field(() => String, { nullable: true })
  search: string
  // end types of matching posts
  @Field(() => String)
  site: string
}
