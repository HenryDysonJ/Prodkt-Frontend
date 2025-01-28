import ArrowRightIcon from '@atoms/icons/arrowRightIcon';

import type { SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';

import { scheduleServiceCardStyle } from './style';

export interface ScheduleServiceCardProps {
  className?: string;
  sx?: SxProps<Theme>;
  imgStyle?: SxProps<Theme>;
  icon: React.ReactNode;
  id?: string;
  title: string;
  ShowNavIcon?: boolean;
  handleScheduleServiceDrawer: (status: boolean) => void;
  cardStyle?: SxProps<Theme>;
}

export const ScheduleServiceCard = (props: ScheduleServiceCardProps): JSX.Element => {
  const { className = '', id = '', icon, imgStyle, title = '', ShowNavIcon = false, sx = {}, handleScheduleServiceDrawer, cardStyle, ...rest } = props;

  return (
    <Box
      id={id}
      sx={[{ ...scheduleServiceCardStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      <Box sx={{ ...scheduleServiceCardStyle.scheduleService, ...cardStyle }} onClick={() => handleScheduleServiceDrawer(true)}>
        <Box sx={{ ...scheduleServiceCardStyle.scheduleServiceImage, ...imgStyle } as SxProps<Theme>}>

          {icon}
        </Box>
        <Typography variant='subtitle2' sx={scheduleServiceCardStyle.scheduleServiceTitle}>{title}</Typography>
        {ShowNavIcon &&
          <Box data-testid='Click to schedule service' sx={scheduleServiceCardStyle.goScheduleService}>
            <ArrowRightIcon />
          </Box>}
      </Box>
    </Box>
  );
};
