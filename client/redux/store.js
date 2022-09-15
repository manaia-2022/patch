import { combineReducers, configureStore } from '@reduxjs/toolkit'

import errorMessage from './reducers/errorMessage.js'
import randomPet from './reducers/randomPet.js'
import waiting from './reducers/waiting.js'

export const store = configureStore({
  reducer: combineReducers({
    // Add your reducers heres
    randomPet,
    errorMessage,
    waiting,
  }),
})
