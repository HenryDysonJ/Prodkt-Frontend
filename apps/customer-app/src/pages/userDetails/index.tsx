/* eslint-disable react/jsx-key */
import { useAuth } from '@core/store';
import { Button, Input, MailIcon, MobileIcon, UserDetailsBannerIcon } from '@core/ui/atoms';
import { UseLocation } from '@core/ui/components';
import { Box, Typography } from '@mui/material';

import { userDetailsStyle } from './style';
import { LocationData } from '@core/utils';
import { track } from '@amplitude/analytics-browser';
import { useEffect } from 'react';

export default function UserDetails() {
  const { signUpState, setSignUpState, signUpLoading, signUpMessage, signUpError, signUpDetails, mobile } = useAuth();

  const handleChange = (key: string, value: string) => {
    setSignUpState({ key, value });
  };

  const signUp = () => {
    
    // Amplitude Track
    track('User successfully selects the products owned', { name: 'customer-app' })

    signUpDetails();
  };


  const ShowButton =
    signUpState?.name?.length > 0 && signUpState?.emailId?.length > 0 && signUpState?.location?.address?.length > 0
      ? true
      : false;

  // Amplitude tracking
  useEffect(() => {
    track('Tell me about yourself page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <Box sx={userDetailsStyle.rootSx}>
      <Box sx={userDetailsStyle.bannerSectionSx}>
        <Typography sx={{ color: 'text.A100' }} variant="h6" fontWeight={700} pt={6} pb={4}>
          Almost there!
        </Typography>
        <Box>
          <UserDetailsBannerIcon rootStyle={{ color: 'background.surface.200' }} />
        </Box>
      </Box>
      <Box sx={userDetailsStyle.cardDetailsSx}>
        <Typography sx={userDetailsStyle.yourselfSx}>Tell us a few things about yourself</Typography>
        <Box columnGap="12px" sx={userDetailsStyle.fieldSectionSx}>
          <Input
            focused={signUpState?.name?.length < 0}
            testid="name"
            value={signUpState?.name ?? ''}
            onChange={(e) =>
              handleChange(
                'name',
                e.target.value.replace(/\b\w/g, (match) => match.toUpperCase()),
              )
            }
            placeholder="Your Name *"
            isError={signUpState?.error?.name?.length ? true : false}
            errorMessage={signUpState?.error?.name}
          />
          <Input
            testid="phoneNumber"
            value={'+91' + `${mobile}`}
            endAdornment={<MobileIcon />}
            isReadOnly={true}
            disabled
          />
          <Input
            testid="emailId"
            value={signUpState?.emailId ?? ''}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
              handleChange('emailId', e.target.value.toLowerCase())
            }
            placeholder="Email *"
            isError={signUpState?.error?.emailId?.length ? true : false}
            errorMessage={signUpState?.error?.emailId}
            endAdornment={<MailIcon />}
          />
        </Box>
        <UseLocation
          value={signUpState?.location ?? ''}
          handleChange={(loc: LocationData | null) => handleChange('location', loc as any)}
          userDetails={true}
        />
        <Box sx={userDetailsStyle.proceedBtnSx}>
          {/* Message */}
          {signUpMessage.length > 0 && (
            <Box mb={2} sx={userDetailsStyle.errorMessage}>
              <Typography sx={signUpError ? userDetailsStyle.errorFail : userDetailsStyle.errorSuccess}>
                {signUpMessage}
              </Typography>
            </Box>
          )}
          <Button
            disabled={!ShowButton}
            data-testid="proceed"
            loading={signUpLoading}
            onClick={() => signUp()}
            sx={userDetailsStyle.bottomBtnSx}
            fullWidth
          >
            Proceed
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
