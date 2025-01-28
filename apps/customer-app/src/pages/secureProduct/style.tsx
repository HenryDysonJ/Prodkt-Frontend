import type { SxProps } from '@mui/material';

interface SecureProductProps {
  [key: string]: SxProps;
}

export const secureProductStyle: SecureProductProps = {
  rootSx: {
    height: '100vh',
    backgroundColor: 'background.surface.100',
  },

  bannerSectionSx: {
    backgroundImage: 'linear-gradient(#E8F2FF, #FFFFFF)',
    textAlign: 'center',
    position: 'fixed !important',
    top: '0px',
    maxWidth: '425px',
    width: '100%',
    zIndex: '1100',
  },

  mainSx: {
    backgroundColor: 'background.surface.100',
    padding: '20px',
    paddingTop: '220px',
  },

  titleSx: {
    padding: '0 137px',
    fontSize: '14px',
    fontWeight: 500,
    paddingTop: '10px',
    fontFamily: 'excon',
    '& span': {
      color: 'primary.main',
    },
  },

  amcSx: {
    marginBottom: '16px',
  },

  insuranceSx: {
    marginBottom: '16px',
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

  warrantySx: {
    marginBottom: '100px',
  },

  footerButtonSx: {
    position: 'fixed',
    bottom: '0px',
    maxWidth: '425px',
    width: '100%',
    zIndex: '1100',
    padding: '20px',
    backgroundColor: 'background.surface.100',
  },
  SkeletonSx: {
    borderRadius: '8px',
    border: '1px solid ',
    borderColor: 'primary.100',
    boxShadow: '0px 3px 4px #0000000A',
    margin: '10px 0',
  },
};
