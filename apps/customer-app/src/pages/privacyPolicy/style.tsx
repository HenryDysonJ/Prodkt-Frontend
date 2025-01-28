import type { SxProps } from '@mui/material';

interface privacyPolicyProps {
  [key: string]: SxProps;
}

export const privacyPolicyStyle: privacyPolicyProps = {
  rootSx: {
    backgroundColor: 'primary.900',
    height: '100%',
    padding: '0px 16px',
    paddingBottom: '20px',
  },

  boxContainerSX: {
    borderRadius: '10px',
    backgroundColor: 'common.white',
    padding: '16px',
    height: '600px',
    overflowY: 'scroll',
  },

  containerOneSx: {
    paddingBottom: '16px',
  },

  titleSx: {
    fontSize: '14px',
    color: 'text.A100',
    fontWeight: 900,
    paddingBottom: '10px',
    letterSpacing: '0.5px',
  },

  subTitleSx: {
    fontSize: '12px',
    color: 'text.700',
    fontWeight: 600,
    paddingBottom: '10px',
  },

  textSx: {
    fontSize: '12px',
    color: 'text.700',
    fontWeight: 500,
    letterSpacing: '0.1px',
    paddingBottom: '10px',
  },

  website: {
    fontSize: '12px',
    color: 'primary.main',
    fontWeight: 500,
    letterSpacing: '0.3px',
    textDecoration: 'underline',
  },

  emailSx: {
    fontSize: '12px',
    color: 'primary.main',
    fontWeight: 500,
    letterSpacing: '0.3px',
    '& span': {
      textDecoration: 'underline',
    },
  },
};
