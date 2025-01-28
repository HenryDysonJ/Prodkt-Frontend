import { Global } from '@emotion/react';
import type { SxProps, Theme } from '@mui/material';
import { Box, DialogActions, DialogTitle } from '@mui/material';
import { grey } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useState, useRef, useEffect } from 'react';

import { draggableDrawerStyle } from './style';

export interface DraggableDrawerProps {
  className?: string;
  sx?: SxProps<Theme>;
  window?: () => Window;
  showHeader?: boolean;
  borderBottom?: boolean;
  headerStyle?: SxProps<Theme>;
  headerComponent?: JSX.Element | undefined;
  padding?: number | string;
  heightStyle?: SxProps<Theme>;
  children?: React.ReactNode | React.ReactNode[];
  footerComponent?: JSX.Element | undefined;
  footer?: boolean;
  footerStyle?: SxProps<Theme>;
}

const drawerBleeding = 380;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#fff',
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 90,
  height: 4,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 45px)',
}));

export const DraggableDrawer = (props: DraggableDrawerProps): JSX.Element => {
  const {
    className = '',
    footerStyle,
    footerComponent,
    footer = false,
    showHeader = false,
    children,
    heightStyle = {},
    padding = '',
    borderBottom = false,
    headerComponent = '',
    headerStyle = {},
    sx = {},
    ...rest
  } = props;

  const { window } = props;
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const divRef = useRef(null);

  const scrollToY = (position: number) => {
    divRef?.current && divRef?.current.scrollTo(0, position);
  };

  useEffect(() => {
    !open && scrollToY(0);
  }, [open]);

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={[{ ...draggableDrawerStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      <Root>
        <CssBaseline />
        <Global
          styles={{
            '.MuiDrawer-root > .MuiPaper-root': {
              height: `calc(90% - ${drawerBleeding}px)`,
              overflow: 'visible',
              justifyContent: 'space-between',
            },
          }}
        />
        <Box sx={{ textAlign: 'center', pt: 1 }}></Box>
        <SwipeableDrawer
          sx={draggableDrawerStyle.drawer}
          container={container}
          anchor="bottom"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <StyledBox
            sx={{
              position: 'absolute',
              top: -drawerBleeding,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              visibility: 'visible',
              right: 0,
              left: 0,
            }}
          >
            <Puller />
            {showHeader && (
              <DialogTitle
                sx={
                  {
                    ...(borderBottom ? draggableDrawerStyle?.headerBottomBorderSx : draggableDrawerStyle?.headerSx),
                    ...headerStyle,
                  } as SxProps<Theme>
                }
              >
                <Box>{headerComponent}</Box>
              </DialogTitle>
            )}
            <Box
              padding={padding ? padding : 2.5}
              ref={divRef}
              sx={
                {
                  ...draggableDrawerStyle?.parentBoxSx,
                  ...heightStyle,
                  height: drawerBleeding,
                  overflow: open === true ? 'auto' : 'hidden',
                } as SxProps<Theme>
              }
            >
              {children}
            </Box>
            {footer && (
              <DialogActions
                sx={{
                  '& .MuiDialogActions-root': {
                    padding: '0px !important',
                  },
                }}
              >
                <Box sx={{ ...draggableDrawerStyle?.footer, ...footerStyle } as SxProps<Theme>}>{footerComponent}</Box>
              </DialogActions>
            )}
          </StyledBox>
        </SwipeableDrawer>
      </Root>
    </Box>
  );
};
