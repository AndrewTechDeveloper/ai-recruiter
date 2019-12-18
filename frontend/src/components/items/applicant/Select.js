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
      error
      options={options}
      renderInput={params => (
        <TextField {...params} label="性別" margin="normal" fullWidth />
      )}
    />
  );
}

export const CollegeAutoSelect = props => {
  return (
    <FormControl className='my-2' error>
      <Autocomplete
        freeSolo
        value={props.applicant.college}
        options={props.job.colleges}
        onChange={(e, val) => props.applicantDispatch.college(val) & props.jobDispatch.getFaculties(val)}
        renderInput={params => (
          <TextField {...params} label="最終学歴(入力すると補完されます)" margin="normal" fullWidth />
        )}
      />
      {props.job.colleges && props.applicant.college !== '' && props.job.colleges.indexOf(props.applicant.college) === -1 &&
        <FormHelperText>選択肢の中から選んでください</FormHelperText>
      }
    </FormControl>
  );
}
export const FacultyAutoSelect = props => {
  return (
    <FormControl className='my-2' error>
      <Autocomplete
        freeSolo
        value={props.applicant.faculty}
        options={props.job.faculties}
        onChange={(e, val) => props.applicantDispatch.faculty(val)}
        renderInput={params => (
          <TextField {...params} label="学部" margin="normal" fullWidth />
        )}
      />
      {props.job.faculties && props.applicant.faculty !== '' && props.job.faculties.indexOf(props.applicant.faculty) === -1 &&
        <FormHelperText>選択肢の中から選んでください</FormHelperText>
      }
    </FormControl>
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
      <FormHelperText>*該当する職種がない、経歴がない場合はその他を選択してください</FormHelperText>
    </FormControl>
  )
}
