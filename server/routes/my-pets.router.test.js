import request from 'supertest'
import { vi } from 'vitest'

import createServer from '../server'

let server
beforeAll(async () => {
  server = await createServer()
})

vi.mock('../functions/insertPet.js')

describe('POST /api/v1/pets/my', () => {
  it('Get correct status response', async () => {
    const data = {
      name: 'Ace',
      animal: 'T-Rex',
      age: 12,
      bio: `It's made up`,
      imageUrl: null,
    }
    //Need to create mock db function. Post to API then expect DB function to return a 201 status
    return await request(server)
      .post('/api/v1/pets/my')
      .send(data)
      .then((response) => {
        expect(response.status).toEqual('201')
      })
  })
})
