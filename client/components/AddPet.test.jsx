import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import React from 'react'
import { vi } from 'vitest'

import AddPet from './AddPet.jsx'

describe('<AddPet />', () => {
  it('displays a form', () => {
    render(<AddPet />)
    // screen.debug()
    const form = screen.getByRole('form', { name: '' })
    // console.log(Object.keys(form))
    expect(form.innerHTML).toContain('input')
    expect(form.innerHTML).toContain('submit')
  })
  it('submit button runs handleSubmit function', () => {
    render(<AddPet />)
    // screen.debug()
    const submit = screen.getByRole('button')
    console.log(submit.innerHTML)
  })
})
