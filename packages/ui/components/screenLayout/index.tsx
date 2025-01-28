import { BackIcon } from '@core/ui/atoms/icons';
import type { SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { screenLayoutStyle } from './style';

export interface ScreenLayoutProps {
  className?: string;
  title?: string;
  children?: React.ReactNode | React.ReactNode[];
  backRequired?: boolean;
  titleRequired?: boolean;
  tabRequired?: boolean;
  childrenStyle?: SxProps<Theme> | undefined;
  titleStyle?: SxProps<Theme> | undefined;
  backRoute?: string;
  appBarStyle?: SxProps<Theme> | undefined;
  stateValue?: string;
  sx?: SxProps<Theme> | undefined;
  onBackBtnClick?: () => void;
  useBackBtnClick?: boolean;
}

export const ScreenLayout = (props: ScreenLayoutProps): JSX.Element => {
  const {
    className = '',
    children,
    appBarStyle,
    title = 'Screen Title',
    backRequired = false,
    onBackBtnClick = () => false,
    useBackBtnClick = false,
    titleRequired = true,
    tabRequired = false,
    childrenStyle,
    titleStyle,
    stateValue = '',
    sx = {},
    ...rest
  } = props;

  const navigate = useNavigate();

  const onBackBtnClicked = () => {
    if (useBackBtnClick && onBackBtnClick) {
      onBackBtnClick()
    } else if (backRoute.length > 0) {
      navigate(backRoute, { state: { stateValue } })
    } else navigate(-1)
  }

  return (
    <Box
      sx={[{ ...screenLayoutStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      <Box sx={{ ...screenLayoutStyle.appBarSx, ...appBarStyle } as SxProps<Theme>}>
        <Box sx={{ ...screenLayoutStyle.totalScreenSx, pb: tabRequired ? 1 : 0 }}>
          {backRequired && (
            <BackIcon
              rootStyle={screenLayoutStyle.backIconSx}
              onClick={onBackBtnClicked}
            />
          )}

          {/* Title */}
          {titleRequired && (
            <Box sx={screenLayoutStyle.headerSx}>
              <Typography
                sx={{ ...screenLayoutStyle.titleSx, ...titleStyle } as SxProps<Theme>}
                variant="subtitle2"
                color="common.white"
              >
                {title}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
      <Box
        sx={
          {
            ...screenLayoutStyle.childrenSx,
            ...childrenStyle,
          } as SxProps<Theme>
        }
      >
        {children}
      </Box>
    </Box>
  );
};
