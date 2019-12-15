import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import { GenderData } from '../Data.js'

export const GenderAutoSelect = props => {
  const options = Object.keys(GenderData).map(key => GenderData[key])
  return (
    <Autocomplete
      value={props.applicant.gender || ''}
      onChange={(e, val) => {
        props.applicantDispatch.gender(val)
      }}
      options={options}
      renderInput={params => (
        <TextField {...params} label="性別" margin="normal" fullWidth />
      )}
    />
  );
}

export const CollegeAutoSelect = props => {
  return (
    <Autocomplete
      value={{ name: props.applicant.college }}
      getOptionLabel={option => option.name}
      options={props.job.colleges}
      onChange={(e, val) => props.applicantDispatch.college(val ? val.name : '') & props.jobDispatch.getFaculties(val)}
      renderInput={params => (
        <TextField {...params} label="最終学歴(入力すると補完されます)" margin="normal" fullWidth />
      )}
    />
  );
}
export const FacultyAutoSelect = props => {
  return (
    <Autocomplete
      value={{ faculty: props.applicant.faculty }}
      getOptionLabel={option => option.faculty}
      options={props.job.faculties}
      onChange={(e, val) => {
        props.applicantDispatch.faculty(val ? val.faculty : '')
      }}
      renderInput={params => (
        <TextField {...params} label="学部" margin="normal" fullWidth />
      )}
    />
  );
}
export const ExJobsSelect = props => {
  return (
    <FormControl className='my-2'>
      <InputLabel id="job_types-label">職種経歴</InputLabel>
      <Select
        labelId="job_types-label"
        value={props.applicant.ex_jobs}
        onChange={(e) => props.applicantDispatch.exJobs(e)}
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
              <Checkbox checked={props.applicant.ex_jobs.indexOf(val.id) > -1} />
              {val.name}
            </MenuItem>
          )
        })}
      </Select>
      <FormHelperText>過去に経験したことのある職種を選んでください(複数回答可)</FormHelperText>
      <FormHelperText>*該当する職種がない、経歴がない場合はその他を選択してください</FormHelperText>
    </FormControl>
  )
}
export const ExIndustriesSelect = props => {
  return (
    <FormControl className='my-2'>
      <InputLabel id="industry-label">業界経歴</InputLabel>
      <Select
        labelId="industry-label"
        value={props.applicant.ex_industries}
        onChange={(e) => {props.applicantDispatch.exIndustries(e)}}
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
              <Checkbox checked={props.applicant.ex_industries.indexOf(val.id) > -1} />
              {val.name}
            </MenuItem>
          )
        })}
      </Select>
      <FormHelperText>過去に経験したことのある業界を選んでください(複数選択可)</FormHelperText>
      <FormHelperText>*該当する職種がない、経歴がない場合はその他を選択してください</FormHelperText>
    </FormControl>
  )
}
