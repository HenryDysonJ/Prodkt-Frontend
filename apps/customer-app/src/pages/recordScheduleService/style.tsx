import type { SxProps } from '@mui/material';

interface recordScheduleServiceInterface {
  [key: string]: SxProps;
}

export const recordScheduleServiceStyle: recordScheduleServiceInterface = {
  uploadTextSx: {
    fontSize: '12px',
    padding: '11px',
    fontWeight: 600,
    // color: '#313840',
    // backgroundColor: '#F2F2F2',
    bgcolor: 'background.surface.200',
    color: 'grey.B400',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  },
  fileUploadSx: {
    background: 'background.surface.100',
    border: '1px solid',
    borderColor: 'grey.200',
    borderRadius: '8px',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  },
  dividerFileSx: {
    border: '0.5px solid',
    borderColor: 'grey.200',
  },
  stackFileSx: {
    backgroundColor: 'secondary.A300',
    padding: '9px',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  },
  invoiceSx: {
    fontSize: '12px',
    color: 'text.A100',
    textAlign: 'center',
  },
  btnSx: {
    boxShadow: 'none',
    textTransform: 'capitalize',
    borderRadius: '8px',
    width: '100%',
    px: '14px',
    py: '15px',
    backgroundColor: 'primary.main',
    color: 'text.A800',
    '&:hover': {
      backgroundColor: 'primary.main',
      color: 'text.A800',
      boxShadow: 'none',
    },
  },
  exampleSx: {
    color: 'grey.A700',
    fontSize: '12px',
  },
  serviceTypeSx: {
    color: 'text.500',
    fontSize: '14px',
    '& span': {
      color: 'error.900',
    },
  },
  boxSx: {
    border: '1px solid',
    borderStyle: 'dashed',
    borderColor: 'primary.main',
    borderRadius: '8px',
    backgroundColor: 'primary.800',
    display: 'flex',
    justifyContent: 'space-between',
    px: 2,
    py: 2,
  },
  uploadDocumentNameSx: {
    color: 'text.A100',
    fontSize: '14px',
    fontWeight: 500,
    width: '300px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  updateButtonSx: {
    boxShadow: 'none',
    borderRadius: '10px',
    textTransform: 'capitalize',
    height: '48px',
    '&:hover': {
      boxShadow: 'none',
    },
  },
};
