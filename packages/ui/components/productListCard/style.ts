import type { SxProps } from '@mui/material';

interface ProductListCardStyleProps {
  [key: string]: SxProps;
}

export const productListCardStyle: ProductListCardStyleProps = {
  rootSx: {
    width: '100%',
    pb: 1.5,
  },

  addSx: {
    display: 'none',
  },
  showButtonSx: {
    backgroundColor: 'background.surface.D700',
     cursor: 'pointer', minHeight: '80px', width: '100%', borderRadius: '10px'
  },
  unShowButtonSx: {
    backgroundColor: 'background.surface.D700', 
    minHeight: '80px', width: '100%', borderRadius: '10px'
  },

  ProductCardSx: {
    display: 'flex',
    borderRadius: '10px',
    backgroundColor: 'background.surface.100',
    boxShadow: '0px 0px 12px #0000000F',
    alignItems: 'center',
    width: '100%',
    // minHeight: '80px',
  },

  ProductCardTextSx: {
    fontSize: '12px',
    fontWeight: 'medium',
    pl: 1,
    color: 'text.700',
    // width: '297px',
    // overflowWrap: 'break-word',
    // textWrap: 'balance',
    // py: 1,
  },

  ProductCardRightSx: {
    // borderLeft: '1.5px solid',
    // borderColor: 'grey.A300',
    // textOverflow: 'ellipsis',
    pt: 2,
    pb: 1,
    pr: '20px',
    width: '100%',
    height: '100%',
    lineBreak: 'anywhere',
  },

  dividerSx: {
    border: '1px solid',
    borderColor: 'grey.100',
  },

  fridgeIconSx: {
    width: '75px !important',
    height: '75px !important',
    padding: '12px 16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      width: '100%',
      height: '100%',
    },
  },

  addProductSx: {
    marginTop: '8px',
    cursor: 'pointer',
    textTransform: 'capitalize',
    padding: '0px',
    '& p': {
      fontSize: '12px',
      fontWeight: 700,
      color: 'primary.main',
      marginRight: '8px',
    },
  },
  skeltonSubRootSx: {
    px: 1,
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  },
  skeltonSx: {
    px: 1,
    bgcolor: 'primary.200',
  },
  buttonSkeltonSx: {
    display: 'flex',
    justifyContent: 'end',
    pb: 2,
    pr: '10px',
  },
};
