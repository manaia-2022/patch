import { combineReducers, configureStore } from '@reduxjs/toolkit'

import randomPet from './randomPet.js'
import errorMessage from './reducers/errorMessage'
import waiting from './reducers/waiting.js'

export const store = configureStore({
  reducer: combineReducers({
    // Add your reducers heres
    randomPet,
    errorMessage,
    waiting,
  }),
})
