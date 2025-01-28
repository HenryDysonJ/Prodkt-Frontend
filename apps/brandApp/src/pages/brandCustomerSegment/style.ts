import type { SxProps } from "@mui/material";

interface SegmentProp {
  [key: string]: SxProps;
}

export const segmentStyle: SegmentProp = {
  filterButton: {
    width: "4rem",
    height: "4rem",
    padding: "1.2rem",
    borderRadius: "0.8rem",
    border: "0.1rem solid #D9DBDD",
  },

  rootSx: {
    overflow: "hidden",
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

  emptyContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "2rem",
    height: "60vh",
  },
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

  addNewButonStyle: {
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "2rem",
    padding: "1rem 1.6rem",
    textTransform: "none",
    borderRadius: "0.8rem",
    backgroundColor: "primary.main",
    ":hover": { backgroundColor: "primary.main" },
  },

  popoverStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "1.6rem",
    borderRadius: '0.8rem',
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

  formInputStyle: {
    "& .MuiFilledInput-input": { fontSize: "1.4rem" },
    "& .MuiInputLabel-root": { fontSize: "1.4rem", mt: "0.4rem" },
    width: "100%",
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
    color: "text.primary",
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
    '& .MuiDialogActions-root':{
      padding:0
    }
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

  footerContainer: {
    display: "flex",
    width: "100%",
    padding: "1.6rem",
    borderRadius: "0px 0px 8px 8px",
    background: "var(--Neutral-Surface-Bright, #FFF)",
    boxShadow: "0px -2px 16px 0px rgba(0, 0, 0, 0.08)",
  },
};
