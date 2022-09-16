import React from 'react'

export default function Pet(props) {
  const pet = props.pet

  return (
    <body>
      <div>
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
      </div>
    </body>
  )
}
