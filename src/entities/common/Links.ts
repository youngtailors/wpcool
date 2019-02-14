import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class Links {
  @Field(() => String)
  self: string

  @Field(() => String)
  help: string

  @Field(() => String)
  site: string

  @Field(() => String)
  replies: string

  @Field(() => String)
  likes: string
}
