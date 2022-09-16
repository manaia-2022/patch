import express from 'express'
import path from 'path'
import { createServer as createViteServer } from 'vite'

import petsRoute from './routes/my-pets.router.js'
import randomPets from './routes/randomPets.routes.js'

// use a function to create the server for async/await support
export default async function createServer(isDev, hmrPort) {
  const server = express()

  let vite
  if (isDev) {
    // use the vite dev server in development mode
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
    // express.static (in preview/production) needs to be before user-defined routes
    server.use(express.static('dist'))
  }

  // user-defined routes and middleware
  server.use(express.urlencoded({ extended: true }))
  server.use(express.json())
  server.get('/api/hello-world', (req, res) => {
    res.json({ message: 'Hello World' })
  })

  server.use('/api/v1/pets/my', petsRoute)
  server.use('/api/v1/pets/random', randomPets)

  // use a 404 route to ensure you get good error messages when you miss api routes
  server.use('/api/*', (req, res) => {
    res.sendStatus(404)
  })

  // vite dev server middleware needs to be after user-defined routes
  if (isDev) {
    server.use(vite.middlewares)
  } else {
    // serve client files in production after user-defined routes
    server.use('*', (req, res) => {
      res.sendFile(path.resolve('dist/index.html'))
    })
  }

  return server
}

// module.exports = server
