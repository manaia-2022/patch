import knex from 'knex'
import { beforeAll, describe } from 'vitest'

import config from '../../knexfile.js'
const testDb = knex(config.test)

import { getRandomPets } from '../randomPets.db.js'

beforeAll(async () => {
  await testDb.migrate.latest()
})

beforeEach(async () => {
  await testDb.seed.run()
})

afterAll(async () => {
  await testDb.destroy()
})

describe('getRandomPets', () => {
  it('returns a random pet from the database', () => {
    return getRandomPets(testDb).then((data) => {
      expect(typeof data.id).toBe('number')
      expect(typeof data.name).toBe('string')
      expect(typeof data.animal).toBe('string')
      expect(typeof data.age).toBe('string')
      expect(typeof data.imageUrl).toBe('string')
      expect(data.createdAt).toBeUndefined()
      expect(data.updatedAt).toBeUndefined()
    })
  })
})
