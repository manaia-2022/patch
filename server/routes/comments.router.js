import express from 'express'

import { checkJwt } from '../auth0.js'
const router = express.Router()
import * as db from '../db/functions/comments.db.js'

router.post('/', checkJwt, (req, res) => {
  const authorId = req.user?.sub

  if (!authorId) {
    res.status(401).send('Unauthorized')
    return
  }
  const newCommentData = {
    ...req.body,
    authorId,
  }
  db.addComment(newCommentData)
    .then(() => {
      res.sendStatus(201)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Error' })
    })
})

export default router
