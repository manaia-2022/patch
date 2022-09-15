import connection from '../connection.js'

export function insertPet(pet, db = connection) {
  console.log('DB', pet)
  return db('pets').insert(pet)
  //.returning(pet)
  //returning('id')
}
