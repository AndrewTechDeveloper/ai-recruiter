import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk'
import ApplicantModule from './modules/Applicant'
import CompanyModule from './modules/Company'
import JobModule from './modules/Job'

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({
      job: JobModule,
      applicant: ApplicantModule,
      company: CompanyModule
    }),
    applyMiddleware(
      logger,
      thunk
    )
  )
  return store
}
