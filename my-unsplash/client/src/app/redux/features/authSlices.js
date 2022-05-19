import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  logged: false
}

const BASE_URL = process.env.BASE_URL
const LOGIN_URL = process.env.LOGIN_URL

export const AuthSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logOut: state => {
      state.logged = false
    },
    logIn: (state, action) => {
      state.logged = action.payload
    }
  }
})

export const loginUser = data => async dispatch => {
  try {
    const response = await axios.get(`${BASE_URL}/${LOGIN_URL}`, data)
    dispatch(logIn(response.data))
  } catch (error) {
    throw new Error(error)
  }
}

export const logoutUser = dispatch => {
  dispatch(logOut())
}

export const { logIn, logOut } = AuthSlice.actions
export default AuthSlice.reducer
