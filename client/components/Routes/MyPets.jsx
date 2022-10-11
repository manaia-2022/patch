import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchPets, fetchPetsFailure } from '../../redux/actions/my-pets.js'
import Pet from '../Pet.jsx'

function MyPetsRoute() {
  const dispatch = useDispatch()
  const { data: pets, loading, error } = useSelector((state) => state.myPets)
  const { getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    getAccessTokenSilently()
      .then((token) => {
        dispatch(fetchPets(token))
      })
      .catch(() => {
        dispatch(fetchPetsFailure('Are you sure you are signed in?'))
      })
  }, [])

  return loading ? (
    'loading'
  ) : error ? (
    'No pets here'
  ) : (
    <>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='flex justify-center p-10 text-5xl font-black uppercase tracking-wide text-purple-900'>
          Your Pets
        </h1>
        <Link
          to='add'
          className='rounded-md border-2 border-purple-700 bg-purple-600 p-3 text-2xl text-purple-50 hover:bg-purple-700'
        >
          Add Pet
        </Link>
        <div className='inline-grid grid-cols-3 grid-rows-1 gap-2'>
          {pets.map((pet) => {
            return <Pet key={pet.id} pet={pet} />
          })}
        </div>
      </div>
    </>
  )
}

export default withAuthenticationRequired(MyPetsRoute, {
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
})
