import { useAuth0 } from '@auth0/auth0-react'
import React, { useState } from 'react'

import { addComment } from '../apiClient/comments.api'

export default function AddComment(props) {
  const { getAccessTokenSilently } = useAuth0()

  const [comment, setComment] = useState('')
  const [thanks, setThanks] = useState('')

  console.log(thanks)

  const isDisabled = thanks.length > 0 || comment.length === 0

  function handleChange(event) {
    setComment(event.target.value)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const token = await getAccessTokenSilently()
      await addComment({ content: comment, petId: props.pet.id }, token)
      setThanks('Thanks for your comment!')
    } catch (err) {
      console.log(err.message)
    } finally {
      setComment('')
    }
  }

  return (
    <>
      <div className='flex justify-center'>
        <form onSubmit={handleSubmit}>
          <div className='flex justify-center  p-10'>
            <label htmlFor='content' className='text-2xl font-normal'>
              Leave a comment for {props.pet.name}:{' '}
            </label>
          </div>
          <div className='flex justify-center'>
            <input
              className=' flex justify-center border-2 border-solid border-black p-5'
              type='text'
              id='content'
              name='content'
              onChange={handleChange}
              value={comment}
            ></input>
          </div>
          <div className='flex justify-center p-10'>
            <button
              className='rounded-full bg-purple-700 p-10 py-2 px-4 pl-4 font-bold text-purple-200  hover:bg-pink-700 disabled:bg-purple-200 disabled:text-purple-300'
              type='submit'
              disabled={isDisabled}
            >
              Add Comment
            </button>
          </div>
          <div className='flex justify-center text-2xl font-normal'>
            {thanks.length > 0 && <p>{thanks}</p>}
          </div>
        </form>
      </div>
    </>
  )
}
