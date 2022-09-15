import { combineReducers, configureStore } from '@reduxjs/toolkit'

import myPets from './reducers/myPets'

//need to refer to this function properly
export const store = configureStore({
  reducer: combineReducers({
    myPets,
  }),
})
