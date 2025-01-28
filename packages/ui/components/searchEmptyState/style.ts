import type { SxProps } from '@mui/material';

interface SearchEmptyStateStyleProps {
  [key: string]: SxProps;
}

export const searchEmptyStateStyle: SearchEmptyStateStyleProps = {
  rootSx: {},
  flexBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    flexDirection: 'column',
  },
  emptyTitleSx: {
    color: 'text.A100',
    fontSize: '14px',
    fontWeight: 'bold',
    mt: '24px',
    mb: '12px',
  },
  emptySubTitleSx: {
    color: 'text.500',
    fontSize: '12px',
  },
};
