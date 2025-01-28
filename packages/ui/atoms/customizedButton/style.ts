import type { SxProps } from '@mui/material';

interface CustomizedButtonStyleProps {
  [key: string]: SxProps;
}

export const customizedButtonStyle: CustomizedButtonStyleProps = {
  rootSx: {},
  headerRootSx: {
    bgcolor: 'primary.main',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    px: 2,
    py: 1,
    borderRadius: 2,
    cursor: 'pointer',
  },
  selectTextSx: {
    color: 'common.white',
    fontSize: '10px',
  },
  categoriesTextSx: {
    color: 'common.white',
    fontSize: '12px',
  },
  rootDividerTextSx: {
    display: 'flex',
    gap: 2.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dividerSx: {
    border: '1px solid',
    borderColor: 'divider.100',
    height: '24px',
  },
  proceedTextSx: {
    color: 'common.white',
    fontSize: '14px',
    cursor: 'pointer',
  },
  proccedIconRootSx: {
    display: 'flex',
    alignItems: 'center',
    gap: 1.3,
  },

  errorMessage: {
    marginLeft: '20px',
    marginRight: '20px',
    textAlign: 'center',
  },

  errorFail: {
    color: 'error.500',
  },

  errorSuccess: {
    color: 'green',
  },
};
