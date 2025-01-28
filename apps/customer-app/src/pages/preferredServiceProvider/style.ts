import type { SxProps } from '@mui/material';

interface PreferredService {
  [key: string]: SxProps;
}

export const PreferredServiceStyle: PreferredService = {



noProductContainer: {
    // marginTop: '65px',
    minHeight:'80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  noProductsAddedSx: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    px: 4,
    pt: 1,
    pb: 3,
  },
  noProductsTextHeaderSx: {
    display: 'grid',
    placeItems: 'center',
    pb: 2,
  },
  noProductsTextSx: {
    color: 'text.A100',
    fontWeight: 700,
    fontSize: '14px',
    marginBottom: '8px',
  },
  noAddProductsTextSx: {
    color: 'text.500',
    fontWeight: 500,
    fontSize: '12px',
  },
};