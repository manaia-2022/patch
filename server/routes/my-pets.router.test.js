import request from 'supertest'
import { vi } from 'vitest'

import { insertImage, insertPet } from '../db/functions/insertPet.js'
import createServer from '../server'

let server
beforeAll(async () => {
  server = await createServer()
})

// afterEach(() => {
// })

vi.mock('../db/functions/insertPet.js')

describe('POST /api/v1/pets/my', () => {
  const fakePet = {
    name: 'Ace',
    animal: 'T-Rex',
    age: 12,
    bio: `It's made up`,
    imageUrl: null,
  }
  const fakeImage = {
    petId: 77,
    imageUrl: null,
  }
  it('Get failed status response from API route', async () => {
    insertPet.mockReturnValue(Promise.resolve(fakePet))
    return await request(server)
      .post('/api/v1/pets/my')
      .then((response) => {
        expect(response.status).toEqual(500)
        expect(response.body.message).toContain('wrong')
      })
  })
  it('Get success status response from API route', async () => {
    insertImage.mockReturnValue(Promise.resolve(fakeImage))
    return await request(server)
      .post('/api/v1/pets/my')
      .then((response) => {
        expect(response.status).toEqual(201)
      })
  })
  // it('Get pet and image from API route', async () => {
  //   return await request(server)
  //     .post('/api/v1/pets/my')
  //     .send(fakePet)
  //     .then((response) => {
  //     })
  // })
})

describe('POST /api/v1/pets/my/image', () => {
  it('Get response obj from API route', async () => {
    return await request(server)
      .post('/api/v1/pets/my/image')
      .then((response) => {
        expect(response.body.signature).not.toBeNull() //Signature returned is random
        expect(response.status).toEqual(200)
      })
  })
})
