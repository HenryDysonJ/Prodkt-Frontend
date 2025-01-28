import type { SxProps } from '@mui/material';

interface ProgressCircularComponentStyleProps {
  [key: string]: SxProps;
}

export const progressCircularComponentStyle: ProgressCircularComponentStyleProps = {
  rootSx: {},

  mainBlockSx: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
  },

  relativeBoxSx: {
    position: 'relative',
  },

  hideProgressSx: {
    color: 'secondary.200',
    position: 'absolute',
    borderRadius: '12px',
  },

  showProgressSx: {
    color: 'secondary.main',
    strokeLinecap: 'round',
  },

  progressValue: {
    position: 'absolute',
    top: '48%',
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

  currantValueTextSx: {
    fontSize: '15px',
    color: 'secondary.main',
    fontWeight: 600,
  },

  totalValueTextSx: {
    fontSize: '13px',
    color: 'secondary.main',
    fontWeight: 400,
    marginLeft: '3px',
  },
};
