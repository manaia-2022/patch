import { useState } from 'react'

import MainLayout from './components/Layout/MainLayout'

function App() {
  const [count, setCount] = useState(0)
  return (
    <MainLayout>
      <div className='mt-4'>
        <div className='w-20 rounded-md border-2 border-violet-600 bg-violet-500 p-2 text-center shadow-md shadow-violet-300'>
          <h1 className='text-mono font-bold tracking-wider text-violet-100'>
            Patch
          </h1>
        </div>
        <div className='mt-4'>
          <button
            onClick={() => setCount((c) => c + 1)}
            className='rounded-md border-2 border-slate-600 bg-slate-500 p-2 font-mono text-slate-100 shadow-md shadow-slate-300'
          >
            {count}: Increment
          </button>
        </div>
      </div>
    </MainLayout>
  )
}

export default App
