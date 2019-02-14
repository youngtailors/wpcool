import { ObjectType, Field, Int } from 'type-graphql'

@ObjectType()
export class Discussion {
  @Field(() => Boolean)
  commentsOpen: boolean

  @Field(() => String)
  commentStatus: string

  @Field(() => Boolean)
  pingsOpen: boolean

  @Field(() => String)
  pingStatus: string

  @Field(() => Int)
  commentCount: number
}
