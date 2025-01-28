import type { SxProps } from '@mui/material';

interface PageHeaderStyleProps {
  [key: string]: SxProps;
}

export const pageHeaderStyle: PageHeaderStyleProps = {
  rootSx: {},

  subRootSx: {
    display: 'flex',
    alignItems: 'center',
    bgcolor: 'transparent',
    '& button': {
      padding: '0px',
    },
  },

  headerTextSx: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& p': {
      fontSize: '14px',
      color: 'text.A100',
      fontWeight: 900,
    },
  },

  threeDotSx: {
    padding: '14px 8px',
    backgroundColor: 'common.white',
    borderRadius: '50%',
    width: '32px',
    height: '32px',
  },
};
