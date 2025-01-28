import type { SxProps } from '@mui/material';

interface signupSuccessfulProps {
  [key: string]: SxProps;
}

export const signupSuccessfulStyle: signupSuccessfulProps = {
  rootSx: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    pt: 12,
    bgcolor: '#F1F4F9',
  },
  animationRootSx: {
    pt: 3,
    textAlign: 'center',
    bgcolor: '#F1F4F9',
    position: 'relative',
  },
  boardTextSx: {
    textAlign: 'center',
    fontSize: '10px',
    fontWeight: 600,
    position: 'absolute',
    top: '120px',
    width: '185px',
  },
  boardRootSx: {
    bgcolor: '#DDE5F0',
    position: 'relative',
  },
  boardSx: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    pt: 8,
  },
};
