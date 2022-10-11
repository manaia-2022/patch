import express from 'express'

import * as db from '../db/functions/voting.db.js'

const router = express.Router()
// /api/v1/pets/votes/:id
router.patch('/scratch/:id', (req, res) => {
  db.addScratch(req.params.id)
    .then((result) => {
      res.json(result)
    })
    .catch(() => {
      res.status(500).send('Server Error')
    })
})

router.patch('/patch/:id', (req, res) => {
  db.addPatch(req.params.id)
    .then((result) => {
      res.json(result)
    })
    .catch(() => {
      res.status(500).send('Server Error')
    })
})

router.patch('/impression/:id', (req, res) => {
  db.addPatch(req.params.id)
    .then((result) => {
      res.json(result)
    })
    .catch(() => {
      res.status(500).send('Server Error')
    })
})

export default router
