import { StyleProps, StyleRuleProps } from '@core/utils';
import type { Theme } from '@mui/material';

export const sortStyle: StyleProps = {
  rootSx: {
    border: '1px solid red',
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
      background: (theme: Theme) => theme.palette.common.white,
      p: '0px 10px',
    },
  } as StyleRuleProps,
};
