import connection from '../connection.js'
// wonder about the pet id and auth0id

// module.exports = {
//   addComment,
// }

export function addComment(content, db = connection) {
  return db('petComments')
    .insert(content)
    .then(([id]) => {
      return { id, ...content }
    })
}
