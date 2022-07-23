import * as React from 'react';
import {
  Typography,
  Box,
  Button,
  Drawer,
  Divider,
  Slider,
  FormControl,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const Filters = ({ drawerWidth }) => {
  const [drawer, setDrawer] = React.useState(false);
  const [priceRange, setPriceRange] = React.useState([10, 110]);

  return (
    <>
      <Button
        size="large"
        color="primary"
        variant="contained"
        sx={{
          position: 'fixed',
          zIndex: 5000,
          bottom: 25,
          right: 25,
          height: 64,
          width: 64,
        }}
        onClick={() => setDrawer(!drawer)}
      >
        <FilterListIcon sx={{ color: 'common.white', fontSize: '2rem' }} />
      </Button>
      <Drawer
        anchor="left"
        open={drawer}
        onClose={() => setDrawer(false)}
      >
        <Box sx={{ width: drawerWidth }}>
          <Typography>Filters</Typography>
          <Divider sx={{ my: 2, mx: 2 }} />
          <FormControl sx={{ width: '100%' }}>
            <Typography variant="h6" sx={{ alignSelf: 'center' }}>Price</Typography>
            <Box sx={{ mx: 2, my: 5 }}>
              <Slider
                valueLabelDisplay="on"
                value={priceRange}
                min={10}
                max={110}
                onChange={(_, newPriceRange) => setPriceRange(newPriceRange)}
              />
            </Box>
          </FormControl>
          <Divider sx={{ my: 2 }} />

        </Box>
      </Drawer>
    </>
  );
};

export default Filters;
