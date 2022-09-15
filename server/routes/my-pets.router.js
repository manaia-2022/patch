import express from 'express'
const router = express.Router()

import * as db from '../db/functions/my-pets.db.js'

router.get('/', (req, res) => {
  const ownerId = 'auth0|123456789'
  db.getMyPets(ownerId)
    .then((pets) => {
      // console.log('router: pets', pets)
      res.json(pets)
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).send('Something went wrong')
    })
})

export default router
