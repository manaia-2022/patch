import knex from 'knex'

import config from '../knexfile.js'
const testDb = knex(config.test)

import { insertImage, insertPet } from './insertPet.js'

beforeAll(async () => {
  await testDb.migrate.latest()
})

beforeEach(async () => {
  await testDb.seed.run()
})

afterAll(async () => {
  await testDb.destroy()
})

describe('insertPet', () => {
  const pet = { name: 'Ace' }
  it('inserts a pet into the db', () => {
    return insertPet(pet, testDb).then((res) => {
      expect(res[0]).toBe(6)
      return testDb('pets')
        .select()
        .where({ id: 6 })
        .then((res) => {
          expect(res[0].name).toBe('Ace')
        })
    })
  })
})

describe('insertImage', () => {
  const image = {
    petId: null,
    imageUrl: 'res.cloudinary/example/image/dog.jpg',
  }
  it('inserts an image into the db', () => {
    return insertImage(image, testDb).then((res) => {
      expect(res[0]).toBe(6)
      return testDb('petImages')
        .select()
        .where({ petId: null })
        .then((res) => {
          expect(res[0].url).toContain('dog.jpg')
        })
    })
  })
})
