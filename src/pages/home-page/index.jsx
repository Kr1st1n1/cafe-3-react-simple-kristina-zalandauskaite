import * as React from 'react';
import {
    Box,
    Button,
    styled,
    Typography,
} from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Background = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    opacity: 0.99,
});

const Container = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
});

const Content = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'right',
    color: theme.palette.warning.light,
    width: 650,
    height: '80%',
    gap: theme.spacing(5),
    margin: 50,
}));

const Footer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    color: theme.palette.warning.light,
    background: theme.palette.primary.main,
}));

const IconContent = styled(Box)(({ theme }) => ({
    gap: theme.spacing(5),
    display: 'flex',
    flexDirection: 'row',
}));

const HomePage = () => (
    <Box>
        <Box sx={{ height: 830, position: 'relative' }}>
            <Background component='img' src='/home-bg.jpg' />
            <Container>
                <Content component="main">
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            letterSpacing: '0.06em',
                            color: 'white',
                            textAlign: 'left'
                        }}
                    >HELP ANIMALS TODAY</Typography>
                    <Typography variant="h6" sx={{ textAlign: 'left' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, exercitationem. Dolor quas eaque esse tempora illo nemo, rem corporis aperiam itaque quos. Incidunt tempore hic accusamus expedita rem recusandae! Aut?
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 3, marginTop: 12 }}>
                        <Button variant="contained" sx={{ backgroundColor: '#e65100', minWidth: 160, height: 48 }}>SHOPE</Button>
                        <Button variant="contained" sx={{ backgroundColor: '#e65100', minWidth: 160, height: 48 }}>DONATE/ADOPT</Button>
                    </Box>
                </Content>
            </Container>
        </Box>
        <Footer>
            <IconContent >
                <InstagramIcon sx={{ my: 3, mx: 6, fontSize: 28 }} />
                <FacebookIcon sx={{ my: 3, mx: 6, fontSize: 28 }} />
                <TwitterIcon sx={{ my: 3, mx: 6, fontSize: 28 }} />
            </IconContent>
        </Footer>
    </Box>
)

export default HomePage;