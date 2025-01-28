import type { SxProps } from '@mui/material';

interface ScheduleServiceMaintenanceStyleProps {
  [key: string]: SxProps;
}

export const scheduleServiceMaintenanceStyle: ScheduleServiceMaintenanceStyleProps = {
  rootSx: {
    px: 2.5, pb: 5
  },
  drawerTitle: {
    color: 'text.A100', fontSize: '14px', fontWeight: 'bold', textAlign: 'center'
  },
  drawerSubtitle: {
    color: 'grey.C700', 
    fontSize: '14px', fontWeight: 500, mt: 2.5, textAlign: 'center'
  },
  bottomSx: {
    color: 'primary.main', fontWeight: '600', fontSize: '14px', mt: 2, textAlign: 'center', cursor: 'pointer'
  }

};

