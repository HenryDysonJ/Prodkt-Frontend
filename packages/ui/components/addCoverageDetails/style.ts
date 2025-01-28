import type { SxProps } from '@mui/material';

interface AddCoverageDetailsStyleProps {
  [key: string]: SxProps;
}

export const addCoverageDetailsStyle: AddCoverageDetailsStyleProps = {
  rootSx: {
    // px: 2,
    // bgcolor: 'common.white',
    backgroundColor: 'transparent',
    position: 'relative'
  },
  questionCardSubSx: {
    pt: 1.5,
    mb:'6px'
  },
  questionCardSx: {
    pt: 1.5,
    pb: 2
  },
  dividerFileSx: {
    border: '0.5px solid',
    borderColor: 'divider.100',
  },
  subRootSx: {
    bgcolor: 'common.white',
    backgroundColor: 'background.surface.C800',
    maxWidth: '420px',
    pb: 2,
    borderTopLeftRadius: '24px',
    borderTopRightRadius: '24px'
  },
  stackBoxSx: {
    backgroundColor: 'background.surface.200',
    border: '1px solid',
    borderColor: 'primary.A400',
    borderRadius: '8px',
  },
  dividerSx: {
    // background: 'primary.100',
    borderColor: 'grey.A100',
  },
  textSx: {
    fontSize: '12px',
    fontWeight: 500,
    color: 'text.500',
    width: '250px'
  },
};

