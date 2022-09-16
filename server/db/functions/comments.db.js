import connection from '../connection.js'

export function addComment(content, db = connection) {
  return db('petComments')
    .insert(content)
    .then(([id]) => {
      return { id, ...content }
    })
}
