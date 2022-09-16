import knex from 'knex'
import { afterAll, beforeAll, beforeEach, describe } from 'vitest'

import config from '../knexfile.js'
const testCon = knex(config.test)

import { addComment } from './comments.db.js'

beforeAll(async () => {
  await testCon.migrate.latest()
})

beforeEach(async () => {
  await testCon.seed.run()
})

afterAll(async () => {
  await testCon.destroy()
})

// DB schema for PetComments
// https://vitest.dev/config/
describe('addComment', () => {
  it.only('add a new comment to the pet', () => {
    const testComment = { petId: 2, userId: 'Sarah', content: 'Testing' }
    return addComment(testComment, testCon).then((data) => {
      expect(data.content.petId).toBe(2)
      expect(data.content.userId).toBe('Sarah')
      expect(data.content.content).toBe('Testing')
      expect(data.content.createdAt).toBeUndefined()
      expect(data.content.updatedAt).toBeUndefined()
    })
  })
})
