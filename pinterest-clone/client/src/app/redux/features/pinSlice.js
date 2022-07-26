import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  allPins: [],
  pinById: [],
  error: ''
}

const BASE_URL = process.env.SERVER_BASE_URL
const GET_ALL_PINS_URL = process.env.SERVER_ALL_PINS_URL

export const PinsSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setAllImages: (state, action) => {
      state.allPins = action.payload
      state.error = ''
    },
    setImageById: (state, action) => {
      state.pinById = action.payload
      state.error = ''
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  }
})

export const getAllPins = () => async dispatch => {
  try {
    const response = await axios.get(`${BASE_URL}/${GET_ALL_PINS_URL}`)
    dispatch(setAllImages(response.data))
  } catch (error) {
    dispatch(setError(error.response.data))
  }
}

export const { setAllImages, setImageById, setError } = PinsSlice.actions
export default PinsSlice.reducer
