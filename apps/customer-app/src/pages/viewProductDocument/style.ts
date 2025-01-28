import type { SxProps } from '@mui/material';

interface ViewDocumentStyleProps {
  [key: string]: SxProps;
}

export const viewDocumentStyle: ViewDocumentStyleProps = {
  fixedButtonSX: {
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    maxWidth: '128px',
    margin: '0px auto',
    right: '16px',
  },

  addPro: {
    position: 'fixed',
    bottom: '22px',
    left: '0',
    right: '0',
    '& button': {
      textTransform: 'capitalize',
      padding: '12px 16px',
      borderRadius: '12px',
    },
  },

  plusTextButtonSx: {
    backgroundColor: 'primary.main',
    boxShadow: '-3px 3px 12px #0000000F',
    border: '2px solid',
    borderColor: 'background.surface.100',
    width: '55px',
    height: '55px',
    paddingRight: '4px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  containerStyle: {
    maxWidth: { sm: '425px', xs: '425px', md: '425px' },
    display: 'flex',
    justifyContent: 'end',
    pb: 3.2,
  },
  customButtonStyle: {
    maxWidth: { sm: '425px', xs: '425px', md: '425px', lg: '425px' },
    pb: 3.2,
  },
  rowBoxSx: {
    overflowY: 'hidden',
    overflowX: 'overlay',
    display: 'flex',
    flexDirection: 'row',
    gap: '12px',
    marginTop: '12px',
  },
  gridBoxSx: {
    flexWrap: 'nowrap',
    overflow: 'auto',
    pr: 2.5,
  },
  gridSx: {
    mb: 2,
    pr: 2.5,
  },
  mainBoxSx: {
    pl: 2.5,
    pb: '20px',
    pt: '20px',
  },
  quickSx: {
    mt: 2.5,
    mb: '14px',
    color: 'text.A100',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  selectSx: {
    color: 'text.400',
    fontSize: '12px',
  },
  otherSx: {
    height: '100vh',
    backgroundColor: 'background.surface.100',
    borderRadius: '24px 24px 0px 0px',
    opacity: 1,
    px: 2.5,
    pt: 2.5,
  },
  otherTextSx: {
    mb: 2.5,
    color: 'text.A100',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  skeletonBox: {
    mb: 1,
    border: '1px solid',
    borderColor: 'grey.100',
    backgroundColor: 'background.surface.100',
    width: '180px',
    height: '150px',
    p: 2,
    borderRadius: '8px',
  },
  singleSx: {
    width: '180px',
    height: '30px',
    borderRadius: '40px',
    bgcolor: 'background.surface.100',
    mt: 1,
    mb: 2,
    p: 2,
  },
  otherSkeletonSx: {
    width: '180px',
    height: '20px',
    borderRadius: '8px',
    bgcolor: 'primary.800',
    mt: 1,
    mb: 2,
    p: 2,
  },
  chipSx: {
    width: '80px',
    height: '20px',
    borderRadius: '50px',
    bgcolor: 'primary.800',
    mt: 1,
    mb: 2,
    p: 2,
  },
};
