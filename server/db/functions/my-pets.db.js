import connection from '../connection.js'

export function getMyPets(ownerId, db = connection) {
  return db('pets').select().where({ ownerId })
}

// export default { getMyPets }
