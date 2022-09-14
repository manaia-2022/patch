//To-do:
//TESTING
//Create an addpet component (This is it) (Setup skeleton)
//Create form in the component (name, age, animal, bio, image_url)
//Route to App component so form can be seen

//Route to the API (POST to /api/v1/pets/my ?)
//Set up db actions to allow form to add to db
//Seperate these 2 and test with thunder client might be easier

//Set up actions and reducer to allow form to add to state
//Research a way to allow user to add an image to the form (Amazon S3 or Cloudinary)
//CSS

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addNewPet } from '../redux/actions'
//import { } from '../redux/actions/index' //Import actions from index

const initialData = {
  name: '',
  age: '',
  animal: '',
  bio: '',
}

export default function AddPet() {
  const dispatch = useDispatch()
  const [form, setForm] = useState(initialData)

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Form: ', form)
    dispatch(addNewPet(form))
  }

  return (
    <div>
      <h3 className='text-center'>Add a Pet</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'> </label>
          <input
            type='text'
            name='name'
            value={form.name}
            placeholder='Name'
            onChange={handleChange}
            className='border-black-300 bg-white-300 shadow-black-100 rounded-md border-2 text-center shadow-md'
          />
        </div>
        <div>
          <label htmlFor='age'> </label>
          <input
            type='text'
            name='age'
            value={form.age}
            placeholder='Age'
            onChange={handleChange}
            className='border-black-300 bg-white-300 shadow-black-100 rounded-md border-2 text-center shadow-md'
          />
        </div>
        <div>
          <label htmlFor='animal'> </label>
          <input
            type='text'
            name='animal'
            placeholder='Animal'
            value={form.animal}
            onChange={handleChange}
            className='border-black-300 bg-white-300 shadow-black-100 rounded-md border-2 text-center shadow-md'
          />
        </div>
        <div>
          <label htmlFor='bio'> </label>
          <input
            type='text'
            name='bio'
            placeholder='Biography'
            value={form.bio}
            onChange={handleChange}
            className='border-black-300 bg-white-300 shadow-black-100 rounded-md border-2 text-center shadow-md'
          />
        </div>
        <input
          type='submit'
          className='text-black-100 rounded-md border-2 border-slate-300 bg-slate-200 p-2 font-mono shadow-md shadow-slate-100'
        />
      </form>
    </div>
  )
}
