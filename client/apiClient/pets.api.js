import request from 'superagent'
const serverURL = '/api/v1/pets/random'

export function getRandomPet() {
  return request.get(serverURL).then((response) => {
    return response.body
  })
}
