import type { SxProps } from '@mui/material';

interface ProductSelectedCardStyleProps {
  [key: string]: SxProps;
}

export const productSelectedCardStyle: ProductSelectedCardStyleProps = {
  rootSx: {
    px: 2.2,
  },
  cardSx: {
    borderRadius: '8px',
    bgcolor: 'grey.B300 !important',
    height: '124px',
    maxWidth: '100%',
    boxShadow: '0px 8px 69px rgba(169, 169, 169, 0.1)',
    border: '1.2px solid',
    borderColor: 'grey.B300',
    cursor: 'pointer'
  },
  cardStyleChangeSx: {
    borderRadius: '8px',
    bgcolor: 'common.white !important',
    height: '124px',
    maxWidth: '100%',
    boxShadow: '0px 8px 69px rgba(169, 169, 169, 0.1)',
    border: '1.2px solid',
    borderColor: 'primary.main',
  },
  cardContentSx: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  iconSx: {
    position: 'absolute',
    top: '0px',
    right: '0px',
  },
  productTextSx: {
    textAlign: 'center',
    fontSize: '12px',
    mt: 1,
    px: 0.5,
  },
  headerMapSx: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // gap: 1,
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 1.5,
    width: '100%',
  },
  imageSx: {
    textAlign: 'center',
    '& img': {
      width: '75px',
      height: '70px',
    },
  },
};
