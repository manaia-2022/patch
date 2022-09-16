import nock from 'nock'

import { getRandomPet } from './pets.api.js'

describe('randomPet api working', () => {
  it('returns random pet data from api', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/pets/random')
      .reply(200, JSON.stringify('Bella'), {
        'Content-Type': 'application/json',
      })
    return getRandomPet().then((result) => {
      expect(result).toContain('Bella')
      expect(scope.isDone()).toBe(true)
    })
  })
})
