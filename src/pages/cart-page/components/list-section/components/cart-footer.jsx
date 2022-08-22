import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';

const Footer = ({ totalPrice }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mt: 5,
    }}
  >

    <Box sx={{
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      px: 16,
    }}
    >
      <Typography variant="h6">TOTAL COST:</Typography>
      <Typography variant="h6">{totalPrice.toFixed(2)}</Typography>
    </Box>

  </Box>
);

export default Footer;
