import type { SxProps } from '@mui/material';
// import PaintPic from '@core/ui/assets/paintPic.png'
import Plug from '@core/ui/assets/smallPlug.png'
interface HomeStyleProps {
  [key: string]: SxProps;
}

export const homeStyle: HomeStyleProps = {
  rootSx: {
    position: 'relative',
    // background: 'linear-gradient(180deg, rgba(232,242,255,1) 0%, rgba(255,255,255,1) 22%)',
    bgcolor: 'primary.A300',
  },

  mainSx: {
    marginTop: '35px',
    paddingTop: '20px',
    paddingLeft: '20px',
    maxWidth: '425px',
  },

  dashSx: {
    width: '16px',
    height: '6px',
    backgroundColor: 'primary.main',
    borderRadius: '4px',
  },
  dotSx: {
    width: '6px',
    height: '6px',
    backgroundColor: 'primary.300',
    borderRadius: '50%',
  },
  boxtoolTipSx: {
    bgcolor: '#fff',
    p: 2.5,
    width: '280px',
    height: '100%',
    borderRadius: '8px',
    ml: '-335px !important',
    // mb: '1px'	
  },
  boxFirstStepCard: {
    width: '220px',
    bgcolor: '#fff',
    height: '100%',
    borderRadius: '8px',
    p: 2,
    ml: '-16px !important',
    mt: 2
  },
  boxSecondStepCard: {
    width: '220px',
    bgcolor: '#fff',
    height: '100%',
    borderRadius: '8px',
    p: 2,
    mt: 2,
    mb: 2,
    // ml: '-50px !important'	
  },
  boxThirdStepCard: {
    width: '220px',
    bgcolor: '#fff',
    height: '100%',
    borderRadius: '8px',
    p: 2,
    mt: 2,
    ml: 2,
    mb: 1
  },
  boxFourthStepCard: {
    width: '220px',
    bgcolor: '#fff',
    height: '100%',
    borderRadius: '8px',
    p: 2,
    mt: 2,
    mb: 1,
    ml: '-250px !important'
  },
  boxFifthStepCard: {
    width: '220px',
    bgcolor: '#fff',
    height: '100%',
    borderRadius: '8px',
    p: 2,
    mt: 0.8,
    ml: '-288px !important'
  },
  buttonAddProdktSx: {
    bgcolor: 'primary.main',
    borderRadius: '8px',
    textTransform: 'capitalize',
    boxShadow: 'none',
    px: 1.5,
    py: 0.7,
    "&:hover": {
      bgcolor: 'primary.main',
      boxShadow: 'none',
    }
  },
  closeButtonSx: {
    bgcolor: 'none !important',
  },

  topSectionSx: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px 5px 15px',
    bgcolor: 'primary.800',
    position: 'fixed !important',
    top: '0px',
    maxWidth: '425px',
    width: '100%',
    zIndex: 1,
  },

  chatSectionSx: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sectionSx: {
    position: 'relative',
    height: 94.002,
    width: 195.943,

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

  roboIcon: {
    '& svg': {
      width: '100%',
      paddingRight: '20px',
      bgcolor: 'none !important'
    },
  },

  secondlayerSx: {
    paddingLeft: '20px',
    marginTop: '20px',
    maxWidth: '425px',
  },

  actionTextSx: {
    '& p': {
      fontSize: '14px',
      fontWeight: 900,
      color: 'text.A100',
    },
  },


  thirdlayerSx: {
    maxWidth: '425px',
    backgroundColor: 'background.surface.50',
    paddingLeft: '20px',
    paddingTop: '20px',
    marginTop: '15px',
    '& p': {
      fontSize: '14px',
      fontWeight: 900,
      color: 'text.A100',
    },
  },

  fourthlayerSx: {
    padding: '0px 20px',
    marginTop: '20px',
    maxWidth: '425px',
  },

  offersBoxSx: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  offerTextSx: {
    '& p': {
      fontSize: '14px',
      fontWeight: 900,
      color: 'text.A100',
    },
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

  fifthlayerSx: {
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '20px',
    maxWidth: '425px',
    // paddingBottom: '80px',
  },

  myPoductTextSx: {
    '& p': {
      fontSize: '14px',
      fontWeight: 900,
      marginBottom: '12px',
      color: 'text.A100',
    },
  },

  fixedButtonSX: {
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    maxWidth: '128px',
    margin: '0px auto',
    right: '16px',
  },

  addPro: {
    position: 'fixed',
    bottom: '22px',
    left: '0',
    right: '0',
    '& button': {
      textTransform: 'capitalize',
      padding: '12px 16px',
      borderRadius: '12px',
    },
  },

  plusTextButtonSx: {
    padding: '12px 16px',
    backgroundColor: 'primary.main',
    width: '133px',
    borderRadius: '12px',
    cursor: 'pointer',
    lineHeight: '0px',
    display: 'flex',
    alignItems: 'center',
    '& p': {
      fontSize: '14px',
      color: 'background.surface.A500',
    },
    '& svg': {
      fontSize: '25px',
      color: 'background.surface.A500',
    },
  },
  plusButtonSx: {
    width: '50px',
    height: '50px',
    justifyContent: 'center',
    backgroundColor: 'primary.main',
    borderRadius: '12px',
    cursor: 'pointer',
    lineHeight: '0px',
    display: 'flex',
    alignItems: 'center',
    transition: 'all ease-in-out .5s',
    '& p': {
      fontSize: '14px',
      color: 'background.surface.A500',
    },
    '& svg': {
      fontSize: '25px',
      color: 'background.surface.A500',
    },
  },

  addProductSX: {
    width: '128px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'primary.main',
    padding: '11px',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all ease-in .5s',
    '& svg': {
      color: 'background.surface.100',
    },
    '& p': {
      fontSize: '14px',
      fontWeight: 500,
      color: 'background.surface.100',
    },
  },

  drawerHeight: {
    height: '220px',
  },

  drawerHeightHome: {
    height: 'auto',
  },

  leftButtonSX: {
    display: 'flex',
    justifyContent: 'center',
  },

  rightButtonSX: {
    display: 'flex',
    justifyContent: 'center',
  },
  scheduleServiceContainer: {
    padding: '12px 22px',
    // display: 'flex',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // gap: '12px',
    marginTop: '8px',
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
    // mb: 2,
    display: 'flex',
    gap: '20px',
    width: '100%',
    backgroundColor: 'primary.800',
  },
  noProductsAddedSx: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    px: 4,
    pt: 1,
    pb: 3,
  },
  noProductsTextHeaderSx: {
    display: 'grid',
    placeItems: 'center',
    pb: 2,
  },
  noProductsTextSx: {
    color: 'text.A100',
    fontWeight: 700,
    fontSize: '14px',
  },
  addProductsTextSx: {
    color: 'text.500',
    fontSize: '12px',
    pt: 1.5,
  },
  primaryBtn: {
    width: '162px',
    height: ' 48px',
  },
  secondaryBtn: {
    width: '162px',
    height: ' 48px',
  },
  pwaContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  pwaContent: {
    padding: '0px 40px 20px 40px',
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '16px',
  },
  pwaContentDes: {
    fontSize: '14px',
    fontWeight: 500,
    color: 'grey.A500',
    textAlign: 'center',
  },
  pwaContentDesIOS: {
    fontSize: '14px',
    fontWeight: 500,
    color: 'grey.A500',
  },
  extendedSx: {
    backgroundColor: 'background.surface.A800',
    border: '1px solid',
    borderColor: 'primary.A900',
    borderRadius: '8px',
    cursor: 'pointer',
    px: 2,
    py: 2.1,
    mb: 1.6,
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
  btnSx: {
    boxShadow: 'none',
    textTransform: 'capitalize',
    borderRadius: '8px',
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
  coverageTextSx: {
    fontSize: '12px',
    color: 'text.700',
    pb: 1,
  },
  coverageWarrantyTextSx: {
    fontSize: '12px',
    color: 'text.700',
    pb: 2,
    textAlign: 'center',
  },
  coverageInsuranceTextSx: {
    fontSize: '12px',
    color: 'text.700',
    pt: 1,
    pb: 1,
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

  uploadTextSx: {
    fontSize: '12px',
    color: 'grey.B600',
    padding: '11px',
    fontWeight: 600,
    backgroundColor: 'grey.B500',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    '& span': {
      color: 'error.900',
    },
  },
  fileUploadSx: {
    backgroundColor: 'background.surface.100',
    border: '1px solid',
    borderColor: 'primary.A900',
    borderRadius: '8px',
    mt: 2,
  },
  dividerFileSx: {
    border: '0.5px solid',
    borderColor: 'divider.100',
  },
  stackFileSx: {
    backgroundColor: 'secondary.A300',
    padding: '9px',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  },
  invoiceSx: {
    fontSize: '12px',
    color: 'text.A100',
    textAlign: 'center',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  },

  pointsSectionSx: {
    fontSize: '12px',
    color: 'text.500',
    fontWeight: 500,
  },

  offerBoxSx: {
    display: 'flex',
    borderRadius: '12px',
    width: '315px',
    height:'123px',
    backgroundRepeat:'no-repeat',
    backgroundImage:
    `url(${Plug})`,
    position: 'relative',
    backgroundColor: '#F6E8D9',
  },
  awarenessTextSx:{
    color:'text.900', fontSize:'12px', pl:2, py:2, fontWeight: 'bold'
  },
  bannerSx: {
    paddingTop:1.5,
    '& .slick-list': { margin: '0 10% 5% 0', overflow: 'visible'},
    '& .slick-slide': { padding: '0 8px 0'},
    '& .slick-dots li button:before': { color:"#5D9DEF"},
    '& .slick-dots li': { margin:"0"},
    overflow: 'hidden',
  },

};
