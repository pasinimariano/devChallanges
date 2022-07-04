import { useState } from 'react'

export const Statement = () => {
  //states
  const [exploreInput, setExploreInput] = useState('')
  const [render, setRender] = useState('')
  const [modalShow, setModalShow] = useState(false)

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
    handleInput,
    removeInput
  }
}
