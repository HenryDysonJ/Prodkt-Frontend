import type { SxProps } from '@mui/material';

interface productCategoryProps {
  [key: string]: SxProps;
}

export const productCategoryStyle: productCategoryProps = {
  productTextSx: {
    width: '100%',
    maxWidth: '297px',
    margin: '0px auto',
    pt: 4,
    fontSize: '16px',
    fontWeight: 700,
    textAlign: 'center',
  },
  productSelectSx: {
    pb: 3,
    pt: 1,
    // height: 'calc(100vh - 163px)',
  },
  buttonSx: {
    py: 1.5,
    borderRadius: '10px',
    textTransform: 'capitalize',
    bgcolor: 'secondary.main',
    '&:hover': {
      bgcolor: 'secondary.main',
    },
  },
  loadingSx: {
    px: 1,
    bgcolor: 'primary.200',
  },
  screenlayoutSx: {
    minHeight: '100vh',
    pt: '56px',
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
        borderColor: 'grey.C600 ',
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
};
