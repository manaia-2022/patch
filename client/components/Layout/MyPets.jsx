import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchPets } from '../redux/actions/pets.js'

export default function MyPets() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPets())
  }, [])

  return <h1>Our Pet Page</h1>
}
