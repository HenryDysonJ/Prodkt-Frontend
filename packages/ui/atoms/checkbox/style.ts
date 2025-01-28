import type { SxProps } from '@mui/material';

interface CheckBoxStyleProps {
  [key: string]: SxProps;
}

export const checkBoxStyle: CheckBoxStyleProps = {
  rootSx: {
    display: 'flex',
    alignItems: 'center',
  },
  checkSx: {
    p: 0,
    pr: 1,
  },
  checkBoxLabelSx: {
    fontSize: '14px',
    color: 'text.500',
  },
};
