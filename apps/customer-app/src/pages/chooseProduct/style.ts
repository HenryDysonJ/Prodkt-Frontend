import type { SxProps } from '@mui/material';

interface chooseProductStyleProps {
  [key: string]: SxProps;
}

export const chooseProductStyle: chooseProductStyleProps = {
  rootSx: {
    backgroundColor: 'primary.900',
    minHeight: '100vh',
  },
  cardContainer: {
    padding: '10px 0',
    // height: 'calc(100vh - 65px)',
    overflowY: 'overlay',
  },
  noProductContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
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
    marginBottom: '6px',
  },
  noAddProductsTextSx: {
    color: 'text.500',
    fontWeight: 500,
    fontSize: '12px',
  },
};
