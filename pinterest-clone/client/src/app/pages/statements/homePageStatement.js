import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const Statement = () => {
  //states
  const [exploreInput, setExploreInput] = useState('')
  const [render, setRender] = useState('')
  const [modalShow, setModalShow] = useState(false)
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
    loginValues,
    createValues,
    serverError,
    allPins,
    dispatch,
    handleInput,
    removeInput
  }
}
