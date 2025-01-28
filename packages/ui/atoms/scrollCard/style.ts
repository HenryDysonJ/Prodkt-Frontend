import type { SxProps } from '@mui/material';

interface ScrollCardStyleProps {
  [key: string]: SxProps;
}

export const scrollCardStyle: ScrollCardStyleProps = {
  rootSx: {},
  cardRoot: {
    height: '210px',
    width: '265px',
    overflow: 'overlay',
    scrollBehavior: 'smooth',
  },
  cardSx: {
    position: 'relative',
    bgcolor: '#D2E2FA',
    minHeight: '42px !important',
    width: '100% !important',
    marginTop: '32px !important',
    borderRadius: '8px',
  },
  cardSx2: {
    position: 'relative',
    bgcolor: 'red',
    minHeight: '30px !important',
    width: '100% !important',
    marginTop: '20px !important',
    borderRadius: '8px',
    opacity: 0.5,
  },
  textSx: {
    fontSize: '16px',
    color: 'text.400',
    display: 'flex',
    justifyContent: 'start',
    px: 2.5,
    gap: 1,
    pt: 1,
    pb: 1,
    fontWeight: '500',
  },
};
