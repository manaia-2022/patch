import { GET_RANDOM_PET_FAILURE } from '../actions/pets'

function errorMessage(state = '', action) {
  const { type, payload } = action
  switch (type) {
    case GET_RANDOM_PET_FAILURE:
      return payload

    default:
      return state
  }
}

export default errorMessage
