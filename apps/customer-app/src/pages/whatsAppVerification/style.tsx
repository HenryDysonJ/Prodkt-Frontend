import type { SxProps } from '@mui/material';

interface WhatsAppVerification {
  [key: string]: SxProps;
}

export const whatsAppVerificationStyle: WhatsAppVerification = {
  loadingSx: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  typoSx: {
    mt: 4,
    fontWeight: '700',
    fontSize: '16px',
  },
  closeIconSx: {
    color: 'error.900',
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: '100px',
  },
  titleSx: {
    marginBottom: '24px',
    marginTop: '15px',
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'text.400',
  },
};
