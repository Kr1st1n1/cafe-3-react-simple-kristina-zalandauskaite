import { Box, styled } from '@mui/material';

export { default as ContactFields } from './contact-fields';
export { default as OrderFields } from './order-fields';

export const Container = styled(Box)(({ theme, width }) => ({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width,
  backgroundColor: theme.palette.common.light,
  color: theme.palette.primary.light,
  padding: theme.spacing(6),
  ...theme.mixins.toolbarOffset,
}));
