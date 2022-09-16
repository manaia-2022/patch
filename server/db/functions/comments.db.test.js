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
  it('add a new comment to the pet', () => {
    const testComment = { petId: 2, authorId: 'Sarah', content: 'Testing' }
    return addComment(testComment, testCon).then((data) => {
      expect(data.petId).toBe(2)
      expect(data.authorId).toBe('Sarah')
      expect(data.content).toBe('Testing')
      expect(data.createdAt).toBeUndefined()
      expect(data.updatedAt).toBeUndefined()
    })
  })
})
