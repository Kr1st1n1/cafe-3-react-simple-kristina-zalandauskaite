import * as React from 'react';
import { Box } from '@mui/material';
import ListSection from './components/list-section';
import OrderSection from './components/order-section';

const orderSectionWidth = 476;

const CartPage = () => (
  <Box>
    <ListSection width={orderSectionWidth} />
    <OrderSection width={orderSectionWidth} />
  </Box>
);

export default CartPage;
