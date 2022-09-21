import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

import commentsRoute from './routes/comments.router.js'
import petsRoute from './routes/my-pets.router.js'
import randomPets from './routes/randomPets.router.js'
import voting from './routes/voting.router.js'

const isDev =
  process.env.NODE_ENV === undefined || process.env.NODE_ENV === 'development'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
if (!isDev) {
  server.use(express.static(path.join(__dirname, 'dist')))
}

// module.exports = server
server.get('/api/hello-world', (req, res) => {
  res.json({ message: 'Hello World' })
})

server.use('/api/v1/pets/my', petsRoute)
server.use('/api/v1/comments', commentsRoute)
server.use('/api/v1/pets/random', randomPets)
server.use('/api/v1/pets/votes', voting)

server.use('/api/*', (req, res) => {
  res.sendStatus(404)
})

server.use('*', (req, res) => {
  if (isDev) {
    res
      .status(404)
      .send('Not found: server is running in dev mode, use port 3000')
  }
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

export default server
