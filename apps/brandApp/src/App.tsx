import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import './styles/globals.css';

import { theme, brandLightTheme, brandDarkTheme } from '@core/theme';
import { queryClient } from '@core/utils/api';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RouterApp from '@router';
import { QueryClientProvider } from '@tanstack/react-query';
import { SnackbarProvider } from 'notistack';
import { useMemo } from 'react';

function App() {

  const is_darkTheme = false;

  const giveMeTheme = () => {
    if (is_darkTheme) {
      return brandDarkTheme.palette
    } else {
      return brandLightTheme.palette
    }
  }

  const muiTheme = useMemo(
    () =>
      createTheme({
        ...theme,
        palette: {
          ...giveMeTheme(),
        },
      }),
    [is_darkTheme],
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={muiTheme}>
        <SnackbarProvider
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        />
        <CssBaseline />
        <RouterApp />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
