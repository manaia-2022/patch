import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import fetchPets from '../redux/actions/pets.js'
import { fetchPets } from '../../redux/actions/pets.js'

//do we import store? since store refers to or myPets state for
//I think we need to import reducers.

export default function MyPets() {
  const dispatch = useDispatch()
  const petsData = useSelector((state) => state.data)
  const petsLoading = useSelector((state) => state.loading)
  const petsError = useSelector((state) => state.error)

  console.log(petsData)

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
