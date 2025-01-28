import type { SxProps, Theme } from '@mui/material';
import { Box } from '@mui/material';
import { Drawer as MuiDrawer } from '@mui/material';
import { CloseIcon } from '../../assets';
import { forwardRef, useState, useEffect } from 'react';
import { drawerStyle } from './style';
import styled from '@emotion/styled';

export interface DrawerProps {
  header?: any;
  children?: any;
  height?: string;
  hideBackdrop?: boolean;
  show?: boolean;
  anchor?: any;
  footer?: any;
  isCloseIconRequired?: boolean;
  drawerRightClose?: boolean;
  rootStyle?: object;
  headerStyle?: object;
  footerStyle?: object;
  childrenStyle?: object;
  drawerStyleSX?: any;
  onCloseDrawer?: () => void;
  closeStyle?: object;
  className?: string;
  sx?: SxProps<Theme>;
}

const DrawerHeader = styled('div')(({ theme }) => ({
  position: 'relative',
  maxWidth: '250px',
  width: '250px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
}));


export const Drawer = forwardRef((props: DrawerProps, ref: React.Ref<HTMLElement>): JSX.Element => {
  const {
    className = '',
    sx = {},
    header,
    children,
    height = 'auto',
    hideBackdrop = false,
    show = false,
    anchor = 'left',
    footer,
    isCloseIconRequired = false,
    drawerRightClose = false,
    rootStyle = {},
    headerStyle = {},
    footerStyle = {},
    drawerStyleSX = {},
    childrenStyle = {},
    onCloseDrawer = () => false,
    closeStyle = {},
    ...rest
  } = props;

  const [state, setState] = useState(show);

  useEffect(() => {
    if (show) {
      setState(true);
    } else {
      setState(false);
    }
  }, [show]);
  return (
    <MuiDrawer
      sx={{
        ...drawerStyle.rootSx,
        ...rootStyle,
      }}
      anchor={anchor}
      open={state}
      onClose={() => {
        setState(false);
        onCloseDrawer();
      }}
      hideBackdrop={hideBackdrop}
      {...rest}
    >
      <Box sx={drawerStyle.totalHeaderSx}>
        <DrawerHeader>
          <Box sx={drawerStyle.closeIconSx} id='close' onClick={() => {
            setState(false);
            onCloseDrawer();
          }}>
            <CloseIcon />
          </Box>
          {header && (
            <Box
              sx={{
                ...drawerStyle.headerSx,
                ...headerStyle,
              }}
            >
              {header}
            </Box>
          )}
        </ DrawerHeader>
      </Box>

      <Box
        sx={{
          ...drawerStyle.childrenSx,
          ...drawerStyleSX,
          height,
        }}
      >
        {children}
      </Box>
      {footer && (
        <Box
          sx={{
            ...drawerStyle.footerSx,
            ...footerStyle,
          }}
        >
          {footer}
        </Box>
      )}
    </MuiDrawer>

    // <MuiDrawer
    //   sx={{
    //     width: 240,
    //     flexShrink: 0,

    //     '& .MuiDrawer-paper': {
    //       width: 240,
    //       boxSizing: 'border-box',
    //     },
    //   }}
    //   anchor="right"
    //   open={state}
    // >

    // <DrawerHeader>
    //   <h1 >asbfibks</h1>
    // </DrawerHeader>
    // </MuiDrawer >
  );
});

Drawer.displayName = 'Drawer';
