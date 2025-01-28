import type { SxProps } from '@mui/material';

interface SortStyleProps {
  [key: string]: SxProps;
}

export const sortStyle: SortStyleProps = {
  rootSx: {
    border: '1px solid #D9DBDD',
    // borderColor: 'custom.outline',
    borderRadius: '8px',
    cursor: 'pointer',
    height: '40px',
    width: '40px',
    display: 'grid',
    placeItems: 'center',
  },
  badgeSx: {
    '& .MuiBadge-badge': {
      height: '6px',
      minWidth: '6px',
      left: '10px',
    },
  },
  menuItemSx: {
    '&.MuiMenuItem-root': {
      background: '#fff',
      p: '0px 10px',
    },
  },
};
