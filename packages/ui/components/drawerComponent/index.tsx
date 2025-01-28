import { Box, DialogActions, DialogTitle, Drawer, SxProps, Theme } from '@mui/material';

import { drawerComponentStyle } from './style';

export interface DrawerComponentProps {
  open?: boolean;
  onClose?: () => void;
  sx?: SxProps<Theme>;
  headerComponent?: JSX.Element | undefined;
  children?: React.ReactNode | React.ReactNode[];
  drawerComponent?: JSX.Element | undefined;
  footerComponent?: JSX.Element | undefined;
  footer?: boolean;
  showHeader?: boolean;
  borderBottom?: boolean;
  padding?: number | string;
  id?: string;
  heightStyle?: SxProps<Theme>;
  drawerHeightStyle?: boolean;
  footerStyle?: SxProps<Theme>;
  headerStyle?: SxProps<Theme>;
}

export const DrawerComponent: React.FC<DrawerComponentProps> = ({
  open = false,
  onClose = () => false,
  showHeader = false,
  borderBottom = false,
  headerComponent = '',
  heightStyle = {},
  drawerHeightStyle = false,
  children,
  padding = '',
  headerStyle,
  footerStyle,
  footerComponent,
  footer = false,
  id,
}) => {
  return (
    <Box sx={drawerComponentStyle.rootSx} id={id}>
      <Box>
        <Drawer
          anchor="bottom"
          sx={{
            ...drawerComponentStyle?.drawer,
            '& .MuiPaper-root': {
              // height: drawerHeightStyle ? '80%' : '',
            },
          }}
          open={open}
          onClose={onClose}
        >
          {showHeader && (
            <DialogTitle
              sx={
                {
                  ...(borderBottom ? drawerComponentStyle?.headerBottomBorderSx : drawerComponentStyle?.headerSx),
                  ...headerStyle,
                } as SxProps<Theme>
              }
            >
              <Box>{headerComponent}</Box>
            </DialogTitle>
          )}

          <Box
            overflow="auto"
            padding={padding ? padding : 2.5}
            sx={
              {
                ...drawerComponentStyle?.parentBoxSx,
                ...heightStyle,
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
              <Box sx={{ ...drawerComponentStyle?.footer, ...footerStyle } as SxProps<Theme>}>{footerComponent}</Box>
            </DialogActions>
          )}
        </Drawer>
      </Box>
    </Box>
  );
};
