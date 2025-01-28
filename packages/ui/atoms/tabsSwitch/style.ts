import type { SxProps } from '@mui/material';

interface TabsSwitchStyleProps {
  [key: string]: SxProps;
}

export const tabsSwitchStyle: TabsSwitchStyleProps = {
  rootSx: {},
  tabBar: {
    '& .css-1gsv261': {
      borderBottom: '0px !important',
    },

    '& .MuiTab-textColorPrimary': {
      fontSize: '13px',
      fontWeight: 600,
      paddingBottom: '6px !important',
      alignItems: 'start !important',
      textTransform: 'capitalize',
      justifyContent: 'end',
    },

    '& .Mui-selected': {
      color: '#0E70EB !important',
      fontWeight: 600,
    },

    '& .MuiTabs-indicator': {
      display: 'none',
      // backgroundColor: "#0E70EB !important",
      // height: "3px !important"
    },
    ' & .MuiTabs-root': {
      minHeight: '0px',
    },
    '& .MuiTab-root': {
      minWidth: '10px',
      // padding: '14px 8px 12px 4px ',
    },
  },
  alertConfigTab: {
    'cursor': 'pointer',
    'fontSize': '14px',
    'fontWeight': 500,
    // paddingBottom: '5px !important',
    'color': '#5A5A5A',
    'pt': 0,
    '&:nth-child(even)': {
      margin: '0 24px ',
    },
  },

  alertConfigTabTxt: {
    'cursor': 'pointer',
    'fontSize': '14px',
    'fontWeight': 500,
    'color': '#0E70EB',
    'pt': 0,
    // color: theme.palette.primary.mailInput,
    // 'borderBottom': '3px solid #0E70EB',
    // 'borderRadius': '2px',
    borderTopLeftRadius: '3px',
    borderTopRightRadius: '3px',
    'paddingBottom': '10px !important',
    '&:nth-child(even)': {
      margin: '0 24px',
    },
  },
  innerBox: {
    height: '3px',
    width: '100%',
    backgroundColor: '#0E70EB',
    borderRadius: '4px 4px 0 0',
    margin: 'auto',
    borderBottom: '1px solid lightgray',
  }
};
