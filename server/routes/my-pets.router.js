import express from 'express'
const router = express.Router()

import insertPet from '../db/functions/insertPet.js'

router.post('/', (req, res) => {
  const pet = req.body
  const pet2 = {
    name: 'A',
    age: 234,
    animal: 'T-Rex',
    bio: "It's made up",
  }
  console.log('Before we call our db func: ', req.body)
  insertPet(pet)
    .then((result) => {
      const newId = result[0]
      console.log('After we call our db func: ', result)
      res.json({ id: newId, ...result })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

export default router
