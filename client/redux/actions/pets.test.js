import { getRandomPet } from '../../apiClient/pets.api.js'
import * as actions from './pets.js'

vi.mock('../../apiClient/pets.api.js')

beforeEach(() => {
  vi.clearAllMocks()
})

describe('testing fetchRandomPet thunk', () => {
  const dispatch = vi.fn()
  it('gets a random pet', () => {
    getRandomPet.mockReturnValue(Promise.resolve({ name: 'Bella', age: 2 }))
    return actions
      .fetchRandomPet()(dispatch)
      .then(() => {
        expect(dispatch.mock.calls).toHaveLength(2)
        expect(dispatch.mock.calls[0][0].type).toBe('GET_RANDOM_PET_REQUEST')
        expect(dispatch.mock.calls[1][0].type).toBe('GET_RANDOM_PET_SUCCESS')
      })
  })
  it('show errors if dispatch fetchRandomPetRequest failed', () => {
    getRandomPet.mockImplementation(() => Promise.reject(new Error('sad')))
    return actions
      .fetchRandomPet()(dispatch)
      .then(() => {
        expect(dispatch.mock.calls[1][0].type).toBe('GET_RANDOM_PET_FAILURE')
        expect(dispatch.mock.calls[1][0].payload.errMessage).toBe('sad')
      })
  })
})
