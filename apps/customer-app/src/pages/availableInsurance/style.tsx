import type { SxProps } from '@mui/material';

interface AvailableInsuranceStyleProps {
  [key: string]: SxProps;
}

export const availableInsuranceStyle: AvailableInsuranceStyleProps = {
  rootSx: {
    backgroundColor: 'primary.900',
    height: '100vh',
  },

  headerSx: {
    padding: '16px 20px',
  },

  searchSectionSx: {
    padding: '0px 20px',
    paddingBottom: '20px',
  },

  inputSearchSx: {
    '& .MuiOutlinedInput-root': {
      display: 'flex',
      alignItems: 'center',
      pr: 1.5,
      pt: '10px',
      pb: '8px',
      bgcolor: '#fff',
      color: '#025140',
      borderRadius: '8px',
      '& fieldset': {
        borderRadius: '8px',
        border: '1.5px solid',
        borderColor: 'grey.200',
      },
      '&:hover fieldset': {
        borderColor: 'grey.200',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'grey.200',
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: '0px 4px 4px 8px',
      fontSize: '14px',
      color: 'text.400',
      fontWeight: 'medium',
    },
  },

  sortIconSx: {
    width: '40px',
    height: '41px',
    lineHeight: '41px',
    backgroundColor: 'common.white',
    textAlign: 'center',
    borderRadius: '8px',
    border: '1.5px solid',
    borderColor: 'grey.200',
    cursor: 'pointer',
  },

  availableAmcSx: {
    paddingBottom: '100px',
  },

  drawerHeight: {
    height: '121px',
  },

  checkBoxSx: {
    display: 'flex',
    alignItems: 'center',
    gap: '9px',
    marginBottom: '20px',
    '& p': {
      fontSize: '14px',
      fontWeight: 600,
      color: 'text.700',
    },
  },

  rootSkeletonSx: {
    padding: '20px',
  },

  cardSkeletonSx: {
    height: '140px',
  },

  labelSkeletonSx: {
    height: '15px',
  },
};
