import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk'
import JobModule from './modules/Job'

export default function createStore() {
  if(process.env.NODE_ENV !== 'production') {
    const store = reduxCreateStore(
      combineReducers({
        job: JobModule,
      }),
      applyMiddleware(
        logger,
        thunk
      )
    )
    return store
  } else {
    const store = reduxCreateStore(
      combineReducers({
        job: JobModule,
      }),
      applyMiddleware(
        thunk
      )
    )
    return store
  }
}

