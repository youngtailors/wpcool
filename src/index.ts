import 'reflect-metadata'
import * as path from 'path'
import { ApolloServer } from 'apollo-server-express'
import * as Express from 'express'
import { buildSchema } from 'type-graphql'
import * as Next from 'next'
import { IWPCoolContext } from './types/Context'

const dev = process.env.NODE_ENV !== 'production'
const next = Next({ dev })

const handle = next.getRequestHandler()

next.prepare().then(async () => {
  const app = Express()
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [path.join(__dirname, '/modules/**/resolver.?s')],
    }),
    context: ({ req }: any): IWPCoolContext => ({
      req,
    }),
    introspection: true,
    playground: true,
  })

  server.applyMiddleware({ app })

  app.get('*', (req, res) => handle(req, res))

  const port = parseInt(process.env.PORT as string, 10) || 4000

  app.listen({ port }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`,
    ),
  )
})
