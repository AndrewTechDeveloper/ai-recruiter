import axios from 'axios'
import { api_url } from '../components/items/Url'

const STEP_FORWARD = "STEP_FORWARD"
const STEP_BACKWARD = "STEP_BACKWARD"
const STEP_RESET = "STEP_RESET"
const LOADING = "LOADING"
const TOAST = "TOAST"
const CHECKED_COMPANY = "CHECKED_COMPANY"
const SET_INDUSTRIES = "SET_INDUSTRIES"
const SET_JOBS = "SET_JOBS"
const SET_COLLEGES = "SET_COLLEGES"
const SET_FACULTIES = "SET_FACULTIES"

const initialState = {
  active_step: 0,
  isLoading: false,
  toast: '',
  checked_companies: [],
  company_ranks: [],
  industries: [],
  jobs: [],
}

export default function reducer(state=initialState, action) {
  const checkCompany = () => {
    return state.checked_companies.indexOf(action.checked_company) === -1 ? (
      state.checked_companies.concat(action.checked_company)
    ) : (
      state.checked_companies.filter(val => val !== action.checked_company)
    )
  }
  const companyRank = () => {
    return state.company_ranks.indexOf(action.company_rank) === -1 ? (
      state.company_ranks.concat(action.company_rank)
    ) : (
      state.company_ranks.filter(val => val !== action.company_rank)
    )
  }
  switch (action.type) {
  case STEP_FORWARD:
    return Object.assign({}, state, { active_step: state.active_step + 1 })
  case STEP_BACKWARD:
    return Object.assign({}, state, { active_step: state.active_step - 1 })
  case STEP_RESET:
    return Object.assign({}, state, {
      active_step: 1,
      checked_companies: [],
      company_ranks: [],
    })
  case LOADING:
    return Object.assign({}, state, { isLoading: action.isLoading })
  case TOAST:
    return Object.assign({}, state, { toast: action.toast })
  case CHECKED_COMPANY:
    return Object.assign({}, state, { checked_companies: checkCompany(), company_ranks: companyRank() })
  case SET_INDUSTRIES:
    return Object.assign({}, state, { industries: action.industries })
  case SET_JOBS:
    return Object.assign({}, state, { jobs: action.jobs })
  case SET_COLLEGES:
    return Object.assign({}, state, { colleges: action.colleges })
  case SET_FACULTIES:
    return Object.assign({}, state, { faculties: action.faculties })
  default:
    return state;
  }
}

export const stepBackward = e => {
  return {
    type: STEP_BACKWARD,
  }
}
export const stepForward = e => {
  return {
    type: STEP_FORWARD,
  }
}
export const stepReset = () => {
  return {
    type: STEP_RESET,
  }
}
export const checkCompany = (e, idx) => {
  return {
    type: CHECKED_COMPANY,
    checked_company: Number(e.target.value),
    company_rank: idx
  }
}
const setIndustries = data => {
  return {
    type: SET_INDUSTRIES,
    industries: data,
  }
}
const setJobs = data => {
  return {
    type: SET_JOBS,
    jobs: data,
  }
}
const setColleges = data => {
  return {
    type: SET_COLLEGES,
    colleges: data.colleges.map(val => val.name),
  }
}
const setFaculties = data => {
  return {
    type: SET_FACULTIES,
    faculties: data.faculties.map(val => val.faculty)
  }
}
const loading = boolean => {
  return {
    type: LOADING,
    isLoading: boolean
  }
}
const toast = text => {
  return {
    type: TOAST,
  }
}
export const submitData = props => {
  const gender = props.applicant.gender === "男性" ? 1 : 2
  return (dispatch) => {
    dispatch(loading(true))
    return axios.post(`${api_url}/applicants`, {
      college: props.applicant.college,
      faculty: props.applicant.faculty,
      age: props.applicant.age,
      gender: gender,
      ex_jobs: props.applicant.ex_jobs,
      ex_industries: props.applicant.ex_industries,
      jobs: props.company.jobs,
      industries: props.company.industries,
      working_hours: props.company.working_hours,
      consume_day_off: props.company.consume_day_off,
      satisfaction: props.company.satisfaction,
      motivation: props.company.motivation,
      transparency: props.company.transparency,
      respectable: props.company.respectable,
      growable: props.company.growable,
      mentorship: props.company.mentorship,
      compliance: props.company.compliance,
      fairness: props.company.fairness,
      companies: props.job.checked_companies,
      company_ranks: props.job.company_ranks,
      company_nums: props.company.results.length
    }).then(res => {
      dispatch(toast("dataSubmitted"))
    }).catch(err => {
      dispatch(toast("error"))
    })
  }
}
export const getIndustries = () => {
  return (dispatch) => {
    dispatch(loading())
    return axios.get(`${api_url}/industries`, {
    }).then(res => {
      dispatch(setIndustries(res.data))
    }).catch(err => {
      dispatch(toast(''))
    })
  }
}
export const getJobs = () => {
  return (dispatch) => {
    dispatch(loading())
    return axios.get(`${api_url}/jobs`, {
    }).then(res => {
      dispatch(setJobs(res.data))
    }).catch(err => {
      dispatch(toast(''))
    })
  }
}
export const getColleges = () => {
  return (dispatch) => {
    dispatch(loading())
    return axios.get(`${api_url}/colleges`, {
    }).then(res => {
      dispatch(setColleges(res.data))
    }).catch(err => {
      dispatch(toast(''))
    })
  }
}
export const getFaculties = college => {
  return (dispatch) => {
    dispatch(loading())
    return axios.get(`${api_url}/colleges`, {
      params: {
        name: college
      }
    }).then(res => {
      dispatch(setFaculties(res.data))
    }).catch(err => {
      dispatch(toast(""))
    })
  }
}
