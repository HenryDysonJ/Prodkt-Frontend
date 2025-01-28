import type { SxProps } from '@mui/material';

interface FilterComponentStyleProps {
  [key: string]: SxProps;
}

export const filterComponentStyle: FilterComponentStyleProps = {
  rootSx: {
    height: '100%',
  },
  buttonContainer: {
    borderTop: 1,
    borderColor: 'grey.200',
    padding: '16px 20px',
  },
  selectedText: {
    flexGrow: 1,
    fontWeight: '700',
    fontSize: '14px',
    color: 'text.400',
  },
  primaryBtn: {
    flexGrow: 1,
    padding: '15px 35px',
    borderRadius: '10px',
    fontWeight: '600',
    fontSize: '14px',
    textTransform: 'capitalize',
    boxShadow: 'none',
    color: 'background.surface.100',
    backgroundColor: 'primary.main',
    ':hover': {
      boxShadow: 'none',
    },
  },
  secondaryBtn: {
    flexGrow: 1,
    padding: '15px 35px',
    fontWeight: '600',
    fontSize: '14px',
    textTransform: 'capitalize',
    borderRadius: '10px',
    boxShadow: 'none',
    color: 'primary.main',
    backgroundColor: 'primary.100',

    ':hover': {
      boxShadow: 'none',
      backgroundColor: 'primary.100',
    },
  },
};
