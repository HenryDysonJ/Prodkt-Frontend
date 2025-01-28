import type { SxProps, Theme } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';

import { profileDetailsStyle } from './style';
import { EmailVerifiedTickIcon } from '..';

export interface ProfileDetailsProps {
  profileStyle?: SxProps<Theme>;
  titleName: string;
  subTitleName: string;
  isVerifyEmail?: boolean;
  isVerify?: boolean;
  onClickEmail?: () => void;
  icon: React.ReactNode;
}

export const ProfileDetails = (props: ProfileDetailsProps): JSX.Element => {
  const { profileStyle, isVerifyEmail = false, isVerify = false, titleName = '', onClickEmail = () => false, subTitleName = '', icon } = props;

  return (
    <Box sx={profileDetailsStyle.rootSx}>
      <Box sx={{ ...profileDetailsStyle.flexBox, ...profileStyle } as SxProps<Theme>}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <Box sx={profileDetailsStyle.iconSx}>{icon}</Box>
          <Box>
            <Typography sx={profileDetailsStyle.titleSx}>{titleName}</Typography>
            <Typography sx={profileDetailsStyle.subTextSx}>{subTitleName}</Typography>
          </Box>
        </Box>
        {isVerifyEmail &&
          (isVerify ?
            <Typography onClick={() => onClickEmail()} sx={profileDetailsStyle.emailSx}>Verify</Typography>
            :
            <Stack direction={'row'} alignItems={'center'} gap='4px'>
              <EmailVerifiedTickIcon />
              <Typography sx={profileDetailsStyle.verifiedSx}>Verified</Typography>
            </Stack>)

        }
      </Box>
    </Box>
  );
};
