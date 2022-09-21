import request from 'supertest'

import server from '../../server'

describe('GET /api/v1/hello-world', () => {
  it('works', () => {
    return request(server)
      .get('/api/hello-world')
      .then((response) => {
        expect(response.body).toEqual({ message: 'Hello World' })
      })
  })
})
