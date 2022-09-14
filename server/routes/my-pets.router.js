import express from 'express'
const router = express.Router()

import db from '../db/functions/my-pets.db.js'

router.get('/', (req, res) => {
  db.getMyPets()
    .then((results) => {
      console.log('router: results', results)
      res.json(results)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

export default router
