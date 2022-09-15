import request from 'supertest'
import { vi } from 'vitest'

import * as db from '../routes/my-pets.router'
import createServer from '../server'

let server
beforeAll(async () => {
  server = await createServer()
})

vi.mock('../db/functions/getMyPets.db.js')

describe('GET /api/v1/my-pets', () => {
  it.todo('returns an array of pet objects')
})
