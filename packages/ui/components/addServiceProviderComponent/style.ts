import type { SxProps } from '@mui/material';

interface AddServiceProviderComponentStyleProps {
  [key: string]: SxProps;
}

export const addServiceProviderComponentStyle: AddServiceProviderComponentStyleProps = {
  rootSx: {},
  btnSx:{
    backgroundColor: 'primary.main',
    color: 'text.A800',
    boxShadow: 'none',
        textTransform: 'capitalize',
        borderRadius: '8px',
        width: '100%',
        px: '14px',
        py: '15px',

        '&:hover': {
          backgroundColor: 'primary.main',
    color: 'text.A800',
            boxShadow: 'none',
        },
  },
  searchBoxSx: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '4.3px',
    mb: '16px',
    cursor: 'pointer',
  },
  typeSx: {
    fontSize: '12px',
    color: 'primary.main',
    fontWeight: 'medium',
  },
};

