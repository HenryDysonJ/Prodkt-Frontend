import type { SxProps } from '@mui/material';

interface SpecificationCardStyleProps {
  [key: string]: SxProps;
}

export const specificationCardStyle: SpecificationCardStyleProps = {
  rootSx: {},
  cardSx: {
    borderRadius: '8px',
    bgcolor: 'background.surface.100',
    // boxShadow: '0px 8px 12px #0000001A',
    border: '1.2px solid',
    borderColor: 'transparent',
  },
  borderBottomDividerSx: {
    borderColor: 'divider.100',
    height:'100%',
    '& .MuiGrid-item': {
      paddingTop: '0px',

      
    },
    // borderStyle: 'dashed',
    marginTop: '8px',
    paddingBottom:'10px',

    
  },
  borderColorDividerSx: {
    // borderStyle: 'dashed',
    borderTop:'1.5px dashed green',
  },
  borderRightColorDividerSx: {
    // borderStyle: 'dashed',
    borderRight:'1.5px dashed red',
  },
  borderRightDividerSx: {
    borderBottom: '1.5px dashed',
    borderLeft: '1.5px dashed',
    borderColor: 'divider.100',
    pl: 1.5,
  },
  borderRightLastDividerSx: {
    borderLeft: '1.5px dashed',
    borderColor: 'divider.100',
    pl: 1.5,
  },
  productNameSx: {
    color: 'text.A100',
    fontSize: '10px',
    // pt: 1.5,
  },
  invoiceSubTextSx: {
    fontSize: '12px',
    fontWeight: 500,
    color: 'text.A100',
  },
  gridStyle: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },
  productSubNameSx: {
    color: 'text.700',
    width: '170px',
    fontWeight: 'medium',
    fontSize: '12px',
    pb: 1.5,
  },
  spectificationTextSx: {
    display: 'flex',
    alignItems: 'center',
    ml: -0.3,
    pb: 2,
    gap: 0.8,
    fontSize: '14px',
    fontWeight: 'bold',
    color: 'text.A100'
  },
  expiredTextSx: {
    color: 'secondary.main',
    fontSize: '12px',
    fontWeight: 500,
  },
  copyIconSx: {
    cursor: 'pointer',
  },
};
