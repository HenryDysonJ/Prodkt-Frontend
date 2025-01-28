import type { SxProps } from '@mui/material';

interface SideImageCardStyleProps {
  [key: string]: SxProps;
}

export const sideImageCardStyle: SideImageCardStyleProps = {
  rootSx: {},

  cardSx: {
    border: '1px solid',
    borderColor: 'grey.A300',
    borderRadius: '6px',
    marginRight: '8px',
    width: '113px',
  },

  buttonSx: {
    color: 'background.surface.100',
    backgroundColor: 'secondary.100',
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
    borderBottomLeftRadius: '6px',
    borderBottomRightRadius: '6px',
    textTransform: 'capitalize',
    '&:hover': {
      color: 'background.surface.100',
      backgroundColor: 'secondary.100',
    },
  },

  imageSx: {
    width: '44px',
    height: '44px',
    marginBottom: '-22px',
    marginLeft: '12px',
    '& img': {
      width: '100%',
      height: '100%',
    },
  },

  titleSx: {
    fontSize: '12px',
    fontWeight: 600,
    padding: '34px 12px 8px 12px',
  },

  subTitleSx: {
    fontSize: '12px',
    fontWeight: 600,
    color: 'text.500',
    padding: '0px 12px 12px 12px',
  },
};
