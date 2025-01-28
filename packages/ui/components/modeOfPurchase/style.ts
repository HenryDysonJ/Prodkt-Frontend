import type { SxProps } from '@mui/material';

interface ModeOfPurchaseStyleProps {
  [key: string]: SxProps;
}

export const modeOfPurchaseStyle: ModeOfPurchaseStyleProps = {
  rootSx: {},
  mainBoxSx: {
    background: 'background.surface.100',
    border: '1px solid',
    borderColor: 'grey.200',
    borderRadius: '8px',
    opacity: 1,
  },
  headBoxSx: {
    px: 2.2,
    py: 1.7,

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headTitleSx: {
    color: 'text.500',
    fontWeight: 'medium',
    whiteSpace: 'nowrap',
    fontSize: '14px',
    gap: 0.5,
  },
  flexBoxSx: {
    display: 'flex',
    gap: 1.7,
    alignItems: 'center',
  },
  checkBoxSx: {
    fontSize: '12px',
  },
  locationBoxSx: {
    px: 2.4,
    pt: 2.4,
    pb: 1.2,
    borderTop: '1px solid #DFDFDF',
  },
  inputStyle: {
    '& .MuiOutlinedInput-root': {
      pr: 2,
    },
  },
};
