import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { GenderData } from './Data.tsx';
import { AppState } from '../../../store.ts';
import { Dispatch } from 'redux';

export const GenderAutoSelect = (props?: AppState) => {
  const options = Object.keys(GenderData).map(key => GenderData[key]);
  return (
    <Autocomplete
      value={props.job.gender || ''}
      onChange={(e, val) => {
        props!.jobDispatch!.genderStatus(val) !== undefined || alert('hello');
      }}
      options={options}
      renderInput={params => (
        <TextField {...params} label="性別" margin="normal" fullWidth />
      )}
    />
  );
};

export const SchoolAutoSelect = (props: AppState) => {
  return (
    <Autocomplete
      value={{ name: props.job.school || '' }}
      getOptionLabel={option => option.name}
      options={props.job.colleges}
      onChange={(e, val) => {
        props.jobDispatch.schoolChange(val ? val.name : '');
      }}
      renderInput={params => (
        <TextField {...params} label="最終学歴" margin="normal" fullWidth />
      )}
    />
  );
};
export const FacultyAutoSelect = (props: AppState) => {
  return (
    <Autocomplete
      value={{ faculty: props.job.faculty || '' }}
      getOptionLabel={option => option.faculty}
      options={props.job.faculties}
      onChange={(e, val) => {
        props.jobDispatch.facultyStatus(val ? val.faculty : '');
      }}
      renderInput={params => (
        <TextField {...params} label="学部" margin="normal" fullWidth />
      )}
    />
  );
};
