import type { SxProps } from '@mui/material';

interface ModalHeaderStyleProps {
  [key: string]: SxProps;
}

export const modalHeaderStyle: ModalHeaderStyleProps = {
  rootSx: {
    cursor: 'pointer'
  },

  headerSx: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& p': {
      fontSize: '14px',
      fontWeight: 'Bold',
    },
  },
};
