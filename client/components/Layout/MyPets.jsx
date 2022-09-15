import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchPets } from '../../redux/actions/pets.js'

// const myPetsState = useSelector((state) => state.myPets)
// const pets = myPetsState.data
// const loading = myPetsState.loading

export default function MyPets() {
  const dispatch = useDispatch()
  const { data: pets, loading, error } = useSelector((state) => state.myPets)
  console.log('state', pets)
  console.log('loading state', loading)
  console.log('error state', error)
  useEffect(() => {
    dispatch(fetchPets())
  }, [])

  return (
    <div>
      <h1>Our Pet Page</h1>
    </div>
  )
}

// function fetchFruits() {
//   setLoading(true)
//   getFruits()
//     .then((fruits) => {
//       setFruits(fruits)
//     })
//     .catch((err) => {
//       setError(err)
//     })
//     .finally(() => {
//       setLoading(false)
//     })
// }
