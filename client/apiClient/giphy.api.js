import request from 'superagent'

export function getGiph(url) {
  return request
    .get('/api/v1/giphy')
    .query({ url })
    .then((res) => {
      return res.body
    })
}
