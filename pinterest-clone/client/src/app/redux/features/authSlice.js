import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  logged: false,
  token: false,
  error: ''
}

const BASE_URL = process.env.SERVER_BASE_URL
const LOGIN_URL = process.env.SERVER_LOGIN_USER_URL
const CREATE_URL = process.env.SERVER_CREATE_USER_URL

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: state => {
      state.logged = false
      state.token = false
      state.error = ''
    },
    logIn: (state, action) => {
      state.logged = action.payload.data
      state.token = action.payload.token
      state.error = ''
    },
    create: (state, action) => {
      state.logged = action.payload
      state.error = ''
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    delError: state => {
      state.error = ''
    },
    setBoards: (state, action) => {
      console.log(action)
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

export const createUser = data => async dispatch => {
  try {
    const response = await axios.post(`${BASE_URL}/${CREATE_URL}`, data)

    if (response.data === 'Success') {
      const data_for_login = { email: data.email, password: data.password }
      dispatch(loginUser(data_for_login))
    }
  } catch (error) {
    const formated_error = error.response.data.slice(20, -2)
    dispatch(setError(formated_error))
  }
}

export const clearError = () => dispatch => {
  dispatch(delError())
}

export const updateBoardState = newTitle => {
  setBoards(newTitle)
}

export const {
  logIn,
  logOut,
  create,
  setError,
  delError,
  setBoards
} = AuthSlice.actions
export default AuthSlice.reducer
