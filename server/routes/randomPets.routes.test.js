import request from 'supertest'
import { vi } from 'vitest'

import * as db from '../db/functions/randomPets.db.js'
import createServer from '../server'

let server
beforeAll(async () => {
  server = await createServer()
})

vi.mock('../db/functions/randomPets.db.js')

describe('GET /api/v1/pets/random', () => {
  it('returns random pet', () => {
    db.getRandomPets.mockReturnValue(Promise.resolve({ name: 'roger' }))
    return request(server)
      .get('/api/v1/pets/random')
      .then((res) => {
        expect(res.body.name).toContain('roger')
      })
  })
})
