import rootReducer from '../redux/_reducers'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// https://redux.js.org/
const middlewares = [thunk]
export const store = createStore(
  rootReducer,
 
    applyMiddleware(...middlewares)
)