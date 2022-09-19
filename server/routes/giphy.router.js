import 'dotenv'

import express from 'express'
import request from 'superagent'

const router = express.Router()

router.get('/', (req, res) => {
  const apiKey = process.env.GIPHY_API_KEY
  const url = req.query.url
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
      `http://api.giphy.com/v1/gifs/search?q=adorable+cats+and+dogs+real+life&api_key=${apiKey}&limit=${arrLimit}`
    )
    .then((response) => {
      const giphArr = response.body.data
      return res.json(giphArr[idx].embed_url)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Giphy API Error' })
    })
})

export default router
