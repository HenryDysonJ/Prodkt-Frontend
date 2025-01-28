import type { SxProps } from '@mui/material';

interface PreferRegularServiceStyleProps {
  [key: string]: SxProps;
}

export const preferRegularServiceStyle: PreferRegularServiceStyleProps = {
  rootSx: {},
  mainBoxSx:{
    px: 2, py: 2,
    maxWidth: '425px',
    position: 'fixed',
    height:'89px',
    zIndex: '1000',
    bottom: 0,
    backgroundColor: 'grey.A800',
    boxShadow: '0px -4px 10px #00000014',

  },
  titleTextSx:{
    fontSize: '13px', color: 'grey.200',paddingRight:'20px'
  },
  addTextSx:{
    fontSize: '12px', color: 'text.A800', cursor:'pointer'
  },
  btnBox: {
    backgroundColor: 'background.surface.100',
    px: 2,
    py: 2,
    maxWidth: '425px',
    width: '100% !important',
    position: 'fixed',
    zIndex: '1000',
    bottom: 0,
  },
  btnSx: {
    boxShadow: 'none',
    textTransform: 'capitalize',
    borderRadius: '8px',
    width: '100%',
    px: '14px',
    py: '15px',
    backgroundColor: 'primary.main',
    color: 'text.A800',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: 'primary.main',
    color: 'text.A800',
    },
  },
};

