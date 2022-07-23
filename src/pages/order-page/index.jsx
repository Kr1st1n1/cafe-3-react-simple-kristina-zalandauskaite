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

const OrderPage = () => {
  const [fullname, setFullname] = React.useState();
  const [email, setEmail] = React.useState();
  const [city, setCity] = React.useState(cities[0].value);
  const [agreement, setAgreement] = React.useState(true);

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
