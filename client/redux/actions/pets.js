import getRandomPet from '../../apiClient/pets.api'

export const GET_RANDOM_PET_REQUEST = 'GET_RANDOM_PET_REQUEST'
export const GET_RANDOM_PET_SUCCESS = 'GET_RANDOM_PET_SUCCESS'
export const GET_RANDOM_PET_FAILURE = 'GET_RANDOM_PET_FAILURE'

export function fetchRandomPetRequest() {
  return {
    type: GET_RANDOM_PET_REQUEST,
  }
}

export function fetchRandomPetSuccess() {
  return {
    type: GET_RANDOM_PET_SUCCESS,
    payload: true,
  }
}

export function fetchRandomPetFailure(errorMessage) {
  return {
    type: GET_RANDOM_PET_FAILURE,
    payload: errorMessage,
  }
}

export function fetchRandomPet() {
  return (dispatch) => {
    return dispatch(fetchRandomPetRequest()) //Maybe change this with line 31 getRandomPet()
      .then(() => {
        getRandomPet()
      })
      .then((res) => {
        dispatch(fetchRandomPetSuccess(res.body))
      })
      .catch((err) => {
        dispatch(fetchRandomPetFailure(err.message))
      })
  }
}
