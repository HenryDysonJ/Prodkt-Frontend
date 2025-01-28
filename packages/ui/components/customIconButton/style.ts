import type { SxProps } from '@mui/material';

interface CustomIconButtonStyleProps {
  [key: string]: SxProps;
}

export const customIconButtonStyle: CustomIconButtonStyleProps = {
  rootSx: {
    width: '100%',
    marginTop: '10px',
  },

  scanSx: {
    width: '100%',
    height: '160px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey.A400',
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: '8px',
    position: 'relative',
    '& p': {
      fontSize: '14px',
      color: 'text.A700',
      marginTop: '10px',
    },
  },

  topIconSx: {
    position: 'absolute',
    top: '15px',
    right: '15px',
  },
};
