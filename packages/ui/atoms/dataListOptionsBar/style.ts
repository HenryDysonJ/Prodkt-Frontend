import type { SxProps } from '@mui/material';

interface DataListOptionsBarStyleProps {
  [key: string]: SxProps;
}

export const dataListOptionsBarStyle: DataListOptionsBarStyleProps = {
  rootSx: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  },
  addItemButtonSx: {
    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "2rem",
    padding: "1rem 1.6rem",
    textTransform: "none",
    borderRadius: '0.8rem',
    boxShadow: 'none',
    height: '4rem',
    fontFamily: 'Sarabun',
    backgroundColor: "#0E70EB",
    ":hover": {
      backgroundColor: "#0E70EB",
      boxShadow: 'none',
      height: '4rem'
    },
  },
  addItemButtonOutlineSx: {

    fontSize: "1.4rem",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "2rem",
    padding: "1rem 1.6rem",
    textTransform: "none",
    borderRadius: '0.8rem',
    boxShadow: 'none',
    height: '4rem',
    fontFamily: 'Sarabun'

  },
  searchRootStyle: {
    minWidth: "25.6rem",
    "& .MuiAutocomplete-inputRoot .MuiAutocomplete-input": {
      fontSize: "1.4rem",
    },
  },
};
