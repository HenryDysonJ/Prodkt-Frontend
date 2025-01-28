import type { SxProps } from '@mui/material';

interface ProductAddedStyleProps {
  [key: string]: SxProps;
}

export const productAddedStyle: ProductAddedStyleProps = {
  rootSx: {},

  productBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
  },

  products: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    // maxHeight: '104px',
    '& p': {
      fontSize: '12px',
      fontWeight: 600,
      marginTop: '4px',
      color: 'text.A100',
    },
  },

  squareBox: {
    position: 'relative',
  },

  productIcon: {
    display: 'flex',
    justifyContent: 'center',
    width: '64px',
    height: '64px',
    padding: '16px',
    border: '1.2px solid',
    borderStyle: 'dashed',
    borderRadius: '8px',
    borderColor: 'primary.lighter',
  },

  addIcon: {
    height: '16px',
    color: 'common.white',
    backgroundColor: 'primary.main',
    position: 'absolute',
    bottom: '0px',
    right: '0px',
    borderTopLeftRadius: '4px',
    display: 'flex',
  },
  categoryNameTextSx: {
    textAlign: 'center',
    fontSize: '12px',
    fontWeight: 500,
    color: 'text.700',
    width: '100%',
  },
  skeltonSx: {
    bgcolor: 'primary.700',
    width: '90px',
    height: '80px',
  },
};
