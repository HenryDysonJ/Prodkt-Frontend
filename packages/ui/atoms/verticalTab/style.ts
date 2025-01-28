import type { SxProps } from '@mui/material';

interface VerticalTabStyleProps {
  [key: string]: SxProps;
}

export const verticalTabStyle: VerticalTabStyleProps = {
  rootSx: {
    width: '100%',
    height: 'calc(100% -  88px)',
    display: 'flex',
  },
  tapContainer: { flexGrow: 1, bgcolor: 'background.surface.100', display: 'flex', height: '100%' },
  taps: {
    borderRight: 1,
    borderColor: 'grey.200',
    minWidth: '128px',
    '& .MuiTab-root.Mui-selected': {
      color: 'grey.900',
      backgroundColor: 'grey.200',
    },
    '& .MuiTabs-indicator': {
      display: 'none',
    },
    '& .MuiTab-root[data-badge="true"]::after': {
      content: '""',
      width: '6px',
      height: '6px',
      backgroundColor: 'primary.main',
      borderRadius: '50%',
      position: 'absolute',
      right: '10%',
    },
  },
  tap: {
    position: 'relative',
    fontWeight: '600',
    fontSize: '12px',
    color: 'grey.900',
    textTransform: 'capitalize',
    padding: '0px 12px 0px 16px',
    minHeight: '38px',
    margin: '6px 0',
    borderRight: 'none',
    cursor: 'pointer',
    alignItems: 'flex-start',
  },
  tapPanel: {
    width: '100%',
    height: '100%',
    overflow: 'auto',
  },
};
