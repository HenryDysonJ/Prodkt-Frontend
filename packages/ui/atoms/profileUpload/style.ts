import type { SxProps } from '@mui/material';

interface ProfileUploadStyleProps {
  [key: string]: SxProps;
}

export const profileUploadStyle: ProfileUploadStyleProps = {
  rootSx: {},
  avatarSx: {
    height: '80px',
    fontSize: '40px',
    fontWeight: 500,
    textAlign: 'center',
    backgroundColor: 'primary.darked',
    color: 'primary.main',
    width: '80px',
    borderRadius: '50px',
  },
  buttonGroupIcon: {
    cursor: 'pointer',
    width: '22px',
    px: 0.4,
    py: 0.4,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '22px',
    backgroundColor: 'background.surface.100',
    boxShadow: '0px 2px 4px #00000014',
  },

  absoluteBox: {
    position: 'absolute',
    bottom: '5px',
    left: '55px',
  },
  absoluteSX: {
    position: 'absolute',
    bottom: '0px',
    left: '55px',
  },
  relativeBox: {
    position: 'relative',
    cursor: 'pointer',
  },
};
