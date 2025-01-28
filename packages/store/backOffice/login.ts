import { create } from 'zustand';
import { SignUp, SignUpDetails, validateSendEmail, validateSignUpData, validationReset } from './interface';
import { httpRequest, localStorageKeys, parseJwt, routeTo } from '@core/utils';
import { envConfig } from '@core/envconfig';
import { enqueueSnackbar } from 'notistack';
import { useRouting } from '../common';
import { backOfficeRoutes } from '@core/routes';

export const useLogin = create<SignUp>((set, get) => ({
    signUpState: {
        emailId: '',
        password: '',
        error: {
            emailId: '',
            password: ''
        }
    },
    emailState: {
        sendEmailId: '',
        error: {
            sendEmailId: '',
        }
    },
    resetState: {
        newPassword: '',
        confirmPassword: '',
        error: {
            newPassword: '',
            confirmPassword: '',
        }
    },
    emailLoading: false,
    signUpLoading: false,
    resetLoading: false,
    refreshLoading: false,

    clearSignUpState: () => {
        set({
            signUpState: {
                emailId: '',
                password: '',
                error: {
                    emailId: '',
                    password: ''
                }
            },
        })
    },

    clearEmailState: () => {
        set({
            emailState: {
                sendEmailId: '',
                error: {
                    sendEmailId: '',
                }
            },
        })
    },
    clearResetState: () => {
        set({
            resetState: {
                newPassword: '',
                confirmPassword: '',
                error: {
                    newPassword: '',
                    confirmPassword: '',
                }
            },
        })
    },

    handleChangeSendEmail: (key: string, value: string) => {
        set((state) => ({
            emailState: {
                ...state.emailState,
                [key]: value,
                error: { ...state.emailState.error, [key]: '' }
            }
        }))
    },

    handleChangeSignUp: (key: string, value: string) => {
        set((state) => ({
            signUpState: {
                ...state.signUpState,
                [key]: value,
                error: { ...state.signUpState.error, [key]: '' }
            }
        }))
    },

    handleChangeReset: (key: string, value: string) => {
        set((state) => ({
            resetState: {
                ...state.resetState,
                [key]: value,
                error: { ...state.resetState.error, [key]: '' }
            }
        }))
    },

    refreshToken: async () => {
        set({ refreshLoading: true });
        try {
    
          await httpRequest('get', `${envConfig.api_url}/user/refresh`, {}, true)
            .then((res) => {
              if (res?.data?.data?.token) {
                // set({ isRefreshToken: res?.data?.data?.token });
                const token = res?.data?.data?.token;
                // const verify = parseJwt(token);
                // newUser.setState({ verify });
                localStorage.setItem(localStorageKeys.authToken, token);
              } else {
                routeTo(useRouting, backOfficeRoutes.login);
                set({ refreshLoading: false });
              }
              set({ refreshLoading: false });
            })
            .catch((err) => {
              console.log(err, 'err');
              routeTo(useRouting, backOfficeRoutes.login);
              set({});
            });
        } catch (refreshLoading) {
          console.log(refreshLoading, "refreshLoading");
          set({});
        } finally {
          set({ refreshLoading: false });
        }
      },

    handleClickSignUp: async (callback:any =() => false) => {
        set({ signUpLoading: true })

        try {
            const { signUpState, clearSignUpState } = get()
            const { isValid, error } = validateSignUpData(signUpState)

            if (!isValid) {
                set((state) => ({ signUpState: { ...state.signUpState, error } }));
                return false;
            }

            const payload: object = {
                email_id: signUpState?.emailId,
                password: signUpState?.password,
            };
            await httpRequest('post', `${envConfig.api_url}/auth/sign_in`, { ...payload }, true)
                .then((res) => {

                    enqueueSnackbar(`${res?.data?.message}`, {
                        variant: 'success',
                    });
                    const token = res?.data?.data?.token;
                    localStorage.setItem(localStorageKeys.authToken, token);
                    callback();
                        // routeTo(useRouting, backOfficeRoutes.home);
                    clearSignUpState()
                })
                .catch((err) => {
                    enqueueSnackbar(`${err?.response?.data?.message}`, {
                        variant: 'error',
                    });
                    clearSignUpState()
                });
        } catch (error) {
            enqueueSnackbar('Oops! Something went wrong unable to send OTP', {
                variant: 'error',
            });
        } finally {
            set({ signUpLoading: false });
        }


    },

    sendEmail: async (callback: any = () => false) => {
        set({ emailLoading: true })
        try {
            const { emailState, clearEmailState } = get()
            const { isValid, error } = validateSendEmail(emailState)

            if (!isValid) {
                set((state) => ({ emailState: { ...state.emailState, error } }));
                return false;
            }

            const payload: object = {
                email_id: emailState?.sendEmailId,
            };
            await httpRequest('put', `${envConfig.api_url}/auth/forgot_password`, { ...payload }, true)
                .then((res) => {
                    enqueueSnackbar(`${res?.data?.message}`, {
                        variant: 'success',
                    });
                    clearEmailState();
                    callback();
                })
                .catch((err) => {
                    enqueueSnackbar(`${err?.response?.data?.message}`, {
                        variant: 'error',
                    });
                    clearEmailState();
                });
        } catch (error) {
            enqueueSnackbar('Oops! Something went wrong unable to send OTP', {
                variant: 'error',
            });
        } finally {
            set({ emailLoading: false });
        }

    },

    resetPasswordSend: async (token, callback :any= () =>false) => {
        set({ resetLoading: true })
        try {
            const { resetState, clearResetState } = get()
            const { isValid, error } = validationReset(resetState)

            if (!isValid) {
                set((state) => ({ resetState: { ...state.resetState, error } }));
                return false;
            }

            const payload: object = {
                new_password: resetState?.newPassword,
            };

            const authToken = token;
            localStorage.setItem(localStorageKeys.authToken, authToken ?? '');
            await httpRequest('put', `${envConfig.api_url}/auth/reset_password`,   { ...payload }, true)
                .then((res) => {
                    enqueueSnackbar(`${res?.data?.message}`, {
                        variant: 'success',
                    });
                    clearResetState();
                    callback();
                })
                .catch((err) => {
                    enqueueSnackbar(`${err?.response?.data?.message}`, {
                        variant: 'error',
                    });
                    clearResetState();
                });
        } catch (error) {
            enqueueSnackbar('Oops! Something went wrong unable to send OTP', {
                variant: 'error',
            });
        } finally {
            set({ emailLoading: false });
        }
    }


}))