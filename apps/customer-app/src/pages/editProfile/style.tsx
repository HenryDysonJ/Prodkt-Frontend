import type { SxProps } from '@mui/material';

interface editProfileStyle {
  [key: string]: SxProps;
}

export const editProfileStyle: editProfileStyle = {
  rootBox: {
    backgroundColor: 'primary.A700',
    width: '100%',
    height: '100%',
    // overflow: 'hidden',
    // position: 'relative',
  },
  topStyle: {
    backgroundColor: 'primary.A700',
    width: '100%',
    px: 2.5,
    py: 2,
  },
  flexBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  cardDetailsSx: {
    padding: '24px 20px',
    boxShadow: '0px -2px 18px #00000014',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    backgroundColor: 'background.surface.100',
    // height: 'calc(100vh - 280px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttonBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: 'background.surface.100',
  },
  leftButton: {
    backgroundColor: 'primary.main',
    color: 'text.A800',
    border: 'none',
    fontSize: '14px',
    textTransform: 'capitalize',
    borderRadius: '10px',
    height: '48px',
    '&:hover': { border: 'none', backgroundColor: 'primary.main',
    color: 'text.A800', },
  },
  rightButton: {
    fontSize: '14px',
    textTransform: 'capitalize',
    borderRadius: '10px',
    height: '48px',
    boxShadow: 'none',
    backgroundColor: 'primary.main',
    color: 'text.A800',
    '&:hover': { boxShadow: 'none', backgroundColor: 'primary.main',
    color: 'text.A800', },
  },
};
