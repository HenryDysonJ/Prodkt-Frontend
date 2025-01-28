// import { SortIcon } from '@assets/sortIcon';
import { CustomTooltip } from '@atoms/customTooltip';
import { SORT_DATA } from '@core/utils';
import { RadioButton } from '@crayond_dev/ui_radio-button';
import { Badge, Box, Menu, MenuItem, SxProps, Theme, Typography } from '@mui/material';
import { useState } from 'react';

import { sortStyle } from './style';
// import { CustomTooltip } from '..';

export interface SortProps {
  sx?: SxProps<Theme>;
  className?: string;
  badge?: boolean | undefined;
  tooltipLabel?: string;
  sortItem?: string;
  handleChange: (value: any) => void;
}


export function Sort(props: SortProps): JSX.Element {
  const { badge = true, className = '', sx = {}, tooltipLabel = 'Sort', sortItem = '', handleChange, ...rest } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const onSortClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CustomTooltip title={tooltipLabel}>
        <Box
          sx={[
            {
              ...sortStyle.rootSx,
              borderColor: anchorEl ? 'custom.primary' : 'custom.outline',
            },
            ...(Array.isArray(sx) ? sx : [sx]),
          ]}
          className={`${className}`}
          {...rest}
          onClick={onSortClick}
        >
          {/* <Badge sx={sortStyle.badgeSx} color='error' variant={badge ? 'dot' : 'standard'}>
            <SortIcon />
          </Badge> */}
        </Box>
      </CustomTooltip>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          '& .MuiPaper-root': {
            boxShadow: ' 0px 1px 4px 0px rgba(0, 0, 0, 0.25)',
            borderRadius: '8px',
            width: '170px',
            left: '137px',
            zIndex: 10,
          },
        }}
      >
        <MenuItem disableRipple sx={sortStyle.menuItemSx}>
          <Typography sx={{ fontSize: '14px', fontWeight: '600', px: 0.2 }}>Sort by</Typography>
        </MenuItem>
        {SORT_DATA?.map((e: { label: string; value: string }, index: number) => {
          return (
            <MenuItem key={index} sx={sortStyle.menuItemSx}>
              <RadioButton
                buttonRootStyle={{
                  p: 0,
                }}
                activeBtnColor='#1363DF'
                onChange={() => {
                  handleChange(e?.label);
                  handleClose();
                }}
                radioBtnSize={22}
                checked={e?.label === sortItem}
                label={e?.label}
              />
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}
