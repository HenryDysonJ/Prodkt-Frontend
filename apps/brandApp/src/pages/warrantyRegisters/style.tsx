import type { SxProps } from "@mui/material";

interface SegmentProp {
  [key: string]: SxProps;
}

export const segmentStyle: SegmentProp = {
  filterButton: {
    width: "4rem",
    height: "4rem",
    padding: "1.2rem",
    borderRadius: '0.8rem',
    border: "0.1rem solid #D9DBDD",
  },

  rootSx: {
    overflow: "hidden",
  },

  emptyContainer: {
    display: "grid",
    placeItems: "center",
    minHeight: { md: "58vh" },
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
    borderRadius: '0.8rem',
    backgroundColor: "#0E70EB",
    ":hover": { backgroundColor: "#0E70EB" },
  },

  popoverStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "1.6rem",
    borderRadius: '0.8rem',
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
      borderRadius: '0.8rem',
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
};
