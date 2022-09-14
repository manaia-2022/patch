import { ADD_PET } from '../actions/index'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_PET:
      return [...state, payload]
    default:
      return state
  }
}

export default reducer
