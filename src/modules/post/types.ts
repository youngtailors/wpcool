import { ArgsType, Field, Int } from 'type-graphql'
import { Site } from '../../types/Common'

@ArgsType()
export class PostByIDArgs extends Site {
  @Field(() => Int)
  ID: number
}
