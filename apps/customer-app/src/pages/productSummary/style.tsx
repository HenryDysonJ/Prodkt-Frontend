import type { SxProps } from '@mui/material';

interface productSummaryProps {
  [key: string]: SxProps;
}

export const productSummaryStyle: productSummaryProps = {
  rootSx: {
    backgroundColor: 'primary.800',
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },

  pageHeaderSx: {
    padding: '16px 20px',
  },

  productListCardSx: {
    padding: '0px 20px 4px 20px',
  },

  specificationCardSx: {
    padding: '16px 20px',
    paddingTop: '0px',
  },

  addButtonSx: {
    padding: '16px 20px',
    paddingTop: '0px',
    '& button': {
      textTransform: 'capitalize',
    },
  },
  addProductButton: {
    py: 2,
    boxShadow: 'none',
    borderRadius: '8px',
    backgroundColor: 'primary.main',
    color: 'text.A800',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: 'primary.main',
      color: 'text.A800',
    },
  },
};
