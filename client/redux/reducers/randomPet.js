import { GET_RANDOM_PET_REQUEST } from '../actions/pets'

const initialState = {
  data: null,
  loading: true,
  error: null,
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_RANDOM_PET_REQUEST:
      return payload //is this correct?

    default:
      return state
  }
}

export default reducer
