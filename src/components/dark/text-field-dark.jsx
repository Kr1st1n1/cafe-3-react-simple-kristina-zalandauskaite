/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { TextField } from '@mui/material';

const TextFieldDark = ({
  InputLabelProps,
  InputProps,
  sx,
  ...props
}) => (
  <TextField
    {...props}
    InputLabelProps={{ sx: { color: 'theme.palette.secondary.main' }, ...InputLabelProps }}
    InputProps={{ sx: { color: 'theme.palette.secondary.main' }, ...InputProps }}
    sx={{ bgcolor: 'white', ...sx }}
  />
);

export default TextFieldDark;
