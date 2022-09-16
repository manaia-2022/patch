import connection from '../connection.js'

export function addScratch(id, db = connection) {
  return db('pets').where('id', id).increment('scratchPoints', 1)
}
