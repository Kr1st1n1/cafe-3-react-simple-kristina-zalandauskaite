import React from 'react';
import {
  Typography,
  Box,
  TextField,
  MenuItem,
  Button,
  FormControlLabel,
  Checkbox,
  Autocomplete,
  FormControl,
  RadioGroup,
  Radio,
  Divider,
} from '@mui/material';

import { Container } from './components';

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

const deliveryMethods = [
  {
    id: '1',
    label: 'I will pick it up by myself',
  },
  {
    id: '2',
    label: 'Deliver to post maschine',
  },
  {
    id: '3',
    label: 'Deliver by courier to the specified address',
  },
];

const genders = [
  { value: 'female', label: 'Ms.' },
  { value: 'male', label: 'Mr.' },
  { value: 'other', label: 'Other' },
];

const OrderSection = ({ width }) => {
  const [fullname, setFullname] = React.useState();
  const [email, setEmail] = React.useState();
  const [city, setCity] = React.useState(cities[0].value);
  const [agreement, setAgreement] = React.useState(true);
  const [delivery, setDelivery] = React.useState();
  const [gender, setGender] = React.useState(null);

  return (
    <Container
      width={width}
    >
      <Divider textAlign="left" />
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Typography component="h1" variant="h5" align="center"> Order summary </Typography>
        <TextField
          name="fullname"
          label="fullname"
          variant="filled"
          fullWidth
          onChange={(event) => setFullname(event.target.value)}
          value={fullname}
        />
        <TextField
          name="email"
          label="email"
          variant="filled"
          fullWidth
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <TextField
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
        </TextField>

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

        <Box sx={{ alignItems: 'left' }}>
          <FormControlLabel
            control={(
              <Checkbox
                checked={agreement}
                onChange={(_, AgreementTerms) => setAgreement(AgreementTerms)}
              />
          )}
            label="I accept the terms of service"
          />
        </Box>
        <Box align="center">
          <Autocomplete
            disablePortal
            options={deliveryMethods}
            value={delivery}
            onChange={(_, newDelivery) => setDelivery(newDelivery)}
            sx={{ width: '100%' }}
            renderInput={({
              InputLabelProps,
              InputProps,
              inputProps,
              disabled,
              fullWidth,
              id,
              size,
            }) => (
              <TextField
                label="Delivery method"
                InputLabelProps={InputLabelProps}
                InputProps={InputProps}
                inputProps={inputProps}
                disabled={disabled}
                fullWidth={fullWidth}
                id={id}
                size={size}
              />
            )}
          />
        </Box>
        <FormControl />
        <Button type="submit" variant="contained" size="large">Payment</Button>
      </Box>
    </Container>
  );
};

export default OrderSection;
