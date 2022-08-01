import React from 'react';
import {
  Box,
  Button,
} from '@mui/material';

import { ContactFields, Container, OrderFields } from './components';

const OrderSection = ({ width }) => {
  const [fullname, setFullname] = React.useState();
  const [email, setEmail] = React.useState();
  const [city, setCity] = React.useState('');
  const [agreement, setAgreement] = React.useState(true);
  const [delivery, setDelivery] = React.useState();
  const [gender, setGender] = React.useState(null);

  return (
    <Container
      width={width}
    >
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <ContactFields
          fullname={fullname}
          email={email}
          gender={gender}
          city={city}
          setCity={setCity}
          setFullname={setFullname}
          setEmail={setEmail}
          setGender={setGender}
        />
        <OrderFields
          agreement={agreement}
          delivery={delivery}
          setAgreement={setAgreement}
          setDelivery={setDelivery}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ backgroundColor: '#607EAA' }}
        >
          Payment

        </Button>
      </Box>
    </Container>
  );
};

export default OrderSection;
