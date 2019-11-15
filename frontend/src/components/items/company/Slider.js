import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import {
  WatchLater,
  SentimentSatisfiedAlt,
  WorkOff,
  MonetizationOn,
  Group,
  TrendingUp,
  Forum,
  SupervisedUserCircle,
  Work,
  Gavel,
  Assessment,
} from '@material-ui/icons';
import { calculatePie } from '../../views/Company.js'

const icon = type => {
  switch(type) {
  case "working_hours":
    return <WatchLater />
  case "consume_day_off":
    return <WorkOff />
  case "satisfaction":
    return <MonetizationOn />
  case "motivation":
    return <TrendingUp />
  case "transparency":
    return <Forum />
  case "respectable":
    return <Group />
  case "growable":
    return <Work />
  case "mentorship":
    return <SupervisedUserCircle />
  case "compliance":
    return <Gavel />
  case "fairness":
    return <Assessment />
  }
}
const title = type => {
  switch(type){
  case "working_hours":
    return "残業時間の少なさ"
  case "consume_day_off":
    return "有給消化率"
  case "satisfaction":
    return "年収"
  case "motivation":
    return "社員の士気"
  case "transparency":
    return "風通しの良さ"
  case "respectable":
    return "社内の雰囲気"
  case "growable":
    return "成長環境"
  case "mentorship":
    return "育成環境"
  case "compliance":
    return "法令遵守意識"
  case "fairness":
    return "人事の評価正当性"
  }
}
const dispatch = (props, val) => {
  switch(props.type){
  case "working_hours":
    return props.companyDispatch.workingHoursStatus(val)
  case "consume_day_off":
    return props.companyDispatch.consumeDayOffStatus(val)
  case "satisfaction":
    return props.companyDispatch.satisfactionStatus(val)
  case "motivation":
    return props.companyDispatch.motivationStatus(val)
  case "transparency":
    return props.companyDispatch.transparencyStatus(val)
  case "respectable":
    return props.companyDispatch.respectableStatus(val)
  case "growable":
    return props.companyDispatch.growableStatus(val)
  case "mentorship":
    return props.companyDispatch.mentorshipStatus(val)
  case "compliance":
    return props.companyDispatch.complianceStatus(val)
  case "fairness":
    return props.companyDispatch.fairnessStatus(val)
  }
}
const value = props => {
  switch(props.type) {
  case "working_hours":
    return props.company.working_hours
  case "consume_day_off":
    return props.company.consume_day_off
  case "satisfaction":
    return props.company.satisfaction
  case "motivation":
    return props.company.motivation
  case "transparency":
    return props.company.transparency
  case "respectable":
    return props.company.respectable
  case "growable":
    return props.company.growable
  case "mentorship":
    return props.company.mentorship
  case "compliance":
    return props.company.compliance
  case "fairness":
    return props.company.fairness
  }
}

export const FilteringSlider = props => {
  return (
    <div className="mt-4">
      <Typography id="input-slider" gutterBottom>
        {title(props.type)}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          {icon(props.type)}
        </Grid>
        <Grid item xs>
          <Slider
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            value={value(props)}
            onChange={(e, val) => {
              const increase = val -value(props)
              if(calculatePie(props) - increase >= 0){
                dispatch(props, val)
              }
            }}
            step={1}
            min={0}
            max={100}
          />
        </Grid>
      </Grid>
    </div>
  )
}
