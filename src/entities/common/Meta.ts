import { ObjectType, Field } from 'type-graphql'
import { Links } from './links'

@ObjectType()
export class Meta {
  @Field(() => Links)
  links: Links
}
