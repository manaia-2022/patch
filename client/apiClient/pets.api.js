import request from 'superagent'
const serverURL = '/api/v1/pets/random' //possibly check this

export function getRandomPet() {
  return request.get(serverURL).then((response) => {
    console.log(response.body)
    return response.body
  })
}
