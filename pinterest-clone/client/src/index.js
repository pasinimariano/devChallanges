import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import { App } from './app'
import { store } from './app/redux/store'

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
