import express from 'express'

import * as db from '../db/functions/randomPets.db.js'

const router = express.Router()

router.get('/', (req, res) => {
  db.getRandomPets()
    .then((randomPet) => {
      res.json(randomPet)
    })
    .catch(() => {
      res.status(500).send('Server Error')
    })
})

export default router
