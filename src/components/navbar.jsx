import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  styled,
  Typography,
  Divider,
  List,
  Drawer,
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

const drawerWidth = 240;

const Navbar = () => {
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Čia bus krepšelis
      </Typography>
      <Divider />
      <List sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        color: '#1C3879',
      }}
      >
        {pages.map(({ text, to }) => <Link key={to} to={to}>{text}</Link>)}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            backgroundColor="#1C3879"
            onClick={handleDrawerToggle}
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
