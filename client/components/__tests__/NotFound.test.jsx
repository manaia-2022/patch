import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'

import { getGiph } from '../../apiClient/giphy.api'
import NotFound from '../Routes/NotFound'

vi.mock('../../apiClient/giphy.api')

describe('<NotFound />', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  const giphObj = {
    embed_url: 'https://giphy.com/embed/code',
    title: 'cute pic',
  }

  it('renders a 404 page with giph', async () => {
    getGiph.mockReturnValue(Promise.resolve(giphObj))

    render(<NotFound />, { wrapper: MemoryRouter })

    expect.assertions(3)

    await screen.findByTitle(/cute/i)
    const header = screen.getByRole('heading')
    const giphFrame = screen.getByTitle(/cute/i).outerHTML

    expect(header).toHaveTextContent('404')
    expect(giphFrame).toContain(giphObj.embed_url)
    expect(giphFrame).toContain(giphObj.title)
  })
})
