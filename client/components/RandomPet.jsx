import React from 'react'

import AddComment from './AddComment'
import Voting from './Voting'
// TODO add authentication to conditionally render AddComment

export default function RandomPet({ pet }) {
  return (
    <div>
      <div>
        <div>
          <h1 className='flex flex-1 justify-center p-8 text-5xl text-purple-900 '>
            Discover
          </h1>
        </div>
        <div className='item-center m-6 flex flex-col border-4 border-solid border-black text-purple-700'>
          <div className=' flex justify-center p-8 md:w-auto'>
            <img
              className='border-p-600 h-64 w-64 rounded-full border-4 border-solid border-black object-cover'
              src={pet.imageUrl}
              alt='animal'
            />
          </div>
          <h2 className='flex justify-center text-3xl font-black uppercase tracking-wide text-purple-900'>
            {pet.name} the {pet.animal}
          </h2>
          <h2 className='text-1xl flex justify-center font-normal'>
            Age: {pet.age}
          </h2>
          <h2 className='flex justify-center p-5 text-2xl font-normal '>
            {pet.bio}
          </h2>
        </div>
        <Voting petId={pet.id} />
        <AddComment pet={pet} />
      </div>
    </div>
  )
}
