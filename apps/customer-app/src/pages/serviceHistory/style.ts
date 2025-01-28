import type { SxProps } from '@mui/material';

interface ServiceHistoryProps {
  [key: string]: SxProps;
}

export const serviceHistoryStyle: ServiceHistoryProps = {
  rootSx: {
    bgcolor: 'primary.900',
  },
  btnBox: {
    backgroundColor: 'background.surface.100', px: 2.5, py: 2
},
btnSx: {
    boxShadow: 'none',
    textTransform: 'capitalize',
    borderRadius: '8px',
    width: '100%',
    px: '14px',
    py: '15px',
    backgroundColor: 'primary.main',
      color: 'text.A800',
    '&:hover': {
      backgroundColor: 'primary.main',
      color: 'text.A800',
        boxShadow: 'none',
    },

}

};
