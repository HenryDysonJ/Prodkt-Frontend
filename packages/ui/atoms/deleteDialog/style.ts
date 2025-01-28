


export const DeleteDialogStyle = {
    mismatchDialog: {},

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
        height: '4rem'
    },

    warnigIconStle: {
        height: "5.6rem",
        width: "5.6rem",
        borderRadius: "5rem",
        backgroundColor: "error.container",
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
        fontFamily: 'Sarabun'
    },

    stockInKeyText: {
        color: "custom.onSurfaceVariant",
        fontSize: "1.4rem",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "2rem",
        marginBottom: "0.8rem",
        width: '21.2rem',
        fontFamily: 'Sarabun'
    },

    selectStyle: {
        "& .MuiInputLabel-root": {
            fontSize: "1.8rem",
            mt: "-0.4rem",
        },
        width: "100%",
    },


}