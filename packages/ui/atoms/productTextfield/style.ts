import type { SxProps } from '@mui/material';

interface CustomTextfieldStyleProps {
  [key: string]: SxProps;
}

export const customTextfieldStyle: CustomTextfieldStyleProps = {
  rootSx: {
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
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
    padding: '0 8px',

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
    borderColor: 'grey.200',
    borderRadius: '8px',
    opacity: 1,
    padding: '0 8px',

    '&: hover': {
      border: '1px solid',
      borderColor: 'grey.400',
    },
    '&: active': {
      border: '1px solid',
      borderColor: 'grey.200',
    },
    '&:focus-within': {
      border: '1px solid',
      borderColor: 'primary.main',
    },
  },
  mainBoxSx: {
    height: '48px',
    backgroundColor: 'grey.200',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid',
    borderColor: 'grey.200',
    borderRadius: '8px',
    opacity: 1,
    padding: '0 8px',
    // "&: hover": {
    //   border: "1px solid",
    //   borderColor: 'grey.400'
    // },
    '&: active': {
      border: '1px solid',
      borderColor: 'grey.200',
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
  inputsSx: {
    '& .MuiInputBase-input': {
      color: 'text.900',
      width: '100%',

      '&:focus': {
        outline: 'none',
      },
      textAlign: 'right',
      marginRight: '10px',
      '&::placeholder': {
        textAlign: 'right',
      },
    },
    fontWeight: 600,
    fontSize: '14px',
    width: '100%',
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
  },
  menuSX: {
    fontSize: '14px',
    fontWeight: 600,
    color: 'text.900',
    backgroundColor: 'background.surface.100',
    // boxShadow: '0px 4px 16px #0000000A',
  },
};
