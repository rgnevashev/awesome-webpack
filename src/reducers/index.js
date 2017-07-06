import { combineReducers } from 'redux'
import { createReducer } from 'redux-act'

import { add, increment, decrement } from 'Actions'

const counterReducer = createReducer({
  [increment]: (state) => state + 1,
  [decrement]: (state) => state - 1,
  [add]: (state, payload) => state + payload,
}, 0)

const rootReducer = combineReducers({
  counter: counterReducer
})

export default rootReducer
