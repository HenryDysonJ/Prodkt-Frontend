import { envConfig } from '@core/envconfig';
import { httpRequest, localStorageKeys, parseJwt } from '@core/utils';
import { enqueueSnackbar } from 'notistack';
import { create } from 'zustand';

import { EmailVerificationInterface } from '../interface';
import { newUser } from './user';

export const useEmailVerificationStore = create<EmailVerificationInterface>((set, get) => ({

  email_id: '',
  otp: '',
  emailLoading: false,
  editEmail: false,
  emailError: false,
  drawerOpen: false,
  isVerified: false,
  setIsVerified: (value: boolean) => {
    set({ isVerified: value });
  },
  setEditEmail: (value: boolean) => {
    set({ editEmail: value });
  },

  setDrawerClose: (value: boolean) => {
    set({ drawerOpen: value });
  },

  setEditEmailClose: () => {
    set({ editEmail: false, drawerOpen: true });
  },

  editEmailUpdateState: (value: string) => {
    set({ email_id: value });
  },

  updateOtpState: (value: string) => {
    set({ otp: value });
  },

  clearStateEmpty: () => {
    set({
      otp: '',
    });
  },

  sentEmailCode: async (payload) => {
    set({ emailLoading: true });
    try {
      await httpRequest('post', `${envConfig.api_url}/user/send_email_verification_code`, { email_id: payload }, true)
        .then((res) => {
          enqueueSnackbar(`${res.data.message}`, {
            variant: 'success',
          });
          set({ editEmail: false, drawerOpen: true });
        })
        .catch((err) => {
          enqueueSnackbar(`${err.response.data.message}`, {
            variant: 'error',
          });
          console.log('err', err);
        });
    } catch (error) {
      set({ emailLoading: false, editEmail: true, drawerOpen: true });
    }
  },

  getVerifyCode: async (payload) => {
    const { clearStateEmpty } = get();
    set({});
    try {
      await httpRequest('post', `${envConfig.api_url}/user/email_otp_verify`, { otp: payload }, true)
        .then((res) => {
          enqueueSnackbar(`${res.data.message}`, {
            variant: 'success',
          });
          const token = res?.data?.data?.token;
          const verify = parseJwt(token);
          newUser.setState({ verify });
          localStorage.setItem(localStorageKeys.authToken, token);
          clearStateEmpty();
          set({ editEmail: false, drawerOpen: false });
        })
        .catch((err) => {
          enqueueSnackbar(`${err.response.data.message}`, {
            variant: 'error',
          });
          clearStateEmpty();
        });
    } catch (error) {
      set({});
    } finally {
      set({});
    }
  },
}));
