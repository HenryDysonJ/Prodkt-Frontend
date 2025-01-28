import type { SxProps } from '@mui/material';

interface FindYourProductStyleProps {
  [key: string]: SxProps;
}

export const findYourProductStyle: FindYourProductStyleProps = {
  rootSx: {},
  borderRootx: {
    border: '1px dashed',
    borderColor: 'primary.main',
    p: 1.5,
    borderRadius: '8px',
  },
  findyourProductTextSx: {
    fontSize: '14px',
    color: 'text.400',
    textAlign: 'center',
  },
  clickhereTextSx: {
    pt: 0.6,
    fontSize: '12px',
    color: 'primary.main',
    textDecoration: 'underline',
    textAlign: 'center',
    fontWeight: 600,
    cursor: 'pointer',
  },
};
