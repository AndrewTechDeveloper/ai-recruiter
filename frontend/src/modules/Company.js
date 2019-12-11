import axios from 'axios'
import { api_url } from '../components/items/Url'
// action type
const LOADING = "LOADING"
const CONNECTION_FAILURE = "CONNECTION_FAILURE"
const JOB_TYPES = "JOB_TYPES"
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
const GET_JOBS_SUCCESS = "GET_JOBS_SUCCESS"

const initialState = {
  isLoading: false,
  jobs: [],
  job_types: [],
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
  fairness: 0
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
  case CONNECTION_FAILURE:
    return Object.assign({}, state, { isLoading: false })
  case LOADING:
    return Object.assign({}, state, { isLoading: true })
  case JOB_TYPES:
    return Object.assign({}, state, { job_types: action.job_types })
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
  case GET_JOBS_SUCCESS:
    return Object.assign({}, state, { isLoading: false, jobs: action.jobs })
  default:
    return state;
  }
}

// action-creator
export const jobTypesStatus = e => {
  return {
    type: JOB_TYPES,
    job_types: e.target.value
  }
}
export const industriesStatus = e => {
  return {
    type: INDUSTRIES,
    industries: e.target.value
  }
}
export const workingHoursStatus = val => {
  return {
    type: WORKING_HOURS,
    working_hours: val
  }
}
export const consumeDayOffStatus = val => {
  return {
    type: CONSUME_DAY_OFF,
    consume_day_off: val
  }
}
export const satisfactionStatus = val => {
  return {
    type: SATISFACTION,
    satisfaction: val
  }
}
export const motivationStatus = val => {
  return {
    type: MOTIVATION,
    motivation: val
  }
}
export const transparencyStatus = val => {
  return {
    type: TRANSPARENCY,
    transparency: val
  }
}
export const respectableStatus = val => {
  return {
    type: RESPECTABLE,
    respectable: val
  }
}
export const growableStatus = val => {
  return {
    type: GROWABLE,
    growable: val
  }
}
export const mentorshipStatus = val => {
  return {
    type: MENTORSHIP,
    mentorship: val
  }
}
export const complianceStatus = val => {
  return {
    type: COMPLIANCE,
    compliance: val
  }
}
export const fairnessStatus = val => {
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
const connectionFailure = () => {
  return {
    type: CONNECTION_FAILURE,
  }
}
const getJobsSuccess = data => {
  return {
    type: GET_JOBS_SUCCESS,
    jobs: data.jobs
  }
}
export const postData = props => {
  return (dispatch) => {
    dispatch(loading())
    return axios.get(`${api_url}/jobs`, {
      params: {
        job_types: props.company.job_types,
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
        fairness: props.company.fairness
      }
    }).then(res => {
      dispatch(getJobsSuccess(res.data))
    }).catch(err => {
      dispatch(connectionFailure(err))
    })
  }
}
