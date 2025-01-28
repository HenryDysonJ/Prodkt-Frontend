import type { SxProps } from '@mui/material';

interface AmcDetailsStyleProps {
  [key: string]: SxProps;
}

export const amcDetailsStyle: AmcDetailsStyleProps = {
  rootSx: {
    backgroundColor: 'primary.900',
    height: '100vh',
  },

  headerSx: {
    marginBottom: '20px',
    backgroundColor: 'primary.800',
    position: 'fixed',
    width: '100%',
    maxWidth: '425px',
    margin: '0px auto',
    zIndex: '11',
  },

  uploadSx: {
    bgcolor: 'background.surface.100',
    borderRadius: '12px',
    px: 2,
    py: 2.5,
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
  uploadDocumentNameSx: {
    color: 'text.A100',
    fontSize: '14px',
    fontWeight: 500,
    width: '300px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
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
  attachsx: {
    color: 'text.A100',
    fontSize: '12px',
    textAlign: 'center',
    pb: 3
  },

  headerSectionSx: {
    padding: '20px 20px',
  },

  imageCardSx: {
    marginBottom: '20px',
    paddingTop: '38px',
    maxWidth: '425px',
  },

  historySx: {
    marginBottom: '20px',
    maxWidth: '425px',
  },

  tabsSectionSx: {
    paddingBottom: '100px',
    maxWidth: '425px',
  },

  footerButtonSx: {
    position: 'fixed',
    bottom: '0px',
    maxWidth: '425px',
    width: '100%',
    zIndex: '1100',
    backgroundColor: 'primary.900',
  },

  footerSectionSx: {
    position: 'fixed',
    bottom: '0px',
    maxWidth: '425px',
    width: '100%',
    zIndex: '1100',
  },

  chatTextSx: {
    position: 'relative',
    '& p': {
      position: 'absolute',
      width: '86px',
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

  fixedBotSx: {
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    maxWidth: '128px',
    margin: '0px auto',
    right: '16px',
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
    right: '-30px',
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
    transform: 'rotate(0deg)',
  },

  botIconMoveSx: {
    transform: 'rotate(92deg)',
    marginTop: '-50px',
    marginLeft: '-26px'
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

  bubbleArrowSx: {
    position: 'absolute',
    top: '-24px',
    right: '5px',
  },

  menuSx: {
    '& .MuiPaper-root': {
      '& .MuiList-root': {
        '& li': {
          paddingBottom: '8px !important',
          '&:hover': {
            backgroundColor: 'none',
          },
        },
      },
    },
    '& .MuiPopover-paper': {
      marginLeft: '-117px',
      mt: '12px',
      boxShadow: 'none',
      border: '1px solid',
      borderColor: '#00000029',
      borderRadius: '6px',
      '& .MuiList-root': {
        padding: '8px 8px',
      },
    },
  },
  menuItemSx: {
    py: 0,
    pl: 1,
    pr: 1.5,
    fontSize: '14px',
    fontWeight: 500,
    '& svg': {
      marginRight: '4px',
    },
  },
};
