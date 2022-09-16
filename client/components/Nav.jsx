import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Link } from 'react-router-dom'

import loadingGif from '../images/animated-circle.gif'
import patchIcon from '../images/purplePatchCaptain.png'

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
        <div className='mx-auto flex flex-wrap items-center justify-between'>
          <div className=' hidden w-full md:block' id='navbar-default'>
            <ul className='mt-4 flex flex-col border-purple-900 bg-purple-700 p-2 md:mt-0 md:flex-row md:space-x-4 md:border-4 md:text-sm md:font-medium'>
              <li>
                <img className='w-10' src={patchIcon} alt='Patchies Mascot' />
              </li>

              <li>
                <Link
                  to='/'
                  className='hover:purple-900 block rounded py-2 pr-4 pl-3 hover:bg-purple-900  focus:bg-purple-900 focus:outline-none focus:ring focus:ring-violet-400 md:border-2 md:bg-transparent md:p-2 md:text-white'
                  aria-current='page'
                >
                  Home
                </Link>
              </li>
              {isAuthenticated ? (
                <>
                  <li>
                    <Link
                      to='/my-pets'
                      className='block rounded py-2 pr-4 pl-3 text-gray-700 hover:bg-purple-900 hover:text-white focus:bg-purple-900 focus:outline-none focus:ring focus:ring-violet-400 md:border-2 md:p-2 md:text-white md:hover:text-white'
                    >
                      My Pets
                    </Link>
                  </li>
                  <li className='absolute right-52 mt-2 md:text-white'>
                    {user?.name} {' ' + 'AKA ' + user?.nickname}
                  </li>
                  <li className='absolute right-32  md:w-10'>
                    <img
                      className='rounded-full'
                      src={user?.picture}
                      alt={user?.name}
                    />
                  </li>
                  <li className='absolute right-5 block rounded py-2 pr-4 pl-3 text-gray-700 hover:bg-red-700 hover:text-white md:border-2 md:border-purple-900 md:bg-purple-900 md:p-2 md:text-white md:hover:text-white'>
                    <div>
                      <button onClick={handleLogOff}>Log Off</button>
                    </div>
                  </li>
                </>
              ) : (
                <li className='absolute right-5 block rounded py-2 pr-4 pl-3 text-gray-700 text-gray-400 hover:bg-green-700 hover:text-white  md:border-2 md:border-purple-900 md:bg-purple-900 md:p-2 md:text-white md:hover:text-white md:hover:text-white'>
                  <button onClick={handleSignIn}>Sign In</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  ) : (
    <img className='m-auto flex w-20' src={loadingGif} alt='loading'></img>
  )
}

export default Nav
