import type { SxProps } from '@mui/material';

interface inSightsProps {
  [key: string]: SxProps;
}

export const InSightsStyle: inSightsProps = {
  gridItem: {
    padding: '16px',
    margin: '12px 18px 12px 0',
    border: '1px solid #E6EEFA',
    borderRadius: '8px'
  },
  gridText: {
    color: '#8E959D',
    fontSize: '15px',
    fontWeight: '500'
  },
  gridValue: {
    color: '#010811',
    fontSize: '21px',
    fontWeight: '600'
  },
  iconSx: {
    '& img': {
      width: '25px',
      height: '25px'
    }
  }
};
