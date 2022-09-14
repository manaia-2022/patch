import connection from '../connection.js'

export function getRandomPets(db = connection) {
  // return db('pets').select('*').fromRaw()
  return db('pets')
    .orderByRaw('RANDOM()')
    .first()
    .join('petImages', 'pets.id', 'petImages.petId')
    .select(
      'pets.id as id',
      'name',
      'age',
      'animal',
      'bio',
      'petImages.url as imageUrl'
    )
}
