import '@fontsource/sarabun/400.css';
import '@fontsource/sarabun/500.css';
import '@fontsource/sarabun/600.css';
import '@fontsource/sarabun/700.css';
import '@styles/globle.css';

import { useAuth, usePWAStore, useTheme } from '@core/store';
import { darkTheme, lightTheme, theme } from '@core/theme';
import { SnackBarClose, SnackBarError, SnackBarSuccess } from '@core/ui/atoms';
import { queryClient } from '@core/utils/api';
import { Box, CssBaseline, ThemeProvider, styled } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import LoadingPage from '@pages/LoadingPage';
import RouterApp from '@router';
import { QueryClientProvider } from '@tanstack/react-query';
import { MaterialDesignContent, SnackbarKey, SnackbarProvider, closeSnackbar } from 'notistack';
import { useEffect, useMemo } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import * as amplitude from '@amplitude/analytics-browser';

amplitude.init('dce548e9cc7e749caa5946c4d9222de9');

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-success': {
    backgroundColor: '#25C460',
    color: '#FFFFFF',
    boxShadow: 'none',
    borderRadius: '4px',
    '& div': {
      '& svg': {
        marginRight: '8px',
      },
    },
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: '#F44F5A',
    color: '#FFFFFF',
    boxShadow: 'none',
    borderRadius: '4px',
    '& div': {
      '& svg': {
        marginRight: '8px',
      },
    },
  },
}));

function App() {
  const { setDeferredPrompt } = usePWAStore();
  const { refreshToken, refreshLoading } = useAuth();

  const { is_darkTheme } = useTheme();

  const {
    // needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r: ServiceWorkerRegistration | undefined) {
      console.log(`SW Registered: ${r}`);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onRegisterError(error: any) {
      console.log('SW registration error', error);
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleBeforeInstallPrompt(event: any) {
    // Prevent the default install prompt from showing
    event.preventDefault();
    // Store the event for later use
    setDeferredPrompt(event);
  }


  useEffect(() => {
    updateServiceWorker(true);
    // Listen for the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const giveMeTheme = () => {
    if (is_darkTheme) {
      return darkTheme.palette
    } else {
      return lightTheme.palette
    }
  }

  const muiTheme = useMemo(
    () =>
      createTheme({
        ...theme,
        palette: {
          mode: is_darkTheme ? 'dark' : 'light',
          ...giveMeTheme(),
        },
      }),
    [is_darkTheme],
  );

  const handleClose = (key: SnackbarKey) => {
    closeSnackbar(key);
  };



  useEffect(() => {
    refreshToken()
  }, [])


  return (
    // <Sentry.ErrorBoundary fallback={myFallback} showDialog>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={muiTheme}>
        <SnackbarProvider
          iconVariant={{
            success: <SnackBarSuccess />,
            error: <SnackBarError />,
          }}
          Components={{
            success: StyledMaterialDesignContent,
            error: StyledMaterialDesignContent,
          }}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          action={(key) => (
            <Box sx={{ cursor: 'pointer', marginTop: '8px' }} onClick={() => handleClose(key)}>
              <SnackBarClose />
            </Box>
          )}
          autoHideDuration={5000}
        />

        <CssBaseline />

        {
          refreshLoading
            ?
            <Box>
              <LoadingPage />
            </Box>
            :
            <RouterApp />
        }
      </ThemeProvider>
    </QueryClientProvider>
    // </Sentry.ErrorBoundary>
  );
}

export default App;
