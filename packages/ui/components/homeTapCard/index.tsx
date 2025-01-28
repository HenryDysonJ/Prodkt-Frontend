import type { SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';

import { homeTapCardStyle } from './style';
import { ClosePwtIcon } from '@atoms/icons';
import { isPWA, isStandalone } from '@core/utils';

export interface HomeTapCardProps {
  className?: string;
  sx?: SxProps<Theme>;
  icon: React.ReactNode;
  title: string;
  id?: string;
  secondTitle: string;
  onClickCard: (status: boolean) => void;
}

export const HomeTapCard = (props: HomeTapCardProps): JSX.Element => {
  const { className = '', id = '', sx = {}, icon, title = '', secondTitle = '', onClickCard, ...rest } = props;

  // if (!isStandalone()) {
  //   return null as any;
  // }
  let isAppOpenedInPWA = isPWA();

  if (isAppOpenedInPWA) {
    return null as any;
  }

  return (
    <Box sx={{ px: '12px', pt: '22px' }}>
      <Box
        onClick={() => onClickCard(true)}
        sx={[{ ...homeTapCardStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
        className={`${className}`}
        {...rest}
        id={id}
      >
        <Box sx={homeTapCardStyle.iconContainer}>{icon}</Box>
        <Typography sx={homeTapCardStyle.text}>
          {title}
          <Box sx={{ fontWeight: '600' }} component="span">
            {secondTitle}
          </Box>
        </Typography>
        {/* <ClosePwtIcon sx={{ height: 12, width: 12, mt: 2.4 }} /> */}
      </Box>
    </Box>
  );
};
