import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DarkThemeSetup } from '../interface'
import { httpRequest } from '@core/utils';
import { envConfig } from '@core/envconfig';
import { enqueueSnackbar } from 'notistack';


export const useTheme = create<DarkThemeSetup>((set, get) => ({
    is_darkTheme: false,

    default_theme: 'LIGHT',

    toggleDarkTheme: () => {
        set({
            is_darkTheme: !get().is_darkTheme,
            default_theme: get().is_darkTheme ? 'LIGHT' : 'DARK',
        })
    },

    updateThemeByDefaultTheme: () => {
        set({
            is_darkTheme: get().default_theme === 'DARK',
        })
    },

    updateDefaultTheme: (theme: string) => {
        set({
            default_theme: theme
        })
    },

    setLightTheme: () => {
        set({
            is_darkTheme: false
        })
    },
    

    updateTheme: async () => {
        try {
          const { is_darkTheme } = get();
    
          const payload = {
            is_dark_theme: is_darkTheme,
          };
    
          await httpRequest('post', `${envConfig.api_url}/user/update_theme`, { ...payload }, true)
            .then((res) => {
              enqueueSnackbar(`Updated Theme Successfully!`, {
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
}));
