import axios from 'axios'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setServerError } from '../../redux/features/pinSlice'
import { updateBoardState } from '../../redux/features/authSlice'

const BASE_URL = process.env.SERVER_BASE_URL
const CREATE_BOARD_URL = process.env.SERVER_CREATE_BOARD

export const Statement = () => {
  //states
  const [exploreInput, setExploreInput] = useState('')
  const [render, setRender] = useState('')
  const [modalShow, setModalShow] = useState(false)
  const [newBoardValues, setNewBoardValues] = useState({ id: '', url: '' })
  const loginValues = { email: '', password: '' }
  const createValues = { firstname: '', lastname: '', email: '', password: '' }
  const createBoardValues = { title: '' }

  // hooks

  const serverError = useSelector(state => state.pins.error)
  const allPins = useSelector(state => state.pins.allPins)
  const dispatch = useDispatch()

  //state management
  const handleInput = event => {
    const value = event.target.value
    setExploreInput(value)
  }

  const removeInput = () => {
    setExploreInput('')
  }

  const createBoard = async (title, owner, token) => {
    const data = title
    data['owner'] = owner

    try {
      const response = await axios.post(
        `${BASE_URL}/${CREATE_BOARD_URL}?token=${token}`,
        data
      )

      response.msg === 'Success'
        ? dispatch(updateBoardState(title.title))
        : dispatch(setServerError(response.error))
    } catch (error) {
      dispatch(setServerError(error))
    }
  }

  return {
    exploreInput,
    render,
    setRender,
    modalShow,
    setModalShow,
    newBoardValues,
    setNewBoardValues,
    loginValues,
    createValues,
    createBoardValues,
    serverError,
    allPins,
    dispatch,
    handleInput,
    removeInput,
    createBoard
  }
}

export const AllPinsStatement = () => {
  const [show, setShow] = useState(false)
  const [hover, setHover] = useState('')
  const [option, setOption] = useState('')
  const breakpointColumns = {
    default: 6,
    1100: 3,
    700: 2,
    500: 1
  }

  const handleDropChange = event => {
    setOption(event.target.outerText)
  }

  return {
    show,
    setShow,
    hover,
    setHover,
    option,
    setOption,
    breakpointColumns,
    handleDropChange
  }
}
