import { useAuth0 } from '@auth0/auth0-react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { vi } from 'vitest'

import Nav from './Nav'

vi.mock('@auth0/auth0-react')

const fakeLogout = vi.fn()
const fakeLogin = vi.fn()

describe('<Nav />', () => {
  // text when signed in
  it('should render Log off when user is signed in (is authenticated)', () => {
    useAuth0.mockImplementation(() => ({
      logout: fakeLogout,
      loginWithRedirect: fakeLogin,
      isAuthenticated: true,
      isLoading: false,
      user: {
        name: 'bob builds stuff',
        nickname: 'Bobby Uncle',
        picture:
          'https://images.unsplash.com/photo-1657214059388-a35554015a42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
    }))
    render(<Nav />, { wrapper: Router })

    const logOffButton = screen.getByText(/log off/i)
    expect(logOffButton).toBeInTheDocument()
  })
  //text when signed out
  it('should render Log In when user is signed off (is !Authenticated)', () => {
    useAuth0.mockImplementation(() => ({
      logout: fakeLogout,
      loginWithRedirect: fakeLogin,
      isAuthenticated: false,
      isLoading: false,
    }))
    render(<Nav />, { wrapper: Router })

    const logOffButton = screen.getByText(/sign in/i)
    expect(logOffButton).toBeInTheDocument()
  })
  // click the button when signed out
  it('should call login when login button is pressed', async () => {
    useAuth0.mockImplementation(() => ({
      logout: fakeLogout,
      loginWithRedirect: fakeLogin,
      isAuthenticated: false,
      isLoading: false,
    }))
    render(<Nav />, { wrapper: Router })
    const signInButton = screen.getByRole('button', { name: /sign in/i })

    await userEvent.click(signInButton)

    expect(fakeLogin).toHaveBeenCalled()
  })
  // click the button when signed in
  it('should call logout when log off button is pressed', async () => {
    useAuth0.mockImplementation(() => ({
      logout: fakeLogout,
      loginWithRedirect: fakeLogin,
      isAuthenticated: true,
      isLoading: false,
    }))
    render(<Nav />, { wrapper: Router })
    const logOffButton = screen.getByRole('button', { name: /log off/i })

    await userEvent.click(logOffButton)

    expect(fakeLogout).toHaveBeenCalled()
  })
  // loading gif when isLoading: true
  it('should display the loading gif when loading the auth', async () => {
    useAuth0.mockImplementation(() => ({
      logout: fakeLogout,
      loginWithRedirect: fakeLogin,
      isAuthenticated: true,
      isLoading: true,
    }))
    render(<Nav />, { wrapper: Router })
    const gif = screen.getByRole('img', { alt: /loading/i })
    expect(gif.alt).toBe('loading')
  })
})
