import type { SxProps } from '@mui/material';

interface AddedProductCardStyleProps {
  [key: string]: SxProps;
}

export const addedProductCardStyle: AddedProductCardStyleProps = {
  rootSx: {
    mb: 1.5,
  },
  skeltonMainBoxSx: {
    bgcolor: 'background.surface.200',
    borderRadius: '8px',
    // border: '1px solid',
    // borderColor: 'primary.100',
    padding: 1,
  },
  skeltonRoot: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    padding: 0,
  },
  skeltonText: {
    backgroundColor: 'primary.200',
  },
  stackBoxSx: {
    backgroundColor: 'background.surface.A800',
    border: '1px solid',
    borderColor: 'primary.A900',
    borderRadius: '8px',
  },
  dividerSx: {
    background: 'primary.100',
    borderColor: 'divider.200',
  },
  StackFlex: {
    width: '100%',
    cursor: 'pointer',
    padding: '12px 16px 14px 12px',
  },
  productName: {
    color: 'text.A100',
    fontSize: '12px',
  },
  productSpecSx: {
    color: 'text.500',
    fontSize: '12px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width: '200px',
    textOverflow: 'ellipsis',
  },
  changeTextSx: {
    color: 'primary.main',
    fontSize: '12px',
  },
};
