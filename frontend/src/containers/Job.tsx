import { connect } from 'react-redux';
import * as JobModule from '../modules/Job';
import Job from '../components/Job';
import { Dispatch } from 'redux';
import { Action } from 'typescript-fsa';
import { DispatchProps } from '../types/job.ts';
import { AppState } from '../store.ts';

const mapStateToProps = (state: AppState) => ({
  job: state.job,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  jobDispatch: {
    stepForward: () => dispatch(JobModule.stepForward()),
    stepBackward: () => dispatch(JobModule.stepBackward()),
    getColleges: () => dispatch(JobModule.getColleges()),
    ageStatus: (e: React.FormEvent<HTMLInputElement>) =>
      dispatch(JobModule.ageStatus(e)),
    genderStatus: (val: string): Dispatch =>
      dispatch(JobModule.genderStatus(val)),
    schoolChange: (val: string) => dispatch(JobModule.schoolChange(val)),
    facultyStatus: (e: string) => dispatch(JobModule.facultyStatus(e)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Job);
