import { Route, Routes } from 'react-router-dom'

import AddPet from './components/AddPet'
import MainLayout from './components/Layout/MainLayout'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<div>Home Route</div>} />
        <Route path='/my-pets' element={<div>My Pets Route</div>} />
        <Route
          path='/my-pets/add'
          element={
            <div>
              <AddPet />
            </div>
          }
        />
      </Routes>
    </MainLayout>
  )
}

export default App
