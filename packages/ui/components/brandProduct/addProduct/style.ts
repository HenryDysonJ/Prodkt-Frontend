export const AddProductStyle = {
  rootSx: {
    height: "calc(100vh - 12.2rem)",
    m: 2,
    borderRadius: 1.5,
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: 700,
    color: "custom.onSurface",
    lineHeight: "2.4rem",
    ml: 2,
  },
  titleSx: {
    fontSize: "1.6rem",
    fontWeight: 500,
    color: "custom.onSurface",
    lineHeight: "2.2rem",
  },
  uploadText: {
    fontSize: "1.4rem",
    fontWeight: 500,
    color: "text.secondary",
    lineHeight: "2rem",
    mt: 1.5,
  },
  infoTitle: {
    fontSize: "1.6rem",
    fontWeight: 600,
    color: "text.primary",
    lineHeight: "2.2rem",
  },
  statusSx: {
    fontSize: "1.4rem",
    fontWeight: 500,
    color: "text.secondary",
    lineHeight: "2rem",
  },
  leftSegment: {
    backgroundColor: "primary.contrastText",
    borderRadius: "0.8rem",
    p: "0.4rem 1.2rem",
  },
  rightSegment: {
    backgroundColor: "primary.contrastText",
    borderRadius: "0.8rem",
    padding: "1.6rem",
  },
  titleClr: {
    fontSize: "1.4rem",
  },
  aligns: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    p: "0.8rem 0.8rem 0.8rem 0.8rem",
    m: "0.6rem 0rem",
  },
  rightAligmscroll: {
    overflow: "scroll",
    minHeight: "calc(100vh - 13rem)",
    maxHeight: "calc(100vh - 15rem)",
  },

  deleteAlign: {
    borderRadius: "0.8rem",
    padding: "1rem",
    border: "0.1rem solid",
    borderColor: 'custom.outline',
    width: "4rem",
    height: "4rem",
    cursor: "pointer",
  },
  image: {
    height: "12rem",
    width: "12rem",
    borderRadius: "1.2rem",
    border: "0.1rem solid",
    borderColor: 'custom.outline',
  },
  button: {
    backgroundColor: "custom.secondary",
    color: "primary.main",
    boxShadow: "none",
    display: "block",
    marginBottom: "1.6rem",
    paddingTop: "0.8rem",
    fontSize: "1.4rem",
    fontWeight: 600,
    width: 'max-content',
    height: "4rem",
    border: "none",
    ":hover": {
      backgroundColor: "custom.secondary",
      color: "primary.main",
      boxShadow: "none",
      border: "none",
    },
  },

  toolTipStyle: {
    minHeight: "12rem",
    minWidth: "31.4rem",
    padding: "1.2rem 1.2rem 1.2rem 2.4rem",
    borderRadius: "0.8rem",
    width: "31.4rem",
    height: "13rem",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "warning.container",
    marginLeft: "6rem",
    position: "relative",
    '@media (max-width: 1024px)': {
      marginLeft: "9rem",
      minWidth: "22.4rem",
      width: 'auto'
    }
  },

  tooltipContentStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    gap: "1.2rem",
  },

  dotStyle: {
    height: "0.4rem",
    width: "0.6rem",
    backgroundColor: "#4E585E",
    borderRadius: "100%",
  },

  toolTipText: {
    fontSize: "1.2rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.6rem",
    color: "custom.onSurfaceVariant",
  },

  hoverArrowStyle: {
    position: "absolute",
    left: "-0.8rem",
  },
  selectLabelStyle: {
    '&.Mui-error': {
      fontSize: '1.2rem',
    },
    '& .MuiInputLabel-root': {
      'fontSize': '1.6rem !important',
      'color': 'text.secondary',
      '& .MuiFormLabel-asterisk': {
        color: 'red',
      },
    },
    '& .MuiFormControl-root': {
      '& .MuiTextField-root': {
        '& .MuiInputLabel-root': {
          fontSize: '1.4rem',
          color: '#000000',
        },
      },
      '& .MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{
        color:'#4E585E'
      }
    },
    'mt': 2,
    '& .MuiAutocomplete-root .MuiFilledInput-root .MuiFilledInput-input': {
      fontSize: '1.4rem',
      color: 'text.primary',
      fontWeight: 500
    },
    '& .MuiFormHelperText-root.Mui-error': {
      marginInlineStart: '0px',
      fontSize: '1.0rem'
    },
  },
  switchBoxStyle: {
    "& .MuiFormControlLabel-root": {
      marginLeft: "0rem",
      mt: 1,
      "& .MuiFormControlLabel-label": {
        color: "rgba(0, 0, 0, 0.60)",
        fontSize: "1.4rem",
        fontWeight: 500,
      },
    },
  },

  labelSwitchStyle: {
    fontSize: "1.6rem",
    fontWeight: 500,
    color: "custom.onSurface",
  },
  downloadSx: {
    fontSize: "1.4rem",
    fontWeight: 600,
    color: "primary.main",
    ml: 1,
    textTransform: "capitalize",
  },
  uploadSx: {
    fontSize: "1.4rem",
    fontWeight: 500,
    color: "primary.contrastText",
    textTransform: "capitalize",
    boxShadow: "none",
    borderRadius: "0.8rem",
    backgroundColor: "primary.main",
    mt: 1.5,
    ":hover": {
      color: "primary.contrastText",
      boxShadow: "none",
      backgroundColor: "primary.main",
    },
  },
  downloadBtn: {
    fontSize: "1.4rem",
    fontWeight: 500,
    color: "primary.main",
    textTransform: "capitalize",
    boxShadow: "none",
    borderRadius: "0.8rem",
    backgroundColor: "primary.container",
    mb:2,
    mt: 2,
    ":hover": {
      color: "primary.main",
      boxShadow: "none",
      backgroundColor: "primary.container",
    },
  },
  addSx: {
    fontSize: "1.4rem",
    fontWeight: 600,
    color: "primary.main",
    ml: 1,
    textTransform: "capitalize",
    mt: 2,
  },
  dialogmodal: {
    "& .MuiPaper-root": {
      borderRadius: "0.8rem",
      width: "100%",
      height: '70rem'
    },
    "& .MuiDialogActions-root": {
      padding: "1.6rem",
      boxShadow: "0rem -0.2rem 1.6rem 0rem rgba(0, 0, 0, 0.08)",
    },
  },
  dialogmodal1: {
    "& .MuiPaper-root": {
      borderRadius: "0.8rem",
      width: "100%",
    },
    "& .MuiDialogActions-root": {
      padding: "1.6rem",
      boxShadow: "0rem -0.2rem 1.6rem 0rem rgba(0, 0, 0, 0.08)",
    },
  },
  titleStyleDialog: {
    fontSize: "1.6rem",
    fontWeight: 600,
    color: "custom.onSurface",
    fontFamily: 'Sarabun'
  },
  dialogBodyStyle: {
    p: "2rem",
    height: '35rem'
  },
  applyFilterButtonSx: {
    width: "100%",
    textTransform: "capitalize",
    backgroundColor: "primary.main",
    borderRadius: "0.8rem",
    boxShadow: "none",
    height: "4rem",
    fontWeight: 500,
    fontSize: "1.4rem",
    ":hover": {
      boxShadow: "none",
      backgroundColor: "primary.main",
    },
  },
  uploadButtonStyle: {
    color: "primary.contrastText",
    backgroundColor: "primary.main",
    border: 0,
    ":hover": {
      border: 0,
      backgroundColor: "primary.main",
      color: "primary.contrastText",
    },
  },
  uploadButtonSx: {
    color: "primary.main",
    backgroundColor: "primary.container",
    border: 0,
    ":hover": {
      border: 0,
      backgroundColor: "primary.container",
      color: "primary.main",
    },
  },
  cardStyle: {
    padding: "1.6rem 4rem",
    border: '0.2rem dashed',
    borderColor: 'custom.outlineVariant'
  },
  placeHolderStyle: {
    color: "text.secondary",
    fontSize: "1.6rem !important",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "2.2rem",
  },
  bannerComponentContainer: {
    // mb: "8rem",
    marginTop: "2rem",
    borderRadius: "0.8rem",
    "& .MuiTypography-root": {
      fontSize: "1.4rem",
    },
    '& .MuiDivider-wrapper': {
      fontSize: "1.4rem",
      textTransform: "uppercase",
    },
    "& .MuiBox-root.css-a0nbov": {
      display: "none"
    }
  },

  bottomRenderComponentStyle: {
    marginTop: "0.2rem",
    textAlign: "center",
    color: "custom.onSurfaceVariant2",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "2rem",
  },
  detailsSx: {
    borderRadius: '0.8rem',
    p: 2,
    mt: 2,
    backgroundColor: 'custom.surface'
  },
  warrantySx: {
    color: "text.primary",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "2rem",
    ml: .5
  },
  subtitleSx: {
    color: "text.primary",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "2rem",
  },
  editSx: {
    color: "primary.main",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "2rem",
    ml: 1
  },
  yearSx: {
    color: "text.secondary",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "2rem",
    mt: 1
  },
  durationSx: {
    color: "custom.onSurfaceVariant2",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "2rem",
  },
  pdfSx: {
    height: '2.8rem',
    borderRadius: '0.4rem',
    backgroundColor: 'custom.secondary',
    color: "#0C356A",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 400,
    p: '0.4rem 0.6rem',
    width: "10rem",
    maxWidth:'12rem',
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    mt: '0.8rem'
  },
  resetButtonSx: {
    width: "100%",
    borderRadius: "0.8rem",
    borderColor: "primary.main",
    color: "primary.main",
    textTransform: "capitalize",
    boxShadow: "none",
    height: "4rem",
    fontWeight: 500,
    fontSize: "1.4rem",
    ":hover": {
      boxShadow: "none",
      backgroundColor: "primary.contrastText",
      color: "primary.main",
      borderColor: "primary.main",
    },
  },
  editbox: {
    display: "flex", alignItems: "center", cursor: 'pointer'
  },
  nodataSx: {
    display: "grid", alignItems: "center", justifyContent: 'center', height: '100%'

  },
  mismatchDialog: {},

  mismatchDialogBodySx: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiPaper-root": {
      borderRadius: "0.8rem",
      maxWidth: "31rem",
      maxHeight: "27rem",
    },
    "& .MuiDialogTitle-root": {
      display: "none",
    },
    "& .MuiDialogContent-root": {
      padding: "0rem 2.4rem",
    },
  },

  mismatchBodyContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mt: "2.4rem",
  },

  missMatchButtonStyle: {
    width: "13.3rem",
    padding: "1rem 1.6rem",
    borderRadius: "0.8rem",
    textTransform: "none",
    fontSize: "1.4rem",
  },

  warnigIconStle: {
    height: "5.6rem",
    width: "5.6rem",
    borderRadius: "5rem",
    backgroundColor: "warning.container",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  breakdownTitle: {
    color: "custom.onSurface",
    fontSize: "1.6rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "2.2rem",
    marginTop: "1.4rem",
  },

  stockInKeyText: {
    color: "custom.onSurfaceVariant",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "2rem",
    marginBottom: "0.8rem",
  },
  imageBox: {
    marginTop: '24px',
    display: 'flex',
    height: '201px',
    padding: '0px 99px 0px 98px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    backgroundColor: '#F0F3F6',
    position: 'relative'
  },
  avatarSx: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: '200px',
    height: '200px',
    fontFamily: 'Sarabun, Roboto, -apple-system, sans-serif',
    fontSize: '1.25rem',
    lineHeight: '1',
    overflow: 'hidden',
    userSelect: 'none',
    borderRadius: '8px !important',
    padding: '12px',
    '& .MuiAvatar-img': {
      borderRadius: '12px',
    }
  },
  deleteSx: {
    position: "absolute",
    top: "16px",
    right: "16px",
    cursor: "pointer",
  },
  popoverStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '1.6rem',
    borderRadius: '0.8rem',
    backgroundColor: 'primary.contrastText',
    gap: '1.2rem',
  },
  viewTextStyle: {
    cursor: 'pointer',
    color: 'text.primary',
    fontFamily: 'Sarabun',
    fontSize: '1.4rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '2rem',
  },
};
