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
      <Home.Container sx={{
        alignItems: { xs: 'center' },
        width: { xs: '100%' },
        px: { md: 24, xxl: 36, xs: 12 },
      }}
      >
        <Home.Content component="main">
          <Typography
            variant="h2"
            component="h1"
            sx={(theme) => ({
              letterSpacing: '0.08em',
              color: theme.palette.common.light,
              textAlign: { xs: 'center', md: 'left', xxl: 'left' },
              fontSize: { xs: '2.25rem', md: '3.5rem' },
            })}
          >
            HELP ANIMALS TODAY

          </Typography>
          <Typography
            variant="h6"
            sx={(theme) => ({
              color: theme.palette.common.light,
              textAlign: { xs: 'center', md: 'left', xxl: 'left' },
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              maxWidth: 500,
            })}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            exercitationem.Dolor quas eaque esse tempora illo nemo,
            rem corporis aperiam itaque quos.Incidunt tempore hic accusamus
            expedita
            rem recusandae! Aut?
          </Typography>
          <Box sx={{
            display: 'flex',
            gap: 4,
            paddingTop: 10,
            flexDirection: { xs: 'column', md: 'row', xxl: 'row' },
            alignItems: { xs: 'center' },
            width: { xs: '100%' },
          }}
          >
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
        <InstagramIcon sx={{
          my: 3, fontSize: { xs: 19, md: 24, xxl: 24 },
        }}
        />
        <FacebookIcon sx={{
          my: 3, fontSize: { xs: 19, md: 24, xxl: 24 },
        }}
        />
        <TwitterIcon sx={{
          my: 3, fontSize: { xs: 19, md: 24, xxl: 24 },
        }}
        />
      </Home.IconContent>
    </Home.Footer>
  </Box>
);

export default HomePage;
