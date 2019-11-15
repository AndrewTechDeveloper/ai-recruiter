import React from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import { Container } from 'reactstrap'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { JobCard } from '../items/result/Card.js'
import { JobsList } from '../items/result/List.js'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '8px',
    marginBottom: '8px'
  },
}))

export const ResultView = props => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <JobsList {...props}/>
      <div>
        <Button
          disabled={props.job.active_step === 0}
          onClick={()=>props.stepForward()}
        >
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={()=>props.stepBackward() && props.companyDispatch.postData(props)}>
          End
        </Button>
      </div>
    </Container>
  );
}
