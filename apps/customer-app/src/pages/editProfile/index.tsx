import { webRoutes } from '@core/routes';
import { useUserProfileDetails } from '@core/store';
import { BackCircleIcon, Button, Input, MailIcon, MobileIcon, PageHeader, ProfileUpload } from '@core/ui/atoms';
import { UseLocation } from '@core/ui/components';
import { Box, Container } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { track } from '@amplitude/analytics-browser';
import { editProfileStyle } from './style';

export default function EditProfile() {
  const navigate = useNavigate();
  const { getProfileDetails, profileDetails, editProfileUpdateState, editProfileDetails } = useUserProfileDetails();

  useEffect(() => {
    getProfileDetails();
  }, []);

  // Amplitude tracking
  useEffect(() => {
    track('Edit Profile page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <Container
      sx={{
        position: 'relative',
        maxWidth: { sm: '425px', xs: '425px', md: '425px' },
        padding: { sm: '0px', xs: '0px' },
      }}
    >
      <Box sx={editProfileStyle.rootBox}>
        <Box>
          <Box sx={editProfileStyle.topStyle}>
            <PageHeader
              subRootStyle={{ width: '90%' }}
              icon={<BackCircleIcon rootStyle={{ color: 'text.A100' }} />}
              showIcon
              header
              headerText="Edit Profile"
            />
            <Box sx={editProfileStyle.flexBox}>
              <Box mt={3} mb={2}>
                <ProfileUpload
                  onUpload={(e) => editProfileUpdateState('profile_image', e.target?.files?.[0] ?? null)}
                  altText={profileDetails?.first_name}
                  showIcon
                  url={profileDetails.profile_image}
                  height="80px"
                  width="80px"
                  fontSize="40px"
                  onDelete={() => editProfileUpdateState('profile_image', null)}
                />
              </Box>
            </Box>
          </Box>

          <Box columnGap="12px" sx={editProfileStyle.cardDetailsSx}>
            <Box>
              <Input
                testid="name"
                value={profileDetails?.first_name ?? ''}
                onChange={(e) =>
                  editProfileUpdateState(
                    'first_name',
                    e.target.value.replace(/\b\w/g, (match) => match.toUpperCase()),
                  )
                }
                placeholder="Your Name"
                error={profileDetails?.error?.first_name?.length ? true : false}
                isError={profileDetails?.error?.first_name?.length ? true : false}
                errorMessage={profileDetails?.error?.first_name}
              />
              <Input
                testid="phoneNumber"
                value={'+91' + `${profileDetails?.mobile_no}`}
                endAdornment={<MobileIcon />}
                isReadOnly={true}
                disabled
              />
              <Input
                testid="emailId"
                value={profileDetails?.email_id ?? ''}
                onChange={(e) => editProfileUpdateState('email_id', e.target.value.toLowerCase())}
                placeholder="Email"
                isError={profileDetails?.error?.email_id?.length ? true : false}
                errorMessage={profileDetails?.error?.email_id}
                endAdornment={<MailIcon />}
              />
              <UseLocation
                value={profileDetails.location}
                handleChange={(location) => editProfileUpdateState('location', location)}
              />
            </Box>
          </Box>
        </Box>
        <Box gap="11px" sx={editProfileStyle.buttonBox}>
          <Button
            fullWidth
            onClick={() => navigate(webRoutes.userProfile)}
            sx={editProfileStyle.leftButton}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button fullWidth onClick={() => editProfileDetails()} sx={editProfileStyle.rightButton}>
            Update
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
