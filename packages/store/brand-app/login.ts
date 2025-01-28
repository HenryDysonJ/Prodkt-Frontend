import { envConfig } from '@core/envconfig';
import { localStorageKeys } from "@core/utils";
import { httpRequest } from "@core/utils/api/axios";
import { enqueueSnackbar } from "notistack";
import { create } from "zustand";

import { BrandLogin } from "./interface";

export const useBrandLogin = create<BrandLogin>((set, get) => ({

  resetToken:"",

  accessToken: "",

  loginState: {
    email: "",
    password: "",
    error: {
      email: "",
      password: "",
    },
  },

  forgotPassword: {
    email: "",
    error: {
      email: "",
    },
  },

  resetPassword: {
    confirmPassword: "",
    newPassword: "",
    error: {
      newPassword: "",
      confirmPassword: "",
    },
  },

  setResetToken:(token:string)=>{
  set({
    resetToken:token
  })
  },

  setBrandLogin: async () => {
    let respose;
    try {
      const { loginState } = get();

      const payload = {
        email_id: loginState.email,
        password: loginState.password,
      };

      await httpRequest(
        "post",
        `${envConfig.api_url}/auth/sign_in`,
        { ...payload },
        true
      )
        .then((res) => {
          set({ accessToken: res?.data?.data?.token });
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: "success",
            style: { fontSize: "1.4rem" },
          });
          return (respose = res);
        })
        .catch((err) => {
          enqueueSnackbar(`${err?.response?.data?.message}`, {
            variant: "error",
            style: { fontSize: "1.4rem" },
          });
          console.log(err);
          return (respose = err);
        });
    } catch (error) {
      enqueueSnackbar("Oops! Something went wrong unable to Login", {
        variant: "error",
        style: { fontSize: "1.4rem" },
      });
      console.log(error);
    }

    return respose;
  },

  setForgotPassordSendLinkEmail: async () => {
    let respose;
    try {
      const { forgotPassword } = get();

      const payload = {
        email_id: forgotPassword.email,
      };

      await httpRequest(
        "put",
        `${envConfig.api_url}/auth/forgot_password`,
        { ...payload },
        true
      )
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: "success",
            style: { fontSize: "1.4rem" },
          });
          return (respose = res);
        })
        .catch((err) => {
          enqueueSnackbar(`${err?.response?.data?.message}`, {
            variant: "error",
            style: { fontSize: "1.4rem" },
          });
          console.log(err);
          return (respose = err);
        });
    } catch (error) {
      enqueueSnackbar("Oops! Something went wrong unable to send link", {
        variant: "error",
        style: { fontSize: "1.4rem" },
      });
      console.log(error);
    }
    return respose;
  },

  setResetPassord: async () => {
    let respose;
    try {
      const { resetPassword ,resetToken } = get();

      const payload = {
        new_password: resetPassword.newPassword,
      };
      const authToken = resetToken;
      localStorage.setItem(localStorageKeys.authToken, authToken ?? '');
      await httpRequest(
        "put",
        `${envConfig.api_url}/auth/reset_password`,
        { ...payload },
        true
      )
        .then((res) => {
          console.log(res);
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: "success",
            style: { fontSize: "1.4rem" },
          });
          return (respose = res);
        })
        .catch((err) => {
          enqueueSnackbar(`${err?.response?.data?.message}`, {
            variant: "error",
            style: { fontSize: "1.4rem" },
          });
          console.log(err);
          return (respose = err);
        });
    } catch (error) {
      enqueueSnackbar("Oops! Something went wrong unable to send link", {
        variant: "error",
        style: { fontSize: "1.4rem" },
      });
      console.log(error);
    }

    return respose;
  },

  setHandeloginChange: (key: string, eVal: string) => {
    set((prev) => ({
      loginState: {
        ...prev.loginState,
        [key]: eVal,
      },
      forgotPassword: {
        ...prev.forgotPassword,
        [key]: eVal,
      },
    }));
  },

  setResetHandleChange: (key: string, eVal: string) => {
    set((prev) => ({
      resetPassword: {
        ...prev.resetPassword,
        [key]: eVal,
      },
    }));
  },

  setError: (val: any) => {
    set((prev) => ({
      ...prev,
      loginState: {
        ...prev.loginState,
        error: {
          ...prev.loginState.error,
          ...val,
        },
      },
    }));
  },

  clearAll: () => {
    set(() => ({
      loginState: {
        email: "",
        password: "",
        error: {
          email: "",
          password: "",
        },
      },

      forgotPassword: {
        email: "",
        error: {
          email: "",
        },
      },

      resetPassword: {
        confirmPassword: "",
        newPassword: "",
        error: {
          newPassword: "",
          confirmPassword: "",
        },
      },
    }));
  },
}));
