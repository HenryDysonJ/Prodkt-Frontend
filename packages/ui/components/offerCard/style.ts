import type { SxProps } from '@mui/material';

interface OfferCardStyleProps {
  [key: string]: SxProps;
}

export const offerCardStyle: OfferCardStyleProps = {
  rootSx: {
    display: 'flex',
    gap: '12px',
  },
  offerBoxSx: {
    display: 'flex',
    borderRadius: '12px',
    width: '360px',
    background: 'transparent linear-gradient(69deg, #C63C77 0%, #ECA798 100%) 0% 0% no-repeat padding-box',
  },
  offerTitleSx: {
    color: 'background.surface.100',
    fontSize: '16px',
    fontWeight: 'bold',
    mb: '12px',
  },
  offerSubtitleSx: {
    color: 'background.surface.100',
    fontSize: '12px',
    mb: '16px',
  },
  exploreButtonSx: {
    backgroundColor: 'background.surface.100',
    boxShadow: '0px 4px 20px #00000014',
    borderRadius: '6px',
    color: '#D75257',
    px: 1.2,
    py: 1,
    fontSize: '12px',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontFamily: 'excon',
    '&:hover': {
      bgcolor: '#FFFFFF',
      boxShadow: 'none',
    },
  },
  imgSx: {
    pt: '35px',
    translate: '0 15px',
    pr: 2,
    display: 'block',
  },
};
