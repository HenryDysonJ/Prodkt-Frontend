import type { SxProps } from '@mui/material';

interface OpportunitiesProp {
  [key: string]: SxProps;
}

export const opportunitiesStyle: OpportunitiesProp = {
  rootSx: {
  },
  containerStyle:{
    height: 'calc(100vh - 13.2rem)',
    borderRadius: '0.8rem',
    padding: '2rem',
    backgroundColor: '#ffff',
    overflowY: 'scroll',
    margin:"1.6rem 11.6rem 0rem 11.6rem",
    overflow:"scroll"
  },
};
