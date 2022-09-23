import express from 'express'
import path from 'path'
import { createServer as createViteServer } from 'vite'

import commentsRoute from './routes/comments.router.js'
import giphy from './routes/giphy.router.js'
import petsRoute from './routes/my-pets.router.js'
import randomPets from './routes/randomPets.router.js'
import voting from './routes/voting.router.js'

export default async function createServer(isDev, hmrPort) {
  const server = express()

  let vite
  if (isDev) {
    vite = await createViteServer({
      root: process.cwd(),
      server: {
        middlewareMode: true,
        hmr: {
          port: hmrPort,
        },
      },
    })
  } else {
    server.use(express.static('dist'))
  }

  server.use(express.urlencoded({ extended: true }))
  server.use(express.json())
  server.get('/api/hello-world', (req, res) => {
    res.json({ message: 'Hello World' })
  })

  server.use('/api/v1/pets/my', petsRoute)
  server.use('/api/v1/comments', commentsRoute)
  server.use('/api/v1/pets/random', randomPets)
  server.use('/api/v1/pets/votes', voting)
  server.use('/api/v1/giphy', giphy)

  server.use('/api/*', (req, res) => {
    res.sendStatus(404)
  })

  if (isDev) {
    server.use(vite.middlewares)
  } else {
    server.use('*', (req, res) => {
      res.sendFile(path.resolve('dist/index.html'))
    })
  }

  return server
}

// module.exports = server
