import { combineReducers, configureStore } from '@reduxjs/toolkit'

import randomPet from './reducers/randomPet.js'

export const store = configureStore({
  reducer: combineReducers({
    randomPet,
  }),
})
