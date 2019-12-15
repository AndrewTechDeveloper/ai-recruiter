const LOADING = "LOADING"
const COLLEGE = "COLLEGE"
const FACULTY = "FACULTY"
const AGE = "AGE"
const GENDER = "GENDER"
const TOAST = "TOAST"
const EX_INDUSTRIES = "EX_INDUSTRIES"
const EX_JOBS = "EX_JOBS"

const initialState = {
  college: '',
  faculty: '',
  age: null,
  gender: null,
  colleges: [],
  faculties: [],
  ex_jobs: [],
  ex_industries: [],
  toast: '',
  isLoading: false,
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
  case LOADING:
    return Object.assign({}, state, { loading: true })
  case COLLEGE:
    return Object.assign({}, state, { college: action.college })
  case FACULTY:
    return Object.assign({}, state, { faculty: action.faculty })
  case AGE:
    return Object.assign({}, state, { age: action.age })
  case GENDER:
    return Object.assign({}, state, { gender: action.gender })
  case TOAST:
    return Object.assign({}, state, { toast: action.toast })
  case EX_JOBS:
    return Object.assign({}, state, { ex_jobs: action.ex_jobs })
  case EX_INDUSTRIES:
    return Object.assign({}, state, { ex_industries: action.ex_industries })
  default:
    return state;
  }
}

export const college = val => {
  return {
    type: COLLEGE,
    college: val
  }
}
export const faculty = val => {
  return {
    type: FACULTY,
    faculty: val
  }
}
export const age = e => {
  return {
    type: AGE,
    age: e.target.value
  }
}
export const gender = val => {
  return {
    type: GENDER,
    gender: val
  }
}
export const exJobs = e => {
  return {
    type: EX_JOBS,
    ex_jobs: e.target.value
  }
}
export const exIndustries = e => {
  return {
    type: EX_INDUSTRIES,
    ex_industries: e.target.value
  }
}
