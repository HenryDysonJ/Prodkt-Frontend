import type { SxProps } from '@mui/material';

interface userProfileStyle {
  [key: string]: SxProps;
}

export const userProfileStyle: userProfileStyle = {
  rootBox: {
    backgroundColor: 'primary.A700',
    width: '100%',
    px: 2.5,
    // pt: 1,
    // height: '100vh'
  },
  flexBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    // pb: '20px',
  },
  profileNameSx: {
    pb: 2,
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'text.A100',
  },
  editButtonSx: {
    px: 2,
    py: 1,
    borderRadius: '20px',
    fontSize: '12px',
    color: 'text.A800',
    textTransform: 'capitalize',
    fontWeight: '100',
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
    },
  },
  profileBox: {
    backgroundColor: 'background.surface.100',
    borderRadius: '10px',
    px: 1.6,
    py: 2,
  },
  profileLogBox: {
    backgroundColor: 'background.surface.100',
    borderRadius: '10px',
    px: 1.6,
    py: 2,
    mb: 2,
  },
  flexBoxStyle: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    justifyContent: 'space-between',
    mb: 2.1,
  },
  SwitchBox: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  },
  logoutBoxStyle: {
    display: 'flex',
    gap: '12px',
    alignItems: 'flex-start',
    cursor: 'pointer',
  },
  darkText: {
    color: 'text.A100',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  logoutText: {
    color: 'error.900',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  skeltonSx: {
    px: 1,
    bgcolor: 'primary.200',
  },
  skeltonTopSx: {
    px: 1,
    textAlign: 'center',
    mt: 1,
    bgcolor: 'common.white',
  },
  flexSx: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },

  whatsappNotification: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    pb: 2,
  },

  notificationSx: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    '& p': {
      fontSize: '14px',
      color: 'text.A100',
      fontWeight: 700,
    },
  },

  appVersionSx: {
    fontSize: '14px',
    color: 'text.A100',
    paddingBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    // mb: 10,
  },

  archivedProductsSx: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    pb: '16px',
    cursor: 'pointer',
  },

  archivedIconSx: {
    display: 'flex',
    gap: '9px',
    alignItems: 'center',
    '& p': {
      fontSize: '14px',
      color: 'text.A100',
      fontWeight: 700,
    },
  },
};
