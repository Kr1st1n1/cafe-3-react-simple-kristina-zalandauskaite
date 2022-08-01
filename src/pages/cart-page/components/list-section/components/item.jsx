import * as React from 'react';
import {
  Box,
  Typography,
  Button,
  OutlinedInput,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Image from '../../../../../components/image';
import CartContext from '../../../../../contexts/cart-context';

const Item = ({
  id,
  title,
  img,
  price,
  category,
}) => {
  const { getItemCount, deleteItem } = React.useContext(CartContext);
  const itemCountInCart = getItemCount(id);
  const [count, setCount] = React.useState(itemCountInCart === 0 ? 1 : itemCountInCart);

  React.useEffect(() => {
    setCount(itemCountInCart === 0 ? 1 : itemCountInCart);
  }, [itemCountInCart]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        width: 300,
      }}
      >
        <Image
          src={img}
          sx={{
            height: 100,
            width: 100,
            borderRadius: '50%',
          }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h7">{title}</Typography>
          <Typography variant="h8">{category}</Typography>
        </Box>
      </Box>

      <Box
        minWidth={420}
        sx={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-around', pr: 4,
        }}
      >

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            size="small"
            sx={{
              p: 0,
              height: 30,
              width: 30,
              minWidth: 0,
              borderRadius: 0,
              boxShadow: 'none',
              fontSize: 20,
              color: 'red',
            }}
            onClick={() => setCount(count - 1)}
            disabled={count <= 1}
          >
            -
          </Button>
          <OutlinedInput
            variant="contained"
            size="small"
            inputProps={{
              style: {
                padding: 0, width: 30, height: 30, minWidth: 0, textAlign: 'center',
              },
              value: count,
            }}
            readOnly
            sx={{ borderRadius: 0, height: 30 }}
          />
          <Button
            size="small"
            sx={{
              p: 0,
              height: 30,
              width: 30,
              minWidth: 0,
              borderRadius: 0,
              boxShadow: 'none',
              fontSize: 20,
            }}
            onClick={() => setCount(count + 1)}
          >
            +
          </Button>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          { price}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>{`${price * count}`}</Box>

        <IconButton
          size="medium"
          sx={{
            height: 30, display: 'flex', alignSelf: 'center',
          }}
        >
          <DeleteIcon
            sx={{ color: '#1C3879', fontSize: 30 }}
            onClick={() => deleteItem(id)}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Item;
