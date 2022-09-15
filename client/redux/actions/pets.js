import { getRandomPet } from '../../apiClient/pets.api'

export const GET_RANDOM_PET_REQUEST = 'GET_RANDOM_PET_REQUEST'
export const GET_RANDOM_PET_SUCCESS = 'GET_RANDOM_PET_SUCCESS'
export const GET_RANDOM_PET_FAILURE = 'GET_RANDOM_PET_FAILURE'

export function fetchRandomPetRequest() {
  return {
    type: GET_RANDOM_PET_REQUEST,
  }
}

export function fetchRandomPetSuccess(pet) {
  return {
    type: GET_RANDOM_PET_SUCCESS,
    payload: { pet },
  }
}

export function fetchRandomPetFailure(errMessage) {
  return {
    type: GET_RANDOM_PET_FAILURE,
    payload: { errMessage },
  }
}

export function fetchRandomPet() {
  return (dispatch) => {
    dispatch(fetchRandomPetRequest())
    return getRandomPet()
      .then((pet) => {
        dispatch(fetchRandomPetSuccess(pet))
      })
      .catch((err) => {
        dispatch(fetchRandomPetFailure(err.message))
      })
  }
}
