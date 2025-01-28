import { Button } from '@atoms/button';
import type { SxProps, Theme } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';

import { swiperComponentStyle } from './style';

export interface SwiperComponentProps {
  className?: string;
  sx?: SxProps<Theme>;
  icon: JSX.Element | undefined;
  iconTop?: SxProps<Theme> | undefined | number;
  marginTopActive?: string;
  iconBottom?: SxProps<Theme> | undefined | number;
  contentTest: JSX.Element | undefined;
  buttonName: string;
  isActiveOne: boolean | undefined;
  isActiveTwo: boolean | undefined;
  isActiveThree: boolean | undefined;
  isActiveFour: boolean | undefined;
  onClick: () => void;
}

export const SwiperComponent = (props: SwiperComponentProps): JSX.Element => {
  const {
    icon,
    iconTop,
    iconBottom,
    marginTopActive,
    onClick = () => false,
    contentTest,
    buttonName = '',
    isActiveOne = false,
    isActiveTwo = false,
    isActiveThree = false,
    isActiveFour = false,
    className = '',
    sx = {},
    ...rest
  } = props;

  return (
    <Box
      sx={[{ ...swiperComponentStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      <Stack flexDirection={'column'} height={'100%'}>
        <Box flexGrow={1}>
          <Box
            sx={{ ...swiperComponentStyle.flexBoxSx, marginTop: iconTop, marginBottom: iconBottom } as SxProps<Theme>}
          >
            {icon}
          </Box>
          <Typography variant="subtitle2" fontWeight={600} sx={swiperComponentStyle.contentSx}>
            {contentTest}
          </Typography>
        </Box>
        <Box>
          <Stack flexDirection={'row'} mt={`${marginTopActive}`} gap={'4px'} mb={5}>
            <Box sx={isActiveOne ? swiperComponentStyle.dashSx : swiperComponentStyle.dotSx} />
            <Box sx={isActiveTwo ? swiperComponentStyle.dashSx : swiperComponentStyle.dotSx} />
            <Box sx={isActiveThree ? swiperComponentStyle.dashSx : swiperComponentStyle.dotSx} />
            <Box sx={isActiveFour ? swiperComponentStyle.dashSx : swiperComponentStyle.dotSx} />
          </Stack>
          <Button onClick={onClick} sx={swiperComponentStyle.btnSx}>
            {buttonName}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
