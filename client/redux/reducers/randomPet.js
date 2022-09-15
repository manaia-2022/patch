import { GET_RANDOM_PET_SUCCESS } from '../actions/pets'

const initialState = {
  data: null,
  loading: true,
  error: null,
}

const reducer = (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case GET_RANDOM_PET_SUCCESS:
      return { ...state }
    default:
      return state
  }
}

export default reducer
