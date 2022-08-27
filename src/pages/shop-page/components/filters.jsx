import * as React from 'react';
import {
  Typography,
  Box,
  Divider,
  Slider,
  FormControl,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import CategoryService from '../../../services/category-service';
import FoodTypeService from '../../../services/foodtype-service';
import CheckboxGroup from '../../../components/checkbox-group';
import FilterDrawer from './filter-drawer';

const MIN = 0;
const MAX = 25;

const Filters = ({ drawerWidth }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = React.useState([]);
  const [foodType, setFoodTypes] = React.useState([]);

  const [priceRange, setPriceRange] = React.useState([MIN, MAX]);
  const [selectedCategory, setSelctedCategory] = React.useState([]);
  const [selectedFoodType, setSelectedFoodType] = React.useState([]);

  const handlePriceRangeChange = (_, newPriceRange) => {
    const [min, max] = newPriceRange;
    if (min === MIN) {
      searchParams.delete('price_gte');
    } else {
      searchParams.set('price_gte', min);
    }
    if (max === MAX) {
      searchParams.delete('price_lte');
    } else {
      searchParams.set('price_lte', max);
    }

    setSearchParams(searchParams);
    setPriceRange(newPriceRange);
  };

  const handleCategoryChange = (_, newCategory) => {
    const ids = newCategory.map((category) => category.id);
    searchParams.delete('categoryId');
    ids.forEach((id) => searchParams.append('categoryId', id));

    setSearchParams(searchParams);
    setSelctedCategory(newCategory);
  };

  const handleFoodTypes = (_, newFoodType) => {
    const ids = newFoodType.map((typeOfFood) => typeOfFood.id);
    searchParams.delete('foodTypeId');
    ids.forEach((id) => searchParams.append('foodTypeId', id));

    setSearchParams(searchParams);
    setSelectedFoodType(newFoodType);
  };

  React.useEffect(() => {
    (async () => {
      const [fetchedCategories, fetchedFoodTypes] = await Promise.all([
        CategoryService.fetchAll(),
        FoodTypeService.fetchAll(),
      ]);
      setCategories(fetchedCategories);
      setFoodTypes(fetchedFoodTypes);
    })();
  }, []);

  return (
    <FilterDrawer>
      <Box sx={{
        display: 'flex', flexDirection: 'column', p: 6, gap: 3, mt: 10,
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
                min={0}
                max={25}
                onChange={handlePriceRangeChange}
              />
            </Box>
          </FormControl>
          <Divider sx={{ my: 2 }} />
        </Box>
        <CheckboxGroup
          label="Filter By"
          options={categories}
          value={selectedCategory}
          onChange={handleCategoryChange}
        />
        <CheckboxGroup
          label="Filter By"
          options={foodType}
          value={selectedFoodType}
          onChange={handleFoodTypes}
        />
      </Box>
    </FilterDrawer>
  );
};

export default Filters;
