import type { SxProps, Theme } from '@mui/material';
import { Box, Switch as MuiSwitch } from '@mui/material';
import { styled } from '@mui/material/styles';

import { switchStyle } from './style';

export interface SwitchProps {
  className?: string;
  sx?: SxProps<Theme>;
  rootStyle?: SxProps<Theme>;
  onChange: (isChecked: boolean) => void;
  checked: boolean;
  disabled?: boolean;
  inputProps?: { 'data-testid': string };
}

const IOSSwitch = styled((props: SwitchProps) => (
  <MuiSwitch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 38,
  height: 20,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    paddingTop: '3px',
    paddingLeft: '3px',
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(19px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        // backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 14,
    height: 14,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export const Switch = (props: SwitchProps): JSX.Element => {
  const { rootStyle = {}, onChange = () => false, disabled = false, inputProps, className = '', ...rest } = props;

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    onChange(isChecked);
  };

  return (
    <Box sx={switchStyle.rootSx} className={`${className}`}>
      <IOSSwitch
        disabled={disabled}
        sx={{
          '& .MuiSwitch-track': {
            backgroundColor: '#757C85',
            opacity: 1,
            border: 0,
          },
          '& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
            backgroundColor: '#0E70EB!important',
            opacity: 1,
          },
          m: 0.5,
          ...rootStyle,
        }}
        inputProps={inputProps}
        onChange={handleSwitchChange}
        className={`${className}`}
        {...rest}
      />
    </Box>
  );
};
