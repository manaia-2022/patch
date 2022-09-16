import React from 'react'

import { patchPet, scratchPet } from '../apiClient/apiClient'

export default function Voting(props) {
  // const { id } = useParams()
  const { petId } = props
  function scratch() {
    scratchPet(petId)
  }
  function retry() {
    // reload/get another random pet
  }
  function patch() {
    patchPet(petId)
  }

  return (
    <>
      <div>
        <button onClick={scratch}>Scratch</button>
      </div>
      <div>
        <button onClick={retry}>Retry</button>
      </div>
      <div>
        <button onClick={patch}>Patch</button>
      </div>
    </>
  )
}
