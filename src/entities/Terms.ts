import { ObjectType, Field } from 'type-graphql'
import * as JSON from 'graphql-type-json'
import { PostTag } from './PostTag'

@ObjectType()
export class Terms {
  @Field(() => PostTag)
  postTag: PostTag

  @Field(() => JSON)
  category: any
}
