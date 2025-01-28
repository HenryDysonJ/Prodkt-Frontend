import type { SxProps } from '@mui/material';

interface ArchivedProductsStyleProps {
  [key: string]: SxProps;
}

export const archivedProductsStyle: ArchivedProductsStyleProps = {
  rootSx: {
    backgroundColor: 'primary.900',
    height: '100vh',
    padding: '16px',
  },

  cardInnerSx: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleSx: {
    fontSize: '14px',
    color: 'text.A100',
    fontWeight: 800,
    fontFamily: 'excon',
    mb: '16px',
  },

  subTitleSx: {
    fontSize: '14px',
    color: 'grey.700',
    fontWeight: 400,
    mb: '16px',
    '& span': {
      color: 'text.900',
      fontWeight: 800,
    },
  },
};
