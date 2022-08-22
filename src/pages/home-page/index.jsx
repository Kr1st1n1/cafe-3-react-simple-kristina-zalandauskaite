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
    <Box sx={{ height: 830 }}>
      <Home.Background component="img" src="/home-bg.jpg" />
      <Home.Container sx={{
        alignItems: { xs: 'center', md: 'center', xxl: 'flex-end' },
        width: { xs: '100%' },
        px: {
          xs: 2, md: 12, xxl: 2,
        },
      }}
      >
        <Home.Content component="main">
          <Typography
            variant="h2"
            component="h1"
            sx={() => ({
              letterSpacing: '0.08em',
              color: 'black',
              textAlign: { xs: 'center', md: 'right', xxl: 'right' },
              fontSize: { xs: '2rem', md: '3.4rem' },
            })}
          >
            HELP ANIMALS TODAY

          </Typography>
          <Typography
            variant="h6"
            sx={() => ({
              color: 'black',
              textAlign: { xs: 'center', md: 'right', xxl: 'right' },
              fontSize: { xs: '1rem', md: '1.3rem' },
              display: 'flex',
              alignSelf: 'flex-end',
              maxWidth: 780,
              pt: 10,
            })}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, exercitationem.Dolor quas
            eaque esse tempora illo nemo,
            rem corporis aperiam itaque quos.Incidunt tempore hic accusamus
            expedita rem recusandae! Aut?
          </Typography>

          <Box sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-end', xxl: 'flex-end' },
            gap: 3,
            pt: 10,
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
          fontSize: { xs: 19, md: 24, xxl: 24 },
        }}
        />
        <FacebookIcon sx={{
          fontSize: { xs: 19, md: 24, xxl: 24 },
        }}
        />
        <TwitterIcon sx={{
          fontSize: { xs: 19, md: 24, xxl: 24 },
        }}
        />
      </Home.IconContent>
    </Home.Footer>

  </Box>
);

export default HomePage;
