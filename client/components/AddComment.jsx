import React from 'react'
// import React, {useEffect, useState} from 'react'
// {comments.api function name} from '../apiClient/comments.api.js'

// initialise the commit data - tbd what we need
// const initialFormData ={
//  data is set to null
// id - int
// petId - int
// userId - varchar
// content - varchar
// createdAt - varchar
// updatedAt - varchar
// }

export default function AddComment() {
  // set up the variables to handle the state changes
  // eg useEffect and useState variables, functions

  // functions to handle the change in the state of the data
  // and how to handle the submit from the form

  // const [form, setForm ] = useState(initialFormData)
  // function handleChange(event) {
  //  const {petID, content, createdAt} = event.target
  // const newForm = {
  // ...form, [petId]: value,
  // [comment]: value,
  // [createdAt]: value,
  // }

  // }

  return (
    <div className='flex justify-center'>
      <form>
        <label htmlFor='comment'>Add a comment: </label>
        <input
          className='border-2 border-solid border-black'
          type='text'
          id='comment'
          name='comment'
        ></input>
      </form>
    </div>
  )
}
