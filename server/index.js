import createServer from './server.js'

const isDev =
  process.env.NODE_ENV === undefined || process.env.NODE_ENV === 'development'
const port = process.env.PORT || 3000
const hmrPort = 3001

createServer(isDev, hmrPort).then((server) => {
  server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
  })
})
