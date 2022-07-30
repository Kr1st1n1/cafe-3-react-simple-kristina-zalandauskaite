import { Box, styled } from '@mui/material';

export const Container = styled(Box)(({ theme, width }) => ({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(6),
  ...theme.mixins.toolbarOffset,
}));
