import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import React from 'react'

import AddPet from './AddPet.jsx'

describe('<AddPet />', () => {
  it('displays a form', () => {
    render(<AddPet />)
    const form = screen.getByRole('form', { name: '' })
    expect(form.innerHTML).toContain('input')
    expect(form.innerHTML).toContain('submit')
  })
})
