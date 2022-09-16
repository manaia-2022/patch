import nock from 'nock'

import { addPet, getImageUrl } from './addPet.js'

describe('addPet', () => {
  it('returns data from api', () => {
    const scope = nock('http://localhost')
      .post('/api/v1/pets/my')
      .reply(200, { name: 'Ace' })

    return addPet().then((res) => {
      expect(scope.isDone()).toBe(true)
      expect(res.name).toBe('Ace')
    })
  })
})
