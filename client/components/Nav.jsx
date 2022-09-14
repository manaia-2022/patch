import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  const { user, logout, loginWithRedirect, isLoading, isAuthenticated } =
    useAuth0()

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
        {isAuthenticated ? (
          <>
            <p>
              <button onClick={handleLogOff}>Log off</button>
            </p>
            <p>
              {user?.name} {' ' + 'AKA ' + user?.nickname}
            </p>
            <p>
              <img src={user?.picture} alt={user?.name} />
            </p>
          </>
        ) : (
          <button onClick={handleSignIn}>Sign In</button>
        )}
      </div>
      <h1>Pets FTW!</h1>
    </>
  ) : (
    <img src='../../server/public/animated-circle.gif' alt='loading'></img>
  )
}

export default Nav
