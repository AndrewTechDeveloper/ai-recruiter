import React from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import { Container } from 'reactstrap'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { JobTypesAutoSelect, IndustriesAutoSelect } from '../items/company/AutoSelect.js'
import { FilteringSlider } from '../items/company/Slider.js'
import AdbIcon from '@material-ui/icons/Adb';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '8px',
    marginBottom: '8px'
  },
}))

export const calculatePie = props => {
  const state = props.company
  const totalState = state.working_hours + state.consume_day_off + state.satisfaction + state.motivation + state.transparency + state.respectable + state.growable + state.mentorship + state.compliance + state.fairness
  const pie = 100 - totalState
  return pie
}

export const CompanyView = props => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Typography variant="h4" className="text-muted text-center" gutterBottom>
        {calculatePie(props) !== 0 ? calculatePie(props) : "DONE!"}
      </Typography>
      <Typography variant="subtitle1" className="text-center mb-4" gutterBottom>
        優先度が高い順に100の数値を割り振ってください
      </Typography>
      <FilteringSlider {...props} type="working_hours"/>
      <FilteringSlider {...props} type="consume_day_off"/>
      <FilteringSlider {...props} type="satisfaction"/>
      <FilteringSlider {...props} type="motivation"/>
      <FilteringSlider {...props} type="transparency"/>
      <FilteringSlider {...props} type="respectable"/>
      <FilteringSlider {...props} type="growable"/>
      <FilteringSlider {...props} type="mentorship"/>
      <FilteringSlider {...props} type="compliance"/>
      <FilteringSlider {...props} type="fairness"/>
      <Divider/>
      <JobTypesAutoSelect {...props} />
      <IndustriesAutoSelect {...props} />
      <div>
        <Button
          disabled={props.job.active_step === 0}
          onClick={()=>props.stepForward()}
        >
          Back
        </Button>
        <Button variant="contained" color="primary" startIcon={<AdbIcon />} onClick={()=>props.stepBackward() && props.companyDispatch.postData(props)}>
          Analyze
        </Button>
      </div>
    </Container>
  );
}
