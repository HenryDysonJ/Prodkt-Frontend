import type { SxProps } from '@mui/material';

interface ShareDetailsProps {
  [key: string]: SxProps;
}

export const shareDetailsStyle: ShareDetailsProps = {
  rootSx: {
    position: 'relative',
    bgcolor: 'primary.900',
    height: '100%',
  },
  selectItemsRootSx: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    px: 2.5,
    pt: 3,
    pb: 1.5,
  },
  buttonRootSx: {
    bgcolor: 'common.white',
    p: 2,
    position: 'fixed',
    bottom: '0px',
    width: '100%',
    margin: 'auto 0px',
  },
  buttonSx: {
    py: 1.5,
    boxShadow: 'none',
    borderRadius: '8px',
    '&:hover': {
      boxShadow: 'none',
    },
    px: 2,
    textTransform: 'capitalize',
  },
  subRootSx: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },
  selectTextSx: {
    fontSize: '12px',
    color: 'grey.900',
  },
  watermark: {
    fontSize: '14px',
    color: 'text.500',
    marginBottom: '2px',
    fontFamily: 'Sarabun',
  },
};
