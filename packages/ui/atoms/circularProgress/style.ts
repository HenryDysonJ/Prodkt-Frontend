import type { SxProps } from '@mui/material';

interface CircularProgressStyleProps {
  [key: string]: SxProps;
}

export const circularProgressStyle: CircularProgressStyleProps = {
  rootSx: {},
  mainBlockSx: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'background.surface.A400',
    // py: 1,
  },
  relativeBoxSx: {
    position: 'relative',
  },
  hideProgressSx: {
    color: 'success.300',
    position: 'absolute',
    borderRadius: '12px',
  },
  showProgressSx: {
    color: 'success.900',
    strokeLinecap: 'round',
  },
  progressValue: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-45%, -50%)',
    fontWeight: 700,
    fontSize: '18px',
    color: 'success.900',
  },
  titleSx: {
    fontWeight: 'bold',
    marginBottom: '6px',
    fontSize: '16px',
    color: 'text.A100',
    textAlign: 'right',
  },
  subTitleSx: {
    fontSize: '12px',
    color: 'text.500',
    textAlign: 'right',
  },
};
