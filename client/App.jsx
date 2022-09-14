import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import AddPet from './components/AddPet'
import MainLayout from './components/Layout/MainLayout'

function App() {
  const [count, setCount] = useState(1)
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
        <Routes>
          <Route path='/my-pets/add' element={<AddPet />} />
        </Routes>
      </div>
    </MainLayout>
  )
}

export default App
