import * as React from 'react';
import {
  Box,
  Typography,
  Divider,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Item } from './components';
import CartContext from '../../../../contexts/cart-context';

const fetchItem = async ({ id, count }) => {
  const response = await fetch(`http://localhost:8000/items/${id}`);
  const item = await response.json();

  return {
    ...item,
    count,
  };
};

const fetchCartItems = async (cartItems) => {
  const items = await Promise.all(cartItems.map((item) => fetchItem(item)));

  return items;
};

const ListSection = ({ width }) => {
  const { cartItems: cartItemsData } = React.useContext(CartContext);
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const fetchedItems = await fetchCartItems(cartItemsData);

      setCartItems(fetchedItems);
    })();
  }, [cartItemsData]);

  return (
    <Box sx={{ mr: `${width}px` }}>
      <Box sx={{ m: 8, p: 5, backgroundColor: '#f3eded6b' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5">Shopping Cart</Typography>
          <ShoppingCartIcon />
        </Box>
        <Divider sx={{ pt: 3, pb: 3 }} />
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: 2,
          pb: 2,
        }}
        >
          <Typography variant="h6">Product details</Typography>
          <Box
            minWidth={405}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              pt: 2,
              pb: 2,
            }}
          >
            <Typography variant="h6">Qty</Typography>
            <Typography variant="h6">Price</Typography>
            <Typography variant="h6">Total</Typography>
            <Typography variant="h6">Remove</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {cartItems.map(({
            id,
            img,
            title,
            count,
            price,
            category,
          }) => (
            <Item
              key={id}
              img={img}
              title={title}
              count={count}
              price={price}
              category={category}
            />
          ))}
        </Box>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 5,
        }}
        >
          <Box sx={{ display: 'flex', gap: 2 }}>
            <KeyboardBackspaceIcon fontSize="large" />
            <Typography variant="h6">Continue Shopping</Typography>
          </Box>

          <Box sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 10,
            px: 16,
          }}
          >
            <Typography variant="h6">TOTAL COST:</Typography>
            <Typography variant="h6">156.14$</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ListSection;
