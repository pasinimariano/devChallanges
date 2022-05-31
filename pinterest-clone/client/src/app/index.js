import React from 'react'
import { useSelector } from 'react-redux'

import { RoutesWeb } from './routesWeb'
import { Styles } from './mainStyles'

export const App = () => {
  const userState = useSelector(state => state.auth.logged)

  return (
    <div className={Styles}>
      <RoutesWeb user={userState} />
    </div>
  )
}
