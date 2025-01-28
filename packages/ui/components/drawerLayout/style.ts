import type { SxProps } from '@mui/material';

interface DrawerLayoutStyleProps {
  [key: string]: SxProps;
}

export const drawerLayoutStyle: DrawerLayoutStyleProps = {
  rootSx: {},
  // mainBoxSx: {
  //   position: 'relative',
  // },
  // headerSx: {
  //   borderRadius: '16px',
  //   position: 'fixed',
  //   top: 275,
  //   zIndex: '1000',
  //   left: 0,
  //   right: 0,
  //   width: '100%',
  //   maxWidth: {
  //     sm: 423,
  //   },
  //   mx: {
  //     sm: 'auto',
  //   },
  //   boxSizing: 'border-box',
  //   boxShadow: '0px -5px 10px #0000000A',
  //   // backgroundColor: 'background.surface.100',
  // },
  // footerSx: {
  //   position: 'fixed',
  //   bottom: 0,
  //   zIndex: '1000',
  //   left: 0,
  //   right: 0,
  //   width: '100%',
  //   maxWidth: {
  //     sm: 425,
  //   },
  //   mx: {
  //     sm: 'auto',
  //   },
  //   boxSizing: 'border-box',
  //   borderColor: 'grey.200',
  //   boxShadow: '0px -5px 10px #0000000A',
  //   backgroundColor: 'background.surface.100',
  // },
  childrenSx: {
    // mt: 8.5,
    overflow: 'hidden',
  },
};
