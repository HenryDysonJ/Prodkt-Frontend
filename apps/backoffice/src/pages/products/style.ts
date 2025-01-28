import type { SxProps } from '@mui/material';

interface productsStyleProps {
  [key: string]: SxProps;
}

export const productsStyle: productsStyleProps = {
  rootSx: {
    background: '#fff',
    borderRadius: '8px',
    padding: '22px',
    width: '100%',
    height: '100%',
    overflow: 'auto',
  },
  overflowItemSx: {
    height: 'auto'
  },
  titleSx: {
    color: '#0E1824',
    fontWeight: '600',
    fontSIze: '17px'
  },
  titleBoxSx: {
    width: '100%',
    borderBottom: '1px solid #E6EEFA',
    height: '100%',
    cursor: 'pointer'
  },
  inputSx: {
    width: '100%',
    marginBottom: '0',
    '& input': {
      height: '37px',
      paddingTop: '0px !important',
      paddingBottom: '0px !important',
      fontWeight: '500',
      fontSize: '15px',
      padding: '4px',
      color: '#030911'
    },
    '& fieldset': {
      borderRadius: '8px',
      // border: 'none',
    },
    '& div': {
      paddingLeft: '0px !important',
      '& svg': {
        color: '#BCC3CC'
      }
    },
    '& .MuiInputAdornment-root': {
      marginLeft: '10px'
    }
  },
  submitBtn: {
    height: '50px',
    borderRadius: '8px',
    '& p': {
      fontSize: '14px',
      fontWeight: '500',
      textTransform: 'capitalize',
      color: '#fff'
    }
  },
  resetBtn: {
    height: '50px',
    borderRadius: '8px',
    border: '1px solid #F44F5A',
    background: '#fff',
    boxShadow: 'none',
    '& p': {
      fontSize: '14px',
      fontWeight: '500',
      textTransform: 'capitalize',
      color: '#F44F5A'
    }
  },
  dividerSx: {
    background: '#F2F4F7 !important',
    height: '30px !important',
    width: '2px !important',
    margin: '0 10px'
  },
  toggleBtnSx: {
    border: '1px solid #DFDFDF',
    padding: '11px 5px',
    borderRadius: '8px',
    marginLeft: '8px',
    '& p': {
      color: '#0E1824',
      fontWeight: '500',
      textTransform: 'capitalize'

    }
  },
  toggleBtnClickedSx: {
    border: '1px solid #DFDFDF',
    padding: '11px 5px',
    borderRadius: '8px',
    background: '#0E70EB',
    marginLeft: '8px',
    '& p': {
      color: '#FFFFFF',
      fontWeight: '500',
      textTransform: 'capitalize'
    }
  },
  textSx: {
    fontSize: '16px',
    color: '#0E1824',
    fontWeight: '600',
    margin: '12px 0 16px 0'
  },
  collapseTitleSx: {
    width: '90%',
    '& p': {
      height: '100% !important',
      width: '100%',
      fontSize: '15px',
      color: '#262626',
      fontWeight: '600'
    }
  },
  iconSx: {
    '& img': {
      width: '90px',
      height: '90px'
    }
  },
  collapseLabelSx: {
    color: '#595959',
    fontSize: '13px',
    fontWeight: '600',
    textAlign: 'center'
  },
  collapseValueSx: {
    color: '#313840',
    fontSize: '15px',
    fontWeight: '600',
    textAlign: 'center'
  },
  collapseItemSx: {
  },
  tabsBox: {
    padding: '17px 13px 17px 3px',
    cursor: 'pointer',
    marginRight: '24px',
    border: 'none',
    '& p': {
      color: '#8E959D',
      fontWeight: '600',
      fontSize: '15px'
    }
  },
  clickedTabsBox: {
    padding: '17px 13px 17px 3px',
    cursor: 'pointer',
    marginRight: '24px',
    borderBottom: '2px solid #0E70EB',
    '& p': {
      color: '#0E70EB',
      fontWeight: '600',
      fontSize: '15px'
    }
  },
  tableHeaderSx: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#818181',
    bgColor: '#F9F9F9',
    borderBottom: '5px',
    padding: '11px 16px 12px 29px',
    style: {
      textAlign: 'center'
    }
  },
  tableCellSx: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#60666F',
    borderBottom: '0px',
    padding: '16px',
    style: {
      textAlign: 'center'
    }
  },
  extendDetails: {
    color: '#0E1824',
    fontWeight: '600',
    fontSize:'13px',
    padding: '10px 16px',
    background: '#FFEDCC',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    '& span': {
      marginRight: '8px',
      alignItems: 'center'
    }
  },
  copyIconSx: {
    width: '10%'
  },
  copyText: {
    color:'#357968',
    padding:'3px 5px',
    display: 'flex',
    alignItems: 'center',
    '& span': {
      display: 'flex',
      padding:'4px',
      '& .MuiSvgIcon-root':{
        color:'#357968',
        fontSize: '18px'
      }
    }
  },
  labelSx: {
    color: '#595959',
    fontSize: '13px',
    fontWeight: '600',
  },
  valueSx: {
    color: '#313840',
    fontSize: '15px',
    fontWeight: '600',
    textAlign: 'center',
    width: '85%'
  },
};
