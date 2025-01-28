import type { SxProps } from '@mui/material';

interface AvailableAmcCardsStyleProps {
  [key: string]: SxProps;
}

export const availableAmcCardsStyle: AvailableAmcCardsStyleProps = {
  rootSx: {
    padding: '0px 20px',
  },

  headerTitleSx: {
    marginBottom: '12px',
    '& p': {
      color: 'text.A100',
    },
  },

  cardSectionSx: {
    padding: '12px',
    backgroundColor: 'common.white',
    marginBottom: '12px',
    borderRadius: '12px',
    cursor: 'pointer',
    border: '1px solid',
    borderColor: 'primary.50',
    boxShadow: '0px 0px 12px #0000000F',
  },

  cardSx: {
    display: 'flex',
    marginBottom: '12px',
  },

  imageSx: {
    width: '45px',
    height: '40px',
    '& img': {
      width: '100%',
      height: '100%',
    },
  },

  titleSx: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: '8px',
  },

  nameSx: {
    fontSize: '14px',
    fontWeight: 700,
    color: 'text.900',
  },

  chargeSx: {
    fontSize: '14px',
    fontWeight: 600,
    color: 'text.500',
  },

  iconSectionSx: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },

  iconSx: {
    width: '24px',
    height: '24px',
    '& svg': {
      width: '100%',
      height: '100%',
    },
    cursor: 'pointer',
  },

  pointsSectionSx: {
    display: 'flex',
    gap: '4px',
  },

  pointsSx: {
    fontSize: '12px',
    fontWeight: 600,
    color: 'text.700',
  },

  moreTextSx: {
    fontSize: '12px',
    fontWeight: 600,
    color: 'secondary.main',
    cursor: 'pointer',
  },

  cardBoxSx: {
    height: 'calc(100vh - 200px)',
    overflow: 'auto',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },

  cardEmptyBoxSx: {
    height: 'calc(100vh - 200px)',
    overflow: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
};
