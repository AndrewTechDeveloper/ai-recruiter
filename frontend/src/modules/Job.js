import axios from 'axios'
import { api_url } from '../components/items/Url'

const STEP_FORWARD = "STEP_FORWARD"
const STEP_BACKWARD = "STEP_BACKWARD"
const LOADING = "LOADING"
const TOAST = "TOAST"
const CHECKED_COMPANY = "CHECKED_COMPANY"

const initialState = {
  active_step: 0,
  isLoading: false,
  toast: '',
  checked_companies: [],
  companies_ranks: [],
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
    return state.companies_ranks.indexOf(action.company_rank) === -1 ? (
      state.companies_ranks.concat(action.company_rank)
    ) : (
      state.companies_ranks.filter(val => val !== action.company_rank)
    )
  }
  switch (action.type) {
  case STEP_FORWARD:
    return Object.assign({}, state, { active_step: state.active_step + 1 })
  case STEP_BACKWARD:
    return Object.assign({}, state, { active_step: state.active_step - 1 })
  case LOADING:
    return Object.assign({}, state, { isLoading: action.isLoading })
  case TOAST:
    return Object.assign({}, state, { toast: action.toast })
  case CHECKED_COMPANY:
    return Object.assign({}, state, { checked_companies: checkCompany(), companies_ranks: companyRank() })
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
export const checkCompany = (e, idx) => {
  return {
    type: CHECKED_COMPANY,
    checked_company: Number(e.target.value),
    company_rank: idx
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
  return (dispatch) => {
    dispatch(loading(true))
    return axios.post(`${api_url}/applicants`, {
      jobs: props.job.checked_companies,
      job_ranks: props.job.company_ranks,
      school: "早稲田大",
      faculty: "国際教養",
      age: 22,
      gender: 1,
      ex_jobs: [22, 33],
      job_types: [1,3,5],
      industries: [2,3,1,5],
      working_hours: 10,
      consume_day_off: 20,
      satisfaction: 30,
      motivation: 10,
      transparency: 20,
      respectable: 10,
      growable: 10,
      mentorship: 12,
      compliance: 3,
      fairness: 7
      // jobs: props.job.checked_companies,
      // job_ranks: props.job.company_ranks,
      // school: props.applicant.school,
      // faculty: props.applicant.faculty,
      // age: props.applicant.age,
      // gender: props.applicant.gender,
      // ex_jobs: props.applicant.ex_jobs,
      // job_types: props.company.job_types,
      // industries: props.company.industries,
      // working_hours: props.company.working_hours,
      // consume_day_off: props.company.consume_day_off,
      // satisfaction: props.company.satisfaction,
      // motivation: props.company.motivation,
      // transparency: props.company.transparency,
      // respectable: props.company.respectable,
      // growable: props.company.growable,
      // mentorship: props.company.mentorship,
      // compliance: props.company.compliance,
      // fairness: props.company.fairness
    }).then(res => {
      dispatch(toast("dataSubmitted"))
    }).catch(err => {
      dispatch(toast("error"))
    })
  }
}
