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

const Item = ({
  title,
  img,
  price,
  category,
}) => (
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
          }}
          sx={{ borderRadius: 0, height: 30 }}
        />
        <Button
          size="small"
          sx={{
            p: 0,
            height:
            30,
            width: 30,
            minWidth: 0,
            borderRadius: 0,
            boxShadow: 'none',
            fontSize: 20,
          }}
        >
          +
        </Button>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        { price}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        Total price
      </Box>

      <IconButton
        size="medium"
        sx={{
          height: 30, display: 'flex', alignSelf: 'center',
        }}
      >
        <DeleteIcon sx={{ color: '#1C3879', fontSize: 30 }} />
      </IconButton>
    </Box>
  </Box>
);

export default Item;
