import request from 'superagent'

const rootUrl = '/api/v1/pets/my'

export function getMyPets(token) {
  return request
    .get(rootUrl)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => {
      return res.body
    })
}
