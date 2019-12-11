import { connect } from 'react-redux';
import * as JobModule from '../modules/Job';
import * as ApplicantModule from '../modules/Applicant.js'
import * as CompanyModule from '../modules/Company.js'
import Job from '../components/Job.js';

const mapStateToProps = state => {
  return {
    job: state.job,
    applicant: state.applicant,
    company: state.company
  }
}

const mapDispatchToProps = dispatch => {
  return {
    stepForward: e => dispatch(JobModule.stepForward(e)),
    stepBackward: e => dispatch(JobModule.stepBackward(e)),
    checkCompany: (e, i) => dispatch(JobModule.checkCompany(e, i)),
    submitData: props => dispatch(JobModule.submitData(props)),
    applicantDispatch: {
      getColleges: () => dispatch(ApplicantModule.getColleges()),
      getOccupations: () => dispatch(ApplicantModule.getOccupations()),
      ageStatus: e => dispatch(ApplicantModule.ageStatus(e)),
      genderStatus: val => dispatch(ApplicantModule.genderStatus(val)),
      schoolChange: val => dispatch(ApplicantModule.schoolChange(val)),
      facultyStatus: val => dispatch(ApplicantModule.facultyStatus(val)),
      exJobsStatus: val => dispatch(ApplicantModule.exJobsStatus(val)),
    },
    companyDispatch: {
      jobTypesStatus: e => dispatch(CompanyModule.jobTypesStatus(e)),
      industriesStatus: e => dispatch(CompanyModule.industriesStatus(e)),
      workingHoursStatus: val => dispatch(CompanyModule.workingHoursStatus(val)),
      consumeDayOffStatus: val => dispatch(CompanyModule.consumeDayOffStatus(val)),
      satisfactionStatus: val => dispatch(CompanyModule.satisfactionStatus(val)),
      motivationStatus: val => dispatch(CompanyModule.motivationStatus(val)),
      transparencyStatus: val => dispatch(CompanyModule.transparencyStatus(val)),
      respectableStatus: val => dispatch(CompanyModule.respectableStatus(val)),
      growableStatus: val => dispatch(CompanyModule.growableStatus(val)),
      mentorshipStatus: val => dispatch(CompanyModule.mentorshipStatus(val)),
      complianceStatus: val => dispatch(CompanyModule.complianceStatus(val)),
      fairnessStatus: val => dispatch(CompanyModule.fairnessStatus(val)),
      postData: props => dispatch(CompanyModule.postData(props)),
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Job);
