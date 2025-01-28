import type { SxProps } from '@mui/material';

interface UseLocationStyleProps {
  [key: string]: SxProps;
}

export const useLocationStyle: UseLocationStyleProps = {
  rootSx: {},

  locationSx: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    marginTop: '-5px',
    '& p': {
      fontSize: '14px',
      color: 'primary.main',
      fontWeight: 500,
      marginLeft: '4px',
      marginBottom: '0px',
    },
  },
};
