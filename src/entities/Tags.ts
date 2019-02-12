import { ObjectType, Field } from 'type-graphql'
import { Introduction } from '../entities/common'

@ObjectType()
export class Tags {
  @Field(() => Introduction, { nullable: true })
  introduction: Introduction
}
