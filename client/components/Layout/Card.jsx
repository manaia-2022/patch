// import { paste } from '@testing-library/user-event/dist/types/clipboard'
import React from 'react'

export default function Card() {
  let pet = {
    id: 1,
    name: 'Bella',
    age: 2,
    animal: 'dog',
    bio: 'Bella is a sweet dog who loves to play fetch',
    imageUrl:
      'https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
  }

  return (
    <div>
      <div>Fake Header</div>
      <div className='item-center flex flex-col space-y-4 space-x-4'>
        <h1 className='flex-1'>Discover</h1>
        <img src={pet.imageUrl} alt='animal' />
        <h2 className='text-5xl font-black uppercase tracking-wide'>
          {pet.name}
        </h2>
        <h2 className='text-1xl font-normal'>Age: {pet.age}</h2>
        <h2 className='text-1xl font-normal'>Type: {pet.animal}</h2>
        <h2 className='text-2xl font-normal'>
          {' '}
          About {pet.name}: {pet.bio}
        </h2>
      </div>
      <div>Fake Footer</div>
    </div>
  )
}
