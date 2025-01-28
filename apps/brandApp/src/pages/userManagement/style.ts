import type { SxProps } from "@mui/material";

interface userMagementStypeProp {
  [key: string]: SxProps;
}

export const userManagementStyle: userMagementStypeProp = {
  rootSx: {},

  rolesCardStyle: {
    backgroundColor: "custom.surfaceBright",
    height: "calc(100vh - 20rem)",
    overflow: "hidden",
    margin: "1.6rem",
    padding: "1.6rem",
    borderRadius: "1.2rem",
    display: "flex",
    justifyContent: "space-between",
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

  dialogmodalpermissionBoxSx: {
    "& .MuiPaper-root": {
      borderRadius: "0.8rem",
      minWidth: "50rem",
      minHeight: "41.8rem",
    },
    "& .MuiDialogActions-root": {
      padding: 0,
    },
  },

  dialogmodalBoxSx: {
    "& .MuiPaper-root": {
      borderRadius: "0.8rem",
      minWidth: "50rem",
      minHeight: "50rem",
    },
    "& .MuiDialogActions-root": {
      padding: 0,
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

  footerContainer: {
    display: "flex",
    width: "100%",
    padding: "1.6rem",
    borderRadius: "0px 0px 8px 8px",
    background: "var(--Neutral-Surface-Bright, #FFF)",
    boxShadow: "0px -2px 16px 0px rgba(0, 0, 0, 0.08)",
  },

  gridContainer: {
    direction: "row",
    justifyContent: "space-between",
    alignItems: "space-between",
    height: "100%",
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

  outlineButonStyle: {
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "2rem",
    padding: "1rem 1.6rem",
    textTransform: "none",
    borderRadius: "0.8rem",
    backgroundColor: "custom.surfaceBright",
    ":hover": { backgroundColor: "custom.surfaceBright" },
  },

  searchRootStyle: {
    minWidth: "25.6rem",
    "& .MuiAutocomplete-inputRoot .MuiAutocomplete-input": {
      fontSize: "1.4rem",
    },
  },

  formInputStyle: {
    "& .MuiFilledInput-input": { fontSize: "1.4rem" },
    "& .MuiInputLabel-root": { fontSize: "1.4rem", mt: "0.4rem" },
    width: "100%",
    "& .Mui-error": {
      fontSize: "1.2rem",
    },
    '& .MuiFormHelperText-root.Mui-error': {
      marginInlineStart: '0px',
      fontSize: '1.2rem'
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
      fontWeight: 500
    },
    '& .MuiFormHelperText-root.Mui-error': {
      marginInlineStart: '0px',
      fontSize: '1.0rem'
    },
  },

  titleStyle: {
    color: "#02111A !important",
    fontFamily: "Sarabun",
    fontSize: "1.6rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "2.2rem",
  },

  roleStyle: {
    borderRadius: "0.4rem",
    background: "#E6EAEC",
    padding: "0.4rem 0.6rem",
    color: "#06283D",
    textAlign: "center",
    fontFamily: "Sarabun",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "2rem",
    width: "fit-content",
  },

  repTitle: {
    color: "#02111A",
    fontFamily: "Sarabun",
    fontSize: "1.6rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "2.2rem",
  },

  repTitlecontainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: '1.6rem 2.4rem',
    borderBottom: "1px solid #D9DBDD",

  },

  infoCntainer: {
    height: "calc(100vh - 20rem)",
    width: "100%",
    backgroundColor: "custom.surfaceBright",
    borderRadius: "0.8rem",
    overflow: "auto",
  },

  listContainerStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: 'pointer'
  },

  subcontainer: {
    // height: "calc(100vh - 20rem)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: "0.8rem"
  },

  listDotStye: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
  },
  paginationBoxStyle: {
    '& .MuiSelect-icon': {
      top: '0.2rem',
      right: '-0.2rem',
    },
  },
  productInfo: {
    fontSize: '1.6rem',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '2rem',
    color: 'text.primary',
    mt: 3
  },
  centerItem: {
    height: '50vh',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
};
