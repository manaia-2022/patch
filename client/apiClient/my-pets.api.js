import request from 'superagent'

const rootUrl = '/api/v1/my-pets'

export function getMyPets() {
  return request.get(rootUrl).then((res) => {
    return res.body.pets
  })
}
