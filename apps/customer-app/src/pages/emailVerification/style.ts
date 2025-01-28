import type { SxProps } from '@mui/material';

interface EmailVerificationStyleProps {
  [key: string]: SxProps;
}

export const emailVerificationStyle: EmailVerificationStyleProps = {
  rootSx: {},
  mainBoxSx: {
    px: 2.5,
    py: 2,
  },
  divider: {
    color: 'divider.100',
  },
  verificationText: {
    mb: 2,
    fontSize: '14px',
    color: 'text.A100',
    fontWeight: '600',
  },
  digitSx: {
    mb: 1,
    color: 'text.500',
    fontSize: '12px',
  },
  flexBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  emailSx: {
    color: 'text.700',
    fontWeight: '600',
    fontSize: '12px',
  },
  changeEmailSx: {
    color: 'primary.main',
    fontSize: '12px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  changeDisbleEmailSx: {
    color: 'grey.500',
    fontSize: '12px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  otpBoxSx: {
    px: 4.1,
    py: 4.1,
  },
  otpBtnSx: {
    '& input': {
      '&:focus-visible': {
        outline: '0px !important',
      },
      '&:focus': {
        backgroundColor: '#FFFFFF !important',
        borderColor: '#DFDFDF !important',
        color: 'black !important',
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',

      border: '1px solid !important',
      borderColor: '#DFDFDF !important',
      borderRadius: '8px',
      height: '48px !important',
      // width: '48px !important',
      fontSize: '16px',
      color: 'black !important',
      fontWeight: '600',
      backgroundColor: '#fff !important',
    },
  },
  resendCode: {
    mb: 3,
    textAlign: 'center',
    color: 'primary.main',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
  },
  btnSx: {
    boxShadow: 'none',
    textTransform: 'capitalize',
    borderRadius: '8px',
    width: '100%',
    px: '15px',
    py: '15px',
    backgroundColor: 'primary.main',
    color: 'text.A800',
    '&:hover': {
      backgroundColor: 'primary.main',
      color: 'text.A800',
      boxShadow: 'none',
    },
  },
  codePenIconSx: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  receiveOtpSx: {
    color: 'text.500',
    fontSize: '12px',
    textAlign: 'center',
    mb: '4px',
  },
  resendOtpSx: {
    color: 'text.900',
    fontSize: '12px',
    textAlign: 'center',
    mb: 2.2,
  },
};
