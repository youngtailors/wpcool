import { ArgsType, Field, Int } from 'type-graphql'
import { Site } from '../../types/Common'

@ArgsType()
export class PostByIDArgs extends Site {
  @Field(() => Int, { nullable: true })
  ID: number
  @Field(() => String, { nullable: true })
  slug: string
}
