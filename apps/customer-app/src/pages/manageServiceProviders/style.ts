import type { SxProps } from '@mui/material';

interface manageServiceProvidersStyleProps {
  [key: string]: SxProps;
}

export const manageServiceProvidersStyle: manageServiceProvidersStyleProps = {
  rootSx: {
    backgroundColor: 'primary.900',
    minHeight: '100vh'
  },
  cardContainer: {
    padding: '10px 0',
    height: 'calc(100vh - 65px)',
    overflowY: 'overlay',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  serviceProviders: {
    px: 2.5,
    py: 2.5,
  },
  heading: {
    fontSize: '14px',
    color: 'text.A100',
  },
  headingSx: {
    fontSize: '14px',
    color: 'primary.main',
  },
  filterContainer: {
    paddingTop: '16px',
    display: 'flex',
    // alignItems: 'center',
    gap: '8px',
  },
  filterIcon: {
    border: '1px solid',
    borderColor: 'grey.200',
    borderRadius: '8px',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  filterInput: {
    borderRadius: '8px',
    '& fieldset': {
      borderRadius: '8px',
      padding: '0px 10px',
      borderColor: 'grey.200',
    },
    '& input': {
      padding: '9px 0',
    },
  },
  availableAndLocationContainer: {
    margin: '16px 0 14px 0',
  },
  availableText: {
    fontWeight: '600',
    fontSize: '14px',
    color: 'text.700',
  },
  locationText: {
    fontWeight: '600',
    fontSize: '14px',
    color: 'primary.main',
    width: '145px',
    textAlign: 'right',
  },
  drawerStyle: {
    minHeight: '280px',
    padding: '20px',
  },
  benefitTickIcon: {
    transform: 'translateY(2px)',
  },
  benefitText: {
    fontWeight: '600',
    fontSize: '14px',
    color: 'text.700',
  },
  filterDrawerStyle: {
    height: 'calc(100vh - 230px)',
    padding: '0',
  },
  bookingDrawerStyle: {
    height: 'calc(100vh - 230px)',
  },
  serviceProviderIcon: {
    width: '43px',
    height: '43px',
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
    fontWeight: '900',
    color: 'text.900',
    marginBottom: '2px',
  },
  rate: {
    fontSize: '12px',
    fontWeight: '500',
    color: 'text.700',
    marginBottom: '2px',
  },
  locationIcon: {
    width: '16px',
    height: '16px',
    transform: 'translateY(2px)',
    '& path:last-child': {
      fill: '#60666F',
    },
  },
  locationTitle: {
    fontWeight: '500',
    fontSize: '12px',
    color: 'grey.900',
  },
  addressText: {
    fontWeight: '600',
    fontSize: '14px',
    color: 'text.700',
    transition: 'all .3s',
  },
  filterTitle: {
    fontWeight: '600',
    fontSize: '14px',
    color: 'text.900',
    marginBottom: '14px',
  },
  filterSubTitle: {
    fontWeight: '600',
    fontSize: '14px',
    color: 'text.500',
    marginBottom: '10px',
  },
  checkBoxLabelStyle: {
    fontSize: '14px',
    color: 'text.700',
    fontWeight: 500,
  },
  useLocation: {
    margin: '6px 0',
    display: 'flex',
    gap: '8px',
  },
  locationSx: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    marginTop: '-5px',
    '& p': {
      fontSize: '14px',
      color: 'primary.main',
      fontWeight: 500,
      marginLeft: '4px',
      marginBottom: '0px',
    },
  },
  locationContainer: {
    padding: '8px',
    cursor: 'pointer',
    border: '1px solid',
    borderColor: 'common.white',
    transition: 'all .3s',
    ':hover': {
      borderColor: 'primary.main',
      borderRadius: '8px',
      '& .rightArrow': {
        display: 'inherit',
      },
    },
  },
  rightArrowLocation: {
    width: '24px',
    height: '24px',
    display: 'none',
    backgroundColor: 'primary.main',
    transition: 'all .3s',
    '& svg': {
      width: '9px',
      height: '10px',
    },
    '& svg path': {
      fill: '#fff',
    },
    ':hover': {
      display: 'inherit',
    },
  },
  noProductContainer: {
    marginTop: '65px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  noProductsAddedSx: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    px: 4,
    pt: 1,
    pb: 3,
  },
  noProductsTextHeaderSx: {
    display: 'grid',
    placeItems: 'center',
    pb: 2,
  },
  noProductsTextSx: {
    color: 'text.A100',
    fontWeight: 700,
    fontSize: '14px',
    marginBottom: '8px',
  },
  noAddProductsTextSx: {
    color: 'text.500',
    fontWeight: 500,
    fontSize: '12px',
  },
};
