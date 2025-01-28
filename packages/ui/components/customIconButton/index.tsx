import { SxProps, Theme, Typography } from '@mui/material';
import { Box } from '@mui/material';

import { customIconButtonStyle } from './style';

export interface CustomIconButtonProps {
  className?: string;
  sx?: SxProps<Theme>;
  icon?: JSX.Element;
  topIcon?: JSX.Element;
  iconBottomText?: string;
  showIcon?: boolean;
  showText?: boolean;
  onClickIconButton?: (() => void) | undefined;
}

export const CustomIconButton = (props: CustomIconButtonProps): JSX.Element => {
  const {
    onClickIconButton = () => false,
    icon,
    topIcon,
    iconBottomText = '',
    showIcon = false,
    showText = false,
    ...rest
  } = props;

  return (
    <Box sx={customIconButtonStyle.rootSx} onClick={() => onClickIconButton()} {...rest}>
      <Box sx={customIconButtonStyle.scanSx}>
        {topIcon && <Box sx={customIconButtonStyle.topIconSx}>{topIcon}</Box>}
        {showIcon && <Box>{icon}</Box>}
        {showText && <Typography>{iconBottomText}</Typography>}
      </Box>
    </Box>
  );
};
