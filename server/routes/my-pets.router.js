import 'dotenv/config'

import { v2 as cloudinary } from 'cloudinary'
import express from 'express'

import { checkJwt } from '../auth0.js'
const router = express.Router()

const cloudName = 'dhgfouvnw'
const apiKey = '847294152393479'
const apiSecret = process.env.SECRET_KEY

import * as db from '../db/functions/my-pets.db.js'

router.get('/', (req, res) => {
  const ownerId = 'auth0|123456789'
  db.getMyPets(ownerId)
    .then((pets) => {
      res.json(pets)
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).send('Something went wrong')
    })
})

router.post('/', checkJwt, (req, res) => {
  const ownerId = req.auth?.sub
  const { name, animal, age, bio, imageUrl } = req.body
  console.log({ name, animal, age, bio, ownerId })
  db.insertPet({ name, animal, age, bio, ownerId })
    .then((result) => {
      const newId = result[0]
      const newImage = {
        petId: newId,
        imageUrl,
      }
      return db.insertImage(newImage)
    })
    .then(() => {
      res.sendStatus(201)
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/image', checkJwt, (req, res) => {
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
