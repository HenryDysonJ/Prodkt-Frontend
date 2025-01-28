import type { SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { ProfileSound } from '@core/ui/atoms/icons'
import { profileInviteStyle } from './style';
import { Button } from '..';

export interface ProfileInviteProps {
  className?: string;
  sx?: SxProps<Theme>;
  onInviteRefralClick: () => void;
};


export const ProfileInvite = (props: ProfileInviteProps): JSX.Element => {
  const { onInviteRefralClick, className = '', sx = {}, ...rest } = props;

  return (
    <Box sx={[{ ...profileInviteStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]} className={`${className}`}  {...rest}>
      <Box sx={profileInviteStyle.rootSubSx}>
        <Typography variant="subtitle2" sx={profileInviteStyle.profileTextSx}>Spread the word about our app & let your friends know what you've discovered</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ py: 2, px: 1.5 }}>
            <Button sx={profileInviteStyle.buttonSx} onClick={onInviteRefralClick}>
              Invite now
            </Button>
          </Box>
          <Box sx={profileInviteStyle.svgIconsx}>
            <ProfileSound />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}





