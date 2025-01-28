import { envConfig } from '@core/envconfig';
import { webRoutes } from '@core/routes';
import { httpRequest, routeTo } from '@core/utils';
import { LocationData } from '@core/utils';
import { enqueueSnackbar } from 'notistack';
import { create } from 'zustand';

import { useRouting } from '../common';
import { ProfileDetailsInterface, UserProfileInterface, validateEditProfile } from '../interface';

export const useUserProfileDetails = create<UserProfileInterface>((set, get) => ({
  profileDetails: {
    first_name: '',
    email_id: '',
    mobile_code: 91,
    mobile_no: '',
    location: null,
    profile_image: '',
    theme: '',
    error: {
      first_name: '',
      email_id: '',
      mobile_code: 91,
      mobile_no: '',
      location: null,
      profile_image: '',
      theme: '',
    },
  },

  notification: false,

  profileLoading: false,
  profileSuccessMessage: false,
  profileErrorMessage: false,

  editProfileUpdateState: (key: keyof ProfileDetailsInterface, value: string | number | LocationData | File | null) => {
    set((state) => ({
      profileDetails: {
        ...state.profileDetails,
        error: { ...state?.profileDetails?.error, [key]: '' },
        [key]: value,
      },
    }));
  },

  updateWhatsAppNotification: (value: boolean) => {
    set({ notification: value });
  },

  getProfileDetails: async () => {
    set({ profileLoading: true, profileErrorMessage: true });
    try {
      await httpRequest('get', `${envConfig.api_url}/user/get_profile_details`, {}, true)
        .then((res) => {
          set({
            profileDetails: { ...res?.data?.data, profile_image: res?.data?.data?.image_url },
          });
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({ profileErrorMessage: true });
    } finally {
      set({ profileLoading: false });
    }
  },

  getWhatsAppNotification: async () => {
    set({ profileLoading: true });
    try {
      await httpRequest('get', `${envConfig.api_url}/user/get_notification_status`, {}, true)
        .then((res) => {
          set({
            notification: res?.data?.data?.is_whatsapp,
          });
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
    } finally {
    }
  },

  updateNotification: async () => {
    try {
      const { notification } = get();

      const payload = {
        is_whatsapp: notification,
      };

      await httpRequest('post', `${envConfig.api_url}/user/update_notification_status`, { ...payload }, true)
        .then((res) => {
          enqueueSnackbar(`Notification Preference Updated`, {
            variant: 'success',
            autoHideDuration: 3000,
          });
        })
        .catch((err) => {
          enqueueSnackbar(`${err?.response?.data?.message}`, {
            variant: 'error',
          });
        });
    } catch (error) {
    } finally {
    }
  },

  editProfileDetails: async () => {
    set({ profileSuccessMessage: false, profileErrorMessage: false });

    try {
      const { profileDetails } = get();

      const { isValid, error } = validateEditProfile(profileDetails);

      if (!isValid) {
        set((state) => ({
          profileDetails: {
            ...state?.profileDetails, error: {
              ...state.profileDetails?.error
            }
          }
        }));
        return false;
      }

      const formData = new FormData();

      formData.append('first_name', profileDetails?.first_name);
      formData.append('email_id', profileDetails?.email_id);
      formData.append('theme', profileDetails?.theme);

      if (typeof profileDetails.profile_image !== 'string') {
        formData.append('image', profileDetails?.profile_image);
      }

      formData.append('location_name', profileDetails?.location?.address ?? '');
      formData.append('location_latitude', profileDetails?.location?.latitude as never);
      formData.append('location_longitude', profileDetails?.location?.longitude as never);

      await httpRequest('put', `${envConfig.api_url}/user/update_profile`, formData, true)
        .then(() => {
          set({ profileSuccessMessage: true });
          enqueueSnackbar('Profile Update Successfully', {
            variant: 'success',
          });
          // Initializing the Push Notification --
          import('@core/store').then((modules) => {
            const { refreshToken } = modules.useAuth.getState();
            refreshToken();
          });

          routeTo(useRouting, webRoutes.userProfile);
        })
        .catch(() => {
          set({ profileErrorMessage: true });
          enqueueSnackbar("Profile couldn't upload", {
            variant: 'error',
          });
        });
    } catch (error) {
      set({ profileErrorMessage: true });
    } finally {
      set({ profileSuccessMessage: true });
    }
  },
}));
