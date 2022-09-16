import { v2 as cloudinary } from 'cloudinary'
import * as dotenv from 'dotenv'
import express from 'express'
dotenv.config()
const router = express.Router()

const cloudName = 'dhgfouvnw'
const apiKey = '847294152393479'
const apiSecret = process.env.SECRET_KEY

import { insertImage, insertPet } from '../db/functions/insertPet.js'

// TODO: make sure user is signed in before rendering AddPet.jsx // https://auth0.com/docs/libraries/auth0-react#protect-a-route
// TODO: getAccessTokenSilently() before making addPet request
// TODO: add checkJwt and add ownerId to db
router.post('/', (req, res) => {
  const ownerId = req.auth?.sub
  const { name, animal, age, bio, imageUrl } = req.body
  // ownerId
  insertPet({ name, animal, age, bio })
    .then((result) => {
      const newId = result[0]
      const newImage = {
        petId: newId,
        imageUrl,
      }
      return insertImage(newImage)
    })
    .then(() => {
      res.sendStatus(201)
    })
    .catch((err) => {
      console.log(err.message)
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
