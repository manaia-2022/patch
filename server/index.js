import server from './server.js'

const port = process.env.PORT || 3001

server.listen(port, () => {
  console.log(`API Server Started`)
})
