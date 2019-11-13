import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  form: {
    marginTop: '8px',
    marginBottom: '8px'
  },
}))

export const AgeForm = props => {
  const classes = useStyles()
  return (
    <FormControl className={classes.form}>
      <InputLabel htmlFor="text">年齢</InputLabel>
      <Input
        id="school"
        type="number"
        onChange={props.applicantDispatch.ageStatus}
        value={props.job.age || ''}
      />
    </FormControl>
  )
}
export const IndustryForm = props => {
  return (
    <FormControl >
      <InputLabel htmlFor="text">業界</InputLabel>
      <Input
        id="industry"
        onChange={props.applicantDispatch.ageStatus}
        value={props.job.age || ''}
      />
    </FormControl>
  )
}
export const SectorForm = props => {
  return (
    <FormControl >
      <InputLabel htmlFor="text">業種</InputLabel>
      <Input
        id="sector"
        onChange={props.applicantDispatch.ageStatus}
        value={props.job.age || ''}
        endAdornment={
          <InputAdornment position="end">
            <IconButton>
              <Icon>work</Icon>
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  )
}

