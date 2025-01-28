import type { SxProps } from '@mui/material';

interface addProductBotStyleProps {
  [key: string]: SxProps;
}

export const addProductBotStyle: addProductBotStyleProps = {
  rootSx: {
    // background: 'linear-gradient(#E8F2FF, #FFFFFF)',
    position: 'relative',
    minHeight: '100%',
  },
  cardSx: {
    borderRadius: '8px',
    bgcolor: 'common.white',
    boxShadow: 'none',
    border: '1.2px solid',
    borderColor: 'primary.100',
  },
  activityLogTextSx: {
    fontSize: '14px',
    fontWeight: 700,
    color: 'text.700',
    pb: 1.5,
  },
  sectionSx: {
    position: 'relative',
    height: 94.002,
    width: 195.943,
    mt: 1,
    mb: 1,

    '& svg': {
      width: '100%',
    },
  },
  DetailsSx: {
    position: 'absolute',
    // left: '11px',
    // width:'170px',
    top: '0px',
    padding: '11px 25px 11px 12px',
    '& p': {
      fontSize: '20px',
      fontWeight: 900,
      color: 'text.A100',
    },
    '& span': {
      fontSize: '13px',
      color: 'text.500',
      fontFamily: 'excon',
    },
  },
  scrollSx: {
    display: 'flex',
    justifyContent: 'center',
  },
  BotUploadSx: {
    mt: 2,
    mb: 4,
    display: 'flex',
    justifyContent: 'center',
  },
  boxSx: {
    border: '1px solid',
    borderStyle: 'dashed',
    borderColor: 'primary.main',
    borderRadius: '8px',
    backgroundColor: 'primary.800',
    display: 'flex',
    justifyContent: 'space-between',
    px: 2,
    py: 2,
  },
  uploadDocumentNameSx: {
    color: 'text.A100',
    fontSize: '14px',
    fontWeight: 500,
    width: '300px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  updateButtonSx: {
    boxShadow: 'none',
    borderRadius: '10px',
    textTransform: 'capitalize',
    height: '48px',
    backgroundColor: 'primary.main',
    color: 'text.A800',
    '&:hover': {
      backgroundColor: 'primary.main',
      color: 'text.A800',
      boxShadow: 'none',
    },
  },
  screenlayoutSx: {
    minHeight: '100vh',
    height: '100%',
    pt: '80px',
    bgcolor: 'none',
  },
  homeSx: {
    textTransform: 'capitalize',
    padding: '15px 0',
    borderRadius: '8px',
    boxShadow: 'none',
    '&: hover': {
      boxShadow: 'none',
    },
  },

  // fixedButtonSX: {
  //   position: 'absolute',
  //   bottom: '0px',
  //   width: '100%',
  //   maxWidth: '128px',
  //   margin: '0px auto',
  //   right: '16px',
  // },

  // addPro: {
  //   position: 'fixed',
  //   bottom: '0px',
  //   left: '0',
  //   right: '0',
  // },
};
