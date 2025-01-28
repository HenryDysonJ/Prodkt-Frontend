import type { SxProps, Theme } from '@mui/material';
import { Box, Divider, Stack, Typography } from '@mui/material';

import { seeWorkingHoursComponentStyle } from './style';
import { DrawerComponent, ModalHeader } from '..';
import { CloseIcon } from '@atoms/icons';

interface WorkingHoursData {
  day: string;
  time: string;
  differHours?: string;
  isDifferHours?: boolean,
}

export interface SeeWorkingHoursComponentProps {
  className?: string;
  sx?: SxProps<Theme>;
  openWorkingHoursDrawer: boolean;
  handleCloseDrawer: () => void;
  workingHoursDatas?: WorkingHoursData[];
};


export const SeeWorkingHoursComponent = (props: SeeWorkingHoursComponentProps): JSX.Element => {
  const { openWorkingHoursDrawer = false, workingHoursDatas, handleCloseDrawer = () => false, className = '', sx = {}, ...rest } = props;

  const workingHoursData = [
    {
      day: 'Monday',
      time: '9 am-5 pm',
      differHours: '',
      isDifferHours: false,
    },
    {
      day: 'Tuesday',
      time: '9 am-5 pm',
      differHours: '',
      isDifferHours: false,
    },
    {
      day: 'Wednesday',
      time: '9 am-5 pm',
      differHours: '',
      isDifferHours: false,
    },
    {
      day: 'Thursday',
      time: '9 am-5 pm',
      differHours: '',
      isDifferHours: false,
    },
    {
      day: 'Friday',
      time: '9 am-5 pm',
      differHours: '',
      isDifferHours: false,
    },
    {
      day: 'Saturday',
      time: '9 am-5 pm',
      differHours: '(Hours might differ)',
      isDifferHours: true,
    },
    {
      day: 'Sunday',
      time: '9 am-5 pm',
      differHours: '',
      isDifferHours: false,
    },

  ]


  return (
    <Box sx={[{ ...seeWorkingHoursComponentStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]} className={`${className}`}  {...rest}>
      <DrawerComponent
        open={openWorkingHoursDrawer}
        showHeader={true}
        heightStyle={{ padding: '0' }}
        headerStyle={{ paddingRight: '12px' }}
        headerComponent={
          <ModalHeader
            icon={<CloseIcon rootStyle={{color: 'text.A100'}} />}
            showIcon={true}
            showHeader={true}
            headerText={'Working Hours'}
            onClose={handleCloseDrawer}
          />
        }
      >
        <Divider sx={{ border: '1px solid', borderColor: 'divider.100' }} />
        <Box sx={{ px: 2.5, py: 2.5 }}>
          {workingHoursData.map((val) => {
            return (
              <Stack mb={2} spacing={4} direction={'row'} alignItems={'flex-start'}>
                <Typography sx={seeWorkingHoursComponentStyle.dayTextSx}>{val?.day}</Typography>
                <Stack spacing={0.6} direction={'row'} sx={{ textAlign: 'left' }}>
                  <Typography sx={seeWorkingHoursComponentStyle.timeTextSx}>{val?.time}</Typography>
                  {val?.isDifferHours &&
                    <Typography sx={seeWorkingHoursComponentStyle.difSx}>{val?.differHours}</Typography>
                  }
                </Stack>
              </Stack>

            )
          })}
        </Box>
      </DrawerComponent>
    </Box>
  );
}





