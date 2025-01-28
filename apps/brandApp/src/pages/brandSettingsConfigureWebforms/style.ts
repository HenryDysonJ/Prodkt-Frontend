import type { SxProps } from "@mui/material";

interface ConfigureWebformsProp {
  [key: string]: SxProps;
}

export const configureWebformStyle: ConfigureWebformsProp = {
  rootSx: {},
  tableCardStyle: {
    backgroundColor: "custom.surfaceBright",
    height: "calc(100vh - 15rem)",
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

  emptyIconCenter: {
    display: "grid",
    placeItems: "center",
    height: "100%",
  },

  searchRootStyle: {
    minWidth: "25.6rem",
    "& .MuiAutocomplete-inputRoot .MuiAutocomplete-input": {
      fontSize: "1.4rem",
    },
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
    fontWeight: 600,
    lineHeight: "2rem",
    padding: "1rem 1.6rem",
    textTransform: "none",
    borderRadius: "0.8rem",
    backgroundColor: "primary.main",
    ":hover": { backgroundColor: "primary.main" },
  },

  filterButton: {
    width: "4rem",
    height: "4rem",
    padding: "1.2rem",
    borderRadius: "0.8rem",
    border: "0.1rem solid",
    borderColor: "custom.outline",
    cursor: "pointer",
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

  tagStyle: {
    color: "secondary.main",
    textAlign: "center",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "2rem",
    padding: "0.4rem 0.6rem",
    backgroundColor: "secondary.container",
    borderRadius: "0.4rem",
    cursor: "pointer",
  },

  paginationCountTextStyle: {
    color: "custom.onSurfaceVariant",
    fontSize: "1.2rem",
    fontStyle: "normal",
    fontWeight: 400,
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
    color: "custom.onSurface",
    fontFamily: "Sarabun",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "2rem",
  },

  addNewModalTitleStyle: {
    fontSize: "1.6rem",
    color: "custom.onSurface",
    fontWeight: 700,
    lineHeight: "2.4rem",
    fontStyle: "normal",
  },

  dialogmodalFilterBoxSx: {
    "& .MuiPaper-root": {
      borderRadius: "0.8rem",
      minHeight: "calc(100% - 24rem)",
      minWidth: "53rem",
    },
  },

  dialogmodalBoxSx: {
    "& .MuiPaper-root": {
      borderRadius: "0.8rem",
      minHeight: "50rem",
      minWidth: "60rem",
    },
  },

  dialogBodySx: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "2rem",
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
  inputStyle: {
    height: "6rem !important",
    padding: "1.1rem 1.6rem",
    border: "0.1rem solid !important",
    borderColor: "custom.outline",
  },

  selectLabelStyle: {
    color: "text.secondary",
    fontSize: "2.2rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.6rem",
  },

  selectRootStyle: {
    "& .MuiFilledInput-root .MuiFilledInput-input": {
      fontSize: "1.4rem",
      color: "custom.onSurface",
      fontWeight: 500,
    },
  },

  mobLableStyle: {
    "& span": {
      color: "custom.surfaceError",
    },
    fontColor: "red !important",
    fontSize: "1.4rem",
  },

  dateCalenderStyle: {
    ".react-datepicker__day--disabled": {
      color: "#ccc !important",
    },
  },
  cancelButtonStyle: {
    backgroundColor: "custom.surfaceBright",
    borderRadius: "0.8rem",
    minWidth: "8rem",
    borderColor: "custom.primary",
    ":hover": {
      backgroundColor: "custom.surfaceBright",
      borderColor: "custom.primary",
    },
  },

  doneButtonStyle: {
    boxShadow: "none",
    backgroundColor: "custom.primary",
    borderRadius: "0.8rem",
    minWidth: "8rem",
    ":hover": { backgroundColor: "custom.primary", boxShadow: "none" },
  },
  bannerProfile: {
    width: "20.3rem",
    height: "20.1rem",
    borderRadius: "0.8rem",
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
    padding: "1.6rem 2rem",
    "& svg": {
      verticalAlign: "bottom",
    },
  },

  placeHolderStyle: {
    color: "text.secondary",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "2rem",
  },

  bottomRenderComponentStyle: {
    marginTop: "0.2rem",
    textAlign: "center",
    color: "text.secondary",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "2rem",
  },

  bottomTextLabelStyle: {
    marginTop: "1.6rem",
    color: "text.secondary",
    fontSize: "1.4rem",
  },

  buttonContainerStyle: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    columnGap: "1.6rem",
  },

  emptyTextStyle: {
    marginTop: "0.2rem",
    textAlign: "center",
    color: "custom.onSurface",
    fontSize: "1.6rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "2rem",
  },

  alertTextStyle: {
    marginTop: "0.2rem",
    textAlign: "center",
    color: "#4E585E",
    fontSize: "1.6rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "2rem",
  },

  emptyContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "2rem",
    height: "60vh",
  },

  textStyleSelet: {
    fontSize: "1.4rem",
    fontWeight: 500,
    color: "custom.onSurface",
    marginInline: "0.4rem",
  },

  containerStyle:{
    backgroundColor: "#ffff",
    margin: "1.6rem 11.6rem 0rem",
    padding: "2.4rem",
    borderRadius: "1.2rem",
    maxHeight: "calc(100vh - 14rem)",
    overflow:"auto"
  },

  titleStyle: {
    color: "text.primary",
    fontSize: "1.6rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "2.2rem",
  },

  mismatchDialog: {
    "& .MuiPaper-root": {
      borderRadius: "0.8rem",
      minHeight: "27.2rem",
      minWidth: "42.9rem",
    },
  },

  mismatchDialogBodySx: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '#modal-modal-title':{
      display:"none"
    }
  },

  missMatchButtonStyle: {
    width: '13.3rem',
    padding: '1rem 1.6rem',
    borderRadius: '0.8rem',
    textTransform: 'none',
    fontSize: '8.75px',
  },

  stockModalImgStyle: {
    display: 'flex',
    justifyContent: 'ceter',
    alignItems: 'center',
    height: '4.8rem',
    width: '4.8rem',
    padding: ' 0.4rem 0.5rem 0.5rem 0.4rem',
    borderRadius: '0.4rem',
    border: '0.1rem solid',
    borderColor: 'custom.surfaceDisable',
  },

  mismatchBodyContainer: {
    p: '2.4rem 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  warnigIconStle: {
    height: '5.6rem',
    width: '5.6rem',
    borderRadius: '5rem',
    backgroundColor: '#FFDDB8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

};
