import { configureStore } from '@reduxjs/toolkit'

import AuthSlice from './features/authSlices'

export const store = configureStore({
  reducer: {
    auth: AuthSlice
  }
})
