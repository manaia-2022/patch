// const knex = require('knex')
import knex from 'knex'

import config from '../knexfile.js'
const testDb = knex(config.test)

import * as db from './my-pets.db.js'

beforeAll(async () => {
  await testDb.migrate.latest()
})

beforeEach(async () => {
  await testDb.seed.run()
})

afterAll(async () => {
  await testDb.destroy()
})

// ownerId auth0|123456789

describe('getMyPets', () => {
  it('returns an array of pet objects that belong to ownerId', () => {
    return db.getMyPets('auth0|123456789', testDb).then((pets) => {
      console.log(pets)
      expect(pets.length).toEqual(5)
      expect(pets.length).not.toEqual(3)
      expect(pets[0].name).toEqual('Bella')
      expect(pets[1].animal).toBe('cat')
      expect(typeof pets[0].impressions).toEqual('number')
    })
  })
})
