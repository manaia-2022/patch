import connection from '../connection.js'

function getMyPets(db = connection) {
  return db('pets').select()
}

export default { getMyPets }
