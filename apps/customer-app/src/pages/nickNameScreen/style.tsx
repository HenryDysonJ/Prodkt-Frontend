import type { SxProps } from '@mui/material';

interface NickNameScreenProps {
  [key: string]: SxProps;
}

export const nickNameScreenStyle: NickNameScreenProps = {
  rootSx: {
    backgroundColor: 'primary.900',
    height: '100vh',
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
    height: '100%',
  },

  yourselfSx: {
    fontSize: '16px',
    fontWeight: 700,
    marginBottom: '16px',
    padding: '0px 90px',
    textAlign: 'center',
    color: 'text.A100',
  },

  textFieldSx: {
    '& input': {
      color: 'text.A100',
    },
    '& fieldset': {
      borderColor: 'grey.A900',
    },
    '& .MuiInputBase-root': {
      borderRadius: '8px',
      paddingLeft: '10px',
    },
    '& .MuiInputAdornment-positionEnd': {
      cursor: 'pointer',
    },
    '& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'grey.A900',
  },
  },

  chipsDetailsSx: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};
