import * as React from 'react';
import Counter from './Counter';
import { CssBaseline, createMuiTheme, ThemeProvider, useMediaQuery } from "@material-ui/core";
import { lightBlue, pink } from '@material-ui/core/colors';

const App: React.FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = createMuiTheme({
    palette: {
      type: prefersDarkMode ? 'dark' : 'light',
      primary: {
        main: lightBlue.A400,
      },
      secondary: {
        main: pink.A200,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Counter />
    </ThemeProvider>
  );
};

export default App;