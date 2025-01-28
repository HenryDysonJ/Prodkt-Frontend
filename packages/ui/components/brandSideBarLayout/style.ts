import { lightTheme } from "@core/theme";
import type { SxProps, Theme } from "@mui/material";

interface sideBarStyleProp {
  [key: string]: SxProps;
}

export const sideBarStyle: sideBarStyleProp = {
  rootSx: {
    display: "flex",
  },

  sidebarParentBox: {
    background: lightTheme.palette.common.white,
    height: "calc(100vh - 5.0rem)",
    minWidth:{
      md:"19rem",
      lg:"23rem"
    } ,
    padding: "1rem 1.4rem 1rem",
    display: "flex",
    flexDirection: "column",
    overflow: "scroll",
    borderRight:"0.1rem solid",
    borderColor:"custom.outlineVariant"
  },

  childrenLayoutStyle:{
    width: "calc(100vw - 17.4rem)", 
    backgroundColor: "custom.surface"
  },

  acordianTitleContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: "0.6rem",
    width: "100%",
    borderRadius: "0.8rem",
    padding: "0.8rem 0.8rem",
    alignItems:"center"
  },

  sideBarTitle:{
    color: "text.secondary",
    fontFamily: "Excon",
    fontSize: "1.6rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "2rem"
  },

  childItemStyle: {
    fontFamily: "Excon",
    color: "text.secondary",
    padding: "1rem 1.6rem",
    fontSize: "1.6rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "2rem",
    borderRadius: ".8rem",
    // width: "max-content",
    cursor:'pointer'
  },

  accordianContainer: {
    "& .MuiButtonBase-root": { p: 0, minHeight: 0 },
    "& .MuiAccordionSummary-content.Mui-expanded": { margin: 0 },
    "& .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded.MuiAccordionSummary-gutters":
      {
        minHeight: "4.6rem",
      },
    "&.MuiAccordion-root:before": {
      display: "none",
    },
    "&.MuiPaper-root.MuiAccordion-root.Mui-expanded": {
      margin: 0,
    },
  },
};
