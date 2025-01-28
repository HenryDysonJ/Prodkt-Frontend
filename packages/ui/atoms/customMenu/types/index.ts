import { PopupState } from 'material-ui-popup-state/hooks';

export interface IActionMenuItem {
  id: string;
  label: string;
  [key: string]: any;
}

export interface ICustomMenuProps {
  popupState: PopupState;
  actionMenuItems: Array<IActionMenuItem>;
  handleMenuItemClick: (val: IActionMenuItem) => void;
}
