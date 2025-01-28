import type { SxProps } from '@mui/material';

interface AmcPurchaseStyleProps {
  [key: string]: SxProps;
}

export const amcPurchaseStyle: AmcPurchaseStyleProps = {
  rootSx: {
    backgroundColor: 'primary.900',
    height: '100%',
  },

  headerSx: {
    marginBottom: '20px',
    backgroundColor: 'primary.800',
    position: 'fixed',
    width: '100%',
    maxWidth: '425px',
    margin: '0px auto',
    zIndex: '11',
  },

  headerSectionSx: {
    padding: '20px 20px',
  },

  imageCardSx: {
    marginBottom: '20px',
    paddingTop: '38px',
    maxWidth: '425px',
  },

  tabsSectionSx: {
    paddingBottom: '100px',
    maxWidth: '425px',
  },

  footerButtonSx: {
    position: 'fixed',
    bottom: '0px',
    maxWidth: '425px',
    width: '100%',
    zIndex: '1100',
    backgroundColor: 'primary.900',
  },

  footerSectionSx: {
    position: 'fixed',
    bottom: '0px',
    maxWidth: '425px',
    width: '100%',
    zIndex: '1100',
  },

  fixedBotSx: {
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    maxWidth: '128px',
    margin: '0px auto',
    right: '16px',
  },

  chatIconSx: {
    position: 'fixed',
    bottom: '109px',
    left: '8px',
    right: '0',
    '& svg': {
      width: '55px',
      height: '55px',
      borderRadius: '50%',
      backgroundColor: 'primary.100',
      border: '2px solid',
      borderColor: 'common.white',
    },
  },

  menuSx: {
    '& .MuiPaper-root': {
      '& .MuiList-root': {
        '& li': {
          paddingBottom: '8px !important',
        }
      }
    },
    '& .MuiPopover-paper': {
      marginLeft: '-117px',
      mt: '12px',
      boxShadow: 'none',
      border: '1px solid',
      borderColor: '#00000029',
      borderRadius: '6px',
      '& .MuiList-root': {
        padding: '8px 8px',
      },
    },
  },
  menuItemSx: {
    py: 0,
    pl: 1,
    pr: 1.5,
    fontSize: '14px',
    fontWeight: 500,
    '& svg': {
      marginRight: '4px',
    },
  },
};
