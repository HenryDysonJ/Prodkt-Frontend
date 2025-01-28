import type { SxProps } from '@mui/material';

interface tooltipStyleStyleProps {
  [key: string]: SxProps;
}

export const tooltipStyle: tooltipStyleStyleProps = {
  view: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    justifyContent: 'center',
    padding: '12px 16px',
    '& svg': {
      color: '#0D68DB'
    },
    '& span': {
      marginLeft: '8px',
      color: '#313840',
      fontSize: '14px',
      fontWeight: '600'
    }
  }
};
