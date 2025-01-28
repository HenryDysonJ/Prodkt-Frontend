import type { SxProps } from '@mui/material';

interface ShareDetailsStyleProps {
  [key: string]: SxProps;
}

export const shareDetailsStyle: ShareDetailsStyleProps = {
  rootSx: {
    bgcolor: 'common.white',
    borderRadius: '8px',
  },
  cardSx: {
    borderRadius: '8px',
    bgcolor: 'common.white',
    boxShadow: 'none',
    border: '1.2px solid',
    borderColor: 'primary.100',
  },
  headerTextCheckBoxSx: {
    display: 'flex',

    justifyContent: 'space-between',
    alignItems: 'center',
    px: 2,
    py: 2,
  },
  headerTextSx: {
    fontSize: '14px',
    fontWeight: 700,
  },
  dividerSx: {
    borderBottom: '1px solid',
    borderColor: 'divider.100',
  },
};
