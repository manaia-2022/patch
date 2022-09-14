import connection from '../connection.js'

// const config = require('./knexfile').development
// // eslint-disable-next-line no-unused-vars
// const connection = require('knex')(config)

//Math.random function 1-lengthofdb
//where id = math.random result
// how many pets we have

// client ----> server
// II

// http://localhost:3000/api/v1/pets/random

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
  //where(knex.raw('id = ?', [id]))
  // SELECT * FROM pets ORDER BY RANDOM() LIMIT 1;
}

// .join().select('pets.*', 'petImages.url as imageUrl')
// function nameAndTraits(db = connection) {
//   return db('wombles')
//     .join('traits', 'wombles.trait_id', 'traits.id')
//     .select('name', 'description')
// }

// RAW SQLITE
// https://stackoverflow.com/questions/2279706/select-random-row-from-a-sqlite-table

// export default thing
// export stuff
// import thing, { stuff } from './'

// import React, { useState, useEffect } from 'react'

// // named export
// // un-named/default

// import blah from './'

//export default getRandomPets

// const results = await knex.select('*').from('users').where(knex.raw('id = ?', [id]));
// const users = results.map(user => em.map(User, user));

// // or use EntityRepository.map()
// const repo = em.getRepository(User);
// const users = results.map(user => repo.map(user));
