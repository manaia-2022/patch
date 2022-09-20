import React from 'react'
import { useDispatch } from 'react-redux'

import { addImpression, patchPet, scratchPet } from '../apiClient/voting'
import { fetchRandomPet } from '../redux/actions/random-pet'

export default function Voting({ petId }) {
  const dispatch = useDispatch()

  function scratch() {
    scratchPet(petId)
    dispatch(fetchRandomPet())
  }

  function retry() {
    addImpression(petId)
    dispatch(fetchRandomPet())
  }

  function patch() {
    patchPet(petId)
    dispatch(fetchRandomPet())
  }

  return (
    <ul className='mt-4 flex flex-col justify-center p-2 md:mt-0 md:flex-row md:space-x-20 md:text-sm md:font-medium'>
      <li className='w-28 rounded-full border-4 border-red-900 bg-red-300 p-2 text-center text-lg text-red-900 hover:border-red-400 hover:bg-red-900 hover:text-red-400'>
        <button onClick={scratch}>Scratch</button>
      </li>
      <li className='w-28 rounded-full border-4 border-purple-900 bg-purple-300 p-2 text-center text-lg text-purple-900 hover:border-purple-400 hover:bg-purple-900 hover:text-purple-400'>
        <button onClick={retry}>Retry</button>
      </li>
      <li className='w-28 rounded-full border-4 border-green-900 bg-green-300 p-2 text-center text-lg text-green-900 hover:border-green-400 hover:bg-green-900 hover:text-green-400'>
        <button onClick={patch}>Patch</button>
      </li>
    </ul>
  )
}
