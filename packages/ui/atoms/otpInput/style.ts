import type { SxProps } from '@mui/material';

interface OtpInputStyleProps {
  [key: string]: SxProps;
}

export const otpInputStyle: OtpInputStyleProps = {
  rootSx: {
    '& input': {
      '&:focus-visible': {
        outline: '0px !important',
      },
      '&:focus': {
        backgroundColor: '#fff !important',
        borderColor: '#DFDFDF !important',
        color: '#000 !important',
        border: '1px solid',
      },
    },
  },
  inputStyleSx: {
    border: '1px solid',
    borderColor: '#DFDFDF',
    borderRadius: '8px',
    width: '50px',
    height: '50px',
    fontSize: '16px',
    color: '#000',
    fontWeight: '600',
    backgroundColor: '#fff',
  },
};
