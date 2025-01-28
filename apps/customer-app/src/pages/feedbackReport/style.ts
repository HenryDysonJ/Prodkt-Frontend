import type { SxProps } from '@mui/material';

interface FeedbackStyleProps {
  [key: string]: SxProps;
}

export const FeedbackStyle: FeedbackStyleProps = {
  rootSx: {
    px: 2.5,
    pt: 2,
    backgroundColor: 'primary.900',
    height: 'calc(100vh - 90px)',
    overflowY: 'scroll',
    '& textarea': {
      fontSize: '14px',
      fontWeight: 600,
    },
    '& ::placeholder': {
      color: 'grey.A500',
    },
  },
  boxSx: {
    backgroundColor: 'background.surface.100',
    mt: 2.5,
    borderRadius: '8px',
  },
  reportSx: {
    color: 'text.A100',
    fontSize: '14px',
    fontWeight: 'bold',
    mb: 2.5,
  },
  typeSx: {
    color: 'grey.A500',
    fontSize: '14px',
    fontWeight: 500,
    mb: 1.6,
  },
  attachedSx: {
    color: 'grey.A500',
    mb: 1.4,
    fontSize: '14px',
    fontWeight: 500,
  },
  btnBox: {
    backgroundColor: 'background.surface.100',
    px: 2.5,
    py: 2,
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
  },
};
