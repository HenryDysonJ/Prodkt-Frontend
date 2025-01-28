import type { SxProps } from "@mui/material";

interface BroadCast {
  [key: string]: SxProps;
}

export const broadcastMsgStyle: BroadCast = {
  rootSx: {},

  createRootSx: {},

  tableCardStyle: {
    backgroundColor: "custom.surfaceBright",
    height: "calc(100vh - 14.6rem)",
    overflow: "hidden",
    margin: "1.6rem",
    padding: "1.6rem",
    borderRadius: "1.2rem",
  },

  gridContainer: {
    direction: "row",
    justifyContent: "space-between",
    alignItems: "space-between",
    height: "100%",
  },

  childGrid: {
    display: "flex",
    alignItems: "flex-end",
  },

  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  searchRootStyle: {
    minWidth: "25.6rem",
    "& .MuiAutocomplete-inputRoot .MuiAutocomplete-input": {
      fontSize: "1.4rem",
    },
  },

  addNewButonStyle: {
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "2rem",
    padding: "1rem 1.6rem",
    textTransform: "none",
    width: "max-content",
    borderRadius: "0.8rem",
    backgroundColor: "primary.main",
    ":hover": { backgroundColor: "primary.main" },
  },

  outlineButonStyle: {
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "2rem",
    padding: "1rem 1.6rem",
    textTransform: "none",
    borderRadius: "0.8rem",
    width: "max-content",
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

  emptyContainer: {
    display: "grid",
    placeItems: "center",
    minHeight: { md: "58vh" },
    height: "100%",
  },

  paginationCountTextStyle: {
    color: "custom.onSurfaceVariant",
    fontSize: "1.2rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.6rem",
  },

  paginationBoxStyle: {
    "& .MuiSelect-icon": {
      top: "0.3rem",
      right: "0rem",
    },
  },

  popoverStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "1.6rem",
    borderRadius: "0.8rem",
    backgroundColor: "custom.surfaceBright",
    gap: "1.2rem",
  },

  // crete broast styls
  formContainerStyle: {
    height: "calc(100vh - 14.6rem)",
    overflow: "hidden",
    margin: "1.6rem",
  },

  infoCntainer: {
    height: "calc(100vh - 14.6rem)",
    width: "100%",
    padding: "1.8rem",
    backgroundColor: "custom.surfaceBright",
    borderRadius: "0.8rem",
    overflow: "auto",
  },

  componentName: {
    color: "custom.onSurfaceVariant",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "2rem",
  },

  previewContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    textAlign: "center",
  },

  spaceContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "100%",
  },

  sublabelStyle: {
    color: "custom.onSurface",
    fontSize: "1.6rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "2.2rem",
  },

  sublabelStyleSx: {
    color: "text.secondary",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "2.2rem",
  },


  searchTemplateStyle: {
    "& .MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root": {
      padding: "0 0",
    },
    "& .MuiAutocomplete-root .MuiOutlinedInput-root .MuiAutocomplete-input": {
      height: "2.8rem",
      fontSize: "1.4rem",
    },
  },

  //Template style
  templateRootStyle: {
    minHeight: "30rem",
    // maxWidth:"24.6rem",
    borderRadius: "0.8rem",
    backgroundColor: "custom.surface",
  },

  templateHeadStyle: {
    padding: "1.2rem",
    borderStartStartRadius: "0.8rem",
    borderStartEndRadius: "0.8rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "primary.container",
  },

  temTitleStyle: {
    color: "text.secondary",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  },

  statusTitle: {
    padding: "0.4rem 0.6rem",
    borderRadius: "0.4rem",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "2rem",
    textAlign: "center",
    cursor: "pointer",
  },

  subscribeText: {
    color: "text.secondary",
    fontSize: "1.2rem",
    fontStyle: "italic",
    fontWeight: 400,
    lineHeight: "2rem",
    cursor: "pointer",
  },

  chatsContainer: {
    gap: 1,
    height: "21.8rem",
    overflowY: "scroll",
  },

  chartLayoutStyle: {
    height: "max-content",
    borderRadius: "1.6rem",
    padding: "1.6rem",
    position: "relative",
    backgroundColor: "custom.surfaceBright",
  },

  arrowStyle: {
    width: "0",
    height: "0",
    top: "0",
    left: "-0.4rem",
    position: "absolute",
    transform: "rotateX(0deg)",
    borderLeft: "0.8rem solid transparent",
    borderRight: "1rem solid transparent",
    borderTop: "2.6rem solid #ffff",
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
      '& .MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
        color: '#4E585E'
      }
    },
    // 'mt': 2,
    '& .MuiAutocomplete-root .MuiFilledInput-root .MuiFilledInput-input': {
      fontSize: '1.4rem',
      color: 'text.primary',
      fontWeight: 500,
    },
    '& .MuiChip-root': {
      marginTop: '10px !important',
      width: 'auto'
    },
    '& .MuiFormHelperText-root.Mui-error': {
      marginInlineStart: '0px',
      fontSize: '1.0rem'
    },
  },

  chipStyles: {
    backgroundColor: "custom.surface",
    border: "1px solid",
    borderColor: "primary.main",
    borderRadius: "1.6rem",
    "&.MuiButtonBase-root, .MuiChip-root": {
      padding: "0.4rem 1rem",
      borderRadius: "20px",
    },
    'svg': {
      display: 'none'
    }
  },
  dialogBodyStyle: {
    p: "2.2rem",
  },
  dialogmodal: {
    "& .MuiPaper-root": {
      borderRadius: "0.8rem",
      width: "100%",
    },
  },

  addNewModalTitleStyle: {
    fontSize: "1.6rem",
    color: "custom.onSurface",
    fontWeight: 600,
    lineHeight: "2.2rem",
    fontStyle: "Sarabun",
  },
  centerItem: {
    height: '55vh',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },

  dateCalenderStyle: {
    '.react-datepicker__day--disabled': {
      color: '#ccc !important',
    },
    '.react-datepicker__day': {
      padding: '10px 10.5px !important'
    },
    ".react-datepicker__day-names": {
      gap: '6px',
      display: 'flex',
      justifyContent: 'center',
    }
  },

  cancelButtonStyle: {
    'backgroundColor': 'custom.surfaceBright',
    'borderRadius': '8px',
    'minWidth': '80px',
    fontSize: '14px',
    textTransform: 'capitalize',
    'borderColor': 'custom.primary',
    ':hover': { backgroundColor: 'custom.surfaceBright', borderColor: 'custom.primary' },
  },
  doneButtonStyle: {
    'boxShadow': 'none',
    'backgroundColor': 'custom.primary',
    'borderRadius': '8px',
    'minWidth': '80px',
    fontSize: '14px',
    textTransform: 'capitalize',
    ':hover': { backgroundColor: 'primary.main', boxShadow: 'none' },
  },
  datePopoverStyle: {
    marginTop: '10px',
    borderRadius: ' 8px',
    minWidth: '314px',
    overflow: 'hidden',
    boxShadow: '0px -2px 32px 12px rgba(0, 0, 0, 0.08)',
    backgroundColor: '#f0f0f0',
  },
  inputSx: {
    marginTop: 2,
    '& .MuiTypography-root': {
      fontSize: '1rem'
    },
    '& .MuiFormHelperText-root': {
      fontSize: '1rem',
      color: 'red',
    },
  },
  dateInputStyle: {
    '& .MuiTypography-root': {
      fontSize: '1rem'
    }
  },
  productInfo: {
    fontSize: '1.6rem',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '2rem',
    color: 'text.primary',
    mt: 3
  },
  subscribeBtn: {
    color: "text.primary",
    height: "34px",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: 500,
    textTransform: "capitalize",
    backgroundColor: "primary.contrastText",
    boxShadow: "none",
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    padding: "16px 16px",
    width: '100%',
    border: 0,
    ":hover": {
      border: 0,
      backgroundColor: "primary.contrastText",
      color: "text.primary",
      boxShadow: "none",
    },
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
};
