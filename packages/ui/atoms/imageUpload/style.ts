import type { SxProps } from '@mui/material';

interface ImageUploadStyleProps {
  [key: string]: SxProps;
}

export const imageUploadStyle: ImageUploadStyleProps = {
  rootSx: {

  },
  stackSx: {
    width: '76px', height: '76px', borderRadius: '8px', cursor: 'pointer', border: '2px dashed', borderColor: 'grey.200'
  }
};

