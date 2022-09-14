import { Route, Routes } from 'react-router-dom'

import MainLayout from './components/Layout/MainLayout'
import MyPets from './components/Layout/MyPets'

function App() {
  return (
    <MainLayout>
      {/* <MyPets /> */}
      <Routes>
        <Route path='/' element={<div>Home Route</div>} />
        <Route path='/my-pets' element={<MyPets />} />
        <Route path='/my-pets/add' element={<div>Add Pet Route</div>} />
      </Routes>
    </MainLayout>
  )
}

export default App
