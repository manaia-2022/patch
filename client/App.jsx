import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import AddPet from './components/AddPet'
import DiscoverRoute from './components/DiscoverRoute'
import MainLayout from './components/Layout/MainLayout'
import MyPets from './components/Layout/MyPets'

function App() {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0()

  useEffect(() => {
    if (!isAuthenticated) {
      //TODO: something like this...
      // getAccessTokenSilently()
      //   return getPets(token)
      //   // .then((token) => {
      //   // })
      //   // .then((remotePets) => setPets(remotePets))
      //   .catch((err) => console.error(err))*
    }
  }, [])

  return (
    <MainLayout>
      {/* <MyPets /> */}
      <Routes>
        <Route path='/my-pets' element={<MyPets />} />
        <Route path='/' element={<DiscoverRoute />} />
        <Route path='/my-pets/add' element={<AddPet />} />
      </Routes>
    </MainLayout>
  )
}

export default App
