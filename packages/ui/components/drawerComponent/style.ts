import type { SxProps } from '@mui/material';

interface DrawerComponentStyleProps {
  [key: string]: SxProps;
}

export const drawerComponentStyle: DrawerComponentStyleProps = {
  rootSx: {
    '& .MuiDialogActions-root': {
      padding: '0px !important',
    },
    bgcolor: 'none',
  },

  dialog: {
    width: '100%',
    maxWidth: 'auto',
    padding: '0 !important',
    '& .MuiPaper-root': {
      width: '100% !important',
      borderRadius: '4px',
      // backgroundImage: (props) => props?.noService && `url("/images/noserviceweb.svg")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      // height: (props) => props?.noService && '400px',
    },
    '& .MuiDialogContent-root': {
      padding: '0px !important',
      position: 'relative',
    },
    '& .MuiDialog-container': {
      // padding: (props) => props?.padding ?? '',
    },
  },

  headerBottomBorderSx: {
    borderBottom: '0.5px solid',
    borderColor: 'divider.100',
  },

  drawer: {
    '& .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop': {
      backgroundColor: 'background.surface.D600',
      opacity: '20% !important'
    },
    '& .MuiDrawer-paper': {
      backgroundColor: 'background.surface.A400',
      borderTopLeftRadius: '16px',
      borderTopRightRadius: '16px',
      backgroundImage: 'none',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPositionY: 'center',
      width: '100%',
      maxWidth: '423px',
      margin: '0px auto',
    },
    '& .MuiContainer-root': {
      padding: '0px',
    },
  },

  component: {
    overflow: 'auto',
    height: '450px',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },

  footer: {
    position: 'sticky',
    width: '100%',
    bottom: '0',
  },

  deleteIconsSx: {
    cursor: 'pointer',
  },
};
