export const createTemplateStyle = {
  rootSx: {
    margin: "16px 16px 0px 16px",
  },
  basicInfoRoot: {
    borderRadius: "8px",
    backgroundColor: "primary.contrastText",
    p: 2,
  },
  title: {
    color: "text.primary",
    fontFamily: "Sarabun",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "22px",
  },
  subtitle: {
    color: "text.secondary",
    // fontFamily: "Sarabun",
    fontSize: "14px",
    // fontStyle: "normal",
    fontWeight: 500,
  },
  selectLabelStyle: {
    "&.Mui-error": {
      fontSize: "1.2rem",
    },
    " .MuiInputLabel-root": {
      fontSize: "1.8rem !important",
      color: "text.secondary",
      "& .MuiFormLabel-asterisk": {
        color: "red",
      },
    },
    "& .MuiFormControl-root": {
      borderRadius: "12px",
      "& .MuiTextField-root": {
        "& .MuiInputLabel-root": {
          fontSize: "2.2rem",
          color: "#000000",
        },
      },
    },
    "& .MuiAutocomplete-root .MuiFilledInput-root .MuiFilledInput-input": {
      fontSize: "1.4rem",
      color: "text.primary",
      fontWeight: 500,
    },
    '& .MuiFormHelperText-root.Mui-error': {
      marginInlineStart: '0px',
      fontSize: '1.0rem'
    },
    '& .MuiAutocomplete-root .MuiFilledInput-root .MuiAutocomplete-endAdornment': {
      '& .MuiAutocomplete-clearIndicator': {
        display: 'none'
      },
      '& .MuiAutocomplete-popupIndicator': {
        display: 'none'
      }
    }

  },
  menuItemSx: {
    "&.MuiMenuItem-root": {
      background: "#fff",
      p: "0px 10px",
      pl: "0px",
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
    fontWeight: 600,
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
    border: "0.2rem dashed",
    borderColor: "custom.outlineVariant",
  },
  placeHolderStyle: {
    color: "text.secondary",
    fontSize: "1.6rem !important",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "2.2rem",
  },
  bannerComponentContainer: {
    mb: "1.6rem",
    marginTop: "1.6rem",
    borderRadius: "0.8rem",
    "& .MuiTypography-root": {
      fontSize: "1.4rem",
    },
    "& .MuiDivider-wrapper": {
      fontSize: "1.4rem",
      textTransform: "uppercase",
    },
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
  addBtn: {
    width: "110px",
    textTransform: "capitalize",
    backgroundColor: "primary.contrastText",
    borderRadius: "0.8rem",
    boxShadow: "none",
    height: "4rem",
    fontWeight: 500,
    fontSize: "1.4rem",
    mt: 1,
    ml: "-6px",
    ":hover": {
      boxShadow: "none",
      backgroundColor: "primary.contrastText",
    },
  },
  addBtnVariable: {
    width: "110px",
    textTransform: "capitalize",
    backgroundColor: "primary.contrastText",
    borderRadius: "0.8rem",
    boxShadow: "none",
    height: "4rem",
    fontWeight: 500,
    fontSize: "1.4rem",
    mt: '45px',
    p: '6px 4px',
    display: 'block',
    textAlign: 'start',
    ":hover": {
      boxShadow: "none",
      backgroundColor: "primary.contrastText",
    },
  },
  firstgrid: {
    height: "calc(100vh - 130px)",
    overflow: "scroll",
    pb: 3,
  },
  popoverStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "1.6rem",
    borderRadius: "0.8rem",
    backgroundColor: "primary.contrastText",
    gap: "1.2rem",
  },
  viewTextStyle: {
    cursor: "pointer",
    color: "text.primary",
    fontFamily: "Sarabun",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "2rem",
  },
  variableBox: {
    height: "62px",
    p: "12px 16px",
    backgroundColor: "#E6EAEB",
    borderRadius: "8px",
  },
  varSx: {
    color: "text.disabled",
    fontSize: "12px",
    fontWeight: 400,
  },
  cusSx: {
    color: "text.disabled",
    fontSize: "14px",
    fontWeight: 500,
  },
  chatSx: {
    height: "100%",
    m: "0px 0px 16px 16px",
    position: "relative",
  },
  topcontent: {
    backgroundColor: "#ECFCFC",
    height: "44px",
    width: "100%",
    position: "absolute",
    top: 0,
    borderTopLeftRadius: "21px",
    borderTopRightRadius: "21px",
  },
  headingItem: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    mt: 1.5,
    ml: 1,
  },
  headingSx: {
    color: "#000",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    ml: "4px",
  },
  countsx: {
    color: "#0f7fef",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 600,
  },
  messageBox: {
    height: "100%",
  },
  daySx: {
    backgroundColor: "primary.contrastText",
    p: "0px 4px",
    borderRadius: "8px",
    width: "60px",
    textAlign: "center",
    fontSize: "10px",
    fontWeight: 600,
    mt: 4,
    height: "16px",
  },
  e2eSx: {
    borderRadius: "8px",
    backgroundColor: "#FFF5BA",
    // width: '100%',
    p: 1,
    mt: 1.5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mx: {
      lg: "40px",
      md: "20px",
      xl: "40px",
    },
  },
  msgSx: {
    textAlign: "center",
    fontSize: "10px",
    fontWeight: 600,
    width: "100%",
  },
  edgeSx: {
    width: "0",
    height: "0",
    position: "absolute",
    transform: "rotateX(0deg)",
    borderLeft: "0.8rem solid transparent",
    borderRight: "1rem solid transparent",
    borderTop: "2.6rem solid #ffff",
    marginLeft: "10px",
    marginTop: "16px",
  },
  msgBox: {
    backgroundColor: "primary.contrastText",
    mt: 2,
    ml: 2,
    mr: 4,
    p: "12px",
    width: {
      xl: "auto",
      lg: "auto",
      md: "150px",
    },
    borderRadius: "12px",
    position: "relative",
    height: "auto",
    overflow: "scroll",
  },
  subscribeBtn: {
    color: "text.primary",
    height: "32px",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: 500,
    textTransform: "capitalize",
    backgroundColor: "primary.contrastText",
    boxShadow: "none",
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    mr: 4,
    width: {
      xl: "auto",
      lg: "auto",
      md: "150px",
    },
    border: 0,
    ":hover": {
      border: 0,
      backgroundColor: "primary.contrastText",
      color: "text.primary",
      boxShadow: "none",
    },
  },
  subscribeBtn1: {
    color: "custom.onSurfaceVariant",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: 400,
    textTransform: "capitalize",
    backgroundColor: "primary.contrastText",
    boxShadow: "none",
    cursor: "pointer",
    fontStyle: "italic",
    border: 0,
  },
  flashSx: {
    color: "#000",
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "22px",
  },
  customerNameSx: {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 600,
    '& p': {
      margin: '0px !important',
      padding: "0px",
    }
  },
  urlBox: {
    width: "100%",
    display: "flex",
    gap: "12px",
    backgroundColor: "custom.surface",
    padding: "16px",
    marginLeft: "16px",
    borderRadius: "8px",
    marginTop: "12px",
    alignItems: "center",
    justifyContent: 'space-between'
  },
  unSx: {
    width: "100%",
    display: "flex",
    gap: "12px",
    backgroundColor: "custom.surface",
    padding: "16px",
    borderRadius: "8px",
    marginTop: "12px",
    alignItems: "center",
    justifyContent: 'space-between'
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

  inputStyle: {
    width: "100%",
    "& .MuiInputLabel-root": {
      fontSize: "1.2rem",
      color: "#4E585E",
      mt: "0.5rem",
    },
  },

  inputSxStyle: {
    "& .MuiFilledInput-root": {
      "& .MuiFilledInput-input": {
        fontSize: "1.4rem",
      },
    },
  },
  labelStyle: {
    "& .MuiInputLabel-root": {
      fontSize: "1.2rem",
      color: "#4E585E",
      mt: "0.5rem",
    },
  },

  bgImgStyle: {
    height: "99%",
    width: "100%",
    borderRadius: "21px",
    position: "relative",
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
  imageBoxPreview: {
    marginTop: '24px',
    display: 'flex',
    height: '201px',
    padding: '0px 99px 0px 98px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
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
  btnBox: {
    display: "grid",
    gap: 1,
    p: "10px 0px 0px 16px",
    width: "100%",
  },
  chatBoxSx: {
    height: {
      sm: '200px',
      md: '200px',
      lg: '282px',
      xl: '360px',
    },
    overflow: 'scroll', position: 'relative'
  }
};
