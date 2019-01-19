import { Field, Int, ArgsType } from 'type-graphql'

@ArgsType()
export class Site {
  @Field(() => Int, { nullable: true })
  siteID: number
  @Field(() => String, { nullable: true })
  siteURL: string
}
