import { Box, Button, styled } from '@mui/material';

export const Background = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  opacity: 0.99,
});

export const Container = styled(Box)({
  position: 'absolute',
  top: 60,
  left: 0,
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

export const Content = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'right',
  color: 'white',
  width: 750,
  height: '80%',
  gap: theme.spacing(5),
  margin: 50,
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
}));
