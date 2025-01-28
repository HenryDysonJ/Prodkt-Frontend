import type { SxProps } from '@mui/material';

interface FooterButtonComponentStyleProps {
  [key: string]: SxProps;
}

export const footerButtonComponentStyle: FooterButtonComponentStyleProps = {
  rootSx: {
    '& .Mui-disabled': {
      color: 'text.A100'
    }
  },

  cardSx: {
    backgroundColor: 'background.surface.100',
    display: 'flex',
    gap: '12px',
    // padding: '18px',
  },

  cardSectionSx: {
    backgroundColor: 'background.surface.100',
    display: 'flex',
    gap: '12px',
    padding: '0px',
  },

  leftButtonSx: {
    textTransform: 'capitalize',
    backgroundColor: 'background.surface.B100',
    color: 'background.surface.B200',
    padding: '16px',
    boxShadow: 'none',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: 'background.surface.B100',
      color: 'background.surface.B200',
      boxShadow: 'none',
    },
  },

  rightButtonSx: {
    textTransform: 'capitalize',
    backgroundColor: 'primary.main',
    color: 'text.A800',
    padding: '16px',
    boxShadow: 'none',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: 'primary.main',
      color: 'text.A800',
      boxShadow: 'none',
    },
  },
};
