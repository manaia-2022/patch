import 'dotenv'

import express from 'express'
import request from 'superagent'

const router = express.Router()

// GET /api/v1/giphy?url='queryString'
router.get('/', (req, res) => {
  const apiKey = process.env.GIPHY_API_KEY
  const url = req.query.url ?? 'mouse' // <-- nullish coallescing
  const arrLimit = 25

  const toAsciiSum = (string) => {
    return string.split('').reduce((sum, char) => {
      return sum + char.charCodeAt(0)
    }, 0)
  }

  const getHashIdxFromString = (string, max) => {
    const hash = toAsciiSum(string)
    return hash % max
  }
  const idx = getHashIdxFromString(url, arrLimit)

  return request
    .get(
      `http://api.giphy.com/v1/gifs/search?q=adorable+cats+and+dogs+real+life&api_key=${apiKey}&limit=${1}&offset=${idx}&rating=g&lang=en`
    )
    .then((response) => {
      const [giph] = response.body.data
      const { embed_url, title } = giph
      res.json({ embed_url, title })
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Giphy API Error' })
    })
})

export default router
