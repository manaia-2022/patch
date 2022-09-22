import nock from 'nock'
import request from 'supertest'
import { vi } from 'vitest'

import createServer from '../server'

let server
beforeAll(async () => {
  server = await createServer()
})

describe('GET /api/v1/giphy?url="queryString"', () => {
  it('returns a giph from external API', () => {
    const apiResponse = {
      data: [
        {
          embed_url: 'https://giphy.com/embed/code',
          title: 'fake title',
        },
      ],
    }

    const scope = nock('http://api.giphy.com')
      .get('/v1/gifs/search')
      .query(true)
      .reply(200, apiResponse)

    expect.assertions(2)

    return request(server)
      .get('/api/v1/giphy')
      .query({ url: '/mouse' })
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toEqual(apiResponse.data[0])
        scope.done()
      })
  })

  it('returns 500 with error message response', () => {
    const scope = nock('http://api.giphy.com')
      .get('/v1/gifs/search')
      .query(true)
      .replyWithError({ status: 500, message: 'Nope' })

    vi.spyOn(console, 'error')
    console.error.mockImplementation(() => {
      return null
    })

    expect.assertions(3)

    return request(server)
      .get('/api/v1/giphy')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(console.error).toHaveBeenCalledWith('Nope')
        expect(res.body.message).toBe('Giphy API Error')
        scope.done()
      })
  })
})
