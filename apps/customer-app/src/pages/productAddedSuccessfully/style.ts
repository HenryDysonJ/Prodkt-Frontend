import type { SxProps } from '@mui/material';

interface ProductAddedSuccessfully {
  [key: string]: SxProps;
}

export const productAddedSuccessfully: ProductAddedSuccessfully = {
  mainBoxSx: {
    backgroundColor: 'primary.900',
    position: 'relative',
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
    minHeight: '100vh',
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
};
