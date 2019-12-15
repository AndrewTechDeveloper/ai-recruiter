import React from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import { Container } from 'reactstrap'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import Fade from '@material-ui/core/Fade';
import { JobsSelect, IndustriesSelect } from '../items/company/Select.js'
import { FilteringSlider } from '../items/company/Slider.js'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '8px',
    marginBottom: '8px'
  },
  fab: {
    position: 'fixed',
    bottom: '0',
    right: '0',
    margin: '40px'
  }
}))

export const calculatePie = props => {
  const state = props.company
  const totalState = state.working_hours
    + state.consume_day_off
    + state.satisfaction
    + state.motivation
    + state.transparency
    + state.respectable
    + state.growable
    + state.mentorship
    + state.compliance
    + state.fairness
  const pie = 100 - totalState
  return pie
}

export const CompanyView = props => {
  const classes = useStyles()
  const validation = company => {
    return calculatePie(props) !== 0
      || company.jobs.length < 3
      || company.industries.length < 3
  }
  return (
    <Container className={classes.container}>
      <Fade in={calculatePie(props) !== 0}>
        <Fab color="primary" className={classes.fab}>
          {`残り: ${calculatePie(props)}`}
        </Fab>
      </Fade>
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
      <JobsSelect {...props} className='mt-4'/>
      <IndustriesSelect {...props} className='mt-4'/>
      <div className='mt-4'>
        <Button onClick={()=>props.jobDispatch.stepBackward()} className='mr-4'>
          戻る
        </Button>
        <Button variant="contained" color="primary" disabled={validation(props.company)} onClick={()=>props.jobDispatch.stepForward() && props.companyDispatch.postData(props)}>
          結果を見る
        </Button>
      </div>
    </Container>
  );
}
