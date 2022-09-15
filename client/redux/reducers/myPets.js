import {
  FETCH_PETS_FAILURE,
  FETCH_PETS_REQUEST,
  FETCH_PETS_SUCCESS,
} from '../actions'

const initialState = {
  data: null,
  loading: true,
  error: null,
}

// whenever I make a new request
// {
//   data: ...whatever it was before,
//   loading: true,
//   error: null
// }

// whenever a request is successful
// {
//   data: whatever data I got back from payload,
//   loading: false,
//   error: null
// }

// whenever a request fails
// {
//   data: ...whatever it was before,
//   loading: false,
//   error: 'some error message'
// }

const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case FETCH_PETS_REQUEST:
      return { ...state, loading: true, error: null } // nothing changes from initialState. What if data already there?
    case FETCH_PETS_SUCCESS:
      // payload === pets
      return { data: payload.pets, loading: false, error: null } // data will be returned (e.g. data: pets or pets.data), loading = false, error = null
    case FETCH_PETS_FAILURE:
      return { ...state, loading: false, error: payload.error } // data will be null, loading = false, error = true
  }
}

export default reducer
