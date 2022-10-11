import { combineReducers, configureStore } from '@reduxjs/toolkit'

import myPets from './reducers/myPets'
import randomPet from './reducers/randomPet'

export const store = configureStore({
  reducer: combineReducers({
    randomPet,
    myPets,
  }),
})
