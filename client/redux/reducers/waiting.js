import {
  GET_RANDOM_PET_FAILURE,
  GET_RANDOM_PET_REQUEST,
  GET_RANDOM_PET_SUCCESS,
} from '../actions/pets'

function waiting(state = false, action) {
  const { type } = action
  switch (type) {
    case GET_RANDOM_PET_REQUEST:
      return true
    case GET_RANDOM_PET_SUCCESS:
      return false
    case GET_RANDOM_PET_FAILURE:
      return false
    default:
      return state
  }
}

export default waiting
