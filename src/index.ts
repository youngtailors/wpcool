import 'reflect-metadata'
import { startServer, app } from './startServer'

startServer().catch(error => {
  console.error(error)
})

module.exports = app
