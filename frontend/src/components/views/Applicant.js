import React from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Container } from 'reactstrap'
import { AgeForm } from '../items/applicant/Form.js'
import { GenderAutoSelect, SchoolAutoSelect, FacultyAutoSelect, ExJobsAutoSelect } from '../items/applicant/AutoSelect.js'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '8px',
    marginBottom: '8px'
  },
}))

export const ApplicantView = props => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <SchoolAutoSelect {...props} />
      <FacultyAutoSelect {...props} />
      <AgeForm {...props} />
      <GenderAutoSelect {...props} />
      <ExJobsAutoSelect {...props} />
      <div>
        <Button
          disabled={props.job.active_step === 0}
          onClick={()=>props.stepForward()}
        >
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={()=>props.stepBackward()}>
          Next
        </Button>
      </div>
    </Container>
  );
}

