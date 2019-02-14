import { ObjectType, Field, Int } from 'type-graphql'

@ObjectType()
export class PostThumbnail {
  @Field(() => Int)
  ID: number

  @Field(() => String)
  URL: string

  @Field(() => String)
  guid: string

  @Field(() => String)
  mimeType: string

  @Field(() => Int)
  width: number

  @Field(() => Int)
  height: number
}
