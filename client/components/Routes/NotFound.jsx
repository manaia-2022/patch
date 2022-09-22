import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { getGiph } from '../../apiClient/giphy.api'
import loadingGif from '../../images/cat_loading.gif'

export default function NotFound() {
  const [giph, setGiph] = useState({ embed_url: loadingGif, title: 'loading' })
  const location = useLocation().pathname

  useEffect(() => {
    getGiph(location).then((giph) => setGiph(giph))
  }, [])

  return (
    <div className='m-0 text-lg'>
      <div className='w-full'>
        <h1 className='m-5 text-center text-9xl font-bold text-violet-300 '>
          404
        </h1>
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
          src={giph?.embed_url}
          width='400'
          height='400'
          frameBorder='0'
          allowFullScreen={false}
          title={giph?.title}
        ></iframe>
      </div>
    </div>
  )
}
