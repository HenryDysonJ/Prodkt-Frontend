import type { SxProps } from '@mui/material';

interface TopNavbarStyleProp {
  [key: string]: SxProps;
}

export const topNavbarStyle: TopNavbarStyleProp = {
  rootSx: {
    flexGrow: 1,
    // position: 'sticky',
    // top: 0,
    width: '100%',
    zIndex: 10
  },

  appBar: {
    background: '#001522',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.04)',
    width: '100%',
    '& .MuiToolbar-root': {
      minHeight: '50px',
    },
  },

  parentBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    padding: '2px 16px',
  },

  profileStyle: {
    cursor: 'pointer',
  },

  batchStyle: {
    "& .MuiBadge-badge": {
      fontSize: "1.2rem",
      fontWeight: 700
    },
  },

  notificationBoxSx: {
    '& .MuiPaper-root': {
      'width': '387px',
      'height': '476px',
      'top': '65px !important',
      'left': '65% !important',
      'boxShadow': '0px 25px 100px rgba(0, 0, 0, 0.25)',
      'borderRadius': '15px',
      '& .MuiList-root': {
        paddingTop: '0px !important',
        paddingBottom: '20px !important',
      },
    },
    '& .MuiMenuItem-root:hover': {
      bgcolor: 'none',
    },
  },

  notificationSx: {
    '& .MuiPaper-root': {
      'width': '387px',
      'height': '476px',
      'top': '66px !important',
      'boxShadow': '0px 25px 100px rgba(0, 0, 0, 0.25)',
      'borderRadius': '15px',
      '& .MuiList-root': {
        paddingTop: '0px !important',
      },
    },
    '& .MuiMenuItem-root:hover': {
      bgcolor: 'none',
    },
  },

  notificationParentBox: {
    display: 'flex',
    padding: '18px 16px',
    position: 'sticky',
    top: 0,
    backgroundColor: '#FFFFFF',
    zIndex: 2,
  },

  notificationTypo: {
    color: 'custom.onSurface',
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '20px',
    wordWrap: 'break-word',
  },

  notificationTypoBox: {
    marginLeft: '8px',
    pl: '7px',
    pr: '7px',
    backgroundColor: '#E0EAF9',
    borderRadius: '1000px',
    overflow: 'hidden',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    display: 'inline-flex',
  },

  notificationTypoBoxNo: {
    textAlign: 'center',
    color: '#1363DF',
    fontSize: '12px',
    fontWeight: 700,
    lineHeight: '16px',
    wordWrap: 'breakWord',
  },

  notificationSpanMessage: {
    color: 'custom.onSurfaceVariant',
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '16px',
    wordWrap: 'break-word',
  },

  notificationSpanhighlight: {
    paddingLeft: '5px',
    color: 'custom.onSurface',
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '16px',
    wordWrap: 'break-word',
  },

  notificationTime: {
    marginTop: '8px',
    color: '#6A7175',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px',
    wordWrap: 'break-word',
  },

  dot: {
    position: 'absolute',
    top: '0px',
    right: '0px',
    height: '10px',
    width: '10px',
    background: '#DF3813',
    borderRadius: '1000px',
    border: '2px white solid',
  },
};
