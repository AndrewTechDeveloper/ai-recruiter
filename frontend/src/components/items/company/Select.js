import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import { IndustryCategoryData, JobTypesData } from '../Data.js'

export const JobTypesSelect = props => {
  return (
    <FormControl className='my-2'>
      <InputLabel id="job_types-label">希望職種</InputLabel>
      <Select
        labelId="job_types-label"
        value={props.company.job_types}
        onChange={props.companyDispatch.jobTypesStatus}
        multiple
        renderValue={selected => (
          <React.Fragment>
            {selected.map(val => (
              <Chip key={val} label={JobTypesData[val]} />
            ))}
          </React.Fragment>
        )}
      >
        {Object.keys(JobTypesData).map(key => {
          return (
            <MenuItem value={key} key={key}>
              <Checkbox checked={props.company.job_types.indexOf(key) > -1} />
              {JobTypesData[key]}
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
        onChange={props.companyDispatch.industriesStatus}
        multiple
        renderValue={selected => (
          <React.Fragment>
            {selected.map(val => (
              <Chip key={val} label={IndustryCategoryData[val]} />
            ))}
          </React.Fragment>
        )}
      >
        {Object.keys(IndustryCategoryData).map(key => {
          return (
            <MenuItem value={key} key={key}>
              <Checkbox checked={props.company.industries.indexOf(key) > -1} />
              {IndustryCategoryData[key]}
            </MenuItem>
          )
        })}
      </Select>
      <FormHelperText>3つ以上選択してください</FormHelperText>
    </FormControl>
  )
}
