import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const Statement = () => {
  const loginValues = { email: '', password: '' }
  const [render, setRender] = useState('login')

  const serverError = useSelector(state => state.auth.error)
  const dispatch = useDispatch()

  return {
    loginValues,
    render,
    setRender,
    serverError,
    dispatch
  }
}
