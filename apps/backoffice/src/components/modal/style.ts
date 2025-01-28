import type { SxProps } from '@mui/material';

interface ModalStyleProps {
  [key: string]: SxProps;
}

export const modalStyle: ModalStyleProps = {
  parentSx: {
    textAlign: 'center',
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '24px',
    height:'330px',
    width: '400px',
    p: 3,
  },
  iconSx: {
    background: '#E6EEFA',
    margin: 'auto',
    width: '75px',
    height: '75px',
    borderRadius: '37px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {

    }

  },
  gridText: {
    color: '#8E959D',
    fontSize: '16px',
    fontWeight: '500',
    margin: '20px 0 40px 0'
  },
  gridValue: {
    marginTop: '16px',
    color: '#010811',
    fontSize: '18px',
    fontWeight: '600'
  },
  submitBtn: {
    height: '50px',
    borderRadius: '8px',
    '& p': {
      fontSize: '14px',
      padding: '8px',
      fontWeight: '600',
      textTransform: 'capitalize',
      color: '#fff',
      whiteSpace: 'nowrap'
    }
  },
  resetBtn: {
    height: '50px',
    borderRadius: '8px',
    border: '1px solid #0E70EB',
    background: '#fff',
    boxShadow: 'none',
    '& p': {
      fontSize: '14px',
      padding: '8px',
      fontWeight: '500',
      textTransform: 'capitalize',
      color: '#0E70EB'
    }
  },
};
