import * as React from 'react';
import {
  Typography,
  Card,
  Box,
  CardMedia,
  CardContent,
  CardActions,
  Button
} from '@mui/material';

const ItemCard = ({title, category, img, description, price}) => (
  <Card sx={{
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  }}>
    <Typography variant="h5" component="div">{category}</Typography>
    <Box sx={{
      position: 'relative',
      width: '100%',
      pt: '100%',
    }}>
    <CardMedia
    component="img"
    height="140"
    image={img}
    sx={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}
    />
    </Box>
    <CardContent>
      <Box sx={{ 
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        mb: 2 
        }}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h5" component="div">{price}</Typography>
      </Box>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2, alignSelf: 'center', justifyContent: 'center'}}>
      <Button size="small" variant="contained" sx={{ 
        backgroundColor: '#e65100'
        }}>Add to cart</Button>
      </CardActions>
  
  </Card>
  
)

export default ItemCard