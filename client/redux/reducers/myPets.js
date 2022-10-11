import {
  FETCH_PETS_FAILURE,
  FETCH_PETS_REQUEST,
  FETCH_PETS_SUCCESS,
} from '../actions/my-pets'

const initialState = {
  data: null,
  loading: true,
  error: null,
}
export default function myPetsReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case FETCH_PETS_REQUEST:
      return { ...state, loading: true, error: null }
    case FETCH_PETS_SUCCESS:
      return { data: payload.pets, loading: false, error: null }
    case FETCH_PETS_FAILURE:
      return { ...state, loading: false, error: payload.error }
    default:
      return state
  }
}
