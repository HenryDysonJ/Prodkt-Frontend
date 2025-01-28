import type { SxProps } from '@mui/material';

interface ExploreCardComponentStyleProps {
  [key: string]: SxProps;
}

export const exploreCardComponentStyle: ExploreCardComponentStyleProps = {
  rootSx: {},

  headerSectionSx: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '13px',
  },

  seeTextIconSx: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerSx: {
    fontSize: '14px',
    color: 'text.A100',
  },

  seeTextSx: {
    fontSize: '14px',
    color: 'primary.main',
    fontWeight: 900,
    marginRight: '4px',
    cursor: 'pointer',
  },

  cardSx: {
    backgroundColor: 'common.white',
    borderRadius: '10px',
    width: '100%',
  },

  totalCardSx: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    overflowX: 'scroll',
    overflowY: 'hidden',
  },

  insideCardSx: {
    padding: '12px',
    paddingRight: '0px',
  },

  imageSx: {
    width: '44px',
    height: '44px',
    marginBottom: '8px',
    '& img': {
      width: '100%',
      height: '100%',
    },
  },

  imageSectionSx: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  buttonSx: {
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    backgroundColor: 'primary.100',
    padding: '4px 16px',
    color: 'primary.main',
    boxShadow: 'none',
    textTransform: 'capitalize',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'primary.100',
      color: 'primary.main',
      boxShadow: 'none',
    },
  },

  labelSectionSx: {
    position: 'relative',
  },

  labelSx: {
    position: 'absolute',
    top: '4px',
    right: '8px',
    fontSize: '10px',
    fontWeight: 'medium',
    color: 'secondary.main',
  },

  brandNameSx: {
    fontSize: '14px',
    color: 'text.900',
    fontWeight: 900,
  },

  benefitsTextSx: {
    fontSize: '12px',
    color: 'text.500',
    fontWeight: 500,
  },
};
