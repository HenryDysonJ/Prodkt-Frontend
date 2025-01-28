import type { SxProps } from '@mui/material';

interface bookServiceProviderSuccessfullyProps {
  [key: string]: SxProps;
}

export const bookServiceProviderSuccessfully: bookServiceProviderSuccessfullyProps = {
  mainBoxSx: {
    backgroundColor: 'primary.A300',
    position: 'relative',
    overflow: 'hidden',
  },
  polygonImg: {
    position: 'absolute',
    top: '150px',
    left: '-9px',
  },
  polygonImgRight: {
    position: 'absolute',
    top: '218px',
    right: '-20px',
  },
  circleEllipseBigSx: {
    position: 'absolute',
    bottom: '116px',
    left: '-28px',
  },
  circleEllipseNormalSx: {
    position: 'absolute',
    bottom: '116px',
    left: '225px',
    right: '125px',
  },
  circleEllipseSmallSx: {
    position: 'absolute',
    top: '481px',
    bottom: '307px',
    right: '-2px',
  },
  subBoxSx: {
    px: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    minHeight: 'calc(100vh - 105px)',
  },
  titleSx: {
    marginBottom: '24px',
    marginTop: '15px',
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'text.400',
  },
  circleProgressSx: {
    height: '100px',
    textAlign: 'center',
  },
  closeIconSx: {
    color: 'error.900',
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: '100px',
  },
  btnContainer: {
    // backgroundColor: ''
    padding: '28px 20px',
  },
  primaryBtn: {
    padding: '12px 35px',
    borderRadius: '10px',
    fontWeight: '600',
    fontSize: '14px',
    textTransform: 'capitalize',
    boxShadow: 'none',
    width: '100%',
    backgroundColor: 'primary.main',
      color: 'text.A800',
    ':hover': {
      backgroundColor: 'primary.main',
      color: 'text.A800',
      boxShadow: 'none',
    },
  },
};
