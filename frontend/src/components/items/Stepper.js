import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { ApplicantView } from '../views/Applicant.js'
import { CompanyView } from '../views/Company.js'
import { ResultView } from '../views/Result.js'
import { OpenWorksView } from '../views/OpenWorks.js'

const getSteps = () => {
  return ['ユーザー情報の入力', '会社フィルタリング', '結果', '企業情報を見る'];
}

export const FormStepper = props => {
  const steps = getSteps();
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
      {props.job.active_step === 3 &&
        <OpenWorksView {...props} />
      }
    </div>
  );
}
