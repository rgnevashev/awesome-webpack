import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { assignAll } from 'redux-act'

import * as actions from 'Actions'
import rootReducer from 'Reducers'

const configureStore = (initialState = {}) => {
  const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    createLogger()
  )(createStore)

  const store = createStoreWithMiddleware(rootReducer, initialState)

  //assignAll(actions, store)

  return store
}

export default configureStore
