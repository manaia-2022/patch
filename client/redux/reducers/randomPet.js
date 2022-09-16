import {
  GET_RANDOM_PET_FAILURE,
  GET_RANDOM_PET_REQUEST,
  GET_RANDOM_PET_SUCCESS,
} from '../actions/random-pet'

const initialState = {
  data: null,
  loading: true,
  error: null,
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_RANDOM_PET_REQUEST:
      return { ...state, loading: true }
    case GET_RANDOM_PET_SUCCESS:
      return { ...state, data: payload.pet, loading: false, error: null }
    case GET_RANDOM_PET_FAILURE:
      return { ...state, loading: false, error: payload.errMessage }
    default:
      return state
  }
}

export default reducer
