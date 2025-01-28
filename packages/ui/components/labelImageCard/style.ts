import BackgroundImage from '@assets/labelCardBackgroundImage.svg';
import type { SxProps } from '@mui/material';

interface LabelImageCardStyleProps {
  [key: string]: SxProps;
}

export const labelImageCardStyle: LabelImageCardStyleProps = {
  rootSx: {
    marginTop: '66px',
    position: 'relative',
  },

  cardSx: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'background.surface.100',
    backgroundImage: `url(${BackgroundImage})`,
    borderRadius: '10px',
    paddingBottom: '8px',
    position: 'relative',
    zIndex: 1,
  },

  imageSx: {
    width: '72px',
    height: '72px',
    marginTop: '-40px',
    marginBottom: '8px',
    backgroundColor: 'background.surface.100',
    borderRadius: '8px',
    border: '2px solid',
    borderColor: 'primary.A900',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  nameTextSx: {
    fontSize: '18px',
    fontWeight: 900,
    color: 'text.A100',
    paddingBottom: '5px',
  },

  dateTextSx: {
    fontSize: '12px',
    fontWeight: 500,
    color: 'text.500',
    paddingBottom: '5px',
  },

  textSectionSx: {
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      cursor: 'pointer',
    },
  },

  viewSectionSx: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '5px',
  },

  dotSx: {
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    backgroundColor: 'primary.300',
    marginRight: '5px',
    display: 'flex',
    alignItems: 'center',
  },

  copySectionSx: {
    display: 'flex',
    alignItems: 'center',
  },

  productNumSx: {
    fontSize: '12px',
    color: 'primary.main',
    marginRight: '5px',
    cursor: 'pointer',
  },

  viewTextSx: {
    fontSize: '12px',
    color: 'primary.main',
    marginRight: '5px',
    cursor: 'pointer',
    '& a': {
      textDecoration: 'none',
      color: 'primary.main',
    },
  },

  uploadTextSx: {
    fontSize: '12px',
    color: 'primary.main',
    marginRight: '5px',
    cursor: 'pointer',
    textDecoration: 'underline',
    '& a': {
      color: 'primary.main',
    },
  },

  labelTextSx: {
    backgroundColor: 'primary.main',
    color: 'common.white',
    fontSize: '12px',
    padding: '6px 14px',
    borderRadius: '8px',
    position: 'absolute',
    top: '-30px',
    left: '0px',
    paddingBottom: '20px',
  },

  servicesSx: {
    backgroundColor: 'secondary.300',
    padding: '12px 12px 9px 12px',
    borderRadius: '0 0 8px 8px',
    marginTop: '-8px',
    '& p': {
      fontSize: '12px',
      color: 'secondary.main',
      fontWeight: 600,
    },
  },
};
