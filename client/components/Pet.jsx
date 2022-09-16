import React from 'react'

export default function Pet(props) {
  const pet = props.pet

  return (
    <>
      <div className=' item-center m-4 flex  flex-col space-y-2 space-x-2 border-4 border-solid border-black text-purple-700'>
        <div className=' flex justify-center p-6'>
          <img
            src={pet.imageUrl}
            alt='animal'
            className='border-p-600 h-48 w-48 rounded-full border-4 border-solid border-black '
          />
        </div>
        <h2 className='flex justify-center text-2xl font-black uppercase tracking-wide text-purple-900'>
          {pet.name} the {pet.animal}
        </h2>
        <h2 className='text-1xl flex justify-center font-normal'>
          Age: {pet.age}
        </h2>
        <h2 className='flex justify-center p-2 text-xl font-normal italic '>
          {pet.bio}
        </h2>

        <h2 className='flex justify-center p-2 text-lg font-normal '>
          Scratch Points: {pet.scratchPoints}
        </h2>
        <h2 className='flex justify-center p-2 text-lg font-normal '>
          Pat Points: {pet.patchPoints}
        </h2>
        <h2 className='flex justify-center p-2 text-lg font-normal '>
          Impressions: {pet.impressions}
        </h2>
      </div>
    </>
  )
}
