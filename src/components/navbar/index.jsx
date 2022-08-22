import * as React from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Divider,
  List,
  Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
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
        <ShoppingCartIcon sx={{
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
        <Nav.Link to="/auth/login" contracted>
          <PersonOutlineIcon />
        </Nav.Link>
        <Nav.Link to="/auth/register" contracted>REGISTER</Nav.Link>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          px: { xs: 2, md: 12, xxl: 24 },
        }}
      >
        <Box sx={(theme) => theme.mixins.navbar}>
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
          <Box sx={{ display: 'flex' }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={() => navigate('/cart')}
            >
              <ShoppingCartIcon />
            </IconButton>
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <Nav.Link to="/auth/login">
                <PersonOutlineIcon sx={{
                  color: 'white',
                  fontSize: 27,
                }}
                />

              </Nav.Link>
              <Nav.Link
                to="/auth/register"
                sx={{
                  color: 'white',
                  fontSize: 14,
                }}
              >
                REGISTER

              </Nav.Link>
            </Box>
          </Box>
        </Box>
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
              backgroundColor: 'black',
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
