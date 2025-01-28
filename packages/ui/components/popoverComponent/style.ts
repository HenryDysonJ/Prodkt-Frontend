import type { SxProps } from '@mui/material';

interface PopoverComponentStyleProps {
  [key: string]: SxProps;
}

export const popoverComponentStyle: PopoverComponentStyleProps = {
  rootSx: {},
  popoverStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: '#ffff',
    gap: '12px',
  },

  menuItemLabelStyle: {
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '20px',
    cursor: 'pointer',
  },
};
