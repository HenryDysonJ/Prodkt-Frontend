import type { SxProps } from '@mui/material';

interface QuestionCardStyleProps {
  [key: string]: SxProps;
}

export const questionCardStyle: QuestionCardStyleProps = {
  rootSx: {
    width: '100%'
  },
  mainBoxSx: {
    border: '1px solid',
    borderColor: 'grey.200',
    borderRadius: '8px',
    px: '12px',
    py: 2,
    backgroundColor: 'background.surface.C800',
  },
  subBoxSx: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexBoxSx: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },
  flexCheckBoxSx: {
    display: 'flex',
    alignContent: 'center',
    gap: 1.3,
  },
  titleSx: {
    color: 'text.A100',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  requiredSX: {
    display: 'flex',
    gap: 0.4,
  },
  requiredText: {
    marginLeft: '4px',
    color: 'error.900',
  },
  expandedBox: {
    border: '1px dashed',
    borderColor: 'grey.200',
    borderRadius: '8px',
    display: 'flex',
    gap: 3,
    justifyContent: 'flex-start',
    paddingLeft: '12px',
    // px: 1.2,
    // py: 1.2,
    height: '42px',
    alignItems: 'center',
    marginTop: '10px',
  },
};
