import type { SxProps } from '@mui/material';

interface PrimaryServiceProviderComponentStyleProps {
  [key: string]: SxProps;
}

export const primaryServiceProviderComponentStyle: PrimaryServiceProviderComponentStyleProps = {
  rootSx: {},
  locationIcon: {
    width: '20px',
    height: '20px',
    transform: 'translateY(2px)',
    '& path:last-child': {
      fill: '#60666F',
    },
  },

  providerNameSx: {
    fontSize: '14px', color: 'text.900'
  },
  whatsAppSx: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'background.surface.A100',
    border: '1px solid',
    borderColor: 'success.A100',
    borderRadius: '6px',
    opacity: 1,
    minHeight: '30px',
    cursor: 'pointer',
    minWidth: '30px'

  },
  phoneSx: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'background.surface.A200',
    border: '1px solid',
    borderColor: 'primary.main',
    borderRadius: '6px',
    opacity: 1,
    minHeight: '30px',
    cursor: 'pointer',
    minWidth: '30px'

  },
  locationNameSx: {
    color: 'text.700', fontSize: '12px'
  },
  bottomTextSx: {
    color: 'primary.main', fontSize: '14px', fontWeight: 'medium'
  }
};

