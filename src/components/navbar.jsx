import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  styled,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { NavLink, useNavigate } from 'react-router-dom';

const Link = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(0, 3),
  textDecoration: 'none',
  color: theme.palette.secondary.main,

  '&.active': {
    boxShadow: `inset 0 -2px 0 ${theme.palette.common.white}`,
  },

  ':hover': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
}));

const pages = [
  { text: 'HOME', to: '/' },
  { text: 'SHOP', to: '/shop' },
  { text: 'DONATE/ADOPT', to: '/adopt' },
];

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'flex-end' }}>

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          sx={{ display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: 'flex', alignSelf: 'stretch' }}>
          {pages.map(({ text, to }) => <Link key={to} to={to}>{text}</Link>)}
        </Box>

        <IconButton
          size="large"
          edge="end"
          color="inherit"
          onClick={() => navigate('/cart')}
        >
          <ShoppingBasketIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
