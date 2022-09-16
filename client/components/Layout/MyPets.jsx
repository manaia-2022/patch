import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchPets, fetchPetsFailure } from '../../redux/actions/my-pets.js'
import Pet from '../Pet.jsx'

export default function MyPets() {
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
      <div className='justify center flex flex-col'>
        <h1 className='flex justify-center p-10 text-5xl font-black uppercase tracking-wide text-purple-900'>
          Your Pets
        </h1>
        <div className='inline-grid grid-cols-3 grid-rows-1 gap-2'>
          {pets.map((pet) => {
            return <Pet key={pet.id} pet={pet} />
          })}
        </div>
      </div>
    </>
  )
}
