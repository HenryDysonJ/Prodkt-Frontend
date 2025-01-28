import { track } from '@amplitude/analytics-browser';
import { webRoutes } from '@core/routes';
import {
  useAuth,
  useEmailVerificationStore,
  usePushNotification,
  useTheme,
  useUserProfileDetails
} from '@core/store';
import {
  BackCircleIcon,
  Button,
  IphoneIcon,
  LogOutIcon,
  PageHeader,
  ProfileDetails,
  ProfileInvite,
  ProfileLocationIcon,
  ProfileMailIcon,
  ProfileUpload,
  ProfileVectorIcon,
  Switch
} from '@core/ui/atoms';
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
} from "react-share";
import {
  ArchiveProductIcon,
  RightForwardBlackIcon,
  WhatsappNotificationIcon,
} from '@core/ui/atoms/icons/serviceReminderIcon';
import { DrawerComponent, ModalHeader } from '@core/ui/components';
import { localStorageKeys, parseJwt } from '@core/utils';
import { Box, Skeleton, Typography } from '@mui/material';
import EmailVerification from '@pages/emailVerification';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userProfileStyle } from './style';


export default function UserProfile() {
  const navigate = useNavigate();

  const { is_darkTheme, toggleDarkTheme, updateTheme } = useTheme();

  const [openDrawer, setOpenDrawer] = useState(false);

  const logoutDeviceToken = usePushNotification((state) => state?.deleteDeviceToken);
  const { setIsVerified, setDrawerClose } = useEmailVerificationStore();

  const authToken = localStorage.getItem(localStorageKeys.authToken);

  const data = parseJwt(authToken);
  9
  const logout = () => {
    const deviceToken = localStorage.getItem(localStorageKeys.deviceToken);
    logoutDeviceToken(deviceToken || '');
    localStorage.removeItem(localStorageKeys.authToken);
    localStorage.removeItem(localStorageKeys.deviceToken);
    navigate(webRoutes.signin);
  };

  const { getInvite, inviteUrl } = useAuth();

  const {
    getProfileDetails,
    notification,
    updateWhatsAppNotification,
    getWhatsAppNotification,
    profileDetails,
    profileLoading,
    updateNotification,
  } = useUserProfileDetails();

  const handleChange = (isChecked: boolean) => {
    updateWhatsAppNotification(isChecked);
    updateNotification();
  };

  const toggleChange = () => {
    toggleDarkTheme();
    updateTheme();
  };

  const gotoArchivedProductPage = () => {
    navigate(webRoutes.archivedProducts);
  };

  const referalClick = () => {
    return inviteUrl?.link;
  }

  const onReferalClick = async () => {
    setTimeout(async () => {
      try {
        if (navigator.share) {
          const inviteReferal = referalClick();
          await navigator.share({
            url: inviteReferal,
          });
          console.log('Thanks for sharing!');
        } else {
          console.error('navigator.share is not supported.');
        }
      } catch (error) {
        console.error(`Error sharing: ${error}`);
      }
    }, 1000);
  };


  useEffect(() => {
    getInvite();
  }, [inviteUrl?.link])





  useEffect(() => {
    getProfileDetails();
  }, [profileDetails.email_id]);

  useEffect(() => {
    getWhatsAppNotification();
  }, []);

  // Amplitude tracking
  useEffect(() => {
    track('Profile page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <Box sx={userProfileStyle.rootBox}>
      {profileLoading ? (
        <Box p={7} sx={userProfileStyle.flexSx}>
          <Skeleton sx={userProfileStyle.skeltonTopSx} variant="circular" animation="wave" height={80} width={80} />
          <Skeleton sx={userProfileStyle.skeltonTopSx} animation="wave" height={30} width={100} />
          <Skeleton sx={userProfileStyle.skeltonTopSx} variant="rounded" animation="wave" height={40} width={140} />
        </Box>
      ) : (
        <>
          <PageHeader
            sx={{ pt: 2 }}
            subRootStyle={{ width: '88%' }}
            icon={<BackCircleIcon rootStyle={{ color: 'text.A100' }} />}
            showIcon
            backRoute="/"
            header
            headerText="My Profile"
          />
          <Box sx={userProfileStyle.flexBox}>
            <Box mt={3} mb={2}>
              <ProfileUpload
                altText={profileDetails.first_name}
                url={profileDetails.profile_image}
                height="80px"
                width="80px"
                fontSize="40px"
              />
            </Box>
            <Typography sx={userProfileStyle.profileNameSx}>
              {profileDetails?.first_name?.charAt(0).toUpperCase() + profileDetails?.first_name?.slice(1) ?? ''}
            </Typography>
            <Box pb={2}>
              <Button onClick={() => navigate(webRoutes.editProfile)} sx={userProfileStyle.editButtonSx}>
                Edit Profile
              </Button>
            </Box>
          </Box>
        </>
      )}

      <Box sx={userProfileStyle.profileBox}>
        <>
          {profileLoading ? (
            <Box pt={1}>
              <Skeleton sx={userProfileStyle.skeltonSx} animation="wave" height={25} width={228} />
              <Skeleton sx={userProfileStyle.skeltonSx} animation="wave" height={25} width={268} />
            </Box>
          ) : (
            <ProfileDetails
              profileStyle={{ mb: 2.5 }}
              icon={<IphoneIcon rootStyle={{ color: 'background.surface.D500' }} />}
              titleName="Mobile Number"
              subTitleName={`${profileDetails?.mobile_code} ${profileDetails?.mobile_no}` ?? ''}
            />
          )}
          {profileLoading ? (
            <Box pt={1}>
              <Skeleton sx={userProfileStyle.skeltonSx} animation="wave" height={25} width={228} />
              <Skeleton sx={userProfileStyle.skeltonSx} animation="wave" height={25} width={268} />
            </Box>
          ) : (
            <ProfileDetails
              isVerifyEmail={true}
              isVerify={data?.is_verified ? false : true}
              profileStyle={{ mb: 2.5 }}
              onClickEmail={() => setDrawerClose(true)}
              icon={<ProfileMailIcon rootStyle={{ color: 'background.surface.D500' }} />}
              titleName="Email"
              subTitleName={profileDetails?.email_id ?? ''}
            />
          )}
          {profileLoading ? (
            <Box pt={1}>
              <Skeleton sx={userProfileStyle.skeltonSx} animation="wave" height={25} width={228} />
              <Skeleton sx={userProfileStyle.skeltonSx} animation="wave" height={25} width={309} />
            </Box>
          ) : (
            <ProfileDetails
              icon={<ProfileLocationIcon rootStyle={{ color: 'background.surface.D500' }} />}
              titleName="Locality"
              subTitleName={profileDetails.location?.address ?? 'Nil'}
            />
          )}
        </>
      </Box>
      <Box sx={{ py: 2 }}>
        <ProfileInvite onInviteRefralClick={onReferalClick} />
      </Box>
      <Box sx={userProfileStyle.profileLogBox}>
        {profileLoading ? (
          <Box pt={1}>
            <Skeleton sx={userProfileStyle.skeltonSx} animation="wave" height={25} width={280} />
            <Skeleton sx={userProfileStyle.skeltonSx} animation="wave" height={25} width={228} />
            <Skeleton sx={userProfileStyle.skeltonSx} animation="wave" height={25} width={309} />
          </Box>
        ) : (
          <>
            <Box
              data-testid="archivedProductsText"
              sx={userProfileStyle.archivedProductsSx}
              onClick={() => gotoArchivedProductPage()}
            >
              <Box sx={userProfileStyle.archivedIconSx}>
                <ArchiveProductIcon rootStyle={{ marginLeft: '-5px', color: 'icon.200' }} />
                <Typography>Archived Products</Typography>
              </Box>
              <RightForwardBlackIcon sx={{ mr: '10px', fontSize: '13px' }} />
            </Box>

            <Box sx={userProfileStyle.whatsappNotification}>
              <Box sx={userProfileStyle.notificationSx}>
                <WhatsappNotificationIcon rootStyle={{ color: 'background.surface.C400' }} />
                <Typography>Allow WhatsApp Notifications</Typography>
              </Box>
              <Switch
                checked={notification}
                onChange={(isChecked: boolean) => handleChange(isChecked)}
                inputProps={{ 'data-testid': 'toggleSwitch' }}
              />
            </Box>

            <Box sx={userProfileStyle.flexBoxStyle}>
              <Box sx={userProfileStyle.SwitchBox}>
                <ProfileVectorIcon rootStyle={{ color: 'background.surface.C400' }} />
                <Typography sx={userProfileStyle.darkText}>Dark Theme</Typography>
              </Box>
              <Switch checked={is_darkTheme} onChange={toggleChange} />
            </Box>

            <Box onClick={() => logout()} sx={userProfileStyle.logoutBoxStyle}>
              <Box>{<LogOutIcon />}</Box>
              <Typography sx={userProfileStyle.logoutText}>Logout</Typography>
            </Box>
          </>
        )}
      </Box>
      {/* APP VERSION */}
      <Typography sx={userProfileStyle.appVersionSx}>App Version {localStorage.getItem(localStorageKeys?.version)}</Typography>
      <EmailVerification />
    </Box>
  );
}
