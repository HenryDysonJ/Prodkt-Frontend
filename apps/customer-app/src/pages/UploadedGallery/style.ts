import type { SxProps } from '@mui/material';

interface uploadedGalleryProps {
  [key: string]: SxProps;
}

export const uploadedGalleryStyle: uploadedGalleryProps = {
  rootSx: {
    height: '100%',
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'background.surface.100',
  },
  screenlayoutSx: {
    height: '100%',
  },
  footerButtonSx: {
    position: 'fixed',
    bottom: '0px',
    maxWidth: '425px',
    width: '100%',
    zIndex: '1100',
    padding: '20px',
    backgroundColor: 'background.surface.100',
  },

  homeSx: {
    textTransform: 'capitalize',
    padding: '15px 0',
    borderRadius: '8px',
    boxShadow: 'none',
    '&: hover': {
      boxShadow: 'none',
    },
  },
};
