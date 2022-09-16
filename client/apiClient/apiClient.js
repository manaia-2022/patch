import request from 'superagent'

const rootUrl = '/api/v1/pets'

export function scratchPet(id) {
  return request
    .patch(rootUrl + `/votes/${id}`)
    .send({ id })
    .then((res) => res.body)
}
