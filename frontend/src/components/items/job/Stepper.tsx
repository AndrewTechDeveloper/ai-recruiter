import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from 'reactstrap';
import { AgeForm } from './Form.tsx';
import { GenderSelect } from './Select.tsx';
import {
  GenderAutoSelect,
  SchoolAutoSelect,
  FacultyAutoSelect,
} from './AutoSelect.tsx';
import { AppState } from '../../../store.ts';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '8px',
    marginBottom: '8px',
  },
}));

const getSteps = () => {
  return ['ユーザー情報の入力', '会社フィルタリング', '結果'];
};

const getStepContent = (stepIndex: number) => {
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
};

export const FormStepper = (props: AppState) => {
  const steps = getSteps();
  const classes = useStyles();
  return (
    <div>
      <Stepper
        activeStep={props.job.activeStep}
        alternativeLabel
        className="pr-0 pl-0"
      >
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {props.job.activeStep === 0 && (
        <Container className={classes.container}>
          <SchoolAutoSelect {...props} />
          <FacultyAutoSelect {...props} />
          <AgeForm {...props} />
          <GenderAutoSelect {...props} />
        </Container>
      )}
      {props.job.activeStep === 1 && (
        <Container className={classes.container}></Container>
      )}
      {props.job.activeStep === 2 && (
        <Container className={classes.container}></Container>
      )}
      <div>
        <Typography>{getStepContent(props.job.activeStep)}</Typography>
        <div>
          <Button
            disabled={props.job.activeStep === 0}
            onClick={() => props.jobDispatch.stepForward()}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={props.jobDispatch.stepBackward}
          >
            {props.job.activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
};
