import type { SxProps } from '@mui/material';

interface SeeWorkingHoursComponentStyleProps {
  [key: string]: SxProps;
}

export const seeWorkingHoursComponentStyle: SeeWorkingHoursComponentStyleProps = {
  rootSx: {},
  dayTextSx:{
    color: 'text.500', fontSize: '14px', width:'80px'
  },
  timeTextSx:{
    color: 'text.500', fontSize: '14px',
  },
  difSx:{
    color: 'primary.main', fontSize: '14px'
  }
};

