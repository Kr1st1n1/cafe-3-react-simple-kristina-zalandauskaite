import * as React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import * as Home from './components';

const HomePage = () => (
  <Box>
    <Box sx={{ height: 830, position: 'relative' }}>
      <Home.Background component="img" src="/home-bg.jpg" />
      <Home.Container>
        <Home.Content component="main">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              letterSpacing: '0.06em',
              color: 'white',
              textAlign: 'left',
            }}
          >
            HELP ANIMALS TODAY

          </Typography>
          <Typography variant="h6" sx={{ textAlign: 'left' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            exercitationem.Dolor quas eaque esse tempora illo nemo,
            rem corporis aperiam itaque quos.Incidunt tempore hic accusamus
            expedita
            rem recusandae! Aut?
          </Typography>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Link to="/shop" style={{ textDecoration: 'none' }}>
              <Home.ButtonLink variant="contained">
                SHOP
              </Home.ButtonLink>
            </Link>
            <Link to="/adopt" style={{ textDecoration: 'none' }}>
              <Home.ButtonLink variant="contained">
                DONATE/ADOPT
              </Home.ButtonLink>
            </Link>
          </Box>
        </Home.Content>
      </Home.Container>
    </Box>
    <Home.Footer>
      <Home.IconContent>
        <InstagramIcon sx={{ my: 3, mx: 6, fontSize: 28 }} />
        <FacebookIcon sx={{ my: 3, mx: 6, fontSize: 28 }} />
        <TwitterIcon sx={{ my: 3, mx: 6, fontSize: 28 }} />
      </Home.IconContent>
    </Home.Footer>
  </Box>
);

export default HomePage;
