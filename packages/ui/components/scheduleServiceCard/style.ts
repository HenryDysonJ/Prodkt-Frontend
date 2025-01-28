import type { SxProps } from '@mui/material';

interface ScheduleServiceCardStyleProps {
  [key: string]: SxProps;
}

export const scheduleServiceCardStyle: ScheduleServiceCardStyleProps = {
  rootSx: {},
  scheduleService: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: 'secondary.A100',
    backgroundColor: 'secondary.500',
    padding: '0 10px',
    cursor: 'pointer',
  },
  scheduleServiceImage: {
    marginRight: '6px',
    maxHeight: '43px',
    minWidth: '39px',
    alignSelf: 'flex-end',
    marginBottom: '-1px',
  },
  scheduleServiceTitle: {
    flexGrow: 1,
    fontSize: '12px',
    fontWeight: 600,
    color: 'text.A100',
    padding: '15.5px 0',
    fontFamily: 'excon, medium',
  },
  goScheduleService: {
    backgroundColor: 'secondary.main',
    minWidth: '24px',
    minHeight: '24px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
