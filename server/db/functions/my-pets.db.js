import connection from '../connection.js'

export function getMyPets(ownerId, db = connection) {
  return db('pets')
    .join('petImages', 'petImages.petId', 'pets.id')
    .select('pets.*', 'petImages.url as imageUrl')
    .where({ ownerId })
}
