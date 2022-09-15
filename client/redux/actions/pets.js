import getRandomPet from 'pets.api.js'
import request from 'superagent'

export const GET_RANDOM_PET = 'GET_RANDOM_PET'
export const GET_RANDOM_PET_SUCCESS = 'GET_RANDOM_PET_SUCCESS'
export const GET_RANDOM_PET_FAILURE = 'GET_RANDOM_PET_FAILURE'

export function fetchRandomPetRequest() {
  return { type: GET_RANDOM_PET }
}

export function fetchRandomPetSuccess() {
  return {
    type: GET_RANDOM_PET_SUCCESS,
    payload: true,
  }
}

export function fetchRandomPetFailure() {
  return {
    type: GET_RANDOM_PET_FAILURE,
    payload: false,
  }
}

export function fetchRandomPet() {
  return (dispatch) => {
    return getRandomPet().then((result) => {
      dispatch(fetchRandomPetRequest(result))
    })
  }
}
