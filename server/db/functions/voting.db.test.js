import knex from 'knex'
import { beforeAll, describe } from 'vitest'

import config from '../knexfile.js'
const testDb = knex(config.test)

import { addPatch, addScratch } from './voting.db.js'

beforeAll(async () => {
  await testDb.migrate.latest()
})

beforeEach(async () => {
  await testDb.seed.run()
})

afterAll(async () => {
  await testDb.destroy()
})

describe('addScratch', () => {
  it('will add a scratch impression', () => {
    return addScratch(1, testDb)
      .then(() => {
        return testDb('pets').select('scratchPoints').where('id', 1).first()
      })
      .then((points) => expect(points.scratchPoints).toBe(7633))
  })
})

describe('addPatch', () => {
  it('will add a patch impression', () => {
    return addPatch(1, testDb)
      .then(() => {
        return testDb('pets').select('patchPoints').where('id', 1).first()
      })
      .then((points) => expect(points.patchPoints).toBe(11988))
  })
})
