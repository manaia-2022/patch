import React from 'react'

import AddComment from './AddComment'

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
    <body>
      <div>
        <div>
          <h1 className='flex flex-1 justify-center p-8 text-5xl text-purple-900 '>
            Discover
          </h1>
        </div>
        <div className=' item-center m-6 flex flex-col space-y-4 space-x-4 border-4 border-solid border-black text-purple-700'>
          <div className=' flex justify-center p-8 md:w-auto'>
            <img
              src={pet.imageUrl}
              alt='animal'
              className='border-p-600 h-64 w-64 rounded-full border-4 border-solid border-black '
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
        <AddComment pet={pet} />
      </div>
    </body>
  )
}
