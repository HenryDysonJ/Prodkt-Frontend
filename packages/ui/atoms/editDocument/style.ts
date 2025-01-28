import type { SxProps } from '@mui/material';

interface EditDocumentStyleProps {
  [key: string]: SxProps;
}

export const editDocumentStyle: EditDocumentStyleProps = {
  rootSx: {
    position: 'relative'
  },
  uploadTextSx: {
    fontSize: '12px', color: '#313840', padding: '11px', borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px', fontWeight: 600, backgroundColor: '#F2F2F2', "& span": {
      color: 'error.900'
    }
  },
  fileUploadSx: {
    background: 'background.surface.100',
    border: '1px solid',
    borderColor: 'grey.200',
    borderRadius: '8px',
    mt: 2,
  },
  dividerFileSx: {
    border: '0.5px solid',
    borderColor: 'divider.100'
  },
  stackFileSx: {
    backgroundColor: 'secondary.A300', padding: '9px', borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  },
  invoiceSx: {
    fontSize: '12px', color: 'text.A100', textAlign: 'center'
  }
};

