import type { SxProps } from '@mui/material';

interface SwitchTabsStyleProps {
  [key: string]: SxProps;
}

export const switchTabsStyle: SwitchTabsStyleProps = {
  rootSx: {
    backgroundColor: 'background.surface.100',
    borderRadius: '10px',
    // padding: '16px',
  },

  sampleTabBHead: {
    padding: '16px 32px',
    paddingBottom: '0px',
    borderBottom: '1px solid',
    borderColor: 'grey.100',
  },

  tabDivs: {
    padding: '20px 16px',
    paddingRight: '21px',
  },

  pointsSx: {
    display: 'flex',
    '& p': {
      fontSize: '12px',
      color: 'text.700',
      fontWeight: 'medium',
      marginLeft: '10px',
    },
  },

  alertConfigTab: {
    cursor: 'pointer',
    paddingBottom: '8px !important',
    color: 'text.A100',
  },

  alertConfigTabTxt: {
    cursor: 'pointer',
    color: 'primary.main',
    paddingBottom: '8px !important',
    '&:nth-child(1)': {},
    '&:nth-child(2)': {
      margin: '0 40px',
    },
  },

  dividerSx: {
    width: '100%',
    height: '2.3px',
    backgroundColor: 'primary.main',
    borderStyle: 'hidden',
    borderRadius: '12px 12px 0px 0px',
    position: 'absolute',
    bottom: '0px',
    transition: '0.5s',
  },
};
