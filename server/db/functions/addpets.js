import connection from '../connection'

export function addPet(pet, db = connection) {
  return db('pets').insert(pet)
}
