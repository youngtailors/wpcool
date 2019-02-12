import { ObjectType, Field } from 'type-graphql'
import { Introduction } from './common'

@ObjectType()
export class PostTag {
  @Field(() => Introduction, { nullable: true })
  introduction: Introduction
}
