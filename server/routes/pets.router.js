const express = require('express')
const router = express.Router()
const checkJwt = require('../auth0')
const db = require('../db/functions/users')

router.get('/', checkJwt, (req, res) => {
  const auth0_id = req.user?.sub

  if (!auth0_id) {
    res.send(null)
  } else {
    db.getUser(auth0_id)
      .then((user) => {
        res.json(user ? user : null)
      })
      .catch((err) => res.status(500).send(err.message))
  }
})

module.exports = router
