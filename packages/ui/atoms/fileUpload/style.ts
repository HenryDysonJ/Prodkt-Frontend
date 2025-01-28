import type { SxProps } from "@mui/material";

interface FileUploadStyleProps {
  [key: string]: SxProps;
}

export const fileUploadStyle: FileUploadStyleProps = {
  rootSx: {
    border: "2px dashed #E5E8EB",
    borderRadius: "8px",
    p: 5,
  },

  isplaceHolderSx: {
    textAlign: "center",
    color: "#4E585E",
    fontSize: "16px",
    fontWeight: 500,
    mt: "16px",
    fontFamily: 'Sarabun'
  },

  isplaceHolderOrSx: {
    textAlign: "center",
    color: "#677075",
    fontSize: "14px",
    fontWeight: 600,
    mt: "16px",
    margin: "auto",
    width: "100px",
    padding: "14px 0px 16px",
  },

  uploadButtonStyle: {
    display: "flex",
    margin: "0px auto",
    cursor: "pointer",
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "2.0rem",
    padding: "1rem 1.6rem",
    textTransform: "none",
    borderRadius: "0.8rem",
    backgroundColor: "#0E70EB",
    fontFamily: 'Sarabun',
    ":hover": { backgroundColor: "#0E70EB" },
  },

  fileContainerStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    border: "1px solid #E5E8EB",
    borderRadius: "8px",
  },

  filesContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: "16px",
    alignItems: "center",
  },

  fileNameStyle: {
    color: "#02111A",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "20px",
  },
};
