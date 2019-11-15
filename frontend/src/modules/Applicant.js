import axios from 'axios'
import { api_url } from '../components/items/Url'
// action type
const LOADING = "LOADING"
const GET_COLLEGES_SUCCESS = "GET_COLLEGES_SUCCESS"
const GET_FACULTIES_SUCCESS = "GET_FACULTIES_SUCCESS"
const GET_OCCUPATIONS_SUCCESS = "GET_OCCUPATIONS_SUCCESS"
const CONNECTION_FAILURE = "CONNECTION_FAILURE"
const SCHOOL = "SCHOOL"
const FACULTY = "FACULTY"
const AGE = "AGE"
const GENDER = "GENDER"
const OCCUPATION = "OCCUPATION"
const SKILL = "SKILL"
const EX_JOBS = "EX_JOBS"
const HOBBY = "HOBBY"
const CARRER = "CAREER"
const SOCIETY = "SOCIETY"

const initialState = {
  isLoading: false,
  school: '',
  faculty: '',
  age: '',
  gender: 0,
  skill: '',
  ex_jobs: [],
  hobby: '',
  career: '',
  society: '',
  company: '',
  colleges: [],
  faculties: [],
  occupations: [],
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
  case LOADING:
    return Object.assign({}, state, { loading: true })
  case GET_COLLEGES_SUCCESS:
    return Object.assign({}, state, { loading: false, colleges: action.colleges })
  case GET_OCCUPATIONS_SUCCESS:
    return Object.assign({}, state, { loading: false, occupations: action.occupations })
  case GET_FACULTIES_SUCCESS:
    return Object.assign({}, state, { loading: false, faculties: action.faculties })
  case CONNECTION_FAILURE:
    return Object.assign({}, state, { toast: 'connectionFailure' })
  case SCHOOL:
    return Object.assign({}, state, { school: action.school, faculty: '' })
  case FACULTY:
    return Object.assign({}, state, { faculty: action.faculty })
  case AGE:
    return Object.assign({}, state, { age: action.age })
  case GENDER:
    return Object.assign({}, state, { gender: action.gender })
  case EX_JOBS:
    return Object.assign({}, state, { ex_jobs: action.ex_jobs })
  default:
    return state;
  }
}

// action-creator
const loading = () => {
  return {
    type: LOADING,
  }
}
const connectionFailure = () => {
  return {
    type: CONNECTION_FAILURE,
  }
}
const getCollegesSuccess = data => {
  return {
    type: GET_COLLEGES_SUCCESS,
    colleges: data.colleges,
  }
}
const getFacultiesSuccess = data => {
  return {
    type: GET_FACULTIES_SUCCESS,
    faculties: data.faculties,
  }
}
const getOccupationsSuccess = data => {
  return {
    type: GET_OCCUPATIONS_SUCCESS,
    occupations: data.occupations,
  }
}
const schoolStatus = val => {
  return {
    type: SCHOOL,
    school: val,
  }
}
export const getFaculties = value => {
  return (dispatch) => {
    dispatch(loading())
    return axios.get(`${api_url}/colleges`, {
      params: {
        name: value
      }
    }).then(res => {
      dispatch(getFacultiesSuccess(res.data))
    }).catch(err => {
      dispatch(connectionFailure(err))
    })
  }
}
export const getColleges = () => {
  return (dispatch) => {
    dispatch(loading())
    return axios.get(`${api_url}/colleges`, {
    }).then(res => {
      dispatch(getCollegesSuccess(res.data))
    }).catch(err => {
      dispatch(connectionFailure(err))
    })
  }
}
export const getOccupations = () => {
  return (dispatch) => {
    dispatch(loading())
    return axios.get(`${api_url}/occupations`, {
    }).then(res => {
      dispatch(getOccupationsSuccess(res.data))
    }).catch(err => {
      dispatch(connectionFailure(err))
    })
  }
}
export const schoolChange = val => {
  return (dispatch) => {
    dispatch(getFaculties(val))
    dispatch(schoolStatus(val))
  }
}
export const facultyStatus = val => {
  return {
    type: FACULTY,
    faculty: val
  }
}
export const ageStatus = e => {
  return {
    type: AGE,
    age: e.target.value
  }
}
export const genderStatus = val => {
  return {
    type: GENDER,
    gender: val
  }
}
export const exJobsStatus = val => {
  return {
    type: EX_JOBS,
    ex_jobs: val
  }
}
