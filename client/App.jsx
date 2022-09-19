import { Route, Routes } from 'react-router-dom'

import AddPet from './components/AddPet'
import DiscoverRoute from './components/DiscoverRoute'
import MainLayout from './components/Layout/MainLayout'
import MyPets from './components/Layout/MyPets'
import NotFound from './components/NotFound'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path='/my-pets' element={<MyPets />} />
        <Route path='/' element={<DiscoverRoute />} />
        <Route path='/my-pets/add' element={<AddPet />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </MainLayout>
  )
}

export default App
