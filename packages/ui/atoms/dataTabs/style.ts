import type { SxProps } from '@mui/material';

interface DataTabsStyleProps {
  [key: string]: SxProps;
}

export const dataTabsStyle: DataTabsStyleProps = {
  rootSx: {
    pb: 0.5,
  },
  totalSx: {
    backgroundColor: 'primary.200',
    width: ' 100%',
    margin: '0px auto',
    borderRadius: '8px',
    '& .MuiTabs-root': {
      minHeight: 0,
      borderRadius: '8px',
    },
  },
  tabSx: {
    textTransform: 'capitalize',
    minHeight: 0,
    p: '12px 0px',
    width: '40%',
    color: 'primary.main',
    '&.Mui-selected': {
      color: 'common.white',
      backgroundColor: 'primary.main',
      borderRadius: '8px',
      fontSize: '14px',
      p: '12px 0px',
      fontWeight: 500,
      fontFamily: 'excon',
    },
  },

  underTab: {
    '& .MuiTabs-indicator': {
      backgroundColor: 'none',
      height: '0',
      px: 3,
    },
    '& .MuiTabs-flexContainer': {
      display: 'flex',
      width: '60%',
      // display: 'grid',
      // gridTemplateColumns: 'repeat(2,1fr)',
      // gap: '8px',
      // boxSizing: 'border-box',
    },
    '& .MuiTabs-root': {
      borderRadius: '8px',
    },
  },
};
