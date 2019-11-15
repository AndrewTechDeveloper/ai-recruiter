import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { IndustryCategoryData, JobTypesData } from '../Data.js'

export const JobTypesAutoSelect = props => {
  const options = Object.keys(JobTypesData).map(key => JobTypesData[key])
  return (
    <Autocomplete
      value={props.company.job_types}
      options={options}
      multiple
      onChange={(e, val) => {
        props.companyDispatch.jobTypesStatus(val)
      }}
      renderInput={params => (
        <TextField {...params} label="希望職種" margin="normal" fullWidth />
      )}
    />
  );
}
export const IndustriesAutoSelect = props => {
  const options = Object.keys(IndustryCategoryData).map(key => IndustryCategoryData[key])
  return (
    <Autocomplete
      value={props.company.industries}
      options={options}
      multiple
      onChange={(e, val) => {
        props.companyDispatch.industriesStatus(val)
      }}
      renderInput={params => (
        <TextField {...params} label="希望業界" margin="normal" fullWidth />
      )}
    />
  );
}
export const SchoolAutoSelect = props => {
  return (
    <Autocomplete
      value={{name: props.applicant.school}}
      getOptionLabel={option => option.name}
      options={props.applicant.colleges}
      onChange={(e, val) => {
        props.applicantDispatch.schoolChange(val ? val.name : '')
      }}
      renderInput={params => (
        <TextField {...params} label="最終学歴" margin="normal" fullWidth />
      )}
    />
  );
}
export const ExJobsAutoSelect = props => {
  return (
    <Autocomplete
      getOptionLabel={option => option.name}
      options={props.applicant.occupations}
      multiple
      onChange={(e, val) => {
        val = val.map(v => v.name)
        props.applicantDispatch.exJobsStatus(val)
      }}
      renderInput={params => (
        <TextField {...params} label="職種" margin="normal" fullWidth />
      )}
    />
  );
}
