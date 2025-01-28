import type { SxProps } from '@mui/material';

interface UserDetailsProps {
  [key: string]: SxProps;
}

export const userDetailsStyle: UserDetailsProps = {
  rootSx: {
    backgroundColor: 'primary.900',
  },

  bannerSectionSx: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& p': {
      paddingTop: '70px',
      fontSize: '20px',
      color: 'text.A100',
      fontWeight: 700,
      marginBottom: '30px',
    },
    '& svg': {
      width: '100%',
    },
  },

  cardDetailsSx: {
    padding: '20px',
    boxShadow: '0px -2px 18px #00000014',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    backgroundColor: 'background.surface.100',
    marginTop: '-4px',
  },

  yourselfSx: {
    fontSize: '14px',
    color: 'text.500',
    fontWeight: 500,
    marginBottom: '16px',
  },

  proceedBtnSx: {
    marginTop: '88px',
  },

  bottomBtnSx: {
    textTransform: 'capitalize',
    padding: '15px 0px',
    borderRadius: '8px',
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
    },
  },

  errorMessage: {
    marginLeft: '20px',
    marginRight: '20px',
    textAlign: 'center',
  },

  errorFail: {
    color: 'error.500',
  },

  errorSuccess: {
    color: 'green',
  },
};
