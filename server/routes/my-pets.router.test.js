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
  it('returns an array of pet objects', () => {
    db.getMyPets.mockReturnValue(
      Promise.resolve([
        {
          id: 1,
          ownerId: 'auth0|123456789',
          name: 'Bella',
          age: 6,
          animal: 'dog',
          bio: 'Bella is a sweet dog',
          patchPoints: 11987,
          scratchPoints: 7632,
          impressions: 21983,
          createdAt: '2021-01-01T00:00:00.000Z',
          updatedAt: '2021-01-01T00:00:00.000Z',
        },
        {
          id: 2,
          ownerId: 'auth0|123456789',
          name: 'Mable',
          age: 5,
          animal: 'cat',
          bio: 'Mabel is a sweet cat',
          patchPoints: 11987,
          scratchPoints: 7632,
          impressions: 21983,
          createdAt: '2021-01-01T00:00:00.000Z',
          updatedAt: '2021-01-01T00:00:00.000Z',
        },
      ])
    )
    return request(server)
      .get('/api/v1/my-pets')
      .then((res) => {
        console.log(res.body)
        expect(res.body.name).toContain('roger')
      })
  })
})
