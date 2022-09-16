import request from 'superagent'

export function addComment(form) {
  return request
    .post('/api/v1/comments')
    .send(form)
    .then((res) => {
      if (res.status === 201) {
        return 'Thanks for your comment!'
      } else {
        throw new Error('wow not saved')
      }
    })
}
