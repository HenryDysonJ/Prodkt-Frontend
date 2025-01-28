import { envConfig } from '@core/envconfig';
import { httpRequest } from '@core/utils';
import { create } from 'zustand';

import { ScheduleServiceReminder } from '../interface';
import { enqueueSnackbar } from 'notistack';

export const useScheduleServiceReminder = create<ScheduleServiceReminder>((set, get) => ({


    openScheduleReminderDrawer: false,
    nextStep: false,
    showLastService: false,
    showCustomMonth: false,
    isShowAmc: false,
    reminderDate: '',
    lastServiceDate: '',

    // postpone service

    openServicePostpone: false,
    openPostponeServiceDate: false,
    actionRequiredData: {
        user_product_id: '',
        nick_name: '',
        warranty_valid_to: '',
        is_extended: false,
        warranty_id: '',
        category_type_id: '',
        is_std_warranty_applicable: false,
        is_ext_warranty_applicable: false,
        is_insurance_applicable: false,
        is_amc_applicable: false,
        is_invoice_applicable: false,
        product_id: '',
        is_maintenance_enabled: false,
        product_name: '',
        image_url: '',
        icon: {
            light_theme: '',
            dark_theme: '',
        },
        expired: false,
        amc_valid_to: '',
        insurance_valid_to: '',
        expiring: false,
    },

    serviceRemindersData: {
        user_product_id: '',
        service_interval: {
            label: '',
            value: '',
            data: 0
        },
        total_amc_service: 0,
        amc_service_availed: 0,
        last_service: '',
        is_maintenance_enabled: true,
    },

    servicePostponeData: {
        scheduler_id: '',
        service_date: '',
        remarks: '',
        is_postponed: false
    },
    noAction_required: {
        warranty_id: '',
        insurance_id: '',
        amc_id: '',
        remarks: ''
    },

    clearNoActionRequiredData: () => {
        set({
            noAction_required: {
                warranty_id: '',
                insurance_id: '',
                amc_id: '',
                remarks: ''
            },
        })
    },

    clearState: () => {
        set({
            openScheduleReminderDrawer: false,
            nextStep: false,
            showLastService: false,
            showCustomMonth: false,
            isShowAmc: false,
            reminderDate: '',
            lastServiceDate: '',
            serviceRemindersData: {
                user_product_id: '',
                service_interval: {
                    label: '',
                    value: '',
                    data: 0
                },
                total_amc_service: 0,
                amc_service_availed: 0,
                last_service: '',
                is_maintenance_enabled: true,
            },
        })
    },

    updateDrawerState: (key: string, val: any) => {
        set((state) => ({
            ...state, [key]: val
        }))
    },

    updateServiceReminderData: (key: string, val: any) => {
        set((state) => ({
            serviceRemindersData: {
                ...state?.serviceRemindersData,
                [key]: val,
            },
        }));

    },
    updateServicePostponeData: (key: string, val: any) => {
        set((state) => ({
            servicePostponeData: {
                ...state?.servicePostponeData,
                [key]: val,
            },
        }));

    },

    updateNoActionRequired: (key: string, val: any) => {
        set((state) => ({
            noAction_required: {
                ...state?.noAction_required, [key]: val,
            }
        }))
    },


    updateScheduleReminders: async (callback: any = () => false) => {
        // set({ loading: true });

        try {

            const scheduleRemindersData = get()

            const payload = {
                user_product_id: scheduleRemindersData?.serviceRemindersData?.user_product_id,
                service_interval: scheduleRemindersData?.serviceRemindersData?.service_interval?.data,
                total_amc_service: scheduleRemindersData?.serviceRemindersData?.total_amc_service,
                amc_service_availed: scheduleRemindersData?.serviceRemindersData?.amc_service_availed,
                last_service: scheduleRemindersData?.serviceRemindersData?.last_service || undefined,
                is_maintenance_enabled: scheduleRemindersData?.serviceRemindersData?.is_maintenance_enabled,
            };

            httpRequest('POST', `${envConfig.api_url}/schedule_service/schedule_reminders`, payload, true)
                .catch((err) => {
                    console.log('Error on add product: ', err);
                    throw err;
                })
                .then((res) => {
                    callback();
                    enqueueSnackbar(`${res?.data?.message}`, {
                        variant: 'success',
                    });
                    set({ nextStep: true, reminderDate: res?.data?.data[0].remainder_date, lastServiceDate: res?.data?.data[0].last_service_date });

                });
        } catch (error) {
            set({});
        } finally {
            set({});
        }
    },

    updatePostponeServiceApi: async () => {
        // set({ loading: true });

        try {

            const postponeServiceData = get()

            const payload = {
                scheduler_id: postponeServiceData?.servicePostponeData?.scheduler_id,
                service_date: postponeServiceData?.servicePostponeData?.service_date,
                remarks: postponeServiceData?.servicePostponeData?.remarks,
                is_postponed: postponeServiceData?.servicePostponeData?.is_postponed,
            };

            httpRequest('POST', `${envConfig.api_url}/schedule_service/schedule_reminders/delay`, payload, true)
                .catch((err) => {
                    console.log('Error on add product: ', err);
                    throw err;
                })
                .then((res) => {
                    enqueueSnackbar(`${res?.data?.message}`, {
                        variant: 'success',
                    });
                    set({ openServicePostpone: false, openPostponeServiceDate: false });

                });
        } catch (error) {
            set({});
        } finally {
            set({});
        }
    },

    updateNoActionRequiredApi: async (callback: any = () => false) => {
        try {
            const noActionRequired = get()
            const payload = {
                warranty_id: noActionRequired?.noAction_required?.warranty_id ?? undefined,
                insurance_id: noActionRequired?.noAction_required?.insurance_id ?? undefined,
                amc_id: noActionRequired?.noAction_required?.amc_id ?? undefined,
                remarks: noActionRequired?.noAction_required?.remarks,
            }

            await httpRequest(
                'post',
                `${envConfig.api_url}/products/not_renewing`,
                payload
                ,
                true,
            )
                .then((res) => {
                    enqueueSnackbar(`${res?.data?.message}`, {
                        variant: 'success',
                    });
                    callback();

                })
                .catch((err) => {
                    console.log('err:', err);
                });
        } catch (error) {
            set({});
        } finally {
            set({});
        }
    },







}));
