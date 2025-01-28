import type { SxProps } from '@mui/material';

interface FixedFooterComponentStyleProps {
  [key: string]: SxProps;
}

export const fixedFooterComponentStyle: FixedFooterComponentStyleProps = {
  rootSx: {
    backgroundColor: 'text.700',
    padding: '16px 20px',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
  },

  titleSectionSx: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
  },

  titleSx: {
    fontSize: '18px',
    color: 'common.white',
    fontWeight: 700,
    paddingBottom: '9px',
  },

  subTitleSx: {
    fontSize: '12px',
    color: 'common.white',
    fontWeight: 500,
  },

  buttonSx: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    height: '51px',
    '& button': {
      textTransform: 'capitalize',
      borderRadius: '6px',
      color: 'primary.main',
      backgroundColor: 'common.white',
      boxShadow: 'none',
      fontWeight: 600,
      '&:hover': {
        color: 'primary.main',
        backgroundColor: 'common.white',
        boxShadow: 'none',
      },
    },
  },
};
