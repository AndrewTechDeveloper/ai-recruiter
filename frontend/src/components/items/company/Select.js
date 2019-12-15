import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

export const JobsSelect = props => {
  return (
    <FormControl className='my-2'>
      <InputLabel id="job_types-label">希望職種</InputLabel>
      <Select
        labelId="job_types-label"
        value={props.company.jobs}
        onChange={(e) => props.companyDispatch.jobs(e)}
        multiple
        renderValue={selected => (
          <React.Fragment>
            {selected.map(val => (
              <Chip key={val} label={props.job.jobs[val-1].name} />
            ))}
          </React.Fragment>
        )}
      >
        {props.job.jobs.map(val => {
          return (
            <MenuItem value={val.id} key={val.id}>
              <Checkbox checked={props.company.jobs.indexOf(val.id) > -1} />
              {val.name}
            </MenuItem>
          )
        })}
      </Select>
      <FormHelperText>3つ以上選択してください</FormHelperText>
    </FormControl>
  )
}
export const IndustriesSelect = props => {
  return (
    <FormControl className='my-2'>
      <InputLabel id="industry-label">希望業界</InputLabel>
      <Select
        labelId="industry-label"
        value={props.company.industries}
        onChange={(e) => {props.companyDispatch.industries(e)}}
        multiple
        renderValue={selected => (
          <React.Fragment>
            {selected.map(val => (
              <Chip key={val} label={props.job.industries[val-1].name} />
            ))}
          </React.Fragment>
        )}
      >
        {props.job.industries.map(val => {
          return (
            <MenuItem value={val.id} key={val.id}>
              <Checkbox checked={props.company.industries.indexOf(val.id) > -1} />
              {val.name}
            </MenuItem>
          )
        })}
      </Select>
      <FormHelperText>3つ以上選択してください</FormHelperText>
    </FormControl>
  )
}
