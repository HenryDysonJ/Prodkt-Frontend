import type { SxProps } from '@mui/material';

interface ActionRequiredCardStyleProps {
  [key: string]: SxProps;
}

export const actionRequiredCardStyle: ActionRequiredCardStyleProps = {
  rootSx: {},
  cardSx: {
    borderRadius: '8px',
    bgcolor: 'background.surface.20',
    boxShadow: '0px 225px 69px #0000001A',
    border: '1.2px solid',
    borderColor: 'primary.A400',
    backgroundImage: 'none'
  },
  backgroundImageSx: {
    mt: 1.5,
    width: '100%',
    maxWidth: '134px',
    backgroundRepeat: 'norepeat',
    backgroundSize: 'cover',
  },
  backgroundColorImageSx: {
    mt: 1.5,
    width: '100%',
    maxWidth: '139px',
    backgroundRepeat: 'norepeat',
    backgroundSize: 'cover',
  },
  actionRequiredTextSx: {
    pb: 1,
  },
  skeltonSx: {
    bgcolor: 'primary.800',
    width: '190px',
    height: '110px',
  },
  expWarnInsTextSx: {
    display: 'flex',
    gap: 0.5,
    alignItems: 'center',
    py: 0.4,
    pl: 1.5,
    fontSize: '10px',
    fontWeight: 600,
    color: 'error.900',
    whiteSpace: 'nowrap'
  },
  expiredTextSx: {
    display: 'flex',
    gap: 0.5,
    alignItems: 'center',
    py: 0.4,
    pl: 1.5,
    fontSize: '10px',
    fontWeight: 600,
    color: 'secondary.main',
  },
  successTextSx: {
    display: 'flex',
    gap: 0.5,
    alignItems: 'center',
    py: 0.4,
    pl: 1.5,
    fontSize: '10px',
    fontWeight: 600,
    color: 'success.900',
  },
  iconSx: {
    pl: 1.5,
    pt: 1.5,
  },
  productTextSx: {
    color: 'text.A100',
    fontSize: '14px',
    fontWeight: 600,
    // mt: 0.5,
    pl: 1.2,
    width: '150px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',


  },
  productSubTextSx: {
    color: 'text.500',
    fontSize: '12px',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': '2',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    mt: 0.5,
    px: 1.2,
  },
  scheduleServiceText: {
    color: 'text.500',
    fontSize: '12px',
    textDecoration: 'underline',
    cursor:'pointer',
    mt: 2,
    px: 1.2,
  },
  bottomColorSx: {
    bgcolor: 'primary.darker',
    py: 1,
    mt: 1.5,
  },
  bottomButtonTextSx: {
    textAlign: 'center',
    color: 'primary.main',
    fontSize: '12px',
    fontWeight: 600,
    cursor:'pointer'
  },
  externalTextDoc: {
    color: 'text.500', fontSize: '12px', mt: '12px', cursor: 'pointer', px: 1.2, textDecoration: 'underline'
  }
};
