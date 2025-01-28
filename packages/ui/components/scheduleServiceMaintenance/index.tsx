import type { SxProps, Theme } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';

import { scheduleServiceMaintenanceStyle } from './style';
import { DrawerComponent, FooterButtonComponent, ModalHeader } from '..';
import { CloseIcon } from '@atoms/icons';

export interface ScheduleServiceMaintenanceProps {
  className?: string;
  sx?: SxProps<Theme>;
  openDrawerServiceReminder: boolean;
  icon: JSX.Element;
  drawerTitle: string;
  leftButtonName: string;
  showDrawerSubtitle: boolean;
  showBottomText: boolean;
  bottomText?: string;
  drawerSubtitle?: string;
  rightButtonName: string;
  handleClickPrevious: () => void;
  handleClickBottom?: () => void;
  handleClickNext: () => void;
};


export const ScheduleServiceMaintenance = (props: ScheduleServiceMaintenanceProps): JSX.Element => {
  const { className = '', icon, showDrawerSubtitle = false, handleClickBottom = () => false, showBottomText = false, drawerTitle = '', handleClickPrevious = () => false, handleClickNext = () => false, leftButtonName = '', bottomText = '', rightButtonName = '', drawerSubtitle = '', openDrawerServiceReminder = false, sx = {}, ...rest } = props;

  return (
    <Box sx={[{ ...scheduleServiceMaintenanceStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]} className={`${className}`}  {...rest}>

      <DrawerComponent
        open={openDrawerServiceReminder}
        showHeader={true}
        heightStyle={{ padding: '0' }}
        headerStyle={{ paddingRight: '12px' }}
        headerComponent={
          <ModalHeader
            icon={<CloseIcon rootStyle={{color: 'text.A100'}} />}
            showIcon={false}
            showHeader={false}
            onClose={() => false}
          />
        }
      >
        <Box sx={scheduleServiceMaintenanceStyle?.rootSx}>
          <Stack direction={'row'} mb={2.5} justifyContent={'center'} alignItems={'center'}>
            {icon}
          </Stack>
          <Typography variant='subtitle1' sx={scheduleServiceMaintenanceStyle.drawerTitle}>{drawerTitle}</Typography>
          {showDrawerSubtitle && <Typography sx={scheduleServiceMaintenanceStyle.drawerSubtitle}>{drawerSubtitle}</Typography>}
          <FooterButtonComponent sx={{ mt: 3 }} showLeftBtn={true}
            leftButtonStyle={{
              fontWeight: '600',
            }}
            rightButtonStyle={{
              fontWeight: '600',
            }}
            showRightBtn={true}
            leftButton={leftButtonName}
            handleClickPrevious={handleClickPrevious}
            handleClickNext={handleClickNext}
            rightButton={rightButtonName} />
          {showBottomText && <Typography onClick={handleClickBottom} sx={scheduleServiceMaintenanceStyle.bottomSx}>{bottomText}</Typography>}
        </Box>
      </DrawerComponent>

    </Box>
  );
}





