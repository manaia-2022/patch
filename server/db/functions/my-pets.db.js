import connection from '../connection.js'

export function getMyPets(ownerId, db = connection) {
  return db('pets')
    .join('petImages', 'petImages.petId', 'pets.id')
    .select('pets.*', 'petImages.url as imageUrl')
    .where({ ownerId })
}

export function insertPet(pet, db = connection) {
  return db('pets').insert(pet)
}

export function insertImage({ petId, imageUrl }, db = connection) {
  return db('petImages').insert({ petId: petId, url: imageUrl })
}
