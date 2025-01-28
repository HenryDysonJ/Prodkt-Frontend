import type { SxProps } from '@mui/material';

interface UploadModalHeaderStyleProps {
  [key: string]: SxProps;
}

export const uploadModalHeaderStyle: UploadModalHeaderStyleProps = {
  rootSx: {},

  uploadHeaderSx: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerTextSx: {
    '& p': {
      fontSize: '16px',
      fontWeight: 900,
    },
    '& span': {
      fontSize: '12px',
      color: 'text.500',
    },
  },
};
