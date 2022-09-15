import React, { useState } from 'react'

import { addComment } from '../apiClient/comments.api'

// initialise the commit data - tbd what we need

export default function AddComment(props) {
  const initialFormData = {
    // id - int
    petId: props.pet.id,
    userId: 'auth0|123456789',
    content: '',
    // updatedAt: '',
  }

  // const [comments, setComments] = useState([])
  const [form, setForm] = useState(initialFormData)
  const [thanks, setThanks] = useState(null)

  function handleChange(event) {
    //   const { petID, comment, createdAt, value } = event.target
    // const { petId, comment, value } = event.target

    const newForm = {
      ...form,
      [event.target.name]: event.target.value,
      // [petId]: value,
      // [comment]: value,
      // [createdAt]: value,
    }
    setForm(newForm)
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log('submit')
    addComment(form)
      .then((thanks) => {
        setThanks(thanks)
      })
      .catch((err) => {
        console.error(err.message)
      })
    setForm(initialFormData)
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
              className=' flex justify-center border-2 border-solid border-black p-10 pr-4'
              type='text'
              id='content'
              name='content'
              onChange={handleChange}
              value={form.content}
            ></input>
          </div>
          <div className='flex justify-center p-10'>
            <button
              className='rounded-full bg-purple-700 p-10 py-2 px-4 pl-4 font-bold text-white  hover:bg-pink-700'
              type='submit'
            >
              Add Comment
            </button>
          </div>
          <div className='flex justify-center text-2xl font-normal'>
            {thanks && <p>{thanks}</p>}
          </div>
        </form>
      </div>
    </>
  )
}
