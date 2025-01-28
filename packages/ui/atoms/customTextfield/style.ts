import CalenderIcon from '@core/ui/assets/calenderIconImg.png';
import type { SxProps } from '@mui/material';

interface CustomTextfieldStyleProps {
  [key: string]: SxProps;
}

export const customTextfieldStyle: CustomTextfieldStyleProps = {
  rootSx: {
    // '& ::-webkit-input-placeholder': {
    //   color: 'green',
    // },
    '& .MuiInputBase-adornedEnd': {
      display: 'flex',
      alignItems: 'center',
      marginRight: '10px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },

    '.css-1adyjnm-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'grey.B800',
    },

    '& .MuiInputBase-root': {
      '& .MuiOutlinedInput-notchedOutline': {
        '&:hover': {
          borderColor: 'grey.B800',
        },
      },
    },
  },
  errorTextField: {
    height: '48px',
    backgroundColor: 'background.surface.100',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid',
    borderColor: 'error.900',
    borderRadius: '8px',
    opacity: 1,
    pl: 1,
    pr: 0.2,

    '&: hover': {
      border: '1px solid',
      borderColor: 'error.900',
    },
    '&: active': {
      border: '1px solid',
      borderColor: 'error.900',
    },
    '&:focus-within': {
      border: '1px solid',
      borderColor: 'error.900',
    },
  },
  normalTextField: {
    height: '48px',
    backgroundColor: 'background.surface.100',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid',
    borderColor: 'grey.B800',
    borderRadius: '8px',
    opacity: 1,
    pl: 1.5,
    pr: 0.2,
    '&: hover': {
      border: '1px solid',
      borderColor: 'grey.400',
    },
    '&: active': {
      border: '1px solid',
      borderColor: 'grey.B400',
    },
    '&:focus-within': {
      border: '1px solid',
      borderColor: 'primary.main',
    },
  },
  mainBoxSx: {
    height: '48px',
    backgroundColor: 'grey.B400',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid',
    borderColor: 'grey.B800',
    borderRadius: '8px',
    opacity: 1,
    padding: '0 8px',
    '&: active': {
      border: '1px solid',
      borderColor: 'grey.B400',
    },
    '&:focus-within': {
      border: '1px solid',
      borderColor: 'primary.main',
    },
  },
  typographySx: {
    whiteSpace: 'nowrap',
    marginRight: '4px',
    color: 'text.500',
    fontSize: '14px',
  },
  darkTextSx: {
    whiteSpace: 'nowrap',
    marginRight: '4px',
    fontWeight: 600,
    color: 'text.A100',
    fontSize: '14px',
  },
  inputsSx: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'flex-start',
    '& .MuiInputBase-input': {
      color: 'text.A100',
      width: '100%',
      '&:focus': {
        outline: 'none',
      },
      textAlign: 'right',
      marginRight: '10px',
      display: 'flex',
      alignItems: 'normal',
      '&::placeholder': {
        textAlign: 'right',
      },
      '&::-webkit-calendar-picker-indicator': {
        backgroundImage: `url(${CalenderIcon})`,
        backgroundSize: '20px 20px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // filter: 'brightness(0)',
        width: '20px',
        height: '20px',
      },
    },
    fontWeight: 600,
    fontSize: '14px',
    maxWidth: '100%'
  },
  errorTextSx: {
    color: 'error.900',
    fontSize: '12px',
  },
  selectSx: {
    borderRadius: '4px',
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    fontSize: '14px',
    fontWeight: 600,
    '& .MuiMenu-paper': {
      right: '27px !important',
      left: '0px !important',
    },
  },
  menuSX: {
    fontSize: '14px',
    fontWeight: 600,
    color: 'text.900',
    backgroundColor: 'background.surface.100',
    // boxShadow: '0px 4px 16px #0000000A',
  },
  addBoxSx: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    paddingRight: '10px',
  },
  dateSx: {
    '& .MuiOutlinedInput-input': {
      right: '37px',
      fontSize: '14px',
      position: 'absolute',
      width: '86px',
      fontWeight: 500,
    },
  },
};
