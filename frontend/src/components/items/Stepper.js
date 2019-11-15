import React from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Card, CardBody, CardGroup, Col, Container, Form, InputGroup, Row } from 'reactstrap'
import { ApplicantView } from '../views/Applicant.js'
import { CompanyView } from '../views/Company.js'
import { ResultView } from '../views/Result.js'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '8px',
    marginBottom: '8px'
  },
}))

const getSteps = () => {
  return ['ユーザー情報の入力', '会社フィルタリング', '結果'];
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
        <ApplicantView {...props} />
      }
      {props.job.active_step === 1 &&
        <CompanyView {...props} />
      }
      {props.job.active_step === 2 &&
        <ResultView {...props} />
      }
    </div>
  );
}
