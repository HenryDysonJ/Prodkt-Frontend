import { envConfig } from "@core/envconfig";
import { httpRequest } from "@core/utils/api/axios";
import { create } from "zustand";

import { enqueueSnackbar } from "notistack";
import queryString from "query-string";
import { IwhatsappConfig } from "./interface";

export const useWhatsAppConfig = create<IwhatsappConfig>((set, get) => ({

    error: {},
    whatappDetails: {
        access_token: "",
        whatsapp_business_id: "",
        phone_number_id: ""
    },

    setFieldError: (fieldName: string, error: any) => {
        set((state) => ({ error: { ...state.error, [fieldName]: error } }));
    },
    clearFieldError: (fieldName: any) => {
        set((state) => ({ error: { ...state.error, [fieldName]: undefined } }));
    },

    clearErrors: () => set(() => ({ error: {} })),

    setError: (isValid: any) => {
        set({ error: isValid });
    },

    handleChangeWhatsappConfig: (key: string, value: object | string) => {
        const { clearFieldError } = get();
        set((state: any) => ({
            ...state,
            whatappDetails: {
                ...state.whatappDetails,
                [key]: value,
            },
        }));
        clearFieldError(key);
    },

    getWhatsappConfigureDetails: async () => {
        const { setClearAll } = get()
        try {
            const response = await httpRequest(
                "get",
                `${envConfig.api_url}/brand/whatsapp_config/get`,
                {},
                true
            );

            if (response && response.data.data) {
                set({
                    whatappDetails: {
                        access_token: response.data.data?.whatsappConfigurationData?.access_token,
                        whatsapp_business_id: response.data.data?.whatsappConfigurationData?.whatsapp_business_id,
                        phone_number_id: response.data.data?.whatsappConfigurationData?.phone_number_id,
                    }
                });
                setClearAll()
            }

            return response;
        } catch (error: object | any) {
            const errorMessage = error.response?.data?.message || "An error occurred";
            enqueueSnackbar(errorMessage, {
                variant: "error",
                style: { fontSize: "1.2rem" },
            });
            throw error;
        }
    },


    updateWhatsappConfig: async () => {
        const { whatappDetails } = get()
        try {
            const payload = {
                access_token: whatappDetails?.access_token,
                whatsapp_business_id: whatappDetails?.whatsapp_business_id,
                phone_number_id: whatappDetails?.phone_number_id

            }
            const response = await httpRequest(
                "post",
                `${envConfig.api_url}/brand/whatsapp_config/upsert`,
                { ...payload },
                true
            );
            if (response) {
                enqueueSnackbar(`${response?.data?.message}`, {
                    variant: "success",
                    style: { fontSize: "1.2rem" },
                });
            }

        } catch (error: object | any) {
            enqueueSnackbar(`${error?.response?.data?.message}`, {
                variant: "error",
                style: { fontSize: "1.2rem" },
            });
        }
    },

    setClearAll: () => {
        set({
            error: {}
        })
    }

})) 