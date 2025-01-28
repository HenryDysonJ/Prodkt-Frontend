import type { SxProps } from '@mui/material';
import LoginBanner from "./../../assets/loginBanner.png";


interface loginProps {
  [key: string]: SxProps;
}

export const resetStyle: loginProps = {
    rootMainSx: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%'
      },
      cardSx: {
        background: '#fff',
        padding: '26px 20px',
        borderRadius: '16px',
        boxShadow: '0px 8px 69px #0000001A',
        width: '100%',
        maxWidth: '310px',
        minWidth: '340px',
        zIndex: '9999',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
      },

    rootSx : {
        width: '100%',
        height:'calc(100vh - 80px)',
        overflow: 'hidden'
    },
    subrootSx: {
        height: '100%',
    },
    cardParentSx: {
       height: '100%',
       backgroundImage: `url('${LoginBanner}')`,
       backgroundRepeat: 'no-repeat',
       backgroundPosition: 'center'
    },
  titleSx: {
    color: '#010811',
    fontSize: '23px',
    textAlign: 'center',
    fontWeight: '600',
    paddingLeft: '10px',
    paddingRight: '10px',

  },
  subtitleSx: {
    color: '#8E959D',
    fontSize: '13px',
    textAlign: 'center',
    padding: '10px 10px',
    fontWeight: '600',
    paddingBottom: '24px'

  },
  submitBtn: {
    borderRadius: '8px',
    height: '37px',
    '& p': {
      color: '#FFFFFF',
      fontSize: '14px',
      fontWeight: '600',
      textTransform: 'capitalize'
    }
  },
  forgotPasswordSx: {
    justifyContent: 'right',
    display: 'flex',
    '& p': {
      cursor: 'pointer',
      textAlign: 'right',
      display: 'inline-block',
      fontSize: '14px',
      color: '#0E70EB',
      fontWeight: '600',
    }
  },
  inputSx: {
    borderColor: '#DFDFDF',
    borderRadius: '8px',
    "& input": {
      minHeight: '45px !important',
      paddingTop: '0 !important',
      paddingBottom: '0 !important',
      fontSize: '14px',
      fontWeight: 600,
      color: '#BCC3CC',
    },
    '& .Mui-error': {
        borderColor: 'error.900',
    },
    '& div': {
      '& button': {
        '& svg': {
          color: '#B9B9B9',
          fontSize: '18px'
        }
      }
    }
  },
  signInMesageSx: {
    '& span': {
      cursor: 'pointer',
      fontWeight: '600',
      color: '#0E70EB',
      margin: '0 5px'
    },
    display: 'flex',
    fontSize: '14px',
    color: '#8E959D',
    fontWeight: '600',
    justifyContent: 'center'
  },
  resetMessageSx: {
    color: '#8E959D',
    fontSize: '15px',
    fontWeight: '600',
    textAlign: 'center',
    paddingBottom: '16px',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '10px'
  },
  linkSx: {
    color: '#010811',
    fontSize: '24px',
    textAlign: 'center',
    fontWeight: '600',
    padding: '0px 10px',

  },
  linkIconSx: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: '0',
  },
  linkIconShowSx: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: '1',
    transition: 'all ease 3s'
  }


};

