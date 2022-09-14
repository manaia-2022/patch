import connection from '../connection.js'

function insertPet(pet, db = connection) {
  return db('pets').insert(pet)
}

export default insertPet
