import { Route, Routes } from 'react-router-dom'

import MainLayout from './components/Layout/MainLayout'
import AddPetRoute from './components/Routes/AddPet'
import DiscoverRoute from './components/Routes/Discover'
import MyPetsRoute from './components/Routes/MyPets'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<DiscoverRoute />} />
        <Route path='/my-pets' element={<MyPetsRoute />} />
        <Route path='/my-pets/add' element={<AddPetRoute />} />
      </Routes>
    </MainLayout>
  )
}

export default App
