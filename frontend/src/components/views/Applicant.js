import React from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Container } from 'reactstrap'
import { AgeForm } from '../items/applicant/Form.js'
import Fade from '@material-ui/core/Fade';
import { GenderAutoSelect, CollegeAutoSelect, FacultyAutoSelect, ExIndustriesSelect, ExJobsSelect } from '../items/applicant/Select.js'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '8px',
    marginBottom: '8px'
  },
}))

export const ApplicantView = props => {
  const classes = useStyles()
  const validation = applicant => {
    return (props.job.colleges && props.job.colleges.indexOf(applicant.college) === -1)
      || (props.job.faculties && props.job.faculties.indexOf(applicant.faculty) === -1)
      || applicant.age === ''
      || applicant.gender === ''
      || applicant.ex_jobs.length === 0
      || applicant.ex_industries.length === 0
  }
  return (
    <Container className={classes.container}>
      <CollegeAutoSelect {...props} />
      <Fade in={props.applicant.college !== '高卒' && props.applicant.college !== 'その他'}>
        <div>
          <FacultyAutoSelect {...props} />
        </div>
      </Fade>
      <AgeForm {...props} />
      <GenderAutoSelect {...props} />
      <ExJobsSelect {...props} />
      <ExIndustriesSelect {...props} />
      <Button variant="contained" className='mt-4' disabled={validation(props.applicant)} color="primary" onClick={()=>props.jobDispatch.stepForward()}>
        次へ
      </Button>
    </Container>
  );
}

