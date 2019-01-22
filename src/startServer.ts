import * as path from 'path'
import { ApolloServer } from 'apollo-server-express'
import * as Express from 'express'
import { buildSchema } from 'type-graphql'
import { IWPCoolContext } from './types/Context'

export const startServer = async () => {
  const app = Express()

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [path.join(__dirname, '/modules/**/resolver.*')],
    }),
    context: ({ req }: any): IWPCoolContext => ({
      req,
    }),
  })

  server.applyMiddleware({ app })

  const port = process.env.PORT || 4000

  app.listen({ port }, () =>
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    ),
  )
}
