import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer  from'../redux/_reducers'
const loggerMiddleware = createLogger();
export const store = createStore(
    applyMiddleware(
        rootReducer,
        thunkMiddleware,
        loggerMiddleware
    )
);