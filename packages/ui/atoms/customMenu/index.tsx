import { alpha, Menu as MuiMenu, MenuItem, MenuProps,styled } from '@mui/material';
import { bindMenu } from 'material-ui-popup-state/hooks';
import { isObject } from 'underscore';

import { IActionMenuItem, ICustomMenuProps } from './types';

const Menu = styled(MuiMenu)<MenuProps>(({ theme }) => ({
  '& .MuiMenu-paper': {
    boxShadow: `0px 1px 4px 0px ${alpha(theme.palette.common.black, 0.25)}`,
  },
}));

export function CustomMenu({ popupState, actionMenuItems, handleMenuItemClick }: ICustomMenuProps) {
  return (
    <Menu {...bindMenu(popupState)}>
      {actionMenuItems?.map((actionMenuItem: IActionMenuItem) => (
        <MenuItem
          key={actionMenuItem.id}
          onClick={() => handleMenuItemClick(actionMenuItem)}
          style={{
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0px',
            ...(isObject(actionMenuItem?.style) && actionMenuItem.style),
          }}
        >
          {actionMenuItem.label}
        </MenuItem>
      ))}
    </Menu>
  );
}

export default CustomMenu;
