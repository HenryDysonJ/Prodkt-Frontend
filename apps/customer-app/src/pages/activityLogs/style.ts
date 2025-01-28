import type { SxProps } from '@mui/material';

interface activityLogsProps {
  [key: string]: SxProps;
}

export const activityLogsStyle: activityLogsProps = {
  rootSx: {
    bgcolor: 'primary.900',
    height: '110vh',
  },
  cardSx: {
    borderRadius: '8px',
    // bgcolor: 'common.white',
    // boxShadow: 'none',
    // border: '1.2px solid',
    boxShadow: 'none',
    borderColor: 'primary.A600',
  },
  activityLogTextSx: {
    fontSize: '14px',
    fontWeight: 700,
    color: 'text.A100',
    pb: 1.5,
  },
};
