import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import JobModule from './modules/Job';
import { JobState, DispatchProps, JobDispatchProps } from './types/job.ts';

export interface AppState {
  job: JobState;
  jobDispatch: JobDispatchProps;
}

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({
      job: JobModule,
    }),
    applyMiddleware(logger, thunk),
  );
  return store;
}
