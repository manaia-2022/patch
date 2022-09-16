import connection from '../connection.js'

export function addScratch(id, db = connection) {
  return db('pets')
    .where('id', id)
    .increment('scratchPoints', 1)
    .increment('impressions', 1)
}

export function addPatch(id, db = connection) {
  return db('pets')
    .where('id', id)
    .increment('patchPoints', 1)
    .increment('impressions', 1)
}

export function addImpression(id, db = connection) {
  return db('pets').where('id', id).increment('impressions', 1)
}
