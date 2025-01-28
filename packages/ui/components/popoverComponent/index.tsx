import { Box, Popover, SxProps, Theme,Typography } from '@mui/material';
import { forwardRef } from 'react';

import { popoverComponentStyle } from './style';
interface ActionMenu {
  id: string;
  label: string;
  menuItemLabelStyle?: string;
  color?: string;
  style?: SxProps;
}
export interface PopoverOrigin {
  vertical: 'top' | 'center' | 'bottom' | number;
  horizontal: 'left' | 'center' | 'right' | number;
}
export interface PopoverComponentProps {
  className?: string;
  sx?: SxProps<Theme>;
  actionMenu: ActionMenu[];
  handleClose: () => void;
  eventCuretTarget: HTMLDivElement | any;
  menuItemLabelStyle?: SxProps;
  anchorOrigin: PopoverOrigin;
  transformOrigin: PopoverOrigin;
  handleClickMenuLabel?: (e: any, val: ActionMenu, index: any) => void;
}
export const PopoverComponent = forwardRef((props: PopoverComponentProps, ref: React.Ref<HTMLElement>): JSX.Element => {
  const {
    className = '',
    sx = {},
    eventCuretTarget,
    transformOrigin,
    anchorOrigin,
    handleClose,
    actionMenu,
    menuItemLabelStyle,
    handleClickMenuLabel,
    ...rest
  } = props;

  const open = Boolean(eventCuretTarget);
  const id = open ? 'simple-popover' : undefined;
  return (
    <Box
      sx={[
        {
          ...popoverComponentStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      ref={ref}
      {...rest}
    >
      <Popover
        id={id}
        open={open}
        anchorEl={eventCuretTarget}
        onClose={handleClose}
        PaperProps={{
          sx: popoverComponentStyle.popoverStyle,
        }}
        elevation={2}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        {...rest}
      >
        {actionMenu &&
          actionMenu.length > 0 &&
          actionMenu.map((menu: ActionMenu, index: any) => (
            <>
              <Typography
                onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) =>
                  handleClickMenuLabel && handleClickMenuLabel(e, menu, index)
                }
                key={menu.id}
                sx={
                  {
                    ...popoverComponentStyle.menuItemLabelStyle,
                    color: menu?.color ?? 'custom.onSurface',
                    ...menu?.style,
                    ...menuItemLabelStyle,
                  } as SxProps
                }
              >
                {menu?.label}
              </Typography>
            </>
          ))}
      </Popover>
    </Box>
  );
});

PopoverComponent.displayName = 'PopoverComponent';
