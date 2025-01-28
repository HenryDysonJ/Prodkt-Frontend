import type { SxProps } from '@mui/material';

interface ChipsStyleProps {
  [key: string]: SxProps;
}

export const chipsStyle: ChipsStyleProps = {
  rootSx: {
    '& .MuiChip-root': {
      '&.MuiChip-clickable:hover': {
        backgroundColor: 'primary.100',
      },
      '&:active': {
        boxShadow: 'none',
      },
    },
  },

  chipDelete: {
    cursor: 'pointer',
  },
};
