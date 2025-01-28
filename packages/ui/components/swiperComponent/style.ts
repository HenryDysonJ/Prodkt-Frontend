import type { SxProps } from '@mui/material';

interface SwiperComponentStyleProps {
  [key: string]: SxProps;
}

export const swiperComponentStyle: SwiperComponentStyleProps = {
  rootSx: { height: '100%' },
  flexBoxSx: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '393px',
  },
  contentSx: {
    fontSize: '18px',
    color: 'text.900',
    textAlign: 'left',
    minHeight: '138px',
  },
  dashSx: {
    width: '16px',
    height: '6px',
    backgroundColor: 'primary.main',
    borderRadius: '4px',
  },
  dotSx: {
    width: '6px',
    height: '6px',
    backgroundColor: 'primary.300',
    borderRadius: '50%',
  },
  btnSx: {
    padding: '15px',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '14px',
    textTransform: 'capitalize',
    boxShadow: 'none',
    color: 'background.surface.100',
    width: '100%',
    backgroundColor: 'primary.main',
    ':hover': {
      boxShadow: 'none',
    },
  },
};
