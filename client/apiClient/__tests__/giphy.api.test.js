import nock from 'nock'

import { getGiph } from '../giphy.api'

describe('getGiph', () => {
  it('returns a giph object based on a url', () => {
    const url = '/mouse'
    const giphy = {
      embed_url: 'https://giphy.com/embed/code',
      title: 'fake title',
    }

    nock('http://localhost')
      .get('/api/v1/giphy')
      .query({ url })
      .reply(200, giphy)

    expect.assertions(4)

    return getGiph(url).then((giphObj) => {
      expect(giphObj).toEqual(giphy)
      expect(Object.keys(giphObj)).toContain('embed_url')
      expect(Object.keys(giphObj)).toContain('title')
      expect(nock.isDone()).toBe(true)
    })
  })
})
