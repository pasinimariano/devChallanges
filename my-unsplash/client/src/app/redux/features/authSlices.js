import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  logged: false,
  error: ''
}

const BASE_URL = process.env.SERVER_BASE_URL
const LOGIN_URL = process.env.SERVER_LOGIN_URL

export const AuthSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logOut: state => {
      state.logged = false
      state.error = ''
    },
    logIn: (state, action) => {
      state.logged = action.payload
      state.error = ''
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  }
})

export const loginUser = data => async dispatch => {
  try {
    const response = await axios.post(`${BASE_URL}/${LOGIN_URL}`, data)
    dispatch(logIn(response.data))
  } catch (error) {
    dispatch(setError(error.response.data))
  }
}

export const logoutUser = dispatch => {
  dispatch(logOut())
}

export const { logIn, logOut, setError } = AuthSlice.actions
export default AuthSlice.reducer
