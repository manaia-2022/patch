import request from 'supertest'
import { vi } from 'vitest'

import * as db from '../db/functions/my-pets.db.js'
import createServer from '../server'

let server
beforeAll(async () => {
  server = await createServer()
})

vi.mock('../db/functions/my-pets.db.js')

describe('GET /api/v1/pets/my', () => {
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
      .get('/api/v1/pets/my')
      .then((res) => {
        const fakePetObjOne = res.body[0]
        const fakePetObjTwo = res.body[1]
        expect(res.body.length).toBe(2)
        expect(fakePetObjOne.id).toEqual(1)
        expect(fakePetObjOne.name).toEqual('Bella')
        expect(typeof fakePetObjOne.impressions).toEqual('number')
        expect(fakePetObjOne.bio).toContain('sweet dog')
        expect(fakePetObjTwo.age).not.toEqual(3)
        expect(typeof fakePetObjTwo.patchPoints).not.toEqual('string')
      })
  })

  it('sends status 500 when there is an error', () => {
    db.getMyPets.mockImplementation(() => {
      return Promise.reject('rejected')
    })
    return request(server)
      .get('/api/v1/pets/my')
      .then((res) => {
        expect(res.status).toEqual(500)
        expect(res.text).toEqual('Something went wrong')
      })
  })
})
