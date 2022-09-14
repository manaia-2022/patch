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
    console.log(e)
  }

  return (
    <div>
      <h3>Add a Pet</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'> Name </label>
          <input
            type='text'
            name='name'
            value={form.name}
            placeholder='Name'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='age'> Age </label>
          <input
            type='text'
            name='age'
            value={form.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='animal'> Animal </label>
          <input
            type='text'
            name='animal'
            value={form.animal}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='bio'> Bio </label>
          <input
            type='text'
            name='bio'
            value={form.bio}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  )
}
