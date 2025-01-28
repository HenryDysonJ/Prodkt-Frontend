import type { SxProps } from '@mui/material';
import theme from './theme';

interface WarrantyInsuranceCardStyleProps {
  [key: string]: SxProps;
}

export const warrantyInsuranceCardStyle: WarrantyInsuranceCardStyleProps = {
  rootSx: {},

  cardSx: {
    borderRadius: '10px',
    padding: '16px',
    paddingBottom: '0px',
    backgroundColor: 'background.surface.100',
  },

  headerTextSx: {
    fontSize: '14px',
    fontWeight: 900,
    marginBottom: '11px',
    color: 'text.A100',
  },

  boxSx: {
    border: '1px solid',
    borderColor: 'grey.200',
    borderRadius: '8px',
    // padding: '14px 12px',
    py: 2.2,
    px: 1.5,
    display: '-webkit-box',
    alignItems: 'center',
    backgroundColor: 'background.surface.100',
    marginBottom: '6px',
  },

  iconSx: {
    display: 'flex',
    '& svg': {
      marginRight: '8px',
    },
  },

  textSx: {
    fontSize: '12px',
    fontWeight: 900,
    // color: 'text.900',
    paddingRight: '12px',
    borderRight: '1px solid',
    borderColor: 'grey.A300',
  },

  coverageSx: {
    fontSize: '12px',
    paddingLeft: '12px',
  },

  detailsSx: {
    display: 'flex',
    alignItems: 'center',
    '& p': {
      fontSize: '12px',
      paddingLeft: '12px',
      // color: 'text.900',
      fontWeight: 'medium',
    },
    '& span': {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      backgroundColor: 'grey.A600',
      marginLeft: '9px',
    },
  },

  warrantyEllipsisSx: {
    [theme.breakpoints.down('sm')]: {
      whiteSpace: 'nowrap',
      width: '90px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },

  warrantyNumberSx: {
    [theme.breakpoints.down('sm')]: {
      whiteSpace: 'nowrap',
      width: '56px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },

  insureDetailsTextSx: {
    [theme.breakpoints.down('sm')]: {
      whiteSpace: 'nowrap',
      width: '55px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },

  endSx: {
    display: 'flex',
    alignItems: 'center',
  },

  imageSx: {
    width: '14px',
    height: '18px',
    marginRight: '9px',
    '& img': {
      width: '100%',
      height: '100%',
    },
  },
  titleStyleSx: {
    fontSize: '12px'
  }
};
