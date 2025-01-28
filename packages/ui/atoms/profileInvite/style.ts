import type { SxProps } from '@mui/material';
// import OtpVerifications from '@core/ui/assets/otpVerification.svg';
import ProfileInvite from '@core/ui/assets/profileInvite.svg'


interface ProfileInviteStyleProps {
  [key: string]: SxProps;
}

export const profileInviteStyle: ProfileInviteStyleProps = {
  rootSx: {
    p: 0.7,
    bgcolor: 'background.surface.100',
    borderRadius: '10px',
  },
  rootSubSx: {
    bgcolor: 'secondary.700',
    borderRadius: '8px',
    pt: 1,
    backgroundImage: `url(${ProfileInvite})`,
    backgroundRepeat: 'norepeat',
    backgroundSize: 'cover',
  },
  svgIconsx: {
    marginTop: '-16px'
  },
  buttonSx: {
    bgcolor: 'secondary.main',
    textTransform: 'capitalize',
    borderRadius: '8px',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: 'secondary.main',
      boxShadow: 'none',
    },
  },
  profileTextSx: {
    color: 'grey.B400',
    fontSize: '12px',
    fontWeight: 700,
    px: 1.5,
    width: '265px',
  }
};

