import type { SxProps } from '@mui/material';

interface AppLayoutStyleProps {
  [key: string]: SxProps;
}

export const appLayoutStyle: AppLayoutStyleProps = {
  childrenSx: {
    minHeight: '100vh',
    // backgroundColor: 'grey.100',
    overflow: 'auto',
  },
  rootSx: {
    bgcolor: 'white',
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
