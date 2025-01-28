import IntroBanner from '@core/ui/assets/introBanner';
import type { SxProps } from '@mui/material';

interface karmaCalculator {
    [key: string]: SxProps;
}

export const karmaCalculatorStyles: karmaCalculator = {
    rootSx: {
        bgcolor: 'primary.900',
        height: '100vh',
        maxWidth: { sm: 425 },
        mx: { sm: 'auto' },
        position: "relative"
    },

    climateRoot: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        columnGap: "4px",
        position: "absolute",
        top: "18px",
        left: "35%",
        zIndex: 10
    },

    climateText: {
        fontSize: '16px',
        fontWeight: "900",
        lineHeight: '24px',
        color: 'text.900',
        fontFamily: 'excon, medium',
    },

    pageCenter: {
        display: 'grid',
        minHeight: '100vh',
        placeItems: 'center',
        alignContent: 'center',
        padding: '10px 24px'
    },

    cardBox: {
        backgroundColor: 'common.white',
        minHeight: 400,
        width: '100%',
        borderRadius: '12px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "24px 16px",
        background: `url(${IntroBanner})`
    },

    introText: {
        fontSize: '20px',
        fontWeight: "700",
        lineHeight: '28px',
        color: 'primary.main',
        textAlign: "center",
        fontFamily: 'excon, medium',
    },

    primaryBtnSx: {
        fontSize: '12px',
        fontWeight: "500",
        lineHeight: '16px',
        color: 'text.A800',
        textAlign: "left",
        padding: '14px 12px',
        fontFamily: 'excon, medium',
        backgroundColor: "primary.main",
        textTransform: "none",
        borderRadius: '6px',
        boxShadow: "none",
        width: "100%",
        ':hover': {
            backgroundColor: "primary.main",
            color: 'text.A800',
            boxShadow: "none",
        }
    },

    secondaryBtnSx: {
        fontSize: '12px',
        fontWeight: "500",
        lineHeight: '16px',
        color: 'primary.main',
        textAlign: "left",
        padding: '14px 12px',
        fontFamily: 'excon, medium',
        backgroundColor: "primary.100",
        textTransform: "none",
        borderRadius: '6px',
        boxShadow: "none",
        width: "100%",
        ':hover': {
            backgroundColor: "primary.100",
            color: 'primary.main',
            boxShadow: "none",
        }
    },

    successBtnSx: {
        fontSize: '12px',
        fontWeight: "500",
        lineHeight: '16px',
        color: 'text.A800',
        textAlign: "left",
        padding: '8px 14px',
        fontFamily: 'excon, medium',
        backgroundColor: "success.800",
        textTransform: "none",
        borderRadius: '6px',
        boxShadow: "none",
        ':hover': {
            backgroundColor: "success.800",
            color: 'text.A800',
            boxShadow: "none",
        }
    },

    avgBtn: {
        fontSize: '12px',
        fontWeight: "500",
        lineHeight: '16px',
        color: 'error.100',
        textAlign: "left",
        padding: '14px 12px',
        fontFamily: 'excon, medium',
        backgroundColor: "error.200",
        textTransform: "none",
        borderRadius: '6px',
        boxShadow: "none",
        ':hover': {
            backgroundColor: "error.200",
            boxShadow: "none",
            color: 'error.100',
        }
    },

    iconBox: {
        height: '62px',
        width: '62px',
        borderRadius: '8px',
        padding: '6px'
    },

    title: {
        fontSize: '14px',
        fontWeight: "800",
        lineHeight: '24px',
        color: 'text.900',
    },

    subTitle: {
        fontSize: '12px',
        fontWeight: "500",
        lineHeight: '18px',
        color: 'text.500',
    },

    backgroundRoot: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '44%',
        zIndex: 1,
    },

    contentRoot: {
        position: 'absolute',
        bottom: '0px',
        zIndex: 10,
        width: '100%',
        height: "60%",
        backgroundColor: "common.white",
        borderTopLeftRadius: '26px',
        borderTopRightRadius: '26px',
    },

    circleProgressRoot: {
        backgroundColor: "#ffff",
        padding: "12px",
        borderRadius: "50px",
        position: "absolute",
        top: "-40px",
        left: "40%"
    },

    labelContainer: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
    },

    labelBox: {
        position: 'relative',
        display: 'inline-flex',
    },

    thumbStyle: {
        color: '#665CD7',
        position: 'relative',
        zIndex: 2,
        borderRadius: '50%',
    },

    thumbightColor: {
        borderRadius: '3px',
        color: '#E3E1F6',
        position: 'absolute',
        zIndex: 1,
        right: 0,
    },

    labelStyle: {
        fontSize: '14px',
        color: 'secondary.A600',
        lineHeight: '16px',
        fontWeight: "700"
    },

    childrenRoot: {
        height: "100%",
        padding: '44px 20px 20px 20px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },

    centerSx: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%"
    },

    animationText: {
        fontSize: '14px',
        fontWeight: "700",
        lineHeight: '24px',
        color: 'text.900',
        textAlign: "center",
        fontFamily: 'excon, medium',
    },

    questionsSx: {
        fontSize: '14px',
        fontWeight: "700",
        lineHeight: '24px',
        color: 'text.900',
        fontFamily: 'excon, medium',
    },

    answerSx: {
        fontSize: '14px',
        fontWeight: "500",
        lineHeight: '24px',
        color: 'text.900',
        textAlign: "center"
    },

    cardItems: {
        minHeight: '120px',
        minWidth: '120px',
        borderRadius: '8px',
        border: "1px solid",
        borderColor:"common.white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
    },

    listRootSx: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "24px"
    },

    listLabelItem: {
        minHeight: '84px',
        minWidth: '90px',
        borderRadius: '8px',
        border: "1px solid",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
    },

    listLabelRootSx: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "12px"
    },

    progresStart: {
        height: "20px",
        width: "5px",
        backgroundColor: 'primary.main',
        borderRadius: "24px",
        mt: '4px',
        position: "absolute",
        zIndex: 1
    },

    sliderRoot: {
        position: "relative",
        width: '100%'
    },

    sliderValueSx: {
        padding: '6px 8px',
        backgroundColor: "secondary.A700",
        color: 'secondary.main',
        borderRadius: '6px',
        fontSize: "14px",
        fontWeight: "600"
    },

    sliderStyle: {
        padding: "12px 0px",
        '& .MuiSlider-markLabel': {
            fontSize: '14px',
            fontWeight: "700",
            lineHeight: '24px',
            color: 'text.900',
            fontFamily: 'excon, medium',
        }
    },

    statusBox: {
        height: "100%",
        border: '1px solid',
        borderRadius: "8px",
        minHeight: '270px',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },

    reminderText: {
        fontSize: '14px',
        fontWeight: "500",
        lineHeight: '24px',
        color: 'primary.main',
        textAlign: "center",
        cursor: "pointer"
    },

    marks: {
        height: "12px",
        width: "12px",
        borderRadius: "4px"
    },

    animationRoot: {
        height: '100vh',
        maxWidth: { sm: 425 },
        mx: { sm: 'auto' },
        position: "relative",
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
        background: 'linear-gradient(to bottom, #c7ebf9, #caecfa, #cdeefc, #cfeffd, #d2f1fe, #d8f2fe, #def4ff, #e3f5ff, #ecf7ff, #f5f9ff, #fbfcff, #ffffff)'
    },

    textBoxAnimation: {
        position: "absolute",
        top: "25%"
    },

    formContainer: {
        display: 'grid',
        minHeight: '100vh',
        placeItems: 'center',
        alignContent: 'center',
        padding: "0 24px",
        width: "100%",
        position: "absolute",
        zIndex: 10
    },

    successRoot: {
        height: '100vh',
        maxWidth: { sm: 425 },
        mx: { sm: 'auto' },
        position: "relative",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
        bgcolor: "primary.900",
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat"
    },


};
