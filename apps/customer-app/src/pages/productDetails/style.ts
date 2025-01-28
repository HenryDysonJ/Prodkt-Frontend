import type { SxProps } from '@mui/material';

interface productDetailsProps {
  [key: string]: SxProps;
}

export const productDetailsStyle: productDetailsProps = {
  fourthlayerSx: {
    padding: '0px 20px',
    marginTop: '20px',
    marginBottom: '20px',
  },
  textSSx: {
    pt: 1.5,
    fontSize: '12px',
    color: 'text.A100',
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
  screenlayoutSx: {
    minHeight: '100vh',
    height: '100%',
    pt: '80px',
    bgcolor: 'none',
  },
  offersBoxSx: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  actionStyleSx: {
    display: 'flex',
    flexDirection: 'row',
    minWidth: '375px',
    minHeight: '145px',
    width: '100%',
    gap: '15px',
    paddingRight: '20px',
    pl: 2.5,
  },
  actionRequiredSx: {
    pl: 2.5,
    pt: 2.5,
    pb: 1.5,
  },
  actionRequiredRootSx: {
    overflowY: 'hidden',
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'row',
  },
  offerTextSx: {
    '& p': {
      fontSize: '14px',
      fontWeight: 900,
      color: 'text.A100',
    },
  },
  tabRootSx: {
    py: 2.5,
    px: 2.5,
    paddingBottom: '200px',
  },
  imgRootSx: {
    overflowY: 'hidden',
    // overflow: 'scroll',
    display: 'flex',
    flexDirection: 'row',
    marginTop: '12px',
  },
  seeAllTextSx: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '6px',
    cursor: 'pointer',
    '& p': {
      fontSize: '14px',
      fontWeight: 600,
      color: 'primary.main',
    },
  },
  bannerSx: {
    width: '100%',
  },
  menuSx: {
    '& .MuiPopover-paper': {
      // marginLeft: '-90px',
      backgroundImage: 'none',
      backgroundColor: 'background.surface.100',
      mt: 2,
      boxShadow: 'none',
      border: '1px solid',
      borderColor: 'primary.500',
      borderRadius: '6px',
    },
    '& .MuiList-padding': {
      padding: '10px 6px',
    },
    '& .MuiMenuItem-root': {
      '&:hover': {
        backgroundColor: 'text.A100 !important',
      },
      '& svg': {
        marginRight: '8px',
      },
    },
  },
  menuItemSx: {
    py: 0.5,
    pl: 1,
    pr: 1.5,
    fontSize: '14px',
    fontWeight: 500,
    color: 'text.A100'
  },
  seeAllActivityRootSx: {
    bgcolor: 'primary.500',
    border: '1px solid',
    borderColor: 'primary.main',
    borderRadius: '8px',
    py: 1.2,
    px: 1.5,
  },
  searchBoxSx: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '4.3px',
    mb: '4px',
  },
  typeSx: {
    fontSize: '10px',
    color: 'primary.main',
    fontWeight: 'medium',
    cursor: 'pointer',
  },
  textSx: {
    pt: 1.5,
    fontSize: '12px',
    color: 'grey.900',
  },
  drawerButton: {
    boxShadow: 'none',
    textTransform: 'capitalize',
    borderRadius: '9px',
    bgcolor: 'primary.main',
    color: 'common.white',
    px: '12px',
    py: '12px',
    '&:hover': {
      boxShadow: 'none',
      bgcolor: 'primary.main',
      color: 'common.white',
    },
  },
  drawerButtons: {
    boxShadow: 'none',
    textTransform: 'capitalize',
    borderRadius: '9px',
    bgcolor: 'primary.main',
    color: 'common.white',
    px: '14px',
    py: '14px',
    '&:hover': {
      boxShadow: 'none',
      bgcolor: 'primary.main',
      color: 'common.white',
    },
  },
  seeAllServicesTextSx: {
    fontSize: '14px',
    fontWeight: 500,
    color: 'primary.main',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  subTitleTextSx: {
    fontSize: '14px',
    fontWeight: 500,
    color: 'text.500',
    textAlign: 'center',
  },

  skeltonSx: {
    px: 1,
    textAlign: 'center',
    mt: 1,
    bgcolor: 'primary.200',
  },
  boxShadow: {
    p: 2,
    boxShadow: '0px 4px 21px 20px #0000000A',
    mb: 2,
    display: 'flex',
    gap: '20px',
    width: '100%',
    backgroundColor: 'primary.800',
  },
  // scheduleServiceContainer: {
  //   padding: '6px 22px',
  // },
  scheduleServiceContainer: {
    padding: '12px 22px',
    // display: 'flex',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // gap: '12px',
    marginTop: '8px',
  },
  // serviceContainer: {
  //   padding: '6px 22px',
  //   backgroundColor: 'common.white',
  //   paddingBottom: '22px',
  // },
  fixedBotSx: {
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    maxWidth: '128px',
    margin: '0px auto',
    right: '16px',
  },

  botIconRotateSx: {
    transform: 'rotate(0deg)',
  },
  botIconMoveSx: {
    transform: 'rotate(92deg)',
    marginTop: '-50px',
    marginLeft: '-26px'
  },

  chatIconSx: {
    position: 'fixed',
    bottom: '50px',
    left: '8px',
    right: '0px',
    boxShadow: '-3px 3px 12px #000000(6%)',
    transition: '1s',
  },

  chatRotateIconSx: {
    position: 'fixed',
    bottom: '50px',
    left: '8px',
    right: '-47px',
    boxShadow: '-3px 3px 12px #000000(6%)',
    transition: 'ease-out 0.3s',
  },

  botSx: {
    width: '55px',
    height: '55px',
    lineHeight: '73px',
    borderRadius: '50%',
    backgroundColor: 'background.surface.B700',
    border: '2px solid',
    borderColor: 'background.surface.B700',
    cursor: 'pointer',
    // boxShadow: '0px 0px 1px 0px rgba(0,0,0,1)',
    transform: 'rotate(0deg)',
  },

  botRotateSx: {
    width: '55px',
    height: '50px',
    lineHeight: '73px',
    // borderRadius: '50%',
    backgroundColor: 'primary.100',
    border: '2px solid',
    borderColor: 'common.white',
    cursor: 'pointer',
    transform: 'rotate(-90deg)',
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
  },

  chatTextSx: {
    position: 'relative',
    '& p': {
      position: 'absolute',
      width: '98px',
      height: 'auto',
      top: '-62px',
      right: '0px',
      fontSize: '10px',
      color: 'background.surface.A500',
      backgroundColor: 'background.surface.C200',
      padding: '7px',
      borderRadius: '6px',
    },
  },
  bubbleArrowSx: {
    position: 'absolute',
    top: '-24px',
    right: '5px',
  },
  btnBoxSx: {
    display: 'flex',
    justifyContent: 'center',
    pt: 2
  },
  btnsSx: {
    boxShadow: 'none',
    textTransform: 'capitalize',
    borderRadius: '8px',
    // width: '50%',
    // px: 1.5,
    py: 1.2,
    backgroundColor: 'primary.main',
    color: 'text.A800',
    '&:hover': {
      backgroundColor: 'primary.main',
      color: 'text.A800',
      boxShadow: 'none',
    },
  },
  btnSx: {
    boxShadow: 'none',
    textTransform: 'capitalize',
    borderRadius: '12px',
    width: '100%',
    px: '14px',
    py: '15px',
    backgroundColor: 'primary.main',
    color: 'text.A800',
    '&:hover': {
      backgroundColor: 'primary.main',
      color: 'text.A800',
      boxShadow: 'none',
    },
  },
  textWarrantySx: {
    color: 'text.A100',
    fontSize: '12px',
  },

  questionSx: {
    color: 'text.700',
    fontSize: '12px',
    mb: 2,
  },
  extendedSx: {
    backgroundColor: 'background.surface.100',
    border: '1px solid',
    borderColor: 'primary.A900',
    borderRadius: '8px',
    cursor: 'pointer',
    px: 2,
    py: 2.1,
    mb: 1.6,
  },
  uploadTextSx: {
    fontSize: '12px',
    padding: '11px',
    fontWeight: 600,
    backgroundColor: 'grey.B500',
    color: 'grey.B600',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    '& span': {
      color: 'error.900',
    },
  },
  fileUploadSx: {
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    background: 'background.surface.100',
    border: '1px solid',
    borderColor: 'grey.200',
    borderRadius: '8px',
    mt: 2,
  },
  invoiceSx: {
    fontSize: '12px',
    color: 'text.A100',
    textAlign: 'center',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  },
  coverageTextSx: {
    fontSize: '12px',
    color: 'text.700',
    pb: 1,
  },
  dividerFileSx: {
    border: '0.5px solid',
    borderColor: 'divider.100',
  },
  uploadDocumentNameSx: {
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
    '&:hover': {
      boxShadow: 'none',
    },
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
  stackFileSx: {
    backgroundColor: 'secondary.A400',
    padding: '9px',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  },

  drawerStyle: {
    padding: '20px',
  },

  remarksText: {
    fontSize: '14px',
    color: 'text.500',
    mb: '12px',
    '& span': {
      color: 'red',
    },
  },
};
