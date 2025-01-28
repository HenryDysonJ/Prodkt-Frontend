import { Avatar, Box, SxProps, Theme, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

import { pageHeaderStyle } from './style';

export interface pageHeaderProps {
  icon?: JSX.Element;
  onMoreClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onShareClick?: () => void;
  onBackBtnClick?: () => void;
  shareIcon?: JSX.Element;
  moreIcon?: JSX.Element;
  showIcon?: boolean;
  showMoreIcon?: boolean;
  showShareIcon?: boolean;
  headerText?: string;
  className?: string;
  backRoute?: string | undefined;
  stateValue?: string;
  header?: boolean;
  useBackBtnClick?: boolean;
  sx?: SxProps<Theme>;
  headerTextStyle?: SxProps<Theme>;
  subRootStyle?: SxProps<Theme>;
}

export const PageHeader = (props: pageHeaderProps): JSX.Element => {
  const {
    subRootStyle,
    headerTextStyle,
    showIcon = false,
    showMoreIcon = false,
    showShareIcon = false,
    onMoreClick = () => false,
    onShareClick = () => false,
    onBackBtnClick = () => false,
    useBackBtnClick = false,
    shareIcon,
    moreIcon,
    icon,
    headerText = '',
    backRoute = '',
    stateValue = '',
    header = false,
    className = '',
    sx = {},
    ...rest
  } = props;

  const navigate = useNavigate();

  const onBackBtnClicked = () => {
    if (useBackBtnClick && onBackBtnClick) {
      onBackBtnClick();
    } else if (backRoute.length > 0) {
      navigate(backRoute, { state: { stateValue } });
    } else navigate(-1);
  };

  return (
    <Box
      sx={[
        {
          ...pageHeaderStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <Box sx={{ ...pageHeaderStyle.subRootSx, ...subRootStyle } as SxProps<Theme>}>
        <Box>
          {showIcon && (
            <IconButton data-testid="back" disableRipple onClick={onBackBtnClicked}>
              <Avatar sx={{ bgcolor: 'background.surface.100' }}>{icon}</Avatar>
            </IconButton>
          )}
        </Box>
        {header && (
          <Box sx={{ ...pageHeaderStyle.headerTextSx, ...headerTextStyle } as SxProps<Theme>}>
            <Typography sx={{color: 'text.A100'}} variant="subtitle2" fontWeight={700}>
              {headerText}
            </Typography>
          </Box>
        )}
        {showShareIcon && (
          <IconButton data-testid="primaryServiceProvider" disableRipple onClick={() => onShareClick()}>
            <Avatar sx={{ bgcolor: 'background.surface.100' }}>{shareIcon}</Avatar>
          </IconButton>
        )}
        <Box>
          {showMoreIcon && (
            <IconButton data-testid="more" disableRipple onClick={(e) => onMoreClick(e)}>
              <Avatar sx={{ bgcolor: 'background.surface.100' }}>{moreIcon}</Avatar>
            </IconButton>
          )}
        </Box>
      </Box>
    </Box>
  );
};
