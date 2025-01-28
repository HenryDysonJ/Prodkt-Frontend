import type { SxProps } from '@mui/material';

interface ScreenLayoutStyleProps {
  [key: string]: SxProps;
}

export const screenLayoutStyle: ScreenLayoutStyleProps = {
  rootSx: {
    position: 'relative',
    width: '100%',
  },
  totalScreenSx: {
    display: 'flex',
    alignItems: 'center',
    // gap: 2,
  },
  headerSx: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    pt: 1.5,
  },
  titleSx: {
    fontWeight: 600,
    fontSize: '14px',
  },
  appBarSx: {
    pl: 2.5,
    pr: 2.5,
    pt: 3,
    pb: 1.6,
    boxSizing: 'border-box',
    bgcolor: 'primary.main',
    borderRadius: '0px 0px 24px 24px',
    boxShadow: '0px 0px 10px #00000029',
    position: 'fixed',
    top: 0,
    zIndex: '1000',
    left: 0,
    right: 0,
    width: '100%',
    maxWidth: {
      sm: 425,
    },
    mx: {
      sm: 'auto',
    },
  },

  childrenSx: {
    // pt: '71px',
    // xs: 9,
    // pb: {
    //   xs: 14,
    // },
  },
  backIconSx: {
    cursor: 'pointer',
    pt: 1.5,
  },
};
