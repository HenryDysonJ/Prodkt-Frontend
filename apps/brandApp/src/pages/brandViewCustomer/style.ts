import timelineItemClasses from "@mui/lab/TimelineItem/timelineItemClasses";
import type { SxProps } from "@mui/material";

interface viewCustomerStyleProp {
  [key: string]: SxProps;
}

export const viewCustomerStyle: viewCustomerStyleProp = {
  rootSx: {},

  rooContainerStyle: {
    margin: "1.6rem 1.6rem 0rem 1.6rem",
  },

  infoMenuCardStyle: {
    minHeight: "31.2rem",
    maxWidth: "100%",
    width: "100%",
    borderRadius: "0.8rem",
    padding: "1.6rem",
    backgroundColor: "#ffff",
  },

  infoItemStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    columnGap: "1rem",
    cursor:"pointer",
    padding:"0.6rem 1rem",
    borderRadius:".8rem"
  },

  menuItemTitle: {
    color: "#4E585E",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "2rem",
    width: "100%",
  },

  menuCountStyle: {
    width: "1.8rem",
    height: "1.8rem",
    fontSize: "1.2rem",
    bgcolor: "#FF980E",
    textAlign: "center",
  },

  summaryTitle: {
    color: "#02111A",
    fontSize: "1.6rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "2.4rem",
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

  statusContainer: {
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
    // flexWrap:"wrap",
    // justifyContent: 'flex-start',
    // columnGap: '1rem',
    // width:"100%"
  },

  summaryRootContainer: {
    height: "calc(100vh - 13rem)",
    overflow: "scroll",
    paddingBottom:"2rem"
  },

  basicInfoContainer: {
    minHeight: "19.8rem",
    borderRadius: "0.8rem",
    padding: "1.6rem",
    backgroundColor: "#ffff",
  },

  customerTitleStyle: {
    color: "#4E585E",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "2rem",
    marginBottom: "0.8rem",
  },

  customerValueStyle: {
    color: "#4E585E",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "2rem",
    width: "100%",
  },

  customerInfoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
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

  ticketsContainer: { height: "32vh", overflowY: "scroll" },

  openTicketContainerTableStyle: {
    minHeight: "27.8rem",
    borderRadius: "0.8rem",
    padding: "1.6rem",
    backgroundColor: "#ffff",
  },

  contactInfoContainer: {
    borderRadius: "0.8rem",
    padding: "1.6rem",
    backgroundColor: "#ffff",
  },

  productOwnedContainer: {
    borderRadius: "0.8rem",
    padding: "1.6rem",
    backgroundColor: "#ffff",
  },

  productImg: {
    height: "6.4rem",
    width: "6.4rem",
    borderRadius: "0.8rem",
  },

  productContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: "1.2rem",
  },

  sendlinkText: {
    color: "#0E70EB",
    textAlign: "center",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "2rem",
    cursor: "pointer",
  },

  opportunitiesContainer: {
    borderRadius: "0.8rem",
    padding: "1.6rem",
    backgroundColor: "#ffff",
  },

  activitylogStyle: {
    borderRadius: "0.8rem",
    padding: "1.6rem",
    backgroundColor: "#ffff",
  },

  filterButton: {
    height: "4rem",
    width: "4rem",
    borderRadius: "0.8rem",
    border: "0.1rem solid #D9DBDD",
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
  },

  // steper styles
  numberContiner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    position: "relative",
    // columnGap:"4rem"
  },

  listStyle: {
    display: "grid",
    placeItems: "center",
    zIndex: 1000,
    position: "relative",
  },

  lanelStyle: {
    color: "custom.onSurfaceVariant",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "2rem",
  },

  lanelSubStyle: {
    position: "absolute",
    bottom: "-1.8rem",
    color: "custom.onSurfaceVariant",
    fontSize: "1.2rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "2rem",
  },

  progressLineStyle: {
    height: "2rem",
    backgroundColor: "#F0F3F6",
    position: "absolute",
    top: "1.5rem",
    left: "8%",
    zIndex: 1,
    width: "80%",
  },

  activeProgress: {
    height: "2rem",
    backgroundColor: "success.main",
    position: "absolute",
    top: "1.5rem",
    left: "8%",
    zIndex: 1,
    width: "0%",
    transform: "translateX(-2%)",
  },

  selectinptStyle: {
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
    "& .MuiChip-label": {
      paddingLeft: "0rem",
      paddingRight: "0.8rem",
      fontSize: "1.2rem",
    },
  },

  dashboardCardStyle: {
    boxSizing: "content-box",
    minHeight: "92px",
  },

  timelineContainer: {
    mt: 2,
    maxHeight: "28rem",
    overflow: "scroll",
    ul: {
      margin: 0,
    },
  },

  timeLineStyle: {
    [`& .${timelineItemClasses.root}:before`]: {
      flex: 0,
      padding: 0,
    },
    padding: 0,
  },

  separatorStyle: {
    p: 0.5,
    border: "0.1rem solid",
    borderColor: "primary.main",
    borderRadius: "50%",
  },

  setperDotStyle: {
    margin: 0,
    backgroundColor: "primary.main",
    border: "0.1rem solid",
    borderColor: "primary.main",
  },

  selectLabelStyle: {
    ".MuiInputLabel-root": {
      fontSize: "1.4rem !important",
      "&.Mui-focused": {
        transform: "translate(1.2rem, 0.6rem) scale(1) !important",
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
      paddingBottom:'4px',
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
    '& .MuiChip-root': {
      marginTop: '6px !important',
      width:'auto'
    },
  },
  
  formInputStyle: {
    "& .MuiFilledInput-input": { fontSize: "1.4rem" },
    "& .MuiInputLabel-root": { fontSize: "1.4rem", mt: "0.4rem" },
    width: "100%",
  },

};
