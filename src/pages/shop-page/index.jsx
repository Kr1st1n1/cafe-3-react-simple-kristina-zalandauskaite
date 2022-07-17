import * as React from 'react'
import ItemCard from '../../components/card'
import { Grid, Typography } from '@mui/material';
import { Container, Box } from '@mui/system';

const ShopPage = () => {
  const [items, setMugs] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8000/items')
      .then(res => res.json())
      .then(fetchedItems => setMugs(fetchedItems))
  }, []);

  return (

    <Container>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        m: 2,
        p: 10
        }}>
        <Typography variant="h3" component="h2" sx={{ py: 3, px: 2 }}>
          10% of the paid amount is allocated to the animal shelter
        </Typography>
        <Typography variant="p" component="div" sx={{ py: 3, px: 2 }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam inventore, architecto similique in culpa quidem iste, cumque veniam dolor blanditiis voluptate necessitatibus veritatis sint asperiores harum corrupti hic optio maxime.
        </Typography>
        <Typography variant="h4" component="p">
          Thank you...
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ py: 3, px: 2 }}>
        {items.map(el => (
          <Grid key={el.id} item xs={12} sm={6} md={4} lg={3} xl={3}>
            <ItemCard {...el} />
          </Grid>
        ))}
      </Grid>

    </Container>





  );
}

export default ShopPage;
