import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import 'App/index.css'

import createStore from 'App/store'

import App from 'Containers/App'

const initialState = window.__INITIAL_STATE__
const store = createStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
