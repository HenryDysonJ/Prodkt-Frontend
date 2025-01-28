import type { SxProps } from "@mui/material";

interface ComponenetProp {
  [key: string]: SxProps;
}

export const componentStyle: ComponenetProp = {
  componentsContainer: {
    width: "100%",
    padding: "1.6rem",
    backgroundColor: "#ffff",
    borderRadius: "1.2rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: "1.6rem",
  },

  titleBoxContainerStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
  },

  titleBoxStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    columnGap: "0.8rem",
  },

  shopSelectStyle: {
    "& .MuiOutlinedInput-root": {
      border: "none",
      width: "17rem",
      color: "custom.onSurface",
      fontSize: "1.6rem",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "2.2rem",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "&.MuiAutocomplete-root .MuiAutocomplete-inputRoot": {
      paddingRight: "1.2rem !important",
      "& .MuiAutocomplete-input": {
        minWidth: "auto",
      },
    },
  },

  labelStyle: {
    color: "#02111A",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "2rem",
  },

  formCondentContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "0.1rem solid #E5E8EB",
    maxHeight: "5rem",
    paddingBottom: "1.6rem",
  },
};
