import { Field, ArgsType } from 'type-graphql'

@ArgsType()
export class Site {
  @Field(() => String)
  site: string
}
