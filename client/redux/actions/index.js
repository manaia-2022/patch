import { addPet } from '../../apiClient/addPet'

export const ADD_PET = 'ADD_PET'

export function createPet({ name, age, animal, bio }) {
  return {
    type: ADD_PET,
    payload: {
      name,
      age,
      animal,
      bio,
    },
  }
}

export function addNewPet(pet) {
  return (dispatch) => {
    console.log('Action:', pet)
    return addPet(pet).then((res) => {
      console.log('After action: ', res)
      dispatch(createPet(res))
    })
  }
}
