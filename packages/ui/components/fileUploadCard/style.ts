import type { SxProps } from '@mui/material';

interface FileUploadCardStyleProps {
  [key: string]: SxProps;
}

export const fileUploadCardStyle: FileUploadCardStyleProps = {
  rootSx: {},

  rootBoxSx: {
    borderRadius: '10px',
    padding: '16px',
    backgroundColor: 'background.surface.100',
    marginBottom: '60px',
    paddingBottom: '6px',
  },

  rootBoxSectionSx: {
    borderRadius: '10px',
    padding: '16px',
    backgroundColor: 'background.surface.100',
    marginBottom: '60px',
  },

  headerSx: {
    fontSize: '14px',
    fontWeight: 900,
    marginBottom: '11px',
    color: 'text.A100',
  },

  cardSx: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid',
    borderColor: 'grey.200',
    borderRadius: '8px',
    padding: '12px 12px',
    backgroundColor: 'background.surface.100',
    marginRight: '12px',
  },

  iconSx: {
    width: '38px',
    height: '39px',
    marginRight: '12px',
    '& svg': {
      width: '100%',
      height: '100%',
    },
  },

  fileSx: {
    fontSize: '14px',
    fontWeight: 600,
    color: 'text.A100'
  },

  fileNameSx: {
    fontSize: '12px',
    color: 'grey.500',
    fontWeight: 'medium',
    width: '190px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};
