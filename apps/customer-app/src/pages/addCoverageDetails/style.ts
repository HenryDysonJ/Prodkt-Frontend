import type { SxProps } from '@mui/material';

interface addCoverageDetailsStyleProps {
  [key: string]: SxProps;
}

export const addCoverageDetailsStyle: addCoverageDetailsStyleProps = {
  rootSx: {
    backgroundColor: 'background.surface.300',
    minHeight: '100vh',
  },
  sectionSx: {
    position: 'relative',
    height: 'calc(100vh - 488px)',
    // height: 195.002,
    width: 195.943,

    '& svg': {
      width: '100%',
    },
  },
  DetailsSx: {
    position: 'absolute',
    // left: '11px',
    // width:'170px',
    top: '0px',
    padding: '11px 25px 11px 12px',
    '& p': {
      fontSize: '14px',
      fontWeight: 'medium',
      color: 'text.200',
    },
    productDetailMessage: {
      position: 'absolute',
      left: {
        xs: '170px',
        md: '190px',
        lg: '190px'
      }
    }
    // '& span': {
    //   fontSize: '13px',
    //   color: 'text.500',
    //   fontFamily: 'excon',
    // },
  },
};
