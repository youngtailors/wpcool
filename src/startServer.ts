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

  const port = parseInt(process.env.PORT as string, 10) || 4000

  app.listen({ port }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`,
    ),
  )
}
