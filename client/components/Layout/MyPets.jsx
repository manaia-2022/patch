import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchPets } from '../../redux/actions/pets.js'
import Pet from '../Pet.jsx'

export default function MyPets() {
  const dispatch = useDispatch()
  const { data: pets, loading, error } = useSelector((state) => state.myPets)

  useEffect(() => {
    dispatch(fetchPets())
  }, [])

  return loading ? (
    'loading'
  ) : error ? (
    'No pets here'
  ) : (
    <>
      <div className='justify center flex flex-col'>
        <h1 className='flex justify-center p-10 text-5xl font-black uppercase tracking-wide text-purple-900'>
          Our Pets
        </h1>
        <div className='inline-grid grid-cols-3 grid-rows-1 gap-2'>
          {pets.map((petObj) => {
            return <Pet key={petObj.id} pet={petObj} />
          })}
        </div>
      </div>
    </>
  )
}
