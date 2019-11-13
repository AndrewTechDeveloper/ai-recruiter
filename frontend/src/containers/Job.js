import { connect } from 'react-redux';
import * as JobModule from '../modules/Job';
import Job from '../components/Job.js';

const mapStateToProps = state => {
  return {
    job: state.job
  }
}

const mapDispatchToProps = dispatch => {
  return {
    stepForward: e => dispatch(JobModule.stepForward(e)),
    stepBackward: e => dispatch(JobModule.stepBackward(e)),
    applicantDispatch: {
      getColleges: () => dispatch(JobModule.getColleges()),
      ageStatus: e => dispatch(JobModule.ageStatus(e)),
      genderStatus: val => dispatch(JobModule.genderStatus(val)),
      schoolChange: val => dispatch(JobModule.schoolChange(val)),
      facultyStatus: e => dispatch(JobModule.facultyStatus(e)),
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Job);

