import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import * as Express from 'express'
import { buildSchemaSync } from 'type-graphql'
import { IWPCoolContext } from './types/Context'

const server = new ApolloServer({
  schema: buildSchemaSync({
    resolvers: [require('./modules/post/resolver')],
  }),
  context: ({ req }: any): IWPCoolContext => ({
    req,
  }),
})

const app = Express()

server.applyMiddleware({ app })

const port = parseInt(process.env.PORT as string, 10) || 4000

app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`,
  ),
)

export default app
