import type { SxProps } from '@mui/material';

interface ProductDetailsStyleProps {
  [key: string]: SxProps;
}

export const productDetailsStyle: ProductDetailsStyleProps = {
  rootSx: {},
  searchBoxSx: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '4.3px',
    mb: '4px',
  },
  typeSx: {
    fontSize: '10px',
    color: 'primary.main',
    fontWeight: 'medium',
    cursor: 'pointer',

  },
  textSx: {
    pt: 1.5,
    fontSize: '12px',
    color: 'text.A100',
  },
  drawerButton: {
    boxShadow: 'none',
    textTransform: 'capitalize',
    borderRadius: '9px',
    px: '12px',
    py: '12px',
    '&:hover': {
      boxShadow: 'none',
    },
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
  titleSx: {
    color: '#60666F',
    fontWeight: '500',
    gap: '0px'
  },
  checkBoxHeaderSx: {
    border: '1px solid',
    borderColor: '#E6EEFA',
    borderRadius: '8px',
    py: 1.5,
    pr: 1.5
  },
  purchaseTextSx: { pl: 1.5, display: 'flex', color: '#60666F', fontSize: '14px', fontWeight: '500' },

  approximateStyle: {
    border: '1.5px dashed',
    borderColor: '#E6EEFA',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    pr: 1.5
  },
  // { display: 'flex', justifyContent: 'space-between', pr: 1.5,  }
  addBoxSx: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    paddingRight: '10px',
  },
};
