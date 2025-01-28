import type { SxProps } from '@mui/material';

interface SearchBoxStyleProps {
  [key: string]: SxProps;
}

export const searchBoxStyle: SearchBoxStyleProps = {
  rootSx: {
    position: 'relative',
    borderRadius: '0px',
    marginLeft: 0,
    display: 'inline-flex',
    width: '100%',
    '& .Mui-focused': {
      borderColor: 'grey.200',
    },
  },
  searchFieldSx: {
    '&.MuiFormControl-root': {
      backgroundColor: 'transparent',
    },
    '& .MuiOutlinedInput-root': {
      display: 'flex',
      alignItems: 'center',
      pr: 1.5,
      pt: '10px',
      pb: '8px',
      backgroundColor: 'tranparent',
      color: '#025140',
      '& fieldset': {
        borderRadius: '8px',
        border: '1.5px solid',
        borderColor: 'grey.200',
      },
      '&:hover fieldset': {
        borderColor: 'grey.200',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'grey.200',
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: '0px 4px 4px 0px',
      fontSize: '14px',
      color: 'text.A100',
    },
    '& .MuiInputAdornment-root': {
      // padding: '0px',
      p: 0,
      mr: 0,
      // paddingLeft: '4px',
    },
    // Refer -use for no border & change border-color
    // '& .MuiOutlinedInput-notchedOutline': {
    //   border: 'none',
    // },
  },
  searchInputSx: {
    // padding: '12px',
  },
};
