import axios from 'axios'
import { api_url } from '../components/items/Url'
// action type
const STEP_FORWARD = "STEP_FORWARD"
const STEP_BACKWARD = "STEP_BACKWARD"
const LOADING = "LOADING"

const initialState = {
  active_step: 0,
  isLoading: false,
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
  case STEP_FORWARD:
    return Object.assign({}, state, { active_step: state.active_step + 1 })
  case STEP_BACKWARD:
    return Object.assign({}, state, { active_step: state.active_step - 1 })
  case LOADING:
    return Object.assign({}, state, { loading: true })
  default:
    return state;
  }
}

// action-creator
export const stepBackward = e => {
  return {
    type: STEP_FORWARD,
  }
}
export const stepForward = e => {
  return {
    type: STEP_BACKWARD,
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
