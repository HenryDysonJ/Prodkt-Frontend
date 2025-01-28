import type { SxProps } from '@mui/material';

interface ViewHistoryComponentStyleProps {
  [key: string]: SxProps;
}

export const viewHistoryComponentStyle: ViewHistoryComponentStyleProps = {
  rootSx: {
    backgroundColor: 'background.surface.100',
    borderRadius: '8px',
    padding: '4px',
  },

  backgroundSx: {
    backgroundColor: 'secondary.A200',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
  },

  progressTextSx: {
    fontSize: '14px',
    color: 'secondary.main',
  },

  textSx: {
    color: 'text.A100',
    paddingBottom: '16px',
  },

  buttonSx: {
    textTransform: 'capitalize',
    padding: '10px 15px',
    borderRadius: '8px',
    backgroundColor: 'secondary.main',
    boxShadow: 'none',
    width: '139px',
    fontSize: '12px',
    '&:hover': {
      backgroundColor: 'secondary.main',
      boxShadow: 'none',
    },
  },
};
