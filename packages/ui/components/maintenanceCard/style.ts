import type { SxProps } from '@mui/material';

interface MaintenanceCardStyleProps {
  [key: string]: SxProps;
}

export const maintenanceCardStyle: MaintenanceCardStyleProps = {
  rootSx: {
    // bgcolor: 'common.white',
  },
  cardSx: {
    borderRadius: '16px',
    // bgcolor: 'background.surface.100',
    border: '1.2px solid',
    boxShadow: '0px 0px 12px #0000000F',
    borderColor: 'primary.500',
    mt: '12px',
  },
  headerTextSx: {
    color: 'text.A100',
    fontWeight: 700,
    fontSize: '14px',
    pt: 1.5,
  },
  subRootTextSx: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    pt: 1,
    pb: 1.8,
  },
  subTextSx: {
    color: 'text.500',
    fontSize: '12px',
    fontWeight: 500,
  },
  typographyTextSx: {
    display: 'flex',
    color: 'text.500',
    alignItems: 'center',
    gap: 1,
    fontSize: '14px',
  },
  calendarIconSx: {
    height: 15,
    width: 15,
  },
  bottomDataSx: {
    display: 'flex',
    justifyContent: 'space-between',
    py: 1.5,
  },
};
