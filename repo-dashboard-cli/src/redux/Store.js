import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Auth/index.js'

export default configureStore({
  reducer: {
    auth: authReducer,
  }
})