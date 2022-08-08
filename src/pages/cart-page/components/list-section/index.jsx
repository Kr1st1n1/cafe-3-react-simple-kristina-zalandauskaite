import * as React from 'react';
import {
  Box,
  Typography,
  Divider,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Item, Footer } from './components';
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

const ListSection = () => {
  const { cartItems: cartItemsData, deleteItem } = React.useContext(CartContext);
  const [cartItems, setCartItems] = React.useState([]);

  const totalPrice = cartItems.reduce((prevSum, { count, price }) => prevSum + count * price, 0);

  React.useEffect(() => {
    (async () => {
      const fetchedItems = await fetchCartItems(cartItemsData);
      setCartItems(fetchedItems);
    })();
  }, [cartItemsData]);

  return (
    <Box sx={{
      display: 'flex', alignself: 'center', width: '100%', flexDirection: 'column',
    }}
    >
      <Box sx={{
        display: 'flex', alignself: 'center', flexDirection: 'column',
      }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5">Shopping Cart</Typography>
          <ShoppingCartIcon sx={{ color: '#1C3879', fontSize: 45 }} />
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <KeyboardBackspaceIcon fontSize="large" />
          <Typography variant="h6">Continue Shopping</Typography>
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
          <Box sx={{ display: 'flex', justifyContent: 'right' }}>
            <Box
              minWidth={420}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                pt: 2,
                pb: 2,
                gap: 12,
              }}
            >
              <Typography variant="h6">Qty</Typography>
              <Typography variant="h6">Price</Typography>
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6">Remove</Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'right' }}>
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
              deleteItem={() => deleteItem(id)}
            />
          ))}
        </Box>

        <Footer totalPrice={totalPrice} />
      </Box>
    </Box>
  );
};

export default ListSection;
