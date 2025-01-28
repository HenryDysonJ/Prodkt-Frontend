import type { SxProps } from '@mui/material';

interface ScheduleServiceReminderStyleProps {
  [key: string]: SxProps;
}

export const scheduleServiceReminderStyle: ScheduleServiceReminderStyleProps = {

  divider: {
    color: 'divider.100',
  },
  upcomingTextSx:{
    fontSize: '14px', color: 'text.400', textAlign: 'center'
  },
  
  dateTextSx:{
    fontSize: '14px', color: 'text.900', fontWeight: 'bold'
  },
  subTextSx:{
    color: 'grey.A500', fontSize: '12px', textAlign: 'center'
  },
  intervalTextSx:{
    color: 'text.A100', fontSize: '14px', mb: 1.2, "& span": {
      color: 'error.900'
  },
},
  noNeedTextSx:{
    color: 'text.A100', fontSize: '14px',
  },
  periodicSx:{
    color: 'primary.main', fontWeight: '600', fontSize: '14px', mt: 2, textAlign: 'center', cursor: 'pointer'
  }

  

}