import React from 'react'
import { useSelector } from 'react-redux'

import { RoutesWeb } from './routesWeb'

export const App = () => {
  const loggedState = useSelector(state => state.auth.logged)
  const tokenState = useSelector(state => state.auth.token)

  return (
    <div>
      <RoutesWeb logged={loggedState} token={tokenState} />
    </div>
  )
}
