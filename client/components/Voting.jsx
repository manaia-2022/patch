import React from 'react'

import { patchPet, scratchPet } from '../apiClient/apiClient'

export default function Voting(props) {
  const { petId } = props
  function scratch() {
    scratchPet(petId)
    // TODO: reload/get another random pet
  }
  function retry() {
    // TODO: reload/get another random pet
  }
  function patch() {
    patchPet(petId)
    // TODO: reload/get another random pet
  }

  return (
    <>
      <ul className='mt-4 flex flex-col justify-center p-2 md:mt-0 md:flex-row md:space-x-20 md:text-sm md:font-medium'>
        <li className='w-28 rounded-full border-4 border-red-900 bg-red-300 p-2 text-center text-lg text-red-900 hover:border-red-400 hover:bg-red-900 hover:text-white'>
          <button onClick={scratch}>Scratch</button>
        </li>
        <li className='w-28 rounded-full border-4 border-purple-900 bg-purple-300 p-2 text-center text-lg text-purple-900 hover:border-purple-400 hover:bg-purple-900 hover:text-white'>
          <button onClick={retry}>Retry</button>
        </li>
        <li className='w-28 rounded-full border-4 border-green-900 bg-green-300 p-2 text-center text-lg text-green-900 hover:border-green-400 hover:bg-green-900 hover:text-white'>
          <button onClick={patch}>Patch</button>
        </li>
      </ul>
    </>
  )
}
