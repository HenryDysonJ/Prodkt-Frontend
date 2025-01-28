import type { SxProps } from '@mui/material';

interface SecurityDocumentsStyleProps {
  [key: string]: SxProps;
}

export const securityDocumentsStyle: SecurityDocumentsStyleProps = {
  rootSx: {},
  buttonStyleSx: {
    px: 1.5,
    py: 1.5,
  },
  questionCardSubSx: {
    pt: 1.5,
  },
  headerSx: {
    px: 2.5,
    pt: 2.5,
    pb: 2.5,
  },
  footerSx: {
    px: 2.5,
    pb: 2.5,
  },
};
