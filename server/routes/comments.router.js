import express from 'express'
const router = express.Router()
import * as db from '../db/functions/comments.db.js'

router.post('/', (req, res) => {
  const newCommentData = req.body
  const date = Date.now()
  db.addComment({ ...newCommentData, createdAt: date })
    .then(() => {
      res.sendStatus(201)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Error' })
    })
})

export default router
