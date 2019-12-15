import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

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
        onChange={props.applicantDispatch.age}
        value={props.applicant.age || ''}
      />
    </FormControl>
  )
}
