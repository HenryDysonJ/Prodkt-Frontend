import type { SxProps } from '@mui/material';

interface RootLayoutProps {
  [key: string]: SxProps;
}

export const rootLayoutStyle: RootLayoutProps = {
  childrenSx: {
    overflow: 'overlay',
    minHeight: '100%',
  },
  rootSx: {
    maxWidth: {
      sm: 425,
    },
    mx: {
      sm: 'auto',
    },
  },

  backgroundSx: {
    bgcolor: {
      // sm: '#F1F5F9',
    },
    boxShadow: {
      // sm: '0px 0px 10px #efefef',
    },
  },
};
