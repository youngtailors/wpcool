import { ObjectType, Field, Int } from 'type-graphql'
import { Author } from './Author'

@ObjectType()
export class Post {
  @Field(() => Int)
  ID: number

  @Field(() => Author)
  author: Author

  @Field(() => String)
  title: string

  @Field(() => String)
  content: string
}
