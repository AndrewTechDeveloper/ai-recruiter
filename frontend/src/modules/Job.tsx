import axios from 'axios';
import { AppState } from '../store.ts';
import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { apiUrl } from '../components/items/Url';
import {
  JobState,
  STEP_BACKWARD,
  STEP_FORWARD,
  LOADING,
  GET_COLLEGES_SUCCESS,
  GET_FACULTIES_SUCCESS,
  CONNECTION_FAILURE,
  SCHOOL,
  FACULTY,
  AGE,
  GENDER,
  ActionTypes,
} from '../types/job.ts';

const initialState: JobState = {
  activeStep: 0,
  isLoading: false,
  school: '',
  faculty: '',
  age: 0,
  gender: 0,
  skill: '',
  hobby: '',
  career: '',
  society: '',
  company: '',
  colleges: [],
  faculties: [],
};

export default function reducer(
  state = initialState,
  action: ActionTypes,
): JobState {
  switch (action.type) {
    case STEP_FORWARD:
      return Object.assign({}, state, { activeStep: state.activeStep + 1 });
    case STEP_BACKWARD:
      return Object.assign({}, state, { activeStep: state.activeStep - 1 });
    default:
      return state;
  }
}

export const stepBackward = (): ActionTypes => {
  return {
    type: STEP_FORWARD,
    activeStep: 1,
  };
};
export const stepForward = (): ActionTypes => {
  return {
    type: STEP_BACKWARD,
    activeStep: -1,
  };
};
const loading = (): ActionTypes => {
  return {
    type: LOADING,
    loading: true,
  };
};
const connectionFailure = (): ActionTypes => {
  return {
    type: CONNECTION_FAILURE,
  };
};
const getCollegesSuccess = (data: string[]): ActionTypes => {
  return {
    type: GET_COLLEGES_SUCCESS,
    colleges: data,
  };
};
const getFacultiesSuccess = (data: string[]): ActionTypes => {
  return {
    type: GET_FACULTIES_SUCCESS,
    faculties: data,
  };
};
const schoolStatus = (val: string): ActionTypes => {
  return {
    type: SCHOOL,
    school: val,
  };
};
export const getFaculties = (
  value: string,
): ActionTypes | ThunkAction<void, AppState, void, any> => {
  return (dispatch: Dispatch) => {
    dispatch(loading());
    return axios
      .get(`${apiUrl}/colleges`, {
        params: {
          name: value,
        },
      })
      .then(res => {
        dispatch(getFacultiesSuccess(res.data));
      })
      .catch(err => {
        dispatch(connectionFailure());
      });
  };
};
export const getColleges = ():
  | ActionTypes
  | ThunkAction<void, AppState, void, any> => {
  return (dispatch: Dispatch) => {
    dispatch(loading());
    return axios
      .get(`${apiUrl}/colleges`, {})
      .then(res => {
        dispatch(getCollegesSuccess(res.data));
      })
      .catch(err => {
        dispatch(connectionFailure());
      });
  };
};
export const facultyStatus = (val: string): ActionTypes => {
  return {
    type: FACULTY,
    faculty: val,
  };
};
export const ageStatus = (
  e: React.ChangeEvent<HTMLInputElement>,
): ActionTypes => {
  return {
    type: AGE,
    age: e.target.value,
  };
};
export const genderStatus = (val: string): ActionTypes => {
  return {
    type: GENDER,
    gender: val,
  };
};
