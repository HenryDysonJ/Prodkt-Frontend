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

    // rootSx: {
    //   overflow: "hidden",
    // },

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
    addItemButtonSx: {
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
    removeSx: { color: '#0E70EB', fontSize: '1.4rem', cursor: 'pointer', fontWeight: 500, fontFamily: 'Sarabun' },
    rootSx: {
        height: "calc(100vh - 147px)",
        m: 2,
        borderRadius: 1.5,
        backgroundColor: "#fff",
        p: 2,
    },
    mainBox: {
        //   margin: '24px',
        //   p: '16px',
        backgroundColor: "primary.contrastText",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "calc(100vh - 178px) !important",
        overflow: "auto",
    },
    divider: {
        height: "32px",
        marginInlineStart: "16px",
        marginInlineEnd: "16px",
    },
    gridbutton: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    addNewButton: {
        borderRadius: "8px",
        backgroundColor: "#0E70EB",
        height: "40px",
        boxShadow: "none",
        "&:hover": {
            backgroundColor: "#0E70EB",
            boxShadow: "none",
        },
        textTransform: "capitalize",
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "20px",
        ml: 2,
    },
    uploadBtn: {
        borderRadius: "8px",
        backgroundColor: "custom.main",
        height: "40px",
        boxShadow: "none",
        color: "#0E70EB",
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "20px",
        "&:hover": {
            backgroundColor: "custom.main",
            boxShadow: "none",
        },
        textTransform: "capitalize",
        border: "1px solid #0E70EB",
    },
    filterIcon: {
        height: "40px",
        width: "40px",
        display: "grid",
        placeItems: "center",
        borderRadius: "8px",
        cursor: "pointer",
        marginInlineStart: "16px",
    },
    dialogmodal1: {
        "& .MuiPaper-root": {
            borderRadius: "8px",
            width: "100%",
            height: '40rem'
        },
        "& .MuiDialogActions-root": {
            padding: "16px",
        },
    },
    dialogmodal2: {
        "& .MuiPaper-root": {
            borderRadius: "8px",
            width: "100%",
            height: '40rem'
        },
        "& .MuiDialogActions-root": {
            padding: "16px",
            boxShadow: "0px -2px 16px 0px rgba(0, 0, 0, 0.08)",
        },
    },
    dialogmodal: {
        "& .MuiPaper-root": {
            borderRadius: "8px",
            width: "100%",
            height: '50rem'
        },
        "& .MuiDialogActions-root": {
            padding: "16px",
            boxShadow: "0px -2px 16px 0px rgba(0, 0, 0, 0.08)",
        },
    },
    titleStyleDialog: {
        fontSize: "16px",
        fontWeight: 600,
        color: "custom.onSurface",
        fontFamily: 'Sarabun'
    },
    dialogBodyStyle1: {
        p: "16px",
        display: 'grid',
        justifyContent: 'center', alignItems: 'center'
    },
    dialogBodyStyle: {
        p: "16px",
    },
    resetButtonSx: {
        width: "100%",
        borderRadius: "8px",
        borderColor: "#1363DF",
        color: "#1363DF",
        textTransform: "capitalize",
        boxShadow: "none",
        height: "40px",
        fontWeight: 500,
        fontSize: "14px",
        ":hover": {
            boxShadow: "none",
            bgcolor: "#fff",
            color: "#1363DF",
            borderColor: "#1363DF",
        },
    },
    applyFilterButtonSx: {
        width: "100%",
        textTransform: "capitalize",
        bgcolor: "#1363DF",
        borderRadius: "8px",
        boxShadow: "none",
        height: "40px",
        fontWeight: 500,
        fontSize: "14px",
        ":hover": {
            boxShadow: "none",
            bgcolor: "#1363DF",
        },
    },
    datePopoverStyle: {
        marginTop: "10px",
        borderRadius: " 8px",
        border: "1px solid",
        borderColor: "custom.outlineVariant",
        minWidth: "314px",
        overflow: "hidden",
    },

    selectChipHeaderTextSx: {
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "20px",
        color: "custom.onSurfaceVariant",
    },
    selectLabelStyle: {
        "&.Mui-error": {
            fontSize: "12px",
        },
        " .MuiInputLabel-root": {
            fontSize: "18px !important",
            color: "#4E585E",
            "& .MuiFormLabel-asterisk": {
                color: "red",
            },
        },
        "& .MuiFormControl-root": {
            "& .MuiTextField-root": {
                "& .MuiInputLabel-root": {
                    fontSize: "22px",
                    color: "#000000",
                },
            },
        },
    },
    buttonItemContainer: {
        'display': 'flex',
        'cursor': 'pointer',
        'padding': '0px',
        'borderRadius': '8px',
        'justifyContent': 'center',
        'alignItems': 'center',
        'backgroundColor': '#fff',
        ':hover': {
            borderColor: 'custom.outline',
            backgroundColor: '#fff',
        },
        'mr': -1.3,
    },
    badgeSx: {
        '& .MuiBadge-badge': {
            height: '6px',
            minWidth: '6px',
            left: '24px',
            position: 'absolute',
            top: '10px',
            width: '6px',
        },
    },

    //   paginationBoxStyle: {
    //     '& .MuiSelect-icon': {
    //       top: '-3px',
    //       right: '-3px',
    //     },
    //   },
    //   popoverStyle: {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'flex-start',
    //     padding: '16px',
    //     borderRadius: '8px',
    //     backgroundColor: '#ffff',
    //     gap: '12px',
    //   },
    otpSx: {
        cursor: 'pointer',
        color: '#02111A',
        fontFamily: 'Excon',
        fontSize: '1.8rem',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '20px',
    },
    subText: {
        px: '60px',
        cursor: 'pointer',
        color: '#4E585E',
        fontFamily: 'Sarabun',
        fontSize: '1.6rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '20px',
        mt: 2
    },
    otpBtnSx: {
        '& input': {
            '&:focus-visible': {
                outline: '0px !important',
            },
            '&:focus': {
                backgroundColor: '#FFFFFF !important',
                borderColor: '#DFDFDF !important',
                color: 'black !important',
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',

            border: '1px solid !important',
            borderColor: '#DFDFDF !important',
            borderRadius: '8px',
            height: '60px !important',
            width: '60px !important',
            fontSize: '16px',
            color: 'black !important',
            fontWeight: '600',
            backgroundColor: '#fff !important',
        },
        '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
            appearance: 'none',
            margin: 0,
          },
    },
};
