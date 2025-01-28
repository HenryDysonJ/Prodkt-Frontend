import type { SxProps } from '@mui/material';

interface ImageViewStyleProps {
  [key: string]: SxProps;
}

export const imageViewStyle: ImageViewStyleProps = {
  rootSx: {},
  boxStyleSx: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    bgcolor: 'rgba(0, 0, 0, 0.54)',
    px: 1,
    opacity: '70%',
    marginTop: '-30px',
  },
  numberStyleSx: { color: 'common.white', fontSize: '12px' },
};
