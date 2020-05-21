import { createStore, applyMiddleware } from 'redux'
import { reducers } from '../reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const middleware = applyMiddleware(thunk, logger)

export const Store = createStore(reducers, middleware)