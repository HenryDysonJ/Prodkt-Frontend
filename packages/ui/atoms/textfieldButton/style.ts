import type { SxProps } from '@mui/material';

interface TextfieldButtonStyleProps {
  [key: string]: SxProps;
}

export const textfieldButtonStyle: TextfieldButtonStyleProps = {
  rootSx: {
    '& .MuiInputBase-root': {
      border: '1px solid #DFDFDF',
      paddingRight: '10px',
      backgroundColor: 'common.white',
      borderRadius: '8px',
      position: 'relative',
    },
    '& .MuiInputBase-root.Mui-focused': {
      border: '1px solid #999999 !important',
    },
    '& .MuiInputBase-root:hover': {
      border: '1px solid #B9B9B9',
    },
    '& .MuiInputBase-root:focus': {
      border: '1px solid #999999 !important',
    },

    '& fieldset': {
      border: 'none',
    },
    '& .MuiFormHelperText-root': {
      position: 'absolute',
      bottom: '9px',
      fontWeight: 500,
      color: 'error.900',
    },
    '& .Mui-focused': {
      border: '0px',
    },
    '& input': {
      fontSize: '14px',
      fontWeight: 600,
    },
  },

  countryCodeSx: {
    color: 'text.900',
    fontSize: '14px',
    fontWeight: 600,
  },

  getOtpSx: {
    fontSize: '14px',
    color: 'common.white',
    fontWeight: 'bold',
    backgroundColor: 'secondary.100',
    padding: '8px 18px',
    textTransform: 'capitalize',
    borderRadius: '8px',
    boxShadow: 'none',
    cursor: 'pointer',
    '&:hover': {
      color: 'common.white',
      backgroundColor: 'secondary.100',
      boxShadow: 'none',
    },
    '&.Mui-disabled': {
      backgroundColor: 'grey.500',
      color: 'common.white',
    },
    '&.MuiLoadingButton-loading': {
      backgroundColor: '#00001F1F',
      color: 'transparent',
    },
  },
};
