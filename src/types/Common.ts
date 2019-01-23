import { Field, Int, ArgsType } from 'type-graphql'

@ArgsType()
export class Site {
  @Field(() => Int, { nullable: true })
  siteID: number
  @Field(() => String, { nullable: true })
  siteURL: string
  @Field(() => Int, { nullable: true })
  number: number
  @Field(() => String, { nullable: true })
  order: string
  @Field(() => String, { nullable: true })
  orderBy: string
  @Field(() => String, { nullable: true })
  category: string
  @Field(() => Int, { nullable: true })
  author: number
  @Field(() => String, { nullable: true })
  search: string
}
