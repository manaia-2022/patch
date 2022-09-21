import 'dotenv'

import express from 'express'
import request from 'superagent'

const router = express.Router()

router.get('/', (req, res) => {
  const apiKey = process.env.GIPHY_API_KEY
  const url = req.query.url ?? 'bob'
  const arrLimit = 25

  const toAsciiSum = (string) => {
    return string.split('').reduce((sum, char) => {
      return sum + char.charCodeAt(0)
    }, 0)
  }

  const getHashIdxFromString = (string, max) => {
    const hash = toAsciiSum(string)
    return hash % max // 24 / 25 -> 24    25 / 25 === 1 -> 0   26 / 25 -> 1
  }
  const idx = getHashIdxFromString(url, arrLimit)

  return request
    .get(
      `http://api.giphy.com/v1/gifs/search?q=adorable+cats+and+dogs+real+life&api_key=${apiKey}&limit=${1}&offset=${idx}`
    )
    .then((response) => {
      const [giph] = response.body.data
      const { embed_url, title } = giph
      // console.log(giphArr)
      res.json({ embed_url, title })
      // return res.json({ embed_url, title })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Giphy API Error' })
    })
})

export default router
