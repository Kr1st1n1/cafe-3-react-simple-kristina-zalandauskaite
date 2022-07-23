import * as React from 'react';
import {
  Paper,
  Typography,
  Box,
  TextField,
  MenuItem,
  Slider,
  Autocomplete,
  Button,
} from '@mui/material';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const cities = [
  { city: 'Vilnius' },
  { city: 'Kaunas' },
  { city: 'Šiauliai' },
  { city: 'Vilnius' },
];

const OrderPage = () => {
  const [fullname, setFullname] = React.useState();
  const [email, setEmail] = React.useState();
  const [currency, setCurrency] = React.useState(currencies[0].value);
  const [qty, setQty] = React.useState();

  return (
    <Box>
      <Paper
        elevation={2}
        sx={{
          mt: 4,
          p: 3,
          width: 500,
          mx: 'auto',
          bgcolor: 'lightgrey',
        }}
      >
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Typography component="h1" variant="h5" align="center">
            Įveskite/Pasirinkite duomenis
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
            name="currency"
            select
            label="currency"
            variant="filled"
            fullWidth
            onChange={(event) => setCurrency(event.target.value)}
            value={currency}
          >
            {currencies.map(
              ({ value, label }) => <MenuItem key={value} value={value}>{label}</MenuItem>,
            )}
          </TextField>
          <Slider
            size="small"
            name="qty"
            defaultValue={10}
            valueLabelDisplay="auto"
            onChange={(event) => setQty(event.target.value)}
            value={qty}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={cities}
            sx={{ width: 300 }}
            renderInput={(city) => <TextField city={city} label="City" />}
          />
          <Button type="submit" variant="contained" size="large">Submit</Button>
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
