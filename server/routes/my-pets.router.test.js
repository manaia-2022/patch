import request from 'supertest'
import { vi } from 'vitest'

import { insertImage, insertPet } from '../db/functions/insertPet.js'
import createServer from '../server'

vi.mock('cloudinary', () => ({
  v2: {
    utils: {
      api_sign_request: () => 'fakeSignature',
    },
  },
}))

let server
beforeAll(async () => {
  server = await createServer()
})

beforeAll(() => {
  const date = new Date(2022, 9, 16)
  vi.useFakeTimers()
  vi.setSystemTime(date)
})

afterAll(() => {
  vi.useRealTimers()
})

vi.mock('cloudinary/utils/api_sign_request')

vi.mock('../db/functions/insertPet.js')
vi.mock(Math)
vi.spyOn(console, 'log').mockImplementation(() => {
  return
})

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
    insertImage.mockImplementation(() => {
      return Promise.reject(new Error('sadness'))
    })
    return await request(server)
      .post('/api/v1/pets/my')
      .send(fakePet)
      .then((response) => {
        expect(response.status).toEqual(500)
        expect(console.log).toHaveBeenCalledWith('sadness')
        expect(response.body.message).toContain('wrong')
      })
  })
  it('Get success status response from API route', async () => {
    insertPet.mockReturnValue(Promise.resolve(fakePet))
    insertImage.mockReturnValue(Promise.resolve(fakeImage))
    return await request(server)
      .post('/api/v1/pets/my')
      .then((response) => {
        expect(response.status).toEqual(201)
      })
  })
  it('Get pet and image from API route', async () => {
    return await request(server)
      .post('/api/v1/pets/my')
      .send(fakePet)
      .then((response) => {
        expect(response.status).toEqual(201)
        expect(insertPet).toHaveBeenCalledWith({
          name: 'Ace',
          animal: 'T-Rex',
          age: 12,
          bio: `It's made up`,
        })
      })
  })
})

describe('POST /api/v1/pets/my/image', () => {
  it.only('Get response obj from API route', async () => {
    process.env.SECRET_KEY = 'fakeSecret'
    return await request(server)
      .post('/api/v1/pets/my/image')
      .then((response) => {
        console.warn(response.body)
        expect(response.body.signature).toBe('fakeSignature')
        expect(response.status).toEqual(200)
      })
  })
})
