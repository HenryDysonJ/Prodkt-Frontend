import type { SxProps } from '@mui/material';

interface CommonSkeletonStyleProps {
  [key: string]: SxProps;
}

export const commonSkeletonStyle: CommonSkeletonStyleProps = {
  rootSx: {
    backgroundColor: 'primary.900',
    padding: '20px 20px',
    height: '100%',
    '& span': {
      backgroundColor: 'primary.200',
    },
  },

  headerSectionSx: {
    height: '40px',
    marginBottom: '20px',
  },

  imageCardSx: {
    height: '130px',
    marginBottom: '20px',
    position: 'relative',
  },

  imageSx: {
    position: 'absolute',
    left: '41%',
    top: '-28px',
  },

  labelSx: {
    position: 'absolute',
    left: '0px',
    top: '7px',
  },

  historySx: {
    height: '120px',
    marginBottom: '20px',
  },

  exploreCardSx: {
    height: '135px',
    marginBottom: '20px',
  },

  tabsSectionSx: {
    height: '115px',
    marginBottom: '20px',
  },

  footerSectionSx: {
    position: 'fixed',
    bottom: '0px',
    maxWidth: '425px',
    width: '100%',
    zIndex: '1100',
    height: '110px',
    '& span': {
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
    },
  },
};
