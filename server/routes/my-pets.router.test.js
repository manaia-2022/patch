import request from 'supertest'
import { vi } from 'vitest'

import { checkJwt } from '../auth0'
import * as db from '../db/functions/my-pets.db.js'
import createServer from '../server'

beforeAll(() => {
  const date = new Date(2022, 9, 16)
  vi.useFakeTimers()
  vi.setSystemTime(date)
})

afterAll(() => {
  vi.useRealTimers()
})

vi.mock('cloudinary/utils/api_sign_request')
vi.mock('../db/functions/my-pets.db.js')
vi.spyOn(console, 'log').mockImplementation(() => {
  return
})
vi.mock('../auth0')
checkJwt.mockImplementation((req, res, next) => {
  // TODO: fix me
  // req.auth.sub = 'auth0|123'
  next()
})
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
    db.insertPet.mockReturnValue(Promise.resolve(fakePet))
    db.insertImage.mockImplementation(() => {
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
    db.insertPet.mockReturnValue(Promise.resolve(fakePet))
    db.insertImage.mockReturnValue(Promise.resolve(fakeImage))
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
        expect(db.insertPet).toHaveBeenCalledWith({
          name: 'Ace',
          animal: 'T-Rex',
          age: 12,
          bio: `It's made up`,
        })
      })
  })
})

describe('POST /api/v1/pets/my/image', () => {
  it('Get response obj from API route', async () => {
    process.env.SECRET_KEY = 'fakeSecret'
    return await request(server)
      .post('/api/v1/pets/my/image')
      .then((response) => {
        expect(response.body.signature).toBe('fakeSignature')
        expect(response.status).toEqual(200)
      })
  })
})
