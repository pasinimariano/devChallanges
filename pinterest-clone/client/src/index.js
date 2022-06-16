import React from 'react'
import ReactDom from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { App } from './app'
import { store } from './app/redux/store'
import './maincss.css'

const Root = ReactDom.createRoot(document.getElementById('root'))

Root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)
