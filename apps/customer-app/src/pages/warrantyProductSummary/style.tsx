import type { SxProps } from '@mui/material';

interface UserDetailsProps {
  [key: string]: SxProps;
}

export const warrantyProductSummaryStyle: UserDetailsProps = {
  rootSx: {
    backgroundColor: 'primary.800',
    padding: '16px',
    position: 'relative',
    pb: 18,
    height: '100vh',
    overflow: 'overlay',
  },
  mainRootSx: {
    position: 'relative',
    maxWidth: { sm: '425px', xs: '425px', md: '425px' },
    padding: { sm: '0px', xs: '0px' },
  },
  qns: {
    color: 'text.A100',
    fontWeight: '500',
    fontSize: '12px',
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
  headerSx: {
    paddingTop: '16px',
    marginBottom: '16px',
    backgroundColor: 'primary.800',
    padding: '16px 16px 5px 0px',
    position: 'fixed !important',
    top: '0px',
    maxWidth: '393px',
    width: '100%',
    zIndex: '1100',
  },

  listCardSx: {
    maxWidth: '425px',
    marginTop: '56px',
  },

  detailsCardSx: {
    marginBottom: '16px',
    maxWidth: '425px',
  },

  warrantInsuranceCardSx: {
    marginBottom: '16px',
    maxWidth: '425px',
  },
  warrantDetailsCardContainer: {
    marginBottom: '16px',
  },
  uploadSectionSx: {
    maxWidth: '425px',
    pb: 2,
  },
  fixedButtonSectionSx: {
    backgroundColor: 'background.surface.100',
    position: 'fixed',
    bottom: '0px',
    maxWidth: '425px',
    width: '100%',
    zIndex: '1100',
  },
  drawerHeight: {
    height: '80%',
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
