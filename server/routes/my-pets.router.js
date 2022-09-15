import { v2 as cloudinary } from 'cloudinary'
import * as dotenv from 'dotenv'
import express from 'express'
dotenv.config()
const router = express.Router()

const cloudName = 'dhgfouvnw'
const apiKey = '847294152393479'
const apiSecret = process.env.SECRET_KEY

import { insertImage, insertPet } from '../db/functions/insertPet.js'

router.post('/', (req, res) => {
  const { name, animal, age, bio, imageUrl } = req.body

  insertPet({ name, animal, age, bio })
    .then((result) => {
      const newId = result[0]
      const newImage = {
        petId: newId,
        imageUrl,
      }
      insertImage(newImage).then(() => {
        return res.status(201)
      })
      res.sendStatus(201)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

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
