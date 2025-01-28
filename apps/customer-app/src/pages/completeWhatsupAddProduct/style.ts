import type { SxProps } from '@mui/material';

interface completeWhatsAppAddProductStyleProps {
  [key: string]: SxProps;
}

export const completeWhatsAppAddProductStyle: completeWhatsAppAddProductStyleProps = {
  rootSx: {
    backgroundColor: 'background.surface.300',
    minHeight: '100vh',
  },
  sectionSx: {
    position: 'relative',
    height: 94.002,
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
    // '& span': {
    //   fontSize: '13px',
    //   color: 'text.500',
    //   fontFamily: 'excon',
    // },
  },
};
