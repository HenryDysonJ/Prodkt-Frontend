import type { SxProps } from '@mui/material';

interface UploadDetailsLayoutStyleProps {
  [key: string]: SxProps;
}

export const uploadDetailsLayoutStyle: UploadDetailsLayoutStyleProps = {
  rootSx: {},

  cardLayoutSx: {
    border: '1px solid',
    borderColor: 'primary.500',
    borderRadius: '8px',
    boxShadow: '#0000000A 0px 3px 4px',
  },
  requiredText: {
    color: 'error.900',
  },

  topSectionSx: {
    backgroundColor: 'grey.100',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  },

  headerIconSx: {
    marginRight: '8px',
    display: 'flex',
  },

  headerTextSx: {
    display: 'flex',
    alignItems: 'center',
    '& p': {
      fontSize: '14px',
      fontWeight: 900,
      color: 'text.A100'
    },
    '& span': {
      fontSize: '14px',
      color: 'text.500',
      marginLeft: '6px',
    },
  },

  bodySectionSx: {
    padding: '16px',
    paddingBottom: '13px',
    backgroundColor: 'background.surface.B400'
  },
};
