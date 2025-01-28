import type { SxProps } from '@mui/material';

interface WarrantyCoverageStyleProps {
  [key: string]: SxProps;
}

export const warrantyCoverageStyle: WarrantyCoverageStyleProps = {
  rootSx: {},
  mainBoxSx: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  dividerSx: {
    marginRight: '12px',
    marginLeft: '12px',
    height: '26px',
    color: '#DFDFDF',
  },
  inputFieldSx: {
    '& .MuiInputBase-root input': {
      padding: '11px 0px',
    },
    '& .MuiOutlinedInput-root': {
      height: '46px',
    },
  },
};
