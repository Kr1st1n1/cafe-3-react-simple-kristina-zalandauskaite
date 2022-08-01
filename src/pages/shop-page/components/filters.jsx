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
import CheckboxGroup from '../../../components/checkbox-group';

const itemChosenTypes = [
  { id: '1', label: 'Food' },
  { id: '2', label: 'Toys' },
];
const foodChosenTypes = [
  { id: '1', label: 'Food for dogs' },
  { id: '2', label: 'Food for cats' },
];

const Filters = ({ drawerWidth }) => {
  const [drawer, setDrawer] = React.useState(false);
  const [priceRange, setPriceRange] = React.useState([10, 110]);
  const [itemChosen, setItemChosen] = React.useState([]);
  const [foodTypes, setFoodTypes] = React.useState([]);

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
        anchor="right"
        open={drawer}
        onClose={() => setDrawer(false)}
      >
        <Box sx={{
          display: 'flex', flexDirection: 'column', p: 6, gap: 3,
        }}
        >
          <Box sx={{ width: drawerWidth }}>
            <Typography variant="h5">Filters</Typography>
            <Divider sx={{ my: 2 }} />
            <FormControl sx={{ width: '100%' }}>
              <Typography variant="h7" sx={{ alignSelf: 'left', pb: 7 }}>Price range</Typography>
              <Box>
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
          <CheckboxGroup
            label="Filter By"
            options={itemChosenTypes}
            value={itemChosen}
            onChange={(_, newItemChosenTypes) => setItemChosen(newItemChosenTypes)}
          />
          <CheckboxGroup
            label="Filter By"
            options={foodChosenTypes}
            value={foodTypes}
            onChange={(_, newItemChosenTypes) => setFoodTypes(newItemChosenTypes)}
          />
        </Box>
      </Drawer>
    </>
  );
};

export default Filters;
