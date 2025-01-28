

export const whatsappConfigStyle = {
    gridSx: {
        // display: 'inline-flex',
        padding: '23px 23px 24px 23px',
        // flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '16px',
        flexShrink: 0,
        backgroundColor: "primary.contrastText",
        mt: 2,
        borderRadius: '8px'
    },
    titleSx: {
        fontSize: "1.6rem",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "2rem",
        color: "text.primary",
    },
    iconTitle: {
        fontSize: "1.4rem",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "2rem",
        color: "text.primary",
    },
    subtitle: {
        color: 'text.secondary',
        fontFamily: 'Sarabun',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '20px'
    },
    orSx: {
        color: 'text.disabled',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '20px'
    },
    subhead: {
        color: '#6A7175',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '20px',
        fontFamily: 'Sarabun',
    },
    subhead1: {
        color: 'custom.onSurfaceVariant',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '20px',
        fontFamily: 'Sarabun',

    },
    linkSx: {
        color: 'primary.main',
        fontFamily: 'Sarabun',
        fontSize: 14,
        fontStyle: 'italic',
        fontWeight: 400,
        lineHeight: '20px',
        textDecoration: 'underline',
        mt: 1,
        cursor: 'pointer'
    },
    createBox: {
        borderRadius: '8px',
        backgroundColor: "custom.surface",
        mt: 2,
        p: 2,
        width: '100%'
    },
    contentBox: {
        ml: '26px',
        mt: 1,
        display: 'flex',
        justifyContent: 'space-between'

    },
    profileSx: {
        display: 'flex',
        alignItems: 'center'
    },
    createBtnSx: {
        textTransform: "capitalize",
        backgroundColor: "primary.main",
        borderRadius: "0.8rem",
        boxShadow: "none",
        height: "4rem",
        fontWeight: 500,
        fontSize: "1.4rem",
        ":hover": {
            boxShadow: "none",
            backgroundColor: "primary.main",
        },
    },
    dividerSx: {
        width: '40px',
        color: 'custom.outlineVariant',
        mx: '10px'
    },
    dialogBodyStyle: {
        p: "0rem 2rem 0rem 2rem",
    },
    dialogmodal: {
        "& .MuiPaper-root": {
            borderRadius: "0.8rem",
            width: "100rem",
            height: '40rem',
            '& .MuiDialogTitle-root': {
                justifyContent: 'flex-end'
            }
        },
        "& .MuiDialogActions-root": {
            padding: "1.6rem",
        },
    },
    videoSx: {
        backgroundColor: '#000',
    }
}