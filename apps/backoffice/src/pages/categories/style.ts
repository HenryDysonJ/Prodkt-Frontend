import type { SxProps } from '@mui/material';
import LoginBanner from "./../../assets/loginBanner.png";


interface categoriesStyleProps {
  [key: string]: SxProps;
}

export const categoriesStyle: categoriesStyleProps = {
  rootSx: {
    background: '#fff',
    borderRadius: '8px',
    padding: '22px',
    width: '100%',
    height: '100%',
    overflow: 'auto',
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
  specBox: {
    border: '1px solid #E6EEFA',
    borderRadius: '12px',
    margin: '6px'
  },
  parentBox: {
    width: '20%',
    "@media (max-width: 991px)": {
      width: '40%'
    },
  },
  viewBtn: {
    padding: '10px 30px',
    color: '#0E70EB',
    fontSize: '14px',
    cursor: 'pointer',
    textAlign: 'center',
    fontWeight: '600',
    background: '#E6EEFA',
    borderBottomRightRadius: '12px',
    borderBottomLeftRadius: '12px'
  },
  categoryNameSx: {
    fontSize: '15px',
    textAlign: 'center',
    fontWeight: '600',
    color: '#010811',
    padding: '13px 7px'
  },
  categoryStackSx: {
    width: '100%',
    flexWrap: 'wrap',
    "@media (max-width: 991px)": {
      justifyContent: 'space-between'
    },
  },
  drawerBoxiconSx: {
    textAlign: 'center',
    paddingTop: '20px',
    '& img': {
      width: '100px',
      height: '100px',
    }
  },
  iconSx: {
    textAlign: 'center',
    paddingTop: '20px',
    '& img': {
      width: '100px',
      height: '100px',
    }
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
    maxHeight: '160px',
    height: '160px',
    borderBottom: '1px solid #E6EEFA',
  },
  specListBox: {
    margin: '5px',
    padding: '9px 15px',
    borderRadius: '8px',
    border: '1px solid #0E70EB'
  },
  specText: {
    color: '#0E70EB',
    fontSize: '12px',
    fontWeight: '600',
    whiteSpace: 'nowrap',
  },
  activeSpecText: {
    color: '#FFFFFF !important',
    display: 'flex',
    alignItems: 'center',
    fontSize: '12px',
    fontWeight: '600',
    whiteSpace: 'nowrap',
  },
  addedfieldSx: {
    color: '#0E1824',
    fontSize: '16px',
    fontWeight: '600'
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
  addSpecListBox: {
    '& div': {
      cursor: 'pointer',
      margin: '5px',
      padding: '8px 12px',
      borderRadius: '8px',
      border: '1px solid #DFDFDF',
      '& p': {
        color: '#010811',
        fontSize: '13px',
        fontWeight: '500',
        whiteSpace: 'nowrap',
      }
    }
  },
  activeSpecListBox: {
    '& div': {
      cursor: 'pointer',
      margin: '5px',
      padding: '9px 15px',
      background: '#0E70EB',
      borderRadius: '8px',
      border: '1px solid #DFDFDF',
      '& p': {
        color: '#010811',
        fontSize: '13px',
        fontWeight: '500',
        whiteSpace: 'nowrap',
      }
    }
  },
  stackItemSx: {
    flexWrap: 'wrap'
  },
  textAreaSx: {
    width: '100%',
    marginBottom: '0',
    '& input': {
      height: '37px',
      paddingTop: '0px !important',
      paddingBottom: '0px !important',
      fontWeight: '500',
      fontSize: '13px',
      padding: '4px',
      color: '#030911'
    },
    '& fieldset': {
      borderRadius: '8px',
    },
    '& div': {
      paddingLeft: '0px !important',
      paddingTop: '9px',
      '& svg': {
        color: '#BCC3CC'
      }
    },
    '& .MuiInputAdornment-root': {
      marginLeft: '10px'
    }
  },
  question: {
    fontSize: '14px',
    fontWeight: '500',
    padding: '4px',
    color: '#8E959D !important'
  },
  questionCard: {
    width: '100%',
    border: 'none',
    padding: '4px 0px',
  },
  doneIcon: {
    width: '18px',
    height: '18px',
    marginRight: '4px',
    '& svg': {
      width: '100%',
      height: '100%'
    }
  },
  saveIconSx: {
    height: '37px',
    width: '37px',
    marginLeft: '8px',
    padding: '4px',
    border: '1px solid red',
    borderRadius: '4px',
    '& svg': {
      width: '100%',
      height: '100%',
      color: 'red'
    }
  }

};
