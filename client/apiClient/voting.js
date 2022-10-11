import request from 'superagent'

const rootUrl = '/api/v1/pets'

export function scratchPet(id) {
  return request
    .patch(rootUrl + `/votes/scratch/${id}`)
    .send({ id })
    .then((res) => res.body)
}

export function patchPet(id) {
  return request
    .patch(rootUrl + `/votes/patch/${id}`)
    .send({ id })
    .then((res) => res.body)
}

export function addImpression(petId) {
  return request
    .patch(`${rootUrl}/votes/impression/${petId}`)
    .then((res) => res.body)
}
