import type { SxProps } from '@mui/material';

interface PostponeScheduledServiceComponentStyleProps {
  [key: string]: SxProps;
}

export const postponeScheduledServiceComponentStyle: PostponeScheduledServiceComponentStyleProps = {
  rootSx: {},
  btnSx:{
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

