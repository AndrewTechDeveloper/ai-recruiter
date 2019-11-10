import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import ApplicantModule from './modules/Applicant';

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({
      applicant: ApplicantModule,
    }),
    applyMiddleware(logger, thunk),
  );
  return store;
}
