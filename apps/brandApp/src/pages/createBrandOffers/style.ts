export const createOfferStyle = {
  rootStyle: {},
  boxSx: {
    padding: "2rem 10rem",
    height: "calc(100vh - 13.6rem)",
  },
  baseInfo: {
    background: "#FFFFFF",
    width: "100%",
    padding: "2.3rem",
    marginBottom: "2rem",
    borderRadius: "0.8rem",
  },
  infoText: {
    color: "#02111A",
    fontSize: "1.6rem",
    fontWeight: 600,
  },
  inputLabel: {
    width: "100%",
    "& .MuiInputLabel-root": {
      fontSize: "1.2rem",
      color: "#4E585E",
      mt: "0.5rem",
    },
  },
  inputRoot: {
    "& .MuiFilledInput-root": {
      "& .MuiFilledInput-input": {
        fontSize: "1.4rem",
      },
    },
    mt: 2,
    width: "100%",
  },
  inputLabelRoot: {
    "& .MuiInputLabel-root": {
      fontSize: "1.2rem",
      color: "#4E585E",
      mt: "0.5rem",
    },
  },
  inputSx: {
    "& .MuiFilledInput-root": {
      "& .MuiFilledInput-input": {
        fontSize: "1.4rem",
      },
    },
    mt: 2,
  },
  offerTypeRoot: {
    padding: "2.3rem",
    backgroundColor: "#FFFFFF",
    borderRadius: "0.8rem",
    marginBottom: "2rem",
  },
  offerText: {
    color: "#02111A",
    fontSize: "1.6rem",
    fontWeight: 600,
  },
  ifText: {
    color: "#4E585E",
    fontWeight: 500,
    fontSize: "14px",
    minWidth: "17.6rem",
  },
  selectLabelStyle: {
    '&.Mui-error': {
      fontSize: '1.2rem',
    },
    '& .MuiInputLabel-root': {
      'fontSize': '1.6rem !important',
      'color': 'text.secondary',
      '& .MuiFormLabel-asterisk': {
        color: 'red',
      },
    },
    '& .MuiFormControl-root': {
      '& .MuiTextField-root': {
        '& .MuiInputLabel-root': {
          fontSize: '1.4rem',
          color: '#000000',
        },
      },
      '& .MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{
        color:'#4E585E'
      }
    },
    // 'mt': 2,
    '& .MuiAutocomplete-root .MuiFilledInput-root .MuiFilledInput-input': {
      fontSize: '1.4rem',
      color: 'text.primary',
      fontWeight: 500
    },
    '& .MuiFormHelperText-root.Mui-error': {
      marginInlineStart: '0px',
      fontSize: '1.0rem'
    },
  },
};
