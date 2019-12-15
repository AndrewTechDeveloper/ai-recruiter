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
    jobDispatch: {
      stepForward: e => dispatch(JobModule.stepForward(e)),
      stepBackward: e => dispatch(JobModule.stepBackward(e)),
      stepReset: e => dispatch(JobModule.stepReset(e)),
      checkCompany: (e, i) => dispatch(JobModule.checkCompany(e, i)),
      submitData: props => dispatch(JobModule.submitData(props)),
      getIndustries: () => dispatch(JobModule.getIndustries()),
      getJobs: () => dispatch(JobModule.getJobs()),
      getColleges: () => dispatch(JobModule.getColleges()),
      getFaculties: college => dispatch(JobModule.getFaculties(college)),
    },
    applicantDispatch: {
      age: e => dispatch(ApplicantModule.age(e)),
      gender: val => dispatch(ApplicantModule.gender(val)),
      college: val => dispatch(ApplicantModule.college(val)),
      faculty: val => dispatch(ApplicantModule.faculty(val)),
      exJobs: e => dispatch(ApplicantModule.exJobs(e)),
      exIndustries: e => dispatch(ApplicantModule.exIndustries(e)),
    },
    companyDispatch: {
      jobs: e => dispatch(CompanyModule.jobs(e)),
      industries: e => dispatch(CompanyModule.industries(e)),
      workingHours: val => dispatch(CompanyModule.workingHours(val)),
      consumeDayOff: val => dispatch(CompanyModule.consumeDayOff(val)),
      satisfaction: val => dispatch(CompanyModule.satisfaction(val)),
      motivation: val => dispatch(CompanyModule.motivation(val)),
      transparency: val => dispatch(CompanyModule.transparency(val)),
      respectable: val => dispatch(CompanyModule.respectable(val)),
      growable: val => dispatch(CompanyModule.growable(val)),
      mentorship: val => dispatch(CompanyModule.mentorship(val)),
      compliance: val => dispatch(CompanyModule.compliance(val)),
      fairness: val => dispatch(CompanyModule.fairness(val)),
      postData: props => dispatch(CompanyModule.postData(props)),
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Job);
