// TODO: import useAuth0 function
import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

//TODO: Import getPets function
// import { getPets } from '../api'
import DiscoverRoute from './components/DiscoverRoute'
import MainLayout from './components/Layout/MainLayout'

function App() {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0()

  useEffect(() => {
    if (!isAuthenticated) {
      getAccessTokenSilently()
        //TODO: return getPets(token)
        // .then((token) => {

        // })
        // .then((remotePets) => setPets(remotePets))
        .catch((err) => console.error(err))
    }
  }, [])

  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<DiscoverRoute />} />
        <Route path='/my-pets' element={<div>My Pets Route</div>} />
        <Route path='/my-pets/add' element={<div>Add Pet Route</div>} />
      </Routes>
    </MainLayout>
  )
}

export default App
