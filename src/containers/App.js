import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { add, increment, decrement } from 'Actions'

import App from 'Components/App'

export default connect(
  state => ({
    counter: state.counter
  }),
  dispatch => bindActionCreators({ add, increment, decrement }, dispatch)
)(App)
