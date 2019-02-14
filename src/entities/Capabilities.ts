import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class Capabilities {
  @Field(() => Boolean)
  publishPost: boolean

  @Field(() => Boolean)
  deletePost: boolean

  @Field(() => Boolean)
  editPost: boolean
}
