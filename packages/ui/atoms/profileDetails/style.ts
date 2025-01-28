import type { SxProps } from '@mui/material';

interface ProfileDetailsStyleProps {
  [key: string]: SxProps;
}

export const profileDetailsStyle: ProfileDetailsStyleProps = {
  rootSx: {},
  flexBox: {
    display: 'flex',
    // gap: '12px',
    alignItems: 'flex-start',
    justifyContent: 'space-between'

  },
  iconSx: {
    borderRadius: '50px',
    minHeight: '24px',
    minWidth: '24px',
    backgroundColor: 'background.surface.C100',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleSx: {
    color: 'text.A100',
    fontSize: '14px',
    fontWeight: 'bold',
    mb: 1,
  },
  emailSx: {
    color: 'primary.main', fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  verifiedSx: {
    fontSize: '14px', color: 'success.600'
  },
  subTextSx: {
    color: 'text.700',
    fontSize: '14px',
    fontWeight: 500,
  },
};
