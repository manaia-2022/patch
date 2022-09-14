import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Link } from 'react-router-dom'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Nav() {
  // TODO: call the useAuth0 hook and destructure logout and loginWithRedirect
  const { user, logout, loginWithRedirect, isLoading } = useAuth0()
  const handleLogOff = (e) => {
    e.preventDefault()
    return logout()
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    return loginWithRedirect()
  }

  return !isLoading ? (
    <>
      <div>
        <Link to='/'>Home</Link>
        <IfAuthenticated>
          <p>
            <Link to='/' onClick={handleLogOff}>
              Log off
            </Link>
          </p>
          <p>
            {user.name} {' ' + 'AKA ' + user.nickname}
          </p>
          <p>
            <img src={user.picture} alt={user.picture} />
          </p>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Link to='/' onClick={handleSignIn}>
            Sign In
          </Link>
        </IfNotAuthenticated>
      </div>
      <h1>Pets FTW!</h1>
    </>
  ) : (
    <img src='../../server/public/animated-circle.gif' alt='loading'></img>
  )
}

export default Nav
