import express from 'express'

import * as db from '../db/functions/randomPets.db.js'

const router = express.Router()

router.get('/', (req, res) => {
  db.getRandomPets() //need to write this in db.js
    .then((randomPet) => {
      res.json(randomPet)
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).send('Server Error')
    })

  // res.sendStatus(200)
  // console.log('hello')
})

export default router
