import type { SxProps } from '@mui/material';

interface CompanyWarrantyCardStyleProps {
  [key: string]: SxProps;
}

export const companyWarrantyCardStyle: CompanyWarrantyCardStyleProps = {
  rootSx: {
    // pb: 1,
    // pt: 0.235,
    mt: 2,
  },

  svgImageSx: {
    py: 1.6,
    pl: 1.6,
  },

  mainBoxSx: {
    backgroundColor: 'background.surface.100',
    boxShadow: '0px -2px 6px #0000000F',
    border: '1px solid',
    borderColor: 'primary.A900',
    borderRadius: '8px',
    opacity: 1,
    height: '100%',
  },
  mainSubBoxSx: {
    backgroundColor: 'background.surface.100',
    cursor: 'pointer',
    boxShadow: '0px -2px 6px #0000000F',
    border: '1px solid',
    borderColor: 'primary.A900',
    borderRadius: '8px',
    opacity: 1,
    height: '100%',
  },
  radiusBoxSx: {
    backgroundColor: 'background.surface.D300',
    borderRadius: '12px 0px 0px 12px',
    opacity: 1,
    pl: '10.3px',
    pr: '7.3px',
    pt: '4.5px',
    pb: '5px',
  },
  radiusSx: {
    color: 'primary.B700',
    fontSize: '10px',
  },
  companyNameSx: {
    color: 'text.A200',
    fontSize: '14px',
    fontWeight: 600,
  },
  updateNameSx: {
    color: 'primary.B600',
    fontSize: '14px',
    fontWeight: 600,
    marginTop: '-2px',
    cursor: 'pointer',
  },
  updateNameSxService: {
    color: 'text.900',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
  },


  emptyContentSx: {
    color: 'text.400',
    fontSize: '12px',
  },
};
