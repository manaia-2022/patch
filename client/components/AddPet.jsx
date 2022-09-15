//To-do:
//TESTING
//CSS

import React, { useState } from 'react'

import { addPet, getImageUrl } from '../apiClient/addPet'

const initialData = {
  name: '',
  age: '',
  animal: '',
  bio: '',
}

export default function AddPet() {
  const [form, setForm] = useState(initialData)
  const [selectedFile, setSelectedFile] = useState(null)

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  function handleFileChange(e) {
    setSelectedFile(e.target.files[0])
  }

  async function handleSubmit(e) {
    e.preventDefault()
    // const token = await getAccessTokenSilently()
    const image = selectedFile
    try {
      const imageUrl = await getImageUrl(image) // TODO: pass token
      const pet = {
        ...form,
        imageUrl,
      }
      console.log('Pet: ', pet)
      await addPet(pet)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h3 className='text-center'>Add a Pet</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'> </label>
          <input
            id='name'
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
            id='age'
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
            id='bio'
            type='text'
            name='bio'
            placeholder='Biography'
            value={form.bio}
            onChange={handleChange}
            className='border-black-300 bg-white-300 shadow-black-100 rounded-md border-2 text-center shadow-md'
          />
        </div>
        <div>
          <label htmlFor='image'>Upload an image</label>
          <input
            id='image'
            type='file'
            name='image'
            accept='image/*'
            onChange={handleFileChange}
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
