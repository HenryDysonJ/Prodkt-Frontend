import type { SxProps } from '@mui/material';

interface ProductCardsStyleProps {
  [key: string]: SxProps;
}

export const productCardsStyle: ProductCardsStyleProps = {
  rootSx: {},

  cardSectionSx: {
    border: '1px solid',
    borderColor: 'primary.500',
    backgroundColor: 'background.surface.100',
    borderRadius: '16px',
    padding: '12px 16px',
    marginBottom: '12px',
    boxShadow: '0px 0px 12px #0000000F',
    cursor: 'pointer',
  },

  headerSectionSx: {
    paddingBottom: '12px',
    borderBottom: '0.5px solid',
    borderBottomStyle: 'dashed',
    borderColor: 'divider.100',
    '& span': {
      fontSize: '12px',
      color: 'text.700',
      fontWeight: 500,
    },
  },

  topHeaderSx: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& p': {
      fontSize: '16px',
      fontWeight: 600,
      color: 'text.A100',
    },
  },

  boxAlignmentSx: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '12px',
  },

  leftAlignmentSx: {
    display: 'flex',
    alignItems: 'center',
  },

  rightAlignmentSx: {
    display: 'flex',
    alignItems: 'center',
  },

  leftAlignSx: {
    '& p': {
      fontSize: '12px',
      color: 'text.700',
      fontWeight: 600,
      whiteSpace:'nowrap'
    },
    '& span': {
      fontSize: '12px',
      fontWeight: 500,
      whiteSpace:'nowrap'
    },
  },

  rightAlignSx: {
    '& p': {
      fontSize: '12px',
      fontWeight: 600,
      whiteSpace:'nowrap'
      // color: 'text.500',
    },
    '& span': {
      fontSize: '12px',
      fontWeight: 500,
      whiteSpace:'nowrap'
    },
  },
};
