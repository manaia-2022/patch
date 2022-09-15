import { v2 as cloudinary } from 'cloudinary'
import express from 'express'
const router = express.Router()

import { insertPet } from '../db/functions/insertPet.js'

router.get('/', (req, res) => {
  console.log(req)
  res.json('Hello')
})

router.post('/', (req, res) => {
  const { name, animal, age, bio, imageUrl } = req.body

  insertPet({ name, animal, age, bio })
    .then((result) => {
      const newId = result[0]
      const newImage = {
        petId: newId,
        imageUrl,
      }
      // add to images table
      console.log('After db func: ', result)
      res.sendStatus(201)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

const apiSecret = 'FVB10AO8DvJgKpXwiWA60cd7iHo'
const cloudName = 'rohan-aihe'
const apiKey = '516514146324499'
router.post('/image', (req, res) => {
  const timestamp = Math.round(new Date().getTime() / 1000)

  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp,
    },
    apiSecret
  )

  res.json({
    signature,
    timestamp,
    cloudName,
    apiKey,
  })
})

export default router
