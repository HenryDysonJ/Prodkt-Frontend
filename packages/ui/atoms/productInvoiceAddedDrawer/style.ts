import type { SxProps } from '@mui/material';

interface ProductInvoiceAddedDrawerStyleProps {
  [key: string]: SxProps;
}

export const productInvoiceAddedDrawerStyle: ProductInvoiceAddedDrawerStyleProps = {
  rootSx: {},
  smallCardSx: {
    // borderRadius: '8px',
    bgcolor: 'common.white',
    boxShadow: 'none',
    borderRight: '1.2px solid',
    borderColor: 'primary.100',
    textAlign: 'center',
    maxWidth: '70px',
    minHeight: '70px',
    height: '56px',
    pt: 0.5,
    width: '100%',
    // m: '0px auto',
  },
  stackBoxSx: {
    backgroundColor: 'background.surface.C800',
    border: '1px solid',
    borderColor: 'primary.A400',
    borderRadius: '8px',
  },
  dividerSx: {
    background: 'primary.100',
    borderColor: 'divider.100',
  },
  textSx: {
    color: 'text.A100',
    fontWeight: 600,
    fontSize: '14px',
    display: '-webkit-box',
    // maxWidth: '500px',
    // width: '188px',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },
  subRootSx: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'space-between',
    gap: 1.6,
    // pb: 2,
    pt: 2,
  },
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
  textSSx: {
    pt: 1.5,
    fontSize: '12px',
    color: 'text.A100',
  },
  updateButtonSx: {
    boxShadow: 'none',
    borderRadius: '10px',
    textTransform: 'capitalize',
    height: '48px',
    backgroundColor: 'primary.main',
    color: 'text.A800',
    '&:hover': {
      backgroundColor: 'primary.main',
      color: 'text.A800',
      boxShadow: 'none',
    },
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

  // rootSx: {
  //   // px: 2.5,
  //   pb: 16,
  // },
  screenlayoutSx: {
    // minHeight: '160vh',
    height: '100%',
    minHeight: '100%',
    // pt: '80px',
  },
  footerButtonSx: {
    boxShadow: 'none',
    borderRadius: '10px',
    textTransform: 'capitalize',
    backgroundColor: 'background.surface.B100',
    color: 'background.surface.B200',
    height: '48px',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: 'background.surface.B100',
      color: 'background.surface.B200',
    },
  },
  manuallyButtonSx: {
    boxShadow: 'none',
    borderRadius: '10px',
    textTransform: 'capitalize',
    height: '48px',
    backgroundColor: 'primary.main',
    color: 'text.A800',
    '&:hover': {
      backgroundColor: 'primary.main',
      color: 'text.A800',
      boxShadow: 'none',
    },
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
