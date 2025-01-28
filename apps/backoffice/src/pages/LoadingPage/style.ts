import type { SxProps } from '@mui/material';

interface loadingPageProps {
  [key: string]: SxProps;
}

export const loadingPageStyle: loadingPageProps = {
  rootSx: {
    bgcolor: 'background.surface.B300',
    height: '100vh',
  },
};
