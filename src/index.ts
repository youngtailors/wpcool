import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import * as Express from 'express'
import { buildSchemaSync } from 'type-graphql'
import * as Next from 'next'
import { IWPCoolContext } from './types/Context'

const dev = process.env.NODE_ENV !== 'production'
const next = Next({ dev })

const handle = next.getRequestHandler()

next.prepare().then(() => {
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

  app.get('*', (req, res) => handle(req, res))

  app.listen({ port }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`,
    ),
  )
})
