import connection from '../connection.js'

export function insertPet(pet, db = connection) {
  return db('pets').insert(pet)
}

export function insertImage({ petId, imageUrl }, db = connection) {
  return db('petImages').insert({ petId: petId, url: imageUrl })
}
