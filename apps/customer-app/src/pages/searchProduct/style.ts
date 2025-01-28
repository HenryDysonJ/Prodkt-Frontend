import type { SxProps } from '@mui/material';

interface searchProductStyleProps {
  [key: string]: SxProps;
}

export const searchProductStyle: searchProductStyleProps = {
  rootSx: {
    px: 2.5,
    pt: 1.5,
  },
  screenlayoutSx: {
    minHeight: '100vh',
    pt: '56px',
  },
  searchFieldSx: {
    '& .MuiOutlinedInput-input': {
      padding: '0px 4px 4px 8px',
      fontSize: '14px',
      color: 'text.400',
      fontWeight: 'medium',
    },
  },
  searchTitleSx: {
    cursor: 'pointer',
    pl: 2,
    pr: 1,
    gap: 1,
    justifyContent: 'flex-start',
    display: 'flex',
    alignItems: 'baseline',
  },
  titleSx: {
    fontSize: '14px',
    color: 'text.700',
    pt: 2,
  },
  searchResultTextSx: {
    pt: 2,
    color: 'text.700',
    fontWeight: 600,
  },
  illustrationContentSx: {
    display: 'flex',
    justifyContent: 'center',
    pt: 9,
  },
  rootSearchProductSx: {
    textAlign: 'center',
    pt: 5,
  },
  youCanSearchSx: {
    fontSize: '12px',
    color: 'text.500',
    pt: 1.5,
    width: '100%',
    maxWidth: '143px',
    margin: '0px auto',
  },
  searchproductSx: {
    fontSize: '14px',
    color: 'text.A100',
    fontWeight: 900,
  },
  skeltonSx: {
    px: 1,
    bgcolor: 'primary.200',
  },
  chipsRootSx: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    overflowY: 'hidden',
    flexDirection: 'row',
    pl: 1,
  },
  inputSearchSx: {
    '& input': {
      color: 'text.A100',
    },
    '& .MuiOutlinedInput-root': {
      display: 'flex',
      alignItems: 'center',
      pr: 1.5,
      pl: 1.2,
      pt: { xs: '14px', sm: '12px' },
      pb: { xs: '14px', sm: '12px' },
      bgcolor: 'background.surface.100',
      color: '#025140',
      borderRadius: '8px',
      '& fieldset': {
        borderRadius: '8px',
        border: '1.5px solid',
        borderColor: 'grey.A900',
        // backgroundColor: 'background.surface.100',
        color: 'text.A100'
      },
      '&:hover fieldset': {
        borderColor: 'grey.C600',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'grey.C600',
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: '0px 4px 0px 4px',
      fontSize: '14px',
      color: 'text.A100',
      fontWeight: 'medium',
    },
  },
  filterRootTextSx: {
    border: '1.5px solid',
    borderColor: 'primary.main',
    borderRadius: '16px',
    bgcolor: 'primary.100',
  },
  filterTextSx: {
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
    px: 1,
    height: '28px',
    fontSize: '12px',
    color: 'primary.C200',
    cursor: 'pointer',
  },
  drawerHeight: {
    height: '100% !important',
    p: '0px',
  },

  drawerChipHeight: {
    height: '250px',
    p: '12px',
  },
  selectTextSx: {
    color: 'text.A100',
    px: 1.5,
  },
  dividerSx: {
    mt: '-16px',
    border: '1px solid',
    borderColor: 'divider.100',
    height: '300px',
  },
  checkStyle: {
    color: 'red',
  },
  parentLabelSx: {
    borderRight: '1px solid',
    borderColor: 'grey.300',
  },
  valuePointsSx: {
    width: '100%',
    height: '334px',
    overflow: 'scroll',
  },
  parentSubLabelSx: {
    display: 'flex',
    alignItems: 'center',
    width: '120px',
  },
  fliterlabelSx: {
    pt: 1.7,
    pb: 1.7,
    width: '110px',
    cursor: 'pointer',
    color: 'text.A100',
    fontSize: '12px',
  },
  spanTagSx: {
    bgcolor: 'primary.main',
    width: '6px',
    height: '6px',
    borderRadius: '50%',
  },
  footerSx: {
    borderTop: '1px solid',
    borderColor: 'grey.A300',
    px: 3,
    pt: 2,
    pb: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedTextSx: {
    fontSize: '14px',
    color: 'text.400',
    fontWeight: 'bold',
  },
  clearButtonSx: {
    boxShadow: 'none',
    textTransform: 'capitalize',
    borderRadius: '10px',
    px: 4,
    py: 1.3,
    backgroundColor: 'background.surface.B100',
      color: 'background.surface.B200',
    '&: hover': {
      backgroundColor: 'background.surface.B100',
      color: 'background.surface.B200',
      boxShadow: 'none',
    },
  },
  applyButtonSx: {
    boxShadow: 'none',
    fontSize: '14px',
    textTransform: 'capitalize',
    color: 'common.white',
    borderRadius: '10px',
    px: 4,
    '&: hover': {
      bgcolor: 'primary.main',
      boxShadow: 'none',
    },
  },

  checkBoxTextSx: {
    display: 'flex',
    alignItems: 'center',
    '& p': {
      marginTop: '7px',
    },
  },
};
