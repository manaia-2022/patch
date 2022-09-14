import { combineReducers, configureStore } from '@reduxjs/toolkit'

import addPet from './reducers/addPet'

export const store = configureStore({
  reducer: combineReducers({
    addPet,
  }),
})
