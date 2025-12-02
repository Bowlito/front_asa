// theme.ts

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2c8a12',
      light: '#66b566',
      dark: '#1d5f0d',
    },
    secondary: {
      main: '#d9a63b',
      light: '#f0c87c',
      dark: '#b07d25',
    },
    background: {
      default: '#f5f7f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#222222',
      secondary: '#555555',
    },
    error: { main: '#e57373' },
    success: { main: '#81c784' },
    info: { main: '#64b5f6' },
    warning: { main: '#ffb74d' },
  },
});
