import type { SxProps } from '@mui/material';

interface DocumentUploadComponentStyleProps {
  [key: string]: SxProps;
}

export const documentUploadComponentStyle: DocumentUploadComponentStyleProps = {
  rootSx: {},

  uploadIconSx: {
    marginRight: '8px',
    cursor: 'pointer',
    display: 'flex',
    width: '40px',
  },

  textSx: {
    fontSize: '12px',
    color: 'primary.main',
    cursor: 'pointer',
    zIndex: 1,
    textTransform: 'initial',
    marginLeft: '8px',
  },

  withoutUpdateSx: {
    padding: '12px',
    border: '1px solid',
    borderStyle: 'dashed',
    borderColor: 'primary.main',
    borderRadius: '8px',
    backgroundColor: 'primary.A800',
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

  uploadSectionSx: {
    padding: '12px',
    border: '1px solid',
    borderStyle: 'dashed',
    borderColor: 'primary.main',
    borderRadius: '8px',
    backgroundColor: 'primary.A800',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .MuiButtonBase-root': {
      padding: '12px',
      justifyContent: 'space-between',
      '&:hover': {
        backgroundColor: 'primary.800',
      },
    },
  },

  uploadHeaderSx: {
    '& p': {
      fontSize: '12px',
      marginBottom: '12px',
      color: 'text.A100'
    },
  },

  uploadSx: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& p': {
      textTransform: 'initial',
      fontSize: '12px',
      marginLeft: '8px',
    },
  },

  fileSx: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
