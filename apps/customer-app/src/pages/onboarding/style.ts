import type { SxProps } from '@mui/material';

interface onboardingProps {
  [key: string]: SxProps;
}

export const onboardingStyle: onboardingProps = {
  rootSx: {},
  cardHeadingSx: {
    display: 'grid',
    gap: 28,
  },
  welcomeStackSx: {
    minHeight: '100vh',
  },
  welcomeTextSx: {
    fontWeight: 600,
    fontSize: '30px',
    textAlign: 'left',
    color: 'primary.main',
    letterSpacing: '0.32px',
  },
  welcomeSubTextSx: {
    fontWeight: 'bold',
    fontSize: '20px',
    textAlign: 'left',
    color: 'text.A200',
  },
  productTextSx: {
    pt: 6,
    fontSize: '40px',
    color: 'common.white',
    px: 2.5,
  },
  subTextSx: {
    fontSize: '20px',
    color: 'common.white',
    px: 2.5,
    py: 2,
  },
  signupLoginTextSx: {
    fontSize: '16px',
    color: 'common.white',
    textAlign: 'center',
    py: 3,
  },
  dividerSx: {
    border: '1px solid',
    width: '80px',
    borderColor: 'divider.100',
    marginTop: '6px',
    // opacity: 0.32,
  },
  rootDividerSx: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countingTextSx: {
    // py: 2,
    fontSize: '12px',
    color: 'text.900',
    paddingBottom: '20px',
    fontWeight: 500,
    display: 'flex',
    justifyContent: 'center',
  },
  buttonSx: {
    py: 1.8,
    borderRadius: '8px',
    textTransform: 'capitalize',
    bgcolor: 'primary.main',
    boxShadow: 'none',
    '&:hover': {
      bgcolor: 'primary.main',
      boxShadow: 'none',
    },
  },
  sideTextSx: {
    '& p': {
      fontSize: '12px',
      textDecoration: 'underline',
      color: 'primary.main',
      cursor: 'pointer',
      paddingLeft: '3px',
      fontWeight: 500,
    },
  },

  appVersionSx: {
    fontSize: '12px',
    color: 'text.900',
    paddingBottom: '20px',
    fontWeight: 500,
    display: 'flex',
    justifyContent: 'center',
  },

  dividerDrawerSx: {
    color: 'grey.200',
  },

  errorMessage: {
    marginLeft: '20px',
    marginRight: '20px',
    textAlign: 'center',
  },
  onboardSectionSx: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  errorFail: {
    color: 'error.500',
  },

  errorSuccess: {
    color: 'success.500',
  },

  helperTextSx: {
    fontSize: '11px',
    paddingLeft: '2px',
    color: 'error.900',
  },
  loginTextSx: {
    fontSize: '12px',
    cursor: 'pointer',
    textAlign: 'center',
    color: 'text.900',
  },
  titleUnlockSx: {
    fontWeight: 700,
    color: 'text.900',
    fontSize: '18px',
    textAlign: 'center',
    mb: '32px',
  },
  mobileNumberSx: {
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: 'medium',
    color: 'primary.main',
    textDecoration: 'underline',
    textAlign: 'center',
    mb: 4.5,
  },
  btnSx: {
    boxShadow: 'none',
    textTransform: 'capitalize',
    borderRadius: '8px',
    width: '100%',
    px: '15px',
    py: '15px',

    '&:hover': {
      boxShadow: 'none',
    },
  },
  mobileNumberText: {
    color: 'text.500',
    fontSize: '14px',
    fontWeight: 'medium',
    textAlign: 'center',
  },
  otpTextSx: {
    color: 'text.500',
    fontSize: '14px',
    fontWeight: 'medium',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  mobileNumberStyle: {
    color: 'text.700',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
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
  mainBoxSx: {
    backgroundColor: 'primary.900',
    position: 'relative',
  },
  polygonImg: {
    position: 'absolute',
    top: '150px',
    left: '-9px',
  },
  polygonImgRight: {
    position: 'absolute',
    top: '218px',
    right: '-20px',
  },
  circleEllipseBigSx: {
    position: 'absolute',
    bottom: '116px',
    left: '-28px',
  },
  circleEllipseNormalSx: {
    position: 'absolute',
    bottom: '116px',
    left: '225px',
    right: '125px',
  },
  circleEllipseSmallSx: {
    position: 'absolute',
    top: '481px',
    bottom: '307px',
    right: '-2px',
  },
  subBoxSx: {
    px: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
  },
  titleSx: {
    marginBottom: '24px',
    marginTop: '15px',
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'text.400',
  },
  contentSx: {
    fontSize: '18px',
    color: 'text.900',
    textAlign: 'left',
    minHeight: '138px',
    '& span': {
      color: 'primary.main',
    },
  },
  circleProgressSx: {
    height: '100px',
    textAlign: 'center',
  },
  closeIconSx: {
    color: 'error.900',
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: '100px',
  },

  loginIconSectionSx: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '90px',
    marginBottom: '60px',
  },
};
