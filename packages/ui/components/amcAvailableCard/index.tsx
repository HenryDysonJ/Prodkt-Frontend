import { AmcExIcon, NavigateIconAmc } from '@atoms/icons';
import type { SxProps, Theme } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';

import { amcAvailableCardStyle } from './style';

export interface AmcAvailableCardProps {
  className?: string;
  sx?: SxProps<Theme>;
  headerText: string;
  onAmcClick: () => void;
  icon?: React.ReactNode;
}

export const AmcAvailableCard = (props: AmcAvailableCardProps): JSX.Element => {
  const { onAmcClick = () => false, headerText = '', icon, className = '', sx = {}, ...rest } = props;

  return (
    <Box
      sx={[{ ...amcAvailableCardStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      <Box sx={amcAvailableCardStyle.mainBoxSx}>
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} gap={1}>
          <Stack direction={'row'} alignItems={'center'} gap={1.4}>
            {icon ? icon : <AmcExIcon />}
            <Stack direction={'column'}>
              <Typography variant="subtitle2" sx={amcAvailableCardStyle.amcHeaderTextSx}>
                {headerText}
              </Typography>
              <Typography sx={amcAvailableCardStyle.subTextSx}>
                You can account for all service costs on a long-term
              </Typography>
            </Stack>
          </Stack>
          <NavigateIconAmc sx={{ cursor: 'pointer' }} onClick={() => onAmcClick()} />
        </Stack>
      </Box>
    </Box>
  );
};
