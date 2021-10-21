import { configureStore } from '@reduxjs/toolkit'
import timesReducer from './times'
import habitsReducer from './habits'

export default configureStore({
  reducer: {
    times: timesReducer,
    habits: habitsReducer
  }
})