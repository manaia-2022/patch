import request from 'superagent'
const rootUrl = '/api/v1/pets'

export function getRandomPet() {
  return request.get(`${rootUrl}/random`).then((response) => {
    return response.body
  })
}

export function getMyPets(token) {
  return request
    .get(`${rootUrl}/my`)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => {
      return res.body
    })
}
