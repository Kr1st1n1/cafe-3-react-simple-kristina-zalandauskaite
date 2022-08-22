import { Box, Button, styled } from '@mui/material';

export const Background = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '102%',
  width: '100%',
  objectFit: 'cover',
  opacity: 0.92,
});

export const Container = styled(Box)(({ theme }) => ({
  position: 'relative',
  top: 0,
  left: 0,
  right: 0,
  display: 'flex',
  maxWidth: 1700,

  [theme.breakpoints.down('xxl')]: {
    margin: 'auto',
  },
}));

export const Content = styled(Box)(({ theme }) => ({
  paddingTop: 100,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',

  [theme.breakpoints.down('xxl')]: {
    margin: 'auto',
  },
}));

export const ButtonLink = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  minWidth: 160,
  height: 48,
  color: theme.palette.secondary.main,
  background: theme.palette.primary.main,

  [theme.breakpoints.down('xs')]: {
    flexDirection: 'column',
  },
}));

export const Footer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.secondary.main,
  background: theme.palette.primary.main,
  position: 'fixed',
  left: 0,
  bottom: 0,
  height: 64,
  width: '100%',
}));

export const IconContent = styled(Box)(({ theme }) => ({
  gap: theme.spacing(5),
  display: 'flex',
  flexDirection: 'row',
}));
