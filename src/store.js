import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterSlice from './pages/Auth/auth.slice'

const reducer = combineReducers({
  auth: counterSlice
})

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({ serializableCheck: false })
  ]
})

export default store
