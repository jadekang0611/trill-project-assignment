import { createMuiTheme } from '@material-ui/core';

import palette from './palette';
import typography from './typography';

const theme = createMuiTheme({
  palette,
  typography,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 992,
      xl: 1280,
    },
  },
});

export default theme;
