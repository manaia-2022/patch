import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchRandomPet } from '../redux/actions/random-pet'
import RandomPet from './RandomPet'

export default function DiscoverRoute() {
  const {
    data: randomPet,
    loading,
    error,
  } = useSelector((state) => state.randomPet)
  const dispatch = useDispatch()

  function handleClick(e) {
    e.preventDefault()
    dispatch(fetchRandomPet())
  }

  useEffect(() => {
    dispatch(fetchRandomPet())
  }, [])

  if (error) {
    return <div>{'Ooops! Something has happened, please try again later.'}</div>
  }

  return (
    <>
      <div>
        {loading ? <div>loading...</div> : <RandomPet pet={randomPet} />}
      </div>

      <div>
        <button onClick={handleClick}>Get the Pet</button>
      </div>
    </>
  )
}
