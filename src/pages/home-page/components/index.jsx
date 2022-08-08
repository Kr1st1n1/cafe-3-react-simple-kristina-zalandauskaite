import { Box, Button, styled } from '@mui/material';

export const Background = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  opacity: 0.92,
});

export const Container = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 100,
  left: 0,
  width: '100%',
  maxWidth: 1400,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '0 auto',
  paddingLeft: 36,
  paddingRight: 36,

  [theme.breakpoints.down('xxl')]: {
    margin: 'auto',
  },
}));

export const Content = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'right',
  color: 'white',
  width: '40vw',
  gap: theme.spacing(5),

  [theme.breakpoints.down('xxl')]: {
    margin: 0,
    width: '80vh',
  },
}));

export const Footer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  color: theme.palette.secondary.main,
  background: theme.palette.primary.main,
}));

export const IconContent = styled(Box)(({ theme }) => ({
  gap: theme.spacing(5),
  display: 'flex',
  flexDirection: 'row',
}));

export const ButtonLink = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  minWidth: 160,
  height: 48,
  flexDirection: 'row',
  color: theme.palette.secondary.main,
  background: theme.palette.primary.main,

  [theme.breakpoints.down('xs')]: {
    flexDirection: 'column',
  },
}));
