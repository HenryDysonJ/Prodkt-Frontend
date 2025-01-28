import type { SxProps } from '@mui/material';

interface ArchivedProductCardStyleProps {
  [key: string]: SxProps;
}

export const archivedProductCardStyle: ArchivedProductCardStyleProps = {
  rootSx: {
    mt: '20px',
  },

  dividerSx: {
    border: '1px dashed',
    borderColor: 'divider.100',
    height: '75px',
    alignSelf: 'center',
  },

  fridgeIconSx: {
    width: '75px !important',
    height: '75px !important',
    padding: '12px 12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      width: '100%',
      height: '100%',
    },
  },

  ProductCardRightSx: {
    padding: '16px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },

  titleSx: {
    fontSize: '14px',
    fontFamily: 'excon',
    fontWeight: 800,
    color: 'text.A100',
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      ml: '4px',
    },
  },

  serialNumSx: {
    fontSize: '12px',
    fontWeight: 500,
    color: 'text.500',
    mb: 1,
  },

  viewTextSx: {
    cursor: 'pointer',
    '& p': {
      fontSize: '12px',
      fontWeight: 500,
      color: 'primary.main',
      '& svg': {
        ml: '5px',
      },
    },
  },

  skeltonSubRootSx: {
    px: 1,
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    width: '100%',
  },

  skeltonSx: {
    px: 1,
    bgcolor: 'primary.200',
    mr: 2,
  },
};
