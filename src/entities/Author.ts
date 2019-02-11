import { ObjectType, Int, Field } from 'type-graphql'

@ObjectType()
export class Author {
  @Field(() => Int, { nullable: false })
  ID: number

  @Field(() => String, { nullable: false })
  login: string

  @Field(() => String)
  email: string

  @Field(() => String)
  name: string

  @Field(() => String)
  firstName: string

  @Field(() => String)
  lastName: string

  @Field(() => String)
  niceName: string

  @Field(() => String)
  URL: string

  @Field(() => String)
  avatarURL: string

  @Field(() => String)
  profileURL: string

  @Field(() => Int, { nullable: false })
  siteID: number
}
