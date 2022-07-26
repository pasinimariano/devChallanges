import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { LandingPage } from './pages/landingPage'
import { HomePage } from './pages/homePage'

export const RoutesWeb = ({ logged, token }) => {
  return (
    <Routes>
      <Route exact path='/' element={<LandingPage logged={logged} />} />
      <Route
        exact
        path='/home'
        element={<HomePage logged={logged} token={token} />}
      />
    </Routes>
  )
}
