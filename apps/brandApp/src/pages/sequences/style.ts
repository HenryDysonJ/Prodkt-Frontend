import type { SxProps } from "@mui/material";

interface SequencesProps {
  [key: string]: SxProps;
}

export const sequencestyle: SequencesProps = {
  rootSx: {
    overflow: "hidden",
  },

  rootCreateCntainer: {
    height: "calc(100vh - 13rem)",
    overflow: "scroll",
  },

  titleStyle: {
    color: "custom.onSurface",
    fontSize: "1.6rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "2.2rem",
  },

  subTitle: {
    color: "text.secondary",
    fontFamily: "Sarabun",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "2rem",
  },

  createSequenceCardStyle: {
    backgroundColor: "#ffff",
    margin: "1.6rem 11.6rem 0rem",
    padding: "2.4rem",
    borderRadius: "1.2rem",
  },

  formlayout: {
    maxWidth: "100%",
    padding: "1.6rem",
    borderRadius: "0.8rem",
    backgroundColor: "custom.surface",
  },

  filterButton: {
    width: "4rem",
    height: "4rem",
    padding: "1.2rem",
    borderRadius: "0.8rem",
    border: "0.1rem solid #D9DBDD",
  },

  emptyContainer: {
    display: "grid",
    placeItems: "center",
    minHeight: { md: "58vh", lg: '74vh' },
    height: "100%",
  },

  tableCardStyle: {
    backgroundColor: "#ffff",
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

  addNewButonStyle: {
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "2rem",
    padding: "1rem 1.6rem",
    textTransform: "none",
    borderRadius: "0.8rem",
    backgroundColor: "#0E70EB",
    ":hover": { backgroundColor: "#0E70EB" },
  },

  outlneButonStyle: {
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "2rem",
    padding: "1rem 1.6rem",
    textTransform: "none",
    borderRadius: "0.8rem",
    width: 'max-content'
  },
  popoverStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "1.6rem",
    borderRadius: "0.8rem",
    backgroundColor: "#ffff",
    gap: "1.2rem",
  },

  tagStyle: {
    color: "#06283D",
    textAlign: "center",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "2rem",
    padding: "0.4rem 0.6rem",
    backgroundColor: "#E6EAEC",
    borderRadius: "0.4rem",
    cursor: "pointer",
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

  viewTextStyle: {
    cursor: "pointer",
    color: "#02111A",
    fontFamily: "Sarabun",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "2rem",
  },

  addNewModalTitleStyle: {
    fontSize: "1.6rem",
    color: "custom.onSurface",
    fontWeight: "700",
    lineHeight: "2.4rem",
    fontStyle: "normal",
  },

  dialogmodalBoxSx: {
    "& .MuiPaper-root": {
      borderRadius: "0.8rem",
      minWidth: "50rem",
      minHeight: "37rem",
    },
  },

  dialogBodySx: {
    overflow: "auto",
    "::-webkit-scrollbar": {
      width: "0.4rem",
      height: "0.4rem",
    },
    "::-webkit-scrollbar-thumb": {
      background: "transparent !important",
      borderRadius: "2.4rem",
      transition: "all 0.5s",
      cursor: "pointer",
    },
  },

  searchRootStyle: {
    minWidth: "25.6rem",
    "& .MuiAutocomplete-inputRoot .MuiAutocomplete-input": {
      fontSize: "1.4rem",
    },
  },

  footerButton: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  addNewConditionStyle: {
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "2rem",
    padding: "1rem 1.6rem",
    textTransform: "none",
    borderRadius: "0.8rem",
  },

  labelStyle: {
    color: "text.primary",
    fontFamily: "Sarabun",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "2rem",
  },

  selectLabelStyle: {
    color: "custom.onSurfaceVariant",
    fontSize: "1.2rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.6rem",
  },

  selectNormInptStyle: {
    "& .MuiFilledInput-root .MuiFilledInput-input": {
      fontSize: "1.4rem",
      color: "custom.onSurface",
      fontWeight: 500,
    },
    "& .MuiInputLabel-root": { mt: -0.5 },
    "& .MuiTextField-root .MuiFormLabel-root": {
      fontSize: "1.8rem",
      span: {
        color: "custom.surfaceError",
      },
    },
    '& .MuiAutocomplete-root .MuiFilledInput-root .MuiFilledInput-input': {
      fontSize: '1.4rem',
      color: 'text.primary',
      fontWeight: 500,
      height: '24px !important',

    },
  },

  selectinptStyle: {
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
    'mt': 2,
    '& .MuiAutocomplete-root .MuiFilledInput-root .MuiFilledInput-input': {
      fontSize: '1.4rem',
      color: 'text.primary',
      fontWeight: 500,
      height: '24px !important',
    },
    '& .MuiFilledInput-root .MuiFilledInput-input': {
      marginBottom: '6px !important'
    },
    '& .MuiFormHelperText-root.Mui-error': {
      marginInlineStart: '0px',
      fontSize: '1.0rem'
    },
    '& .MuiChip-root': {
      marginTop: '10px !important'
    },
  },
  textFeildStyle: {
    "& .MuiInputBase-root.MuiFilledInput-root.Mui-error": {
      "&.MuiInputLabel-root": {
        color: "error.main",
      },
      borderColor: "error.main",
    },
    width: "100%",
  },

  itemContiner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: "5rem",
  },

  centerAlign: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  addStepStyle: {
    textAlign: "center",
    fontFamily: "Sarabun",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "2rem",
    textTransform: "none",
    backgroundColor: "#0E70EB",
    ":hover": { backgroundColor: "#0E70EB" },
  },

  addTemppStyle: {
    textAlign: "center",
    fontFamily: "Sarabun",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "2rem",
    textTransform: "none",
    borderRadius: ".8rem",
    maxWidth: "12.6rem",
    mt: "1rem",

  },

  dividerStepStyle: {
    color: "#D17800",
    textAlign: "center",
    fontFamily: "Sarabun",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "2rem",
    textTransform: "none",
    backgroundColor: "#FFDDB8",
    ":hover": { backgroundColor: "#FFDDB8" },
  },

  footerContainer: {
    display: "flex",
    columnGap: "1.6rem",
    width: "100%",
    padding: "1.6rem",
    borderRadius: "0px 0px 8px 8px",
    background: "var(--Neutral-Surface-Bright, #FFF)",
    boxShadow: "0px -2px 16px 0px rgba(0, 0, 0, 0.08)",
  },

  teplateDialogmodalBoxSx: {
    "& .MuiPaper-root": {
      borderRadius: "0.8rem",
      minWidth: "90rem",
      minHeight: "56.4rem",
    },
    "& .MuiDialogActions-root": {
      padding: 0,
    },
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
  centerItem: {
    height: '58vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productInfo: {
    fontSize: '1.4rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '2rem',
    color: 'text.secondary',
    mt: 2
  },
  pageSx: {
    height: '100%',
    alignItems: "flex-end",
    display: "grid"
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
