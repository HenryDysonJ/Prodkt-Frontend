import { StyleProps, StyleRuleProps } from '@core/utils';
import { Theme } from '@mui/material';

export const Sx: StyleProps = {
  iconSx: {
    border: (theme: Theme) => `1px solid ${theme.palette.custom.outline}`,
    // borderColor: 'custom.outline',
    borderRadius: 2,
    cursor: 'pointer',
    height: '40px',
    width: '40px',
    display: 'grid',
    placeItems: 'center',
  } as StyleRuleProps,
};

export default Sx;
