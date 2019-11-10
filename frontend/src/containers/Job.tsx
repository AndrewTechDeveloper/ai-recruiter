import { connect } from 'react-redux';
import * as JobModule from '../modules/Applicant';
import Job from '../components/Job';
import { Dispatch } from 'redux';

interface ApplicantState {
  loggedIn: boolean;
  session: string;
  userName: string;
}

const mapStateToProps = state => {
  return {
    job: state.job,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Job);
