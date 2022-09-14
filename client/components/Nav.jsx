import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Link } from 'react-router-dom'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Nav() {
  // TODO: call the useAuth0 hook and destructure logout and loginWithRedirect
  const { user, logout, loginWithRedirect } = useAuth0()
  const handleLogOff = (e) => {
    e.preventDefault()
    return logout()
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    return loginWithRedirect()
  }

  console.log(user)

  return (
    <>
      <div>
        <Link to='/'>Home</Link>
        <IfAuthenticated>
          <Link to='/' onClick={handleLogOff}>
            Log off
          </Link>
          <p>
            <span role='img' alt='hi'></span>
          </p>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Link to='/' onClick={handleSignIn}>
            Sign In
          </Link>
        </IfNotAuthenticated>
      </div>
      <h1>Fruit FTW!</h1>
    </>
  )
}

export default Nav
