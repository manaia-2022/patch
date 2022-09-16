import { combineReducers, configureStore } from '@reduxjs/toolkit'

import myPets from './reducers/myPets'

export const store = configureStore({
  reducer: combineReducers({
    myPets,
  }),
})
