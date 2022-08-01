import React from 'react';
import {
  Box,
  FormControlLabel,
  Checkbox,
  Autocomplete,
  FormControl,
  Divider,
} from '@mui/material';
import { TextFieldDark } from '../../../../../components/dark';

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

const OrderFields = ({
  agreement,
  delivery,
  setAgreement,
  setDelivery,
}) => (
  <>
    <Divider textAlign="left">Order information</Divider>
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
          <TextFieldDark
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
  </>
);

export default OrderFields;
