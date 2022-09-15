import React, { useState } from 'react'

import { addComment } from '../apiClient/comments.api'

// initialise the commit data - tbd what we need
const initialFormData = {
  // id - int
  petId: 1,
  userId: 'auth0|123456789',
  content: '',
  createdAt: Date.now(),
  // updatedAt: '',
}

export default function AddComment(props) {
  // const [comments, setComments] = useState([])
  const [form, setForm] = useState(initialFormData)

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
      .then((newComment) => {
        props.setComments(newComment) // <<< pass the object!!
        setForm(initialFormData)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  return (
    <>
      <div className='flex justify-center'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='content'>Add a comment: </label>
          <input
            className='border-2 border-solid border-black'
            type='text'
            id='content'
            name='content'
            onChange={handleChange}
            value={form.content}
          ></input>
          <button
            className='rounded-full bg-purple-500 py-2 px-4 font-bold text-white hover:bg-purple-700'
            type='submit'
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}
