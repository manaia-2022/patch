import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { getGiph } from '../apiClient/giphy.api'

export default function NotFound() {
  const [giph, setGiph] = useState(null)
  const location = useLocation().pathname
  console.log(location)

  useEffect(() => {
    getGiph(location).then((imageUrl) => setGiph(imageUrl))
  }, [])

  return (
    <div className='m-0 text-lg'>
      <div className='w-full'>
        <p className='m-5 text-center text-9xl font-bold text-violet-300 '>
          404
        </p>
      </div>
      <div className='flex flex-wrap content-center justify-center '>
        <div className='m-5 max-w-sm'>
          <p>
            <span className='font-bold'>Oops looks like you are lost...</span>{' '}
            before you head on back to our
            <a
              href='/'
              className='text-violet-600 no-underline hover:text-violet-400'
            >
              {' home page '}
            </a>
            why don&apos;t you think about giving a lost animal a new home.
          </p>
          <p className='pt-5'>
            Visit
            <a
              href='https://www.petrescue.org.nz/'
              target='_blank'
              rel='noreferrer'
              className='text-violet-600 no-underline hover:text-violet-400'
            >
              {' Pet Rescue '}
            </a>
            to find your new best friend.
          </p>
        </div>
        <iframe
          src={giph}
          width='400'
          height='400'
          frameBorder='0'
          className='giphy-embed'
          allowFullScreen={false}
          title='cute animal giph'
        ></iframe>
      </div>
    </div>
  )
}
