import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { LandingPage } from './pages/landingPage'

export const RoutesWeb = ({ user }) => {
  return (
    <Routes>
      <Route exact path='/' element={<LandingPage />} />
      <Route exact path='/home' element={null} />
    </Routes>
  )
}
