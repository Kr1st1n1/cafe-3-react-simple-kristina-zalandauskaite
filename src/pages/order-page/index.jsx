import * as React from 'react';
import {
  Paper,
  Typography,
  Box,
  TextField,
  MenuItem,
  Button,
  FormControlLabel,
  Checkbox,
  Autocomplete,
  FormLabel,
  FormControl,
  RadioGroup,
  Radio,
} from '@mui/material';

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

const OrderPage = () => {
  const [fullname, setFullname] = React.useState();
  const [email, setEmail] = React.useState();
  const [city, setCity] = React.useState(cities[0].value);
  const [agreement, setAgreement] = React.useState(true);
  const [delivery, setDelivery] = React.useState();
  const [gender, setGender] = React.useState(null);

  return (
    <Box>
      <Paper
        elevation={2}
        sx={{
          mt: 4,
          p: 3,
          width: 500,
          mx: 'auto',
          bgcolor: 'white',
        }}
      >
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <Typography component="h1" variant="h5" align="center">
            New Order
          </Typography>
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
          <FormControl>
            <FormLabel>Kreipinys</FormLabel>
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
          <Button type="submit" variant="contained" size="large">Next</Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default OrderPage;

// Sukurti šiuos įvesties laukus ir sujungti juos su būsenos kintamaisiais
//   * TextField: https://mui.com/material-ui/react-text-field/
//   * TextField - select : https://mui.com/material-ui/react-text-field/  ||  https://mui.com/material-ui/react-select/
//   * Range slider: https://mui.com/material-ui/react-slider/
//   * AutoComplete: https://mui.com/material-ui/react-autocomplete/
//   * CheckboxGroup: https://mui.com/material-ui/react-autocomplete/
//   * RadioGroup: https://mui.com/material-ui/react-autocomplete/
