import { Route, Routes } from 'react-router-dom'

import MainLayout from './components/Layout/MainLayout'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<div>Home Route</div>} />
        <Route path='/my-pets' element={<div>My Pets Route</div>} />
        <Route path='/my-pets/add' element={<div>Add Pet Route</div>} />
      </Routes>
    </MainLayout>
  )
}

export default App
