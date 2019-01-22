import { ObjectType, Field, Int } from 'type-graphql'

@ObjectType()
export class Introduction {
  @Field(() => Int)
  ID: number

  @Field(() => String)
  name: string

  @Field(() => String)
  slug: string

  @Field(() => String)
  description: string

  @Field(() => Int)
  postCount: number
}
