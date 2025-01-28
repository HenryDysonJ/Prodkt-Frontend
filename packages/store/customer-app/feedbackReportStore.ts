import { envConfig } from '@core/envconfig';
import { webRoutes } from '@core/routes';
import { httpRequest, routeTo, UploadFiles } from '@core/utils';
import { enqueueSnackbar } from 'notistack';
import { create } from 'zustand';
import { useRouting } from '../common';
import { FeedbackFormReport } from '../interface';

export const useFeedbackReport = create<FeedbackFormReport>((set, get) => ({

    feedbackReportData: {
        type: null,
        page_name: '',
        description: '',

        errorMessage: {
            type: null,
            page_name: '',
            description: '',
        }

    },
    attachments: [],
    formLoading: false,

    validateFeedbackFrom: () => {
        let isValid = true;
        const feedbackReportErrorData = get()
        const error = feedbackReportErrorData?.feedbackReportData.errorMessage;
        if (feedbackReportErrorData?.feedbackReportData?.page_name.length <= 0) {
            isValid = false;
            error.page_name = 'Enter a page name ';
        }

        if (feedbackReportErrorData?.feedbackReportData?.description.length <= 0) {
            isValid = false;
            error.description = 'Enter a description';
        }

        if (feedbackReportErrorData?.feedbackReportData?.type === null) {
            isValid = false;
            enqueueSnackbar(`please select the type`, {
                variant: 'error',
            });
        }
        set({ feedbackReportData: { ...feedbackReportErrorData?.feedbackReportData, errorMessage: { ...feedbackReportErrorData?.feedbackReportData, ...error } } })
        return isValid;
    },

    updateFeedbackReportData: (key: string, value: any) => {

        set((state) => ({
            feedbackReportData: {
                ...state?.feedbackReportData,
                errorMessage: { ...state?.feedbackReportData.errorMessage, [key]: '' },
                [key]: value
            }
        }));
    },

    onUploadCaptureFile: (val: File | string) => {
        set((state) => ({ attachments: [...state?.attachments, val] }));
    },

    clearState: () => {
        set({
            feedbackReportData: {
                type: null,
                page_name: '',
                description: '',
                errorMessage: {
                    type: null,
                    page_name: '',
                    description: '',
                }
            },
            attachments: []
        })
    },


    updateFeedbackReport: async () => {
        set({ formLoading: true })
        try {
            let url = [];
            const feedbackData = get()
            if (feedbackData?.attachments?.length > 0) {
                url = await UploadFiles(feedbackData?.attachments);
            }
            const payload_id = {
                type: feedbackData?.feedbackReportData?.type,
                page_name: feedbackData?.feedbackReportData?.page_name,
                description: feedbackData?.feedbackReportData?.description,
                attachments: url ?? ''
            }

            await httpRequest('post', `${envConfig.api_url}/user/report`, payload_id, true,)
                .then((res) => {
                    routeTo(useRouting, webRoutes.home);
                    enqueueSnackbar(`${res?.data.message}`, {
                        variant: 'success',
                    });
                })

                .catch((err) => {
                    console.log(err, 'err');
                    enqueueSnackbar(`${err?.data.message}`, {
                        variant: 'error',
                    });
                });
        } catch (ProductError) {
            set({});
        } finally {
            set({ formLoading: false });
        }
    },

}))