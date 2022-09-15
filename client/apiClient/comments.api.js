import request from 'superagent'
const serverURL = '/api/v1/patch'

export function addComment(form) {
  return request
    .post(serverURL)
    .send(form)
    .then((res) => {
      if (res.status === 200) {
        return res.body
      } else {
        throw new Error('wow not saved')
      }
    })
}
