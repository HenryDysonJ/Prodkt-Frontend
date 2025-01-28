import type { SxProps } from '@mui/material';

interface ExtendedWarrantyCardStyleProps {
  [key: string]: SxProps;
}

export const extendedWarrantyCardStyle: ExtendedWarrantyCardStyleProps = {
  rootSx: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'background.surface.100',
    padding: '12px',
    borderRadius: '8px',
  },

  headerSx: {
    marginBottom: '12px',
  },

  brandSectionSx: {
    display: 'flex',
    gap: '8px',
  },

  imageSx: {
    width: '40px',
    height: '40px',
    '& img': {
      width: '100%',
      height: '100%',
    },
  },

  titleSx: {
    fontSize: '14px',
    color: 'text.A100',
    fontWeight: 700,
  },

  subTitleSx: {
    fontSize: '12px',
    color: 'text.500',
  },

  iconSx: {
    '& svg': {
      width: '24px',
      height: '24px',
    },
    cursor: 'pointer',
  },
};
