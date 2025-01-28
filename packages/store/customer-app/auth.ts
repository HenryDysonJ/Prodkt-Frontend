import { envConfig } from '@core/envconfig';
import { webRoutes } from '@core/routes';
import { httpRequest, localStorageKeys, parseJwt, routeTo } from '@core/utils';
import { enqueueSnackbar } from 'notistack';
import { create } from 'zustand';

import { useRouting } from '../common';
import { AuthStoreInterface, giveMeAuthInitialState, validateSignUpData } from '../interface';
import { newUser } from './user';

const initialState = giveMeAuthInitialState();

export const useAuth = create<AuthStoreInterface>((set, get) => ({
  mobile_no: null,
  otp: null,
  whatsapp_no: null,
  mobile: null,
  token: null,
  isExistingUser: false,
  isInstallationBanner: false,
  isNewUser: false,
  isSwiper: false,
  onBoarding: false,
  drawerOpen: false,
  currentSwipeStep: 1,
  isSignUpOpenDrawer: true,
  isOtpVerification: false,
  signUpState: initialState.signUpState,
  clearState: () => {
    set({
      mobile_no: '',
      otp: '',
      signUpMessage: '',
    });
  },

  clearOTP: () => {
    set({
      otp: '',
    });
  },

  updateState: (key: string, value: number | string | null | boolean) => {
    set({ [key]: value });
  },

  setSignUpState: (payload: { key: string; value: string }) => {
    set((state) => ({
      signUpState: {
        ...state.signUpState,
        [payload.key]: payload.value,
        error: { ...state.signUpState.error, [payload.key]: '' },
      },
    }));
  },

  getOTPLoading: false,
  verifyOTPLoading: false,
  signUpLoading: false,
  whatsAppVerificationLoading: false,
  resendOTPLoading: false,

  signUpError: false,
  whatsAppVerificationError: false,
  refreshLoading: false,
  isRefresh: '',
  isRefreshToken: '',
  signUpMessage: '',
  inviteUrl: {
    link: ''
  },
  inviteLoading: false,

  getOTP: async () => {
    const { mobile_no, clearOTP } = get();
    set({ getOTPLoading: true });
    try {
      await httpRequest('post', `${envConfig.api_url}/auth/send_otp`, { mobile_no, mobile_no_std_code: 91 })
        .then((res) => {
          set({ isSignUpOpenDrawer: false });
          clearOTP();
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: 'success',
          });
        })
        .catch((err) => {
          enqueueSnackbar(`${err?.response?.data?.message}`, {
            variant: 'error',
          });
        });
    } catch (error) {
      enqueueSnackbar('Oops! Something went wrong unable to send OTP', {
        variant: 'error',
      });
    } finally {
      set({ getOTPLoading: false });
    }
  },

  getInvite: async () => {
    set({ inviteLoading: true });
    try {
      const response = await httpRequest('get', `${envConfig.api_url}/user/invite_now`, {}, true);
      if (response && response.data && response.data.data) {
        const inviteUrl = response.data.data;
        set({
          inviteUrl: inviteUrl,
        });
      } else {
        console.error('Invalid response format:', response);
      }
    } catch (error) {
      console.error('Error fetching invite:', error);
    } finally {
      set({ inviteLoading: false });
    }
  },

  verifyOTP: async () => {
    const { mobile_no, otp, clearState, clearOTP } = get();

    const otpLength = otp?.toString()?.length ?? 0;

    if (otpLength === 0) {
      enqueueSnackbar('Enter the OTP', {
        variant: 'error',
      });
      return false;
    } else if (otpLength < 4) {
      enqueueSnackbar('OTP must have 4 character', {
        variant: 'error',
      });
      return false;
    }

    set({ verifyOTPLoading: true });
    try {
      await httpRequest('post', `${envConfig.api_url}/auth/verify_otp`,
        {
          mobile_no,
          otp,
          reference_id: localStorage.getItem(localStorageKeys.referenceId)
        }, true,)
        .then((res) => {
          localStorage.removeItem(localStorageKeys.referenceId);
          set({
            mobile: res?.data?.data?.mobile_no,
          });
          const token = res?.data?.data?.token;
          const verify = parseJwt(token);
          newUser.setState({ verify });
          localStorage.setItem(localStorageKeys.authToken, token);
          // Initializing the Push Notification --
          import('@core/store').then((modules) => {
            const { initialize, enableNotification } = modules.usePushNotification.getState();
            const { updateDefaultTheme } = modules.useTheme.getState();
            initialize();
            enableNotification();
            updateDefaultTheme(res?.data?.data?.theme);
          });
          if (res?.data?.data?.isExistingUser) {
            set({
              drawerOpen: false,
              onBoarding: false,
              isSignUpOpenDrawer: true,
              isSwiper: false,
              currentSwipeStep: 1,
              isOtpVerification: true,
            });
            setTimeout(() => {
              routeTo(useRouting, webRoutes.home);
              set({ isOtpVerification: false });
            }, 3000);
            clearState();
            return res;
          } else {
            set({
              drawerOpen: false,
              onBoarding: false,
              isSignUpOpenDrawer: true,
              isSwiper: false,
              currentSwipeStep: 1,
              isOtpVerification: true,
            });
            setTimeout(() => {
              set({ isOtpVerification: false });
              routeTo(useRouting, webRoutes.userDetails);
            }, 3000);
            clearState();
          }
        })
        .catch((err) => {
          clearOTP();
          enqueueSnackbar(`${err?.response?.data?.message}`, {
            variant: 'error',
          });
        });
    } catch (error) {
      enqueueSnackbar('Oops! Something went wrong unable to process', {
        variant: 'error',
      });
    } finally {
      set({ verifyOTPLoading: false });
    }
  },

  resendOTP: async () => {
    const { mobile_no } = get();
    set({ resendOTPLoading: true });
    try {
      await httpRequest('post', `${envConfig.api_url}/auth/resend_otp`, { mobile_no, mobile_no_std_code: 91 })
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: 'success',
          });
        })
        .catch((err) => {
          enqueueSnackbar(`${err?.response?.data?.message}`, {
            variant: 'error',
          });
        });
    } catch (error) {
      enqueueSnackbar('Oops! Something went wrong unable to send OTP', {
        variant: 'error',
      });
    } finally {
      set({ resendOTPLoading: false });
    }
  },

  signUpDetails: async () => {
    set({ signUpLoading: true, signUpMessage: '', signUpError: false });

    try {
      const { mobile, signUpState } = get();

      const { isValid, error } = validateSignUpData(signUpState);

      if (!isValid) {
        set((state) => ({ signUpState: { ...state.signUpState, error } }));
        return false;
      }

      const payload: object = {
        first_name: signUpState?.name,
        email_id: signUpState?.emailId,
        mobile_code: signUpState?.mobileCode,
        phone_number: mobile,
        location_name: signUpState?.location?.address,
        location_latitude: signUpState?.location?.latitude,
        location_longitude: signUpState?.location?.longitude,
      };

      await httpRequest('post', `${envConfig.api_url}/auth/user_profile_completion`, { ...payload }, true)
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: 'success',
          });
          routeTo(useRouting, webRoutes.productCategory);
        })
        .catch((err) => {
          enqueueSnackbar(`${err?.response?.data?.message}`, {
            variant: 'error',
          });
        });
    } catch (error) {
      enqueueSnackbar('Oops! Something went wrong unable to send OTP', {
        variant: 'error',
      });
    } finally {
      set({ signUpLoading: false });
    }
  },

  clearField: () => {
    set({
      signUpState: initialState.signUpState,
    });
  },

  whatsAppVerification: async (token) => {
    set({ whatsAppVerificationLoading: true, whatsAppVerificationError: false });
    try {
      await httpRequest('post', `${envConfig.api_url}/auth/verify_whatsapp_token`, { token })
        .then((res) => {
          set({ mobile: res?.data?.data?.user?.mobile_no });

          const token = res?.data?.data?.token;
          const verify = parseJwt(token);
          newUser.setState({ verify });
          localStorage.setItem(localStorageKeys.authToken, token);

          if (res?.data?.data?.isExistingUser === true) {
            set({
              drawerOpen: false,
              whatsAppVerificationError: false,
              onBoarding: false,
              isSignUpOpenDrawer: true,
              isSwiper: false,
              currentSwipeStep: 1,
              isOtpVerification: true,
            });
            setTimeout(() => {
              routeTo(useRouting, webRoutes.home);
              set({ isOtpVerification: false });
            }, 3000);
            return res;
          } else {
            set({
              drawerOpen: false,
              whatsAppVerificationError: false,
              onBoarding: false,
              isSignUpOpenDrawer: true,
              isSwiper: false,
              currentSwipeStep: 1,
              isOtpVerification: true,
            });
            setTimeout(() => {
              set({ isOtpVerification: false });
              routeTo(useRouting, webRoutes.userDetails);
            }, 3000);
          }
        })
        .catch(() => {
          set({ whatsAppVerificationError: true });
        });
    } catch (error) {
      set({ whatsAppVerificationError: true });
    } finally {
      set({ whatsAppVerificationLoading: false });
    }
  },

  refreshToken: async () => {
    set({ refreshLoading: true });
    try {

      await httpRequest('get', `${envConfig.api_url}/user/refresh`, {}, true)
        .then((res) => {
          if (res?.data?.data?.token) {
            set({ isRefreshToken: res?.data?.data?.token });
            const token = res?.data?.data?.token;
            const verify = parseJwt(token);
            newUser.setState({ verify });
            localStorage.setItem(localStorageKeys.authToken, token);
            import('@core/store').then((modules) => {
              const { toggleDarkTheme, is_darkTheme } = modules.useTheme.getState();
              if (res?.data?.data?.theme === 'DARK' && !is_darkTheme) {
                toggleDarkTheme();
              }
            });
          } else {
            routeTo(useRouting, webRoutes.signin);
            set({ refreshLoading: false });
          }
          set({ refreshLoading: false });
        })
        .catch((err) => {
          console.log(err, 'err');
          routeTo(useRouting, webRoutes.signin);
          set({});
        });
    } catch (refreshLoading) {
      console.log(refreshLoading, "refreshLoading");
      set({});
    } finally {
      set({ refreshLoading: false });
    }
  }
}));
