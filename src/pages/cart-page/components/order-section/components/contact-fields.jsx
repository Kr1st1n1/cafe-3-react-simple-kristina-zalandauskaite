import React from 'react';
import {
  MenuItem,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
  Divider,
} from '@mui/material';
import { TextFieldDark } from '../../../../../components/dark';

const cities = [
  {
    value: 'Vilnius',
    label: 'Vilnius',
  },
  {
    value: 'Kaunas',
    label: 'Kaunas',
  },
  {
    value: 'Šiauliai',
    label: 'Šiauliai',
  },
  {
    value: 'Klaipdėda',
    label: 'Klaipdėda',
  },
];

const genders = [
  { value: 'female', label: 'Ms.' },
  { value: 'male', label: 'Mr.' },
  { value: 'other', label: 'Other' },
];

const ContactFields = ({
  fullname,
  email,
  gender,
  city,
  setFullname,
  setEmail,
  setGender,
  setCity,
}) => (
  <>
    <Divider textAlign="left">Contact information</Divider>

    <TextFieldDark
      name="fullname"
      label="fullname"
      variant="filled"
      fullWidth
      onChange={(event) => setFullname(event.target.value)}
      value={fullname}
    />
    <TextFieldDark
      name="email"
      label="email"
      variant="filled"
      fullWidth
      onChange={(event) => setEmail(event.target.value)}
      value={email}
    />
    <TextFieldDark
      name="City"
      select
      label="City"
      variant="filled"
      fullWidth
      onChange={(event) => setCity(event.target.value)}
      value={city}
    >
      {cities.map(
        ({ value, label }) => <MenuItem key={value} value={value}>{label}</MenuItem>,
      )}
    </TextFieldDark>

    <FormControl sx={{ width: '100%' }}>
      <RadioGroup
        sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
        name="gender"
        value={gender}
        onChange={(_, newGender) => setGender(newGender)}
      >
        {genders.map(({ value, label }) => (
          <FormControlLabel value={value} control={<Radio />} label={label} />
        ))}
      </RadioGroup>
    </FormControl>
  </>
);

export default ContactFields;
