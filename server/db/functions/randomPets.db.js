import connection from '../connection.js'

// const config = require('./knexfile').development
// // eslint-disable-next-line no-unused-vars
// const connection = require('knex')(config)

//Math.random function 1-lengthofdb
//where id = math.random result

export default function getRandomPets(db = connection) {
  // return db('pets').select('*').fromRaw()
  return db('pets').select('*').orderByRaw('RANDOM()').first()
  //where(knex.raw('id = ?', [id]))
}

//export default getRandomPets

// const results = await knex.select('*').from('users').where(knex.raw('id = ?', [id]));
// const users = results.map(user => em.map(User, user));

// // or use EntityRepository.map()
// const repo = em.getRepository(User);
// const users = results.map(user => repo.map(user));
