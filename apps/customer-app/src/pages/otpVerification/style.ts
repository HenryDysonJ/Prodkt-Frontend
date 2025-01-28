import type { SxProps } from '@mui/material';

interface OtpVerificationProps {
  [key: string]: SxProps;
}

export const otpVerificationStyle: OtpVerificationProps = {
  rootSx: {
    display: 'grid',
    gap: '80px',
    // position: 'relative'
  },
  innerRootSx: {
    px: 2.5,
    pt: 3.4,
    '& svg': {
      cursor: 'pointer',
    },
  },
  otpVerificationTextSx: {
    fontSize: '20px',
    color: 'text.A100',
    pt: 2,
    textAlign: 'center'
  },
  otpSentTextSx: {
    fontSize: '14px',
    color: 'text.A100',
    // pt: 2.5,
  },
  sentSmsTextSx: {
    mt: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1
  },
  numberTextSx: {
    fontSize: '16px',
    color: 'text.A100',
    // pt: 0.8,
    fontWeight: 'medium',
  },
  changeNumberTextSx: {
    fontSize: '14px',
    color: 'primary.main',
    fontWeight: 500,
    pt: 0.8,
    cursor: 'pointer',
    textAlign: 'center'
  },
  subRootSx: {
    px: 2,
    pt: 2,
  },
  subRootSsx: {
    py: 3,
    px: 2,
  },
  dntReceiveTextSx: {
    textAlign: 'center',
    fontSize: '12px',
    color: '#60666F',
    pt: 1.5,
  },
  resendTextSx: {
    textAlign: 'center',
    fontSize: '12px',
    color: '#60666F',
    pt: 0.5,
    cursor: 'pointer',
  },
  buttonSx: {
    boxShadow: 'none',
    textTransform: 'capitalize',
    borderRadius: '8px',
    width: '100%',
    px: '14px',
    py: '15px',
    backgroundColor: 'primary.main',
    color: 'text.A800',
    '&:hover': {
      backgroundColor: 'primary.main',
      color: 'text.A800',
      boxShadow: 'none',
    },
  },

  errorMessage: {
    marginLeft: '20px',
    marginRight: '20px',
    textAlign: 'center',
  },

  errorFail: {
    color: 'error.500',
  },

  errorSuccess: {
    color: 'success.500',
  },
};
