import 'reflect-metadata'
import { startServer } from './startServer'

startServer().catch(error => {
  console.error(error)
})

export default startServer
