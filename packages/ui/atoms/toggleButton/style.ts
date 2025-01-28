import type { SxProps } from '@mui/material';

interface ToggleButtonStyleProps {
  [key: string]: SxProps;
}

export const toggleButtonStyle: ToggleButtonStyleProps = {
  rootSx: {
    display: 'flex', gap: '8px',
     },
  activeSx: {
    opacity: 1,
    color: 'border.focus',
    fontSize: '12px',
    display: 'flex',
    placeItems: 'center',
    gap: 0.5,
  },
  nameActiveSx: {
    color: 'text.A800',
  },
  nameInactiveSx: {
    color: 'text.A100',
  },
  radioSx: {
    color: 'text.secondary',
    fontSize: '12px',
    display: 'flex',
    placeItems: 'center',
    gap: 0.5,
  },
  buttonActiveSx: {
    borderColor: 'grey.200',
    boxShadow: 'none',
    borderRadius: '8px',
    backgroundColor: 'primary.main',
    color: 'background.surface.100',
    padding: '10px',
    '& .MuiButton-root': {
      '& :hover': { boxShadow: 'none' },
    },
  },
  buttonInactiveSx: {
    border: '1px solid',
    borderColor: 'grey.200',
    boxShadow: 'none',
    borderRadius: '8px',
    color: 'main.900',
    backgroundColor: 'background.surface.100',
    padding: '10px',
    '& .MuiButton-root': {
      '& :hover': { boxShadow: 'none' },
    },
  },
};
