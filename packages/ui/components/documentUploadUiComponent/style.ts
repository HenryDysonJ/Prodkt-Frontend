import type { SxProps } from '@mui/material';

interface DocumentUploadUiComponentStyleProps {
  [key: string]: SxProps;
}

export const documentUploadUiComponentStyle: DocumentUploadUiComponentStyleProps = {
  rootSx: {
    cursor: 'pointer',
    padding: '12px',
    border: '1px solid',
    borderStyle: 'dashed',
    borderColor: 'primary.main',
    borderRadius: '8px',
    backgroundColor: 'primary.800',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& .MuiButtonBase-root': {
      justifyContent: 'space-between',
      '&:hover': {
        backgroundColor: 'primary.800',
      },
    },
  },

  textSx: {
    fontSize: '12px',
    color: 'primary.main',
    cursor: 'pointer',
    zIndex: 1,
    textTransform: 'initial',
    marginLeft: '8px',
  },
};
