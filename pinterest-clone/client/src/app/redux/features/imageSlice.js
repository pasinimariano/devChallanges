import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  allImages: [],
  imageById: [],
  error: ''
}

const BASE_URL = process.env.SERVER_BASE_URL
const GET_IMAGES_URL = process.env.SERVER_GET_IMAGES_URL

export const ImagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setAllImages: (state, action) => {
      state.allImages = action.payload
      state.error = ''
    },
    setImageById: (state, action) => {
      state.imageById = action.payload
      state.error = ''
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  }
})

export const getAllImages = token => async dispatch => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${GET_IMAGES_URL}?image=all&token=${token}`
    )
    dispatch(setAllImages(response.data))
  } catch (error) {
    dispatch(setError(error.response.data))
  }
}

export const { setAllImages, setImageById, setError } = ImagesSlice.actions
export default ImagesSlice.reducer
