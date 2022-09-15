import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchRandomPet } from '../redux/actions/pets'
import RandomPet from './RandomPet'

// import Card from './Card'

export default function DiscoverRoute() {
  //const randomPet = useSelector((state)=> state.randomPet)
  const dispatch = useDispatch()
  const [randomPet, setRandomPet] = useState('')

  function handleClick(e) {
    e.preventDefault()
    dispatch(fetchRandomPet(randomPet))
    setRandomPet('')
  }

  return (
    <>
      <div>
        {/* <Card /> */}
        <RandomPet />
      </div>

      <div>
        <button onClick={handleClick}>Get the Pet</button>
      </div>
    </>
  )
}
