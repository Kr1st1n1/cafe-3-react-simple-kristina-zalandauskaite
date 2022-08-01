import * as React from 'react';
import {
  Grid,
  Typography,
  Container,
  Box,
} from '@mui/material';
import { ItemCard, Filters } from './components';

const drawerWidth = 300;

const ShopPage = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8000/items')
      .then((res) => res.json())
      .then((fetchedItems) => setItems(fetchedItems));
  }, []);

  return (
    <Container sx={{ top: 0 }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        m: 2,
      }}
      >
        <Typography variant="h4" component="h2" sx={{ py: 3 }}>
          Everything big starts with something little
        </Typography>
        <Typography variant="p" component="div" sx={{ py: 3 }}>
          10% of the paid amount is allocated to the animal shelter
        </Typography>
        <Typography variant="h5" component="p">
          Thank you...
        </Typography>
      </Box>
      <Filters drawerWidth={drawerWidth} />
      <Grid container spacing={2} sx={{ py: 3, px: 2 }}>
        {items.map(({
          id,
          title,
          description,
          category,
          img,
          price,
          currency,
        }) => (
          <Grid key={id} item xs={12} sm={6} md={4} lg={3} xl={3}>
            <ItemCard
              id={id}
              title={title}
              description={description}
              category={category}
              img={img}
              price={price}
              currency={currency}
            />
          </Grid>
        ))}
      </Grid>

    </Container>
  );
};

export default ShopPage;
