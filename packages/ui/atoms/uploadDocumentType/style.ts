import type { SxProps } from '@mui/material';

interface UploadDocumentTypeStyleProps {
  [key: string]: SxProps;
}

export const uploadDocumentTypeStyle: UploadDocumentTypeStyleProps = {
  rootSx: {},
  scanSx: {
    fontSize: '16px',
    color: 'primary.main',
    fontWeight: '600',
    pl: 1.5,
    pt: 0.4,
  },
  uploadTextSx: {
    fontSize: '16px',
    color: 'primary.main',
    fontWeight: '600',
    pl: 1,
    pt: 0.4,
  },
  commonSx: {
    bgcolor: 'background.surface.C100',
    height: '60px',
    width: '60px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    cursor: 'pointer',
  },
  urlTextSx: { fontSize: '16px', color: 'primary.main', fontWeight: '600', pl: 2, pt: 0.4 },
  uploadButtonSx: {
    textTransform: 'capitalize',
    boxShadow: 'none',
    borderRadius: '8px',
    height: '48px',
    '&:hover': {
      boxShadow: 'none',
    },
  },
};
