import React from 'react'
import { useSelector } from 'react-redux'

import { SmoothScroll } from './components/smoothScroll'
import { RoutesWeb } from './routesWeb'

export const App = () => {
  const userState = useSelector(state => state.auth.logged)

  return (
    <div>
      <SmoothScroll />
      <RoutesWeb user={userState} />
    </div>
  )
}
