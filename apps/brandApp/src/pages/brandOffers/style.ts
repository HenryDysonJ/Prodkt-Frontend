import type { SxProps } from "@mui/material";

interface offerListStyleProp {
  [key: string]: SxProps;
}

export const offerListStyle: offerListStyleProp = {
  rootSx: {},
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
    lineHeight: "2.0rem",
    padding: "1rem 1.6rem",
    textTransform: "none",
    borderRadius: "0.8rem",
    backgroundColor: "#0E70EB",
    ":hover": { backgroundColor: "#0E70EB" },
  },

  emptyContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "2rem",
    height: "60vh",
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
  paginationBoxStyle: {
    "& .MuiSelect-icon": {
      top: "0.3rem",
      right: "0rem",
    },
  },
  isActive: {
    backgroundColor: "#CBF2E0",
    padding: "0.4rem 0.6rem",
    borderRadius: "0.4rem",
    fontSize: "1.4rem",
    fontWeight: 400,
    width: "fit-content !important",
    color: "#008545",
  },
  isInActive: {
    backgroundColor: "#FFDAD3",
    padding: "0.4rem 0.6rem",
    borderRadius: "0.4rem",
    fontSize: "1.4rem",
    fontWeight: 400,
    width: "fit-content !important",
    color: "#3D0600",
  },
  isSchedule: {
    backgroundColor: "#FFDDB8",
    padding: "0.4rem 0.6rem",
    borderRadius: "0.4rem",
    fontSize: "1.4rem",
    fontWeight: 400,
    width: "fit-content !important",
    color: "#D17800",
  },
  popoverStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "1.6rem",
    borderRadius: "0.8rem",
    width: "15.6rem",
    backgroundColor: "#ffff",
    gap: "1.2rem",
    boxShadow: "0px 1px 4px 0px #00000040",
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
  inActiveTextStyle: {
    cursor: "pointer",
    color: "#F44F5A",
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
    "& .MuiDialogActions-root": {
      padding: "1.6rem",
      boxShadow: "0rem -0.2rem 1.6rem 0rem rgba(0, 0, 0, 0.08)",
    },
  },
  dialogmodalFilterMarkSx: {
    "& .MuiPaper-root": {
      borderRadius: "0.8rem",
      // minHeight: "calc(100% - 24rem)",
      minWidth: "68rem",
      '& .MuiTypography-root-MuiDialogTitle-root': {
        display: 'none'
      }
    },
    "& .MuiDialogActions-root": {
      padding: "1.6rem",
      boxShadow: "0rem -0.2rem 1.6rem 0rem rgba(0, 0, 0, 0.08)",
    },

  },
  dialogBodyStyle: {
    p: "1.6rem",
    '& .MuiTypography-root-MuiDialogTitle-root': {
      display: 'none'
    }
  },
  textStyleSelect: {
    fontSize: "1.4rem",
    fontWeight: 500,
    color: "custom.onSurface",
    marginInline: "0.4rem",
  },
  buttonContainerStyle: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    columnGap: "1.6rem",
  },
  addNewButtonStyle: {
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "2rem",
    padding: "1rem 1.6rem",
    textTransform: "none",
    borderRadius: "0.8rem",
    backgroundColor: "custom.surfaceBlue",
    ":hover": { backgroundColor: "custom.surfaceBlue" },
  },
  divider: {
    height: "3.2rem",
    marginInlineStart: "1.6rem",
    marginInlineEnd: "1.6rem",
  },
  buttonItemContainer: {
    'display': 'flex',
    'cursor': 'pointer',
    'padding': '0rem',
    'borderRadius': '0.8rem',
    'justifyContent': 'center',
    'alignItems': 'center',
    'backgroundColor': 'primary.contrastText',
    ':hover': {
      borderColor: 'custom.outline',
      'backgroundColor': 'primary.contrastText',
    },
    'mr': -1.3,
  },
  statusText: {
    fontSize: "1.4rem",
    fontWeight: 400,
    color: "#4E585E",
  },
  paginationCountTextStyle: {
    color: "custom.onSurfaceVariant",
    fontSize: "1.2rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.6rem",
  },
  badgeSx: {
    '& .MuiBadge-badge': {
      height: '0.6rem',
      minWidth: '0.6rem',
      left: '2.4rem',
      position: 'absolute',
      top: '1rem',
      width: '0.6rem',
    },
  },
  childGrid: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  centerItem: {
    height: '60vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productInfo: {
    fontSize: '1.6rem',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '2rem',
    color: 'text.primary',
    mt: 3
  },
};
