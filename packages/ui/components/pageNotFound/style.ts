import type { SxProps } from '@mui/material';

interface PageNotFoundStyleProps {
  [key: string]: SxProps;
}

export const pageNotFoundStyle: PageNotFoundStyleProps = {
  rootSx: {},
  headerTextSx: {
    fontWeight: 600,
    fontSize: '20px',
    color: 'text.A100',
  },
};
