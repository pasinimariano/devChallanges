import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const Statement = () => {
  //states
  const [exploreInput, setExploreInput] = useState('')
  const [render, setRender] = useState('')
  const [modalShow, setModalShow] = useState(false)
  const [newBoardValues, setNewBoardValues] = useState({ id: '', url: '' })
  const loginValues = { email: '', password: '' }
  const createValues = { firstname: '', lastname: '', email: '', password: '' }

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
    serverError,
    allPins,
    dispatch,
    handleInput,
    removeInput
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
