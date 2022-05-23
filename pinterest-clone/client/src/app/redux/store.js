import { configureStore } from '@reduxjs/toolkit'

import AuthSlice from './features/authSlice'
import ImagesSlice from './features/imageSlice'

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    images: ImagesSlice
  }
})
