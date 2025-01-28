import type { SxProps } from '@mui/material';

interface ProductProtectionFormProps {
  [key: string]: SxProps;
}

export const productProtectionFormStyle: ProductProtectionFormProps = {
  rootSx: {},

  leftButtonSX: {
    display: 'flex',
    justifyContent: 'center',
  },

  checkTextSx: {
    color: 'text.A100',
    fontSize: '14px',
  },

  rightButtonSX: {
    display: 'flex',
    justifyContent: 'center',
  },

  checkBoxSx: {
    display: 'flex',
    marginTop: '16px',
    paddingLeft: '2px',
    '& .MuiButtonBase-root': {
      '& span': {
        borderRadius: '3px',
      },
    },
  },

  footerUpdateBtnSx: {
    margin: '25px 0px',
    marginBottom: '5px',
    '& button': {
      padding: '10px 0',
      textTransform: 'capitalize',
      borderRadius: '8px',
      color: 'common.white',
      fontSize: '14px',
      fontWeight: 500,
      backgroundColor: 'primary.main',
      '&:hover': {
        color: 'common.white',
        backgroundColor: 'primary.main',
      },
    },
  },
};
