import { combineReducers, configureStore } from '@reduxjs/toolkit'

//import { reducer } from '../redux/actions/pets'
import { reducers } from '../redux/reducers'

//need to refer to this function properly
export const store = configureStore({
  reducer: combineReducers({
    reducers,
  }),
})
