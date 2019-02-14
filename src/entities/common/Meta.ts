import { ObjectType, Field } from 'type-graphql'
import { Links } from '../common'

@ObjectType()
export class Meta {
  @Field(() => Links)
  links: Links
}
