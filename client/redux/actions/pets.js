// actions/fruits.js
export const FETCH_PETS_REQUEST = 'FETCH_PETS_REQUEST'
export const FETCH_PETS_SUCCESS = 'FETCH_PETS_SUCCESS'
export const FETCH_PETS_FAILURE = 'FETCH_PETS_FAILURE'
import { getMyPets } from '../apiClient/my-pets.api'

//Simple actions
//where do we put the token parameter?
//currently token is not defined.

export const fetchPetsRequest = () => ({
  type: FETCH_PETS_REQUEST,
})

export const fetchPetsSuccess = (pets) => ({
  type: FETCH_PETS_SUCCESS,
  payload: pets,
})

export const fetchPetsFailure = (error) => ({
  type: FETCH_PETS_FAILURE,
  payload: error,
})

export const fetchPets = () => (dispatch) => {
  dispatch({ type: 'FETCH_FRUITS_REQUEST' })
  dispatch(fetchPetsRequest())
  getMyPets()
    .then((pets) => {
      dispatch(fetchPetsSuccess(pets))
    })
    .catch((error) => {
      dispatch(fetchPetsFailure(error))
    })
}
