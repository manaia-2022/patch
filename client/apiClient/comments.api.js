import request from 'superagent'
const serverURL = '/api/v1/patch'

export function addComment(form) {
  return request
    .post(serverURL)
    .send(form)
    .then((res) => {
      if (res.status === 201) {
        return 'Thanks for your comment!'
      } else {
        throw new Error('wow not saved')
      }
    })
}
