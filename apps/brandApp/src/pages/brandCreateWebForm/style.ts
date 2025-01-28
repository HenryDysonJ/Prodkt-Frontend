import type { SxProps } from "@mui/material";

interface WebFormProp {
  [key: string]: SxProps;
}

export const webFormStyle: WebFormProp = {
  rootSx: {},

  formContainerStyle: {
    height: "calc(100vh - 146px)",
    overflow: "hidden",
    margin: "16px",
  },

  infoCntainer: {
    height: "calc(100vh - 146px)",
    width: "100%",
    padding: "16px",
    backgroundColor: "custom.surfaceBright",
    borderRadius: "8px",
    overflow: "auto",
  },

  titleStyle: {
    color: "custom.onSurface",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "22px",
  },

  selectLabelStyle: {
    color: "custom.onSurfaceVariant",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "16px",
    '& span': {
      color: '#F44F5A',
    },
  },

  componetContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: "10px",
  },

  previewContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    textAlign: "center",
  },

  components: {
    width: "120px",
    height: "80px",
    borderRadius: "8px",
    border: "1px solid #D9DBDD",
    background: "custom.surfaceBright",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    cursor: "pointer",
    backgroundColor:"#ffff"
  },

  componentName: {
    color: "custom.onSurfaceVariant",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
  },

  customerPreview: {
    color: "custom.surfaceOrange",
    backgroundColor: "custom.surfaceText",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
    padding: "16px",
    width: "100%",
  },

  bannerProfile: {
    width: "203px",
    height: "201px",
    borderRadius: "8px",
  },

  uploadButtonStyle: {
    color: "primary.main",
    cursor: "pointer",
    backgroundColor: "primary.container",
    border: "none",
    ":hover": {
      backgroundColor: "primary.container",
      border: "none",
    },
  },

  cardStyle: {
    padding: "16px 20px",
    "& svg": {
      verticalAlign: "bottom",
    },
  },

  placeHolderStyle: {
    color: "custom.onSurfaceVariant",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
  },

  bottomRenderComponentStyle: {
    marginTop: "2px",
    textAlign: "center",
    color: "custom.onSurfaceVariant",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
  },

  bottomTextLabelStyle: {
    color: "custom.onSurfaceVariant",
    fontSize: "14px",
  },

  bannerComponentContainer: {
    mt: "22px",
  },

  spaceContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "100%",
  },

  addNewButonStyle: {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "20px",
    padding: "10px 16px",
    textTransform: "none",
    borderRadius: "8px",
    // backgroundColor: "custom.surfaceBlue",
    // ":hover": { backgroundColor: "custom.surfaceBlue" },
  },

  listStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: "100%",
    borderRadius: "8px",
    padding: "4px 16px",
    backgroundColor: "custom.surfaceDisable",
  },

  datePopoverStyle: {
    marginTop: '1rem',
    borderRadius: ' 0.8rem',
    border: '0.1rem solid',
    borderColor: 'custom.outline',
    minWidth: '31.4rem',
    overflow: 'hidden',
  },

  cancelButtonStyle: {
    backgroundColor: "custom.surfaceBright",
    borderRadius: "8px",
    minWidth: "80px",
    padding:"10px 16px",
    fontSize:"14px",
    borderColor: "primary.main",
    ":hover": {
      backgroundColor: "custom.surfaceBright",
      borderColor: "custom.primary",
    },
  },

  doneButtonStyle: {
    boxShadow: "none",
    backgroundColor: "custom.primary",
    borderRadius: "8px",
    padding:"10px 16px",
    fontSize:"14px",
    minWidth: "80px",
    ":hover": { backgroundColor: "custom.primary", boxShadow: "none" },
  },

  mismatchDialog: {},

  mismatchDialogBodySx: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiPaper-root": {
      borderRadius: "8px",
      maxWidth: "310px",
      maxHeight: "270px",
    },
    "& .MuiDialogTitle-root": {
      display: "none",
    },
    "& .MuiDialogContent-root": {
      padding: "0px 24px",
    },
  },

  mismatchBodyContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mt: "24px",
  },

  missMatchButtonStyle: {
    width: "133px",
    padding: "10px 16px",
    borderRadius: "8px",
    textTransform: "none",
    fontSize: "14px",
  },

  warnigIconStle: {
    height: "56px",
    width: "56px",
    borderRadius: "50px",
    backgroundColor: "warning.container",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  breakdownTitle: {
    color: "custom.onSurface",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "22px",
    marginTop: "14px",
  },

  stockInKeyText: {
    color: "custom.onSurfaceVariant",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "20px",
    marginBottom: "8px",
  },

  selectStyle: {
    "& .MuiInputLabel-root": {
      fontSize: "18px",
      mt: "-4px",
    },
    width: "100%",
  },

  selectinptStyle: {
    "& .MuiFilledInput-root .MuiFilledInput-input": {
      fontSize: "14px",
      color: "custom.onSurface",
      fontWeight: 500,
    },
    "& .MuiInputLabel-root": { mt: -0.5 },
    "& .MuiTextField-root .MuiFormLabel-root": {
      fontSize: "18px",
      span: {
        color: "custom.surfaceError",
      },
    },
  },

  textFeildStyle: {
    "& .MuiFormLabel-root.MuiInputLabel-root":{
      top:'4px'
    },
    "& .MuiInputBase-root.MuiFilledInput-root": {
      fontSize: "14px",
    },
    "& .MuiInputBase-root.MuiFilledInput-root.Mui-error": {
      "&.MuiInputLabel-root": {
        color: "error.main",
      },
      borderColor: "error.main",
    },
    width: "100%",
  },

  addNewContainer: {
    cursor: "pointer",
    mt: 2,
    display: "flex",
    flexDirection: "row",
    columnGap: "10px",
    alignItems: "center",
  },

  mobLableStyle: {
    '& span': {
      color: '#F44F5A',
    },
    'fontSize': '1.4rem',
  },

  
  inputStyle: {
    height: '6rem !important',
    padding: '1.1rem 1.6rem',
    border: '0.1rem solid #D9DBDD !important',
    '&:focus': {
      border: '0.2rem solid',
      borderColor: '#D9DBDD',
    },
    '&:hover ': {
      border: '0.1rem solid',
      borderColor: '#D9DBDD',
    },
    "& .MuiFormLabel-root.MuiInputLabel-root":{
      fontSize:"1.4rem"
    },
  },

  dateCalenderStyle: {
    '.react-datepicker__day--disabled': {
        color: '#ccc !important',
    },
    '.react-datepicker__day': {
        padding: '1rem 1.05rem !important'
    },
    ".react-datepicker__day-names": {
        gap: '0.6rem',
        display: 'flex',
        justifyContent: 'center',
    }
},
};
