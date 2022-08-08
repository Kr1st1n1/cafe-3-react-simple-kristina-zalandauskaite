import * as React from 'react';
import { Container } from '@mui/material';
import ListSection from './components/list-section';
// import OrderSection from './components/order-section';

// const orderSectionWidth = 476;

const CartPage = () => (
  <Container sx={{ pt: 12, pb: 7 }}>
    <ListSection />
  </Container>
);

export default CartPage;

// {/* <OrderSection width={orderSectionWidth} /> */}
