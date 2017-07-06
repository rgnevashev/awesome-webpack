import React from 'react'
import { connect } from 'react-redux'

import { add, increment, decrement } from 'Actions'

import App from 'Components/App'

export default connect(
  state => ({
    counter: state.counter
  }),
  dispatch => ({
    add,
    increment,
    decrement
  })
)(App)
