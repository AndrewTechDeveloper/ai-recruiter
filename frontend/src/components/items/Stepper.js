import React from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Card, CardBody, CardGroup, Col, Container, Form, InputGroup, Row } from 'reactstrap'
import { SchoolForm, AgeForm, GradeForm } from './Form.js'
import { GenderSelect } from './Select.js'
import { GenderAutoSelect, SchoolAutoSelect, FacultyAutoSelect } from './AutoSelect.js'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '8px',
    marginBottom: '8px'
  },
}))

const getSteps = () => {
  return ['ユーザー情報の入力', '会社フィルタリング', '結果'];
}

const getStepContent = (stepIndex) => {
  switch (stepIndex) {
  case 0:
    return 'Select campaign settings...';
  case 1:
    return 'What is an ad group anyways?';
  case 2:
    return 'This is the bit I really care about!';
  default:
    return 'Unknown stepIndex';
  }
}

export const FormStepper = props => {
  const steps = getSteps();
  const classes = useStyles()
  return (
    <div>
      <Stepper activeStep={props.job.active_step} alternativeLabel className='pr-0 pl-0'>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {props.job.active_step === 0 &&
        <Container className={classes.container}>
          <SchoolAutoSelect {...props} />
          <FacultyAutoSelect {...props} />
          <AgeForm {...props} />
          <GenderAutoSelect {...props} />
        </Container>
      }
      {props.job.active_step === 1 &&
        <Container className={classes.container}>
        </Container>
      }
      {props.job.active_step === 2 &&
        <Container className={classes.container}>
        </Container>
      }
      <div>
        <Typography>{getStepContent(props.job.active_step)}</Typography>
        <div>
          <Button
            disabled={props.job.active_step === 0}
            onClick={()=>props.stepForward()}
          >
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={()=>props.stepBackward()}>
            {props.job.active_step === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
}

