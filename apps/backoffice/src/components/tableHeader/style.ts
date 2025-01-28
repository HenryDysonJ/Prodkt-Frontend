import type { SxProps } from '@mui/material';

interface TableHeaderStyleProps {
  [key: string]: SxProps;
}

export const TableHeaderStyle: TableHeaderStyleProps = {
  titleSx: {
    color: '#0E1824',
    fontWeight: '600',
    fontSIze: '17px'
  },
  dividerSx: {
    background: '#F2F4F7',
    height: '30px',
    width: '2px',
    margin: '0 0px 0 7px'
  },
  addBtn: {
    height: '100%',
    marginLeft: '10px',
    borderRadius: '8px',
    padding: '8px',
    '& p': {
      color: '#FFFFFF',
      fontSize:'14px',
      fontWeight: '600',
      textTransform: 'capitalize'
    }
  },
  filterIconSx: {
    cursor: 'pointer',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #E4E8EE',
    borderRadius: '8px',
    padding: '9px'
  },
  rightStackSx: {
    width: '520px'
  }
};
