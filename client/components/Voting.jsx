import React from 'react'
import { useParams } from 'react-router-dom'

import { scratchPet } from '../apiClient/apiClient'

export default function Voting(props) {
  // const { id } = useParams()
  const { petId } = props
  function scratch() {
    console.log(petId)
    scratchPet(petId)
  }
  function retry() {
    // reload/get another random pet
  }
  function patch() {
    // todo
  }

  return (
    <>
      <button onClick={scratch}>Scratch</button>
      <button onClick={retry}>Retry</button>
      <button onClick={patch}>Patch</button>
    </>
  )
}
