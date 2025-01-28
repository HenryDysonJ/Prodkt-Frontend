import type { SxProps } from '@mui/material';

interface ServiceProviderCardStyleProps {
  [key: string]: SxProps;
}

export const serviceProviderCardStyle: ServiceProviderCardStyleProps = {
  rootSx: { margin: '10px 0' },
  serviceCard: {
    position: 'relative',
    padding: '16px',
    borderRadius: '12px',
    boxShadow: '0px 0px 12px #0000000F',
    border: '1.5px solid',
    backgroundColor: 'background.surface.100',
    zIndex: '4',
  },
  serviceProviderIcon: {
    width: '60px',
    height: '60px',
    borderRadius: '6px',
    border: '1px solid',
    borderColor: 'primary.500',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'common.white',
  },
  serviceName: {
    fontSize: '14px',
    fontWeight: 600,
    color: 'text.A100',
    paddingBottom: '8px',
  },
  rate: {
    fontSize: '12px',
    fontWeight: '500',
    color: 'text.700',
    marginBottom: '2px',
    textTransform: 'capitalize',
  },
  rate2: {
    fontSize: '12px',
    fontWeight: '500',
    color: 'text.700',
    lineHeight: '14px',
  },
  benefits: {
    fontSize: '12px',
    fontWeight: '500',
    color: 'secondary.main',
    textDecoration: 'underline',
    cursor: 'pointer',
    display: 'inline-block',
  },
  locationIcon: {
    width: '16px',
    height: '16px',
    transform: 'translateY(2px)',
    '& path:last-child': {
      fill: '#60666F',
    },
  },
  cardDivider: {
    borderStyle: 'dashed',
    borderColor: 'divider.100',
    borderSpacing: '30px',
  },
  serviceDetails: {
    flexGrow: 1,
  },
  contacts: {
    alignSelf: 'center',
  },
  dialBtn: {
    backgroundColor: 'background.surface.C100',
    padding: '9px 6px',
    width: '30px',
    height: '30px',
    borderRadius: '6px',
    border: '1.4px solid',
    borderColor: 'primary.B500',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    '& svg path:last-child': {
      fill: '#0E70EB',
    },
  },
  bookNowBtn: {
    textTransform: 'capitalize',
    minWidth: '92px',
    borderRadius: '6px',
    boxShadow: 'none',
    padding: '8px 12px',
    fontSize: '12px',
    ':hover': {
      boxShadow: 'none',
    },
  },
  amcContainer: {
    backgroundColor: 'primary.main',
    display: 'inline-block',
    padding: '7px 10px 25px 10px',
    borderRadius: '6px',
    marginBottom: '-20px',
  },
  amcText: {
    fontSize: '12px',
    fontWeight: '500',
    color: 'text.A100',
  },
  skeletonContainer: {
    bgcolor: 'background.surface.200',
    borderRadius: '8px',
    border: '1px solid',
    padding: '0 8px 8px 8px',
    borderColor: 'primary.500',
    boxShadow: '0px 0px 12px #0000000F',
  },
  skeltonRoot: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    padding: 0,
  },
  skeltonText: {
    backgroundColor: 'primary.200',
  },

  ratings: {
    fontSize: '12px',
    color: 'text.700',
  },

  totalPoints: {
    fontSize: '12px',
    color: '#929292',
  },

  starRating: {
    '& .MuiRating-root': {
      gap: '5px !important',
    }
  },
  detailsContainer: {
    width: '100%'
  },
  whatsAppSx: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'background.surface.D100',
    border: '1px solid',
    borderColor: 'primary.B400',
    borderRadius: '6px',
    opacity: 1,
    height: '30px',
    cursor: 'pointer',
    width: '30px'

  },
};
