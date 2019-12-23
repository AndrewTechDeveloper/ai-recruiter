import axios from 'axios'
import { api_url } from '../components/items/Url'
// action type
const LOADING = "LOADING"
const TOAST = "TOAST"
const JOBS = "JOBS"
const INDUSTRIES = "INDUSTRIES"
const WORKING_HOURS = "WORKING_HOURS"
const CONSUME_DAY_OFF = "CONSUME_DAY_OFF"
const SATISFACTION= "SATISFACTION"
const MOTIVATION = "MOTIVATION"
const TRANSPARENCY = "TRANSPARENCY"
const RESPECTABLE = "RESPECTABLE"
const GROWABLE = "GROWABLE"
const MENTORSHIP = "MENTORSHIP"
const COMPLIANCE = "COMPLIANCE"
const FAIRNESS = "FAIRNESS"
const RESULTS = "RESULTS"
const ALGORITHM_TYPE = "ALGORITHM_TYPE"

const initialState = {
  isLoading: false,
  jobs: [],
  industries: [],
  working_hours: 0,
  consume_day_off: 0,
  satisfaction: 0,
  motivation: 0,
  transparency: 0,
  respectable: 0,
  growable: 0,
  mentorship: 0,
  compliance: 0,
  fairness: 0,
  toast: '',
  results: [],
  algorithm_type: null
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
  case TOAST:
    return Object.assign({}, state, { toast: action.toast })
  case LOADING:
    return Object.assign({}, state, { isLoading: true })
  case JOBS:
    return Object.assign({}, state, { jobs: action.jobs })
  case INDUSTRIES:
    return Object.assign({}, state, { industries: action.industries })
  case WORKING_HOURS:
    return Object.assign({}, state, { working_hours: action.working_hours })
  case CONSUME_DAY_OFF:
    return Object.assign({}, state, { consume_day_off: action.consume_day_off })
  case SATISFACTION:
    return Object.assign({}, state, { satisfaction: action.satisfaction })
  case MOTIVATION:
    return Object.assign({}, state, { motivation: action.motivation })
  case TRANSPARENCY:
    return Object.assign({}, state, { transparency: action.transparency })
  case RESPECTABLE:
    return Object.assign({}, state, { respectable: action.respectable })
  case GROWABLE:
    return Object.assign({}, state, { growable: action.growable })
  case MENTORSHIP:
    return Object.assign({}, state, { mentorship: action.mentorship })
  case COMPLIANCE:
    return Object.assign({}, state, { compliance: action.compliance })
  case FAIRNESS:
    return Object.assign({}, state, { fairness: action.fairness })
  case RESULTS:
    return Object.assign({}, state, { results: action.results, isLoading: false })
  case ALGORITHM_TYPE:
    return Object.assign({}, state, { algorithm_type: action.algorithm_type })
  default:
    return state;
  }
}

// action-creator
export const jobs = e => {
  return {
    type: JOBS,
    jobs: e.target.value
  }
}
export const industries = e => {
  return {
    type: INDUSTRIES,
    industries: e.target.value
  }
}
export const workingHours = val => {
  return {
    type: WORKING_HOURS,
    working_hours: val
  }
}
export const consumeDayOff = val => {
  return {
    type: CONSUME_DAY_OFF,
    consume_day_off: val
  }
}
export const satisfaction = val => {
  return {
    type: SATISFACTION,
    satisfaction: val
  }
}
export const motivation = val => {
  return {
    type: MOTIVATION,
    motivation: val
  }
}
export const transparency = val => {
  return {
    type: TRANSPARENCY,
    transparency: val
  }
}
export const respectable = val => {
  return {
    type: RESPECTABLE,
    respectable: val
  }
}
export const growable = val => {
  return {
    type: GROWABLE,
    growable: val
  }
}
export const mentorship = val => {
  return {
    type: MENTORSHIP,
    mentorship: val
  }
}
export const compliance = val => {
  return {
    type: COMPLIANCE,
    compliance: val
  }
}
export const fairness = val => {
  return {
    type: FAIRNESS,
    fairness: val
  }
}
const loading = () => {
  return {
    type: LOADING,
  }
}
const toast = text => {
  return {
    type: TOAST,
  }
}
const results = data => {
  return {
    type: RESULTS,
    results: data.companies
  }
}
const algorithm = rand => {
  return {
    type: ALGORITHM_TYPE,
    algorithm_type: rand
  }
}

export const postData = props => {
  const rand = Math.floor(Math.random() * 3) + 1
  return (dispatch) => {
    dispatch(loading())
    return axios.get(`${api_url}/companies`, {
      params: {
        applicant: props.applicant,
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
        algorithm_type: rand
      }
    }).then(res => {
      dispatch(algorithm(rand))
      dispatch(results(res.data))
    }).catch(err => {
      dispatch(toast(err))
    })
  }
}
