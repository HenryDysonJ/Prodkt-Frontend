import type { SxProps } from '@mui/material';

interface AddProductDetailsProps {
  [key: string]: SxProps;
}

export const addProductDetailsStyle: AddProductDetailsProps = {
  rootSx: {
    backgroundColor: 'primary.900',
    height: '100vh',
  },

  pageHeaderSx: {
    padding: '16px 20px',
  },

  productListCardSx: {
    padding: '8px 16px',
  },

  drawerHeight: {
    height: '320px',
    px: 2.4,
    py: 0,
  },
  screenlayoutSx: {
    minHeight: '100vh',
    height: '100%',
    pt: '80px',
    bgcolor: 'none',
  },
  homeSx: {
    textTransform: 'capitalize',
    padding: '15px 0',
    borderRadius: '8px',
    boxShadow: 'none',
    '&: hover': {
      boxShadow: 'none',
    },
  },
};
