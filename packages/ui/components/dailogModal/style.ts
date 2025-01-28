import type { SxProps } from '@mui/material';

interface DailogModalStyleProps {
  [key: string]: SxProps;
}

export const dailogModalStyle: DailogModalStyleProps = {
  rootSx: {},
  dailogSx: {
    '& .MuiDialogContent-dividers': {
      borderBottom: 'none !important',
    },
    '& .MuiDialogTitle-root': {
      fontSize: '16px',
    },
    '& .MuiTypography-h6': {
      padding: '24px',
      paddingBottom: '16px',
    },
    '& .MuiIconButton-root': {
      marginTop: '15px',
      paddingRight: '13px',
      '&:focus': {
        outline: 'none !important',
      },
    },
    '& .MuiDialogActions-spacing': {
      padding: '16px !important',
    },
    '& .MuiDialog-paper': {
      width: '400px !important',
    },
  },
};
