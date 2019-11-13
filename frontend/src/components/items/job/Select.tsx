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
import { GenderData } from './Data.tsx';
import { AppState } from '../../../store.ts';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '8px',
    marginBottom: '8px',
  },
}));

export const GenderSelect = (props: AppState) => {
  const classes = useStyles();
  return (
    <FormControl>
      <InputLabel htmlFor="faculty">性別</InputLabel>
      <Select
        value={props.job.gender || ''}
        onChange={props.jobDispatch.genderStatus}
        endAdornment={
          <InputAdornment position="end">
            <IconButton>
              <Icon>wc</Icon>
            </IconButton>
          </InputAdornment>
        }
      >
        {Object.keys(GenderData).map(key => {
          return (
            <MenuItem value={key} key={key}>
              {GenderData[key]}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
