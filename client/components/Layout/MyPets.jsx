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
    <div>
      <h1>Our Pet Page</h1>
      {pets.map((petObj) => {
        return <Pet key={petObj.id} pet={petObj} />
      })}
    </div>
  )
}
