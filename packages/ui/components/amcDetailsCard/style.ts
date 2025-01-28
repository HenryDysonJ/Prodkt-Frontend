import type { SxProps } from '@mui/material';

interface WarrantyDetailsCardStyleProps {
  [key: string]: SxProps;
}

export const warrantyDetailsCardStyle: WarrantyDetailsCardStyleProps = {
  rootSx: {
    backgroundColor: 'common.white',
    borderRadius: '10px',
  },
  detailsContainer: {
    px: 2,
    pb: 2,
    width: '100%',
  },
  qnsContainer: {
    pt: 1,
    px: 2,
    // pb: 2,
    width: '100%',
  },
  qns: {
    color: 'text.900',
    fontWeight: '500',
    fontSize: '12px',
  },
  title: {
    color: 'text.900',
    fontWeight: '700',
    fontSize: '14px',
    marginBottom: '11px',
    pt: 2,
  },
  label: {
    color: 'grey.900',
    fontWeight: '500',
    fontSize: '10px',
    marginBottom: '3px',
    marginTop: '2px',
  },
  value: {
    color: 'text.700',
    fontWeight: '600',
    fontSize: '12px',
    marginBottom: '10px',
  },
  subText: {
    color: 'text.500',
    fontWeight: '500',
    fontSize: '12px',
  },
  uploadContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: '20px',
  },
  uploadDes: {
    color: 'grey.900',
    fontWeight: '700',
    fontSize: '12px',
    textAlign: 'center',
    marginBottom: '11px',
  },
  addBtn: {
    textTransform: 'capitalize',
    width: '200px',
    '&:hover': {
      background: 'none',
    },
  },
  orDivider: {
    margin: '12px auto 8px auto',
    width: '70%',
    '::before, ::after': { borderTop: '1px solid', borderColor: 'grey.A300' },
  },
  boxSx: {
    border: '1px solid',
    borderStyle: 'dashed',
    borderColor: 'primary.main',
    borderRadius: '8px',
    backgroundColor: 'primary.800',
    display: 'flex',
    justifyContent: 'space-between',
    px: 2,
    py: 2,
  },
  uploadDocumentNameSx: {
    fontSize: '14px',
    fontWeight: 500,
    width: '300px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  updateButtonSx: {
    boxShadow: 'none',
    borderRadius: '10px',
    textTransform: 'capitalize',
    height: '48px',
    '&:hover': {
      boxShadow: 'none',
    },
  },
};
