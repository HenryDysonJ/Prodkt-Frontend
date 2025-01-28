import type { SxProps } from "@mui/material";

interface manageCustomerProp {
  [key: string]: SxProps;
}

export const manageCustomerStyle: manageCustomerProp = {
  rootSx: {
    overflow: "hidden",
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
    lineHeight: "2.0rem",
    padding: "1rem 1.6rem",
    textTransform: "none",
    borderRadius: "0.8rem",
    backgroundColor: "#0E70EB",
    ":hover": { backgroundColor: "#0E70EB" },
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

  searchRootStyle: {
    minWidth: "25.6rem",
    "& .MuiAutocomplete-inputRoot .MuiAutocomplete-input": {
      fontSize: "1.4rem",
    },
  },

  paginationCountTextStyle: {
    color: "custom.onSurfaceVariant",
    fontSize: "1.2rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.6rrem",
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
    fontSize: "1.4rem",
    color: "custom.onSurface",
    fontWeight: "700",
    lineHeight: "2.4rem",
    fontStyle: "normal",
  },

  dialogmodalBoxSx: {
    "& .MuiPaper-root": {
      borderRadius: "0.8rem",
      minWidth: "50rem",
      height: "50rem",
    },
    "& .MuiDialogActions-root": {
      padding: 0,
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

  selectLabelStyle: {
    ".MuiInputLabel-root": {
      fontSize: "1.4rem !important",
      "&.Mui-focused": {
        transform: "translate(1.2rem, 0.8rem) scale(1) !important",
        fontSize: "1.4rem !important",
      },
    },
    "&.MuiFilledInput-root.Mui-focused": {
      fontSize: "1.4rem !important",
      color: "custom.onSurface",
      fontWeight: 500,
    },
    "& .MuiFormControl-root": {
      "& .MuiTextField-root": {
        "& .MuiInputLabel-root": {
          fontSize: "1.2rem",
        },
      },
    },
    "& .MuiFormLabel-asterisk": {
      color: "#f44f5a",
    },
  },

  filterSelectStyle: {
    "& .MuiFilledInput-root": {
      marginTop: "0rem",
      width: "100%",
      paddingTop: "2.1rem !important",
      fontSize: "1.4rem",
      fontWeight: "500",
      color: "custom.onSurface",
      "& input": {
        marginBottom: "0 !Important",
      },
      "& .MuiDivider-root": {
        margin: "-1rem 0rem 0.7rem 0rem",
      },
      "& .MuiChip-root": {
        width: "fit-content",
        fontSize: "1.2rem",
      },
    },
    "& .MuiFormHelperText-root.Mui-error": {
      marginInlineStart: "0rem",
    },
  },

  formInputStyle: {
    "& .MuiFilledInput-input": { fontSize: "1.4rem" },
    "& .MuiInputLabel-root": { fontSize: "1.4rem", mt: "0.4rem" },
    width: "100%",
  },

  downloadBtn: {
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "2.0rem",
    padding: "1rem 1.6rem",
    textTransform: "none",
    borderRadius: "0.8rem",
    color: "#0E70EB",
    backgroundColor: "#E0EAF9",
    ":hover": { backgroundColor: "#E0EAF9" },
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

  bannerProfile: {
    width: "20.3rem",
    height: "20.1rem",
    borderRadius: "0.8rem",
  },

  cardStyle: {
    padding: "1.6rem 2rem",
    "& svg": {
      verticalAlign: "bottom",
    },
  },

  placeHolderStyle: {
    color: "custom.onSurfaceVariant",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "2rem",
  },

  bottomRenderComponentStyle: {
    marginTop: "0.2rem",
    textAlign: "center",
    color: "custom.onSurfaceVariant",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "2rem",
  },

  bottomTextLabelStyle: {
    marginTop: "1.6rem",
    color: "custom.onSurfaceVariant",
    fontSize: "1.4rem",
  },

  bannerComponentContainer: {
    mt: "2.2rem",
  },
};
