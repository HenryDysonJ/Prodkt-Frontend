import { bindTrigger,usePopupState } from 'material-ui-popup-state/hooks';
import { useState } from 'react';

interface IUseTableMenuProps {
  popupId?: string;
}

function useTableMenu({ popupId = 'table-menu' }: IUseTableMenuProps) {
  const popupState = usePopupState({ variant: 'popover', popupId: popupId });
  const { onClick, ...restBindTriggerProps } = bindTrigger(popupState);

  const [currentRow, setCurrentRow] = useState<{ [key: string]: any } | null>(null);

  const handleMenuClick = (id: string | number, rowData: object, event: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentRow(rowData);

    onClick(event);
  };

  const handleMenuClose = () => {
    popupState.close();

    setCurrentRow(null);
    // const x = setTimeout(() => {
    // }, 0);

    // clearTimeout(x);
  };

  return {
    popupState,
    currentRow,
    restBindTriggerProps,
    handleMenuClick,
    handleMenuClose,
  };
}

export default useTableMenu;
