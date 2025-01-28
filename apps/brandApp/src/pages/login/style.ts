import type { SxProps } from "@mui/material";

import loginBanerimg from "../../assets/brand-login-banner.svg";
// import TailorCustomerImg from '@assets/tailar-img.svg';

interface BrandLoginStyleprop {
  [key: string]: SxProps;
}

export const brandLoginStyles: BrandLoginStyleprop = {
  rootSx: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: "100vh",
  },

  carosalContainer: {
    "& .carousel .control-dots .dot": {
      boxShadow: "none",
    },
    mt: {
      md: "0%",
      xl: "6%",
    },
    padding: {
      md: "0rem 2rem",
    },
  },

  logoContainer: {
    width: "100%",
    backgroundColor: "custom.surfaceBlue",
    backgroundImage: `url("${loginBanerimg}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    height: "100vh",
  },

  logoChild: {
    padding: {
      lg: "3rem 12rem",
      md: "2.2rem 5.4rem",
    },
  },

  formContainer: {
    width: "80%",
    height: "100%",
    backgroundColor: "custom.surfaceBright",
  },

  formChild: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: "100%",
    padding: {
      md: "8.4rem 8rem 2rem 8rem",
      lg: "14rem 10rem 0rem 10rem",
      xl: "15rem 10rem 0.5rem 10rem",
    },
  },

  formInputStyle: {
    "& .MuiFilledInput-input": { fontSize: "1.4rem" },
    "& .MuiInputLabel-root": { fontSize: "1.4rem", mt: "0.4rem" },
    width: "100%",
  },

  formHeaderStyle: {
    color: "custom.onSurface",
    textAlign: "center",
    fontFamily: "Excon",
    fontSize: "1.8rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "2.4rem",
  },

  formSubTittleStyle: {
    color: "custom.onSurfaceVariant",
    fontFamily: "Sarabun",
    fontSize: "1.6rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "2rem",
    maxWidth: "38rem",
  },

  loginButtonStyle: {
    fontSize: "1.6rem",
    fontStyle: "normal",
    fontFamily: "Sarabun",
    fontWeight: 600,
    lineHeight: "2rem",
    borderRadius: "0.8rem",
    padding: "1.2rem 1.6rem",
    textTransform: "none",
    backgroundColor: "custom.surfaceLightBlue",
    ":hover": {
      borderColor: "custom.surfaceLightBlue",
      backgroundColor: "custom.surfaceLightBlue",
    },
  },

  forgotRootStyle: {
    width: "100%",
    textAlign: "center",
    mt: { md: "8rem", lg: "10rem" },
  },

  forgotTextStyle: {
    fontFamily: "Sarabun",
    color: "primary.main",
    fontSize: "1.6rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "2rem",
    textAlign: "center",
    cursor: "pointer",
    mb: { md: "2rem", lg: "4rem" },
    m: 0,
  },

  tailorCardImg: {},

  imgIconStyle: {
    height: "34rem",
    width: "47rem",
  },

  titleContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    mt: {
      sm: "",
      md: "3rem",
      lg: "2rem",
      xl: "5rem",
    },
  },

  carosalTitle: {
    fontFamily: "Excon",
    color: "primary.contrastText",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "2.4rem",
    maxWidth: {
      md: "38rem",
      lg: "max-content",
    },
  },

  carosalSubTitle: {
    fontFamily: "Sarabun",
    color: "primary.contrastText",
    fontSize: "2rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "2rem",
    textAlign: "center",
    maxWidth: {
      md: "38rem",
      lg: "50rem",
    },
    marginBottom: {
      sm: "",
      md: "5rem",
      lg: "4rem",
    },
  },

  successRootStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },

  successTextCntainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  successMessageTitle: {
    color: "text.B700",
    textAlign: "center",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "2.4rem",
  },

  successMessageSubTitle: {
    color: "text.C100",
    textAlign: "center",
    fontSize: "1.6rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "2rem",
    maxWidth: "34rem",
  },
};
