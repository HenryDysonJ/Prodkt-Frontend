import ProductDetailsImg from '@core/ui/assets/productDetailsbackimg.svg';
import type { SxProps } from '@mui/material';

interface ProductProfileStyleProps {
  [key: string]: SxProps;
}

export const productProfileStyle: ProductProfileStyleProps = {
  rootSx: {},
  subRootSx: {
    backgroundImage: `url(${ProductDetailsImg})`,
    backgroundSize: 'contain',
    bgcolor: 'background.surface.100',
    borderRadius: '8px',
    mt: 8,
    pt: 3,
  },
  smallCardSx: {
    borderRadius: '8px',
    bgcolor: 'background.surface.100',
    boxShadow: 'none',
    border: '1.2px solid',
    borderColor: 'primary.A900',
    textAlign: 'center',
    width: '100%',
    maxWidth: '72px',
    height: '72px',
    // pt: 0.5,
    padding: '10px',
    m: '0px auto',
    marginTop: '-63px',
  },
  productTextSx: {
    display: 'flex',
    justifyContent: 'center',
    gap: 0.5,
    fontSize: '18px',
    fontWeight: 700,
    cursor: 'pointer',
    color: 'text.A100',
    textAlign: 'center',
    pl: 1,
    pt: 2,
  },
  purchasedTextSx: {
    fontSize: '12px',
    color: 'text.500',
    textAlign: 'center',
  },
  updateTextSx: {
    color: 'primary.main',
    fontSize: '10px',
    fontWeight: 500,
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  expiringTextSx: {
    fontSize: '12px',
    color: 'text.A100',
    fontWeight: 500,
  },
  tillTextSx: {
    fontSize: '10px',
    color: 'text.500',
    textAlign: 'center',
  },
  tillExpireText: {
    fontSize: '10px',
    color: 'error.900',
    textAlign: 'center',
  },
  dividerSx: {
    borderLeft: '1px dashed',
    borderColor: 'divider.100',
  },

  flexBoxSx: {
    pt: 0.6,
    pb: 2,
    px: 3,
    borderRadius:'8px',
    backgroundColor:'grey.B900'
  },
  commonDividerSx: {
    borderBottom: '1.3px solid',
    borderColor: 'divider.100',
  },
  inSideDividerSx: {
    borderLeft: '1.3px solid',
    borderColor: 'grey.A300',
    height: '20px',
  },
  serialNoSx: {
    color: 'text.500',
    fontSize: '12px',
  },
  viewTextSx: {
    color: 'primary.main',
    fontSize: '12px',
    fontWeight: 500,
    cursor: 'pointer',
  },
  copyIconSx: {
    cursor: 'pointer',
    width: 10.939,
    height: 12.99,
  },
  boxSx: {
    border: '1px solid',
    borderStyle: 'dashed',
    borderColor: 'primary.main',
    borderRadius: '8px',
    backgroundColor: 'primary.800',
    display: 'flex',
    justifyContent: 'space-between',
    px: 2,
    py: 2,
  },
  uploadDocumentNameSx: {
    fontSize: '14px',
    fontWeight: 500,
    width: '300px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  updateButtonSx: {
    boxShadow: 'none',
    borderRadius: '10px',
    textTransform: 'capitalize',
    height: '48px',
    '&:hover': {
      boxShadow: 'none',
    },
  },
  rootSkeletonSx: {
    backgroundColor: 'background.surface.100',
    borderRadius: '10px',
    padding: '20px'
  },
  labelSkeletonSx: {
    backgroundColor: 'primary.200'
  },
  headSx: {
    backgroundColor: 'background.surface.100',
  },
  boxStyleSx: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
  }
};

