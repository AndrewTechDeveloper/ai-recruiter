import React from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Container } from 'reactstrap'
import { AgeForm } from '../items/applicant/Form.js'
import Fade from '@material-ui/core/Fade';
import { GenderAutoSelect, SchoolAutoSelect, FacultyAutoSelect, ExJobsAutoSelect } from '../items/applicant/AutoSelect.js'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '8px',
    marginBottom: '8px'
  },
}))

export const ApplicantView = props => {
  const classes = useStyles()
  const validation = applicant => {
    return applicant.school === '' || applicant.faculty === '' || applicant.age === '' || applicant.gender === '' || applicant.ex_jobs.length === 0
  }
  return (
    <Container className={classes.container}>
      <SchoolAutoSelect {...props} />
      <Fade in={props.applicant.school !== '高卒' && props.applicant.school !== 'その他'}>
        <div>
          <FacultyAutoSelect {...props} />
        </div>
      </Fade>
      <AgeForm {...props} />
      <GenderAutoSelect {...props} />
      <ExJobsAutoSelect {...props} />
      <Button variant="contained" className='mt-4' disabled={false} color="primary" onClick={()=>props.stepForward()}>
        次へ
      </Button>
    </Container>
  );
}

