import nock from 'nock'

import * as actions from './pets.js'

beforeEach(() => {
  vi.clearAllMocks()
})

describe('testing fetchRandomPet thunk', () => {
  const dispatch = vi.fn()
  it('gets a random pet', () => {
    return actions
      .fetchRandomPet('Bella')(dispatch)
      .then(() => {
        expect(dispatch.mock.calls).toHaveLength(2)
      })
  })
})
