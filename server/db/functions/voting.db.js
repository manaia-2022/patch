import connection from '../connection.js'

export function addScratch(id, db = connection) {
  return db('pets').where('id', id).increment('scratchPoints', 1)
}

export function addPatch(id, db = connection) {
  return db('pets').where('id', id).increment('patchPoints', 1)
}
