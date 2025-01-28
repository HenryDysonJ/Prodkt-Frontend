import type { SxProps } from '@mui/material';

interface DrawerStyleProps {
  [key: string]: SxProps;
}

export const drawerStyle: DrawerStyleProps = {
  rootSx: {
    '& .MuiDrawer-paperAnchorRight': {
      width: '338px',
    },
  },
  headerSx: {
    p: 2,
    width: '100%'
  },
  childrenSx: { p: 2, overflow: 'overlay', height: '330px' },
  footerSx: {
    px: 2,
    py: 1,
    bgcolor: 'common.white',
    borderColor: 'border.main',
    position: 'absolute',
    bottom: '10px',
    width: '100%'
  },
  closeSx: {
    width: '15px',
    cursor: 'pointer',
    height: '14px',
  },
  rightClose: {
    padding: '12px',
    borderRadius: '50%',
    width: '40px',
    cursor: 'pointer',
    backgroundColor: '#ffe8e8',
    color: '#ff4b4b',
    height: '40px',
    margin: '10px 10px',
  },
  totalHeaderSx: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    borderBottom: '1px solid',
    borderColor: '#DFDFDF',
  },
  closeIconSx: {
    position: 'fixed',
    marginLeft: '-80px',
    top: '3%',
    background: '#fff',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  }
};
