import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Divider,
  List,
  Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useNavigate } from 'react-router-dom';
import * as Nav from './components';

const pages = [
  { text: 'HOME', to: '/' },
  { text: 'SHOP', to: '/shop' },
  { text: 'DONATE/ADOPT', to: '/adopt' },
];

const drawerWidth = 240;

const Navbar = () => {
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <IconButton
        sx={{
          mx: 4,
          px: 2,
        }}
        size="large"
        edge="end"
        color="inherit"
        onClick={() => navigate('/cart')}
      >
        <ShoppingBasketIcon sx={{
          color: 'white',
          fontSize: 24,
        }}
        />
      </IconButton>
      <Divider />
      <List sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
      >
        {pages.map(({ text, to }) => <Nav.Link key={to} to={to} contracted>{text}</Nav.Link>)}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          px: { md: 24, xxl: 36, xs: 12 },
        }}
      >
        <Toolbar sx={{
          justifyContent: 'space-between',
        }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none', xs: 'flex' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignSelf: 'stretch' }}>
            {pages.map(({ text, to }) => <Nav.Link key={to} to={to}>{text}</Nav.Link>)}
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
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#1C3879',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};
export default Navbar;
