
import { envConfig } from "@core/envconfig";
import { httpRequest } from "@core/utils/api/axios";
import { enqueueSnackbar } from "notistack";
import queryString from "query-string";
import { create } from "zustand";
import { IsequenceStore } from "./interface";


export const useSequenceStore = create<IsequenceStore>((set, get) => ({
    sequenceState: {
        offset: 0,
        limit: 5,
        search: "",
        sortValue: "",
        conditionData: {},
        conditions: [{
            condition_type: '',
            condition_logic: '',
            condition_value: '',
            dropdownData: []

        }],
        basicInfo: {
            name: '',
            is_match_all_conditions: 1,
            days: {
                label: '',
                value: ''
            },
        },
        messageData: {
            template_id: '',
            template_json: [],
            duration_number: '',
            duration_type: {
                label: '',
                value: ''
            }
        },
        templateData: [{
            template_id: '',
            template_json: [],
            duration_number: '',
            duration_type: {
                label: '',
                value: ''
            }
        }],
        currentTemplateIndex: null,
        dialogData: {
            template_id: '',
            template_json: [],
        },
        declareVariables: {
            customerName: "",
            offerName: "",
            maxPurchaseAmount: "",
        },
        sequenceData: [],
        daysData: [],
        durationData: []
    },
    error: false,

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
    sethandleSortItem: (item: string) => {
        set((state) => ({
            sequenceState: { ...state.sequenceState, sortValue: item, offset: 0 }
        }));
    },
    setHandleSearch: (val: string) => {
        const { getSequenceData } = get()
        set((state) => ({
            sequenceState: { ...state.sequenceState, search: val, offset: 0 }
        }));
        getSequenceData(val)
    },
    setLimit: (val: number) => {
        set((state) => ({
            sequenceState: { ...state.sequenceState, limit: val }
        }));
    },
    setOffset: (val: number) => {
        set((state) => ({
            sequenceState: { ...state.sequenceState, offset: val }
        }));
    },
    currentTemplateIndexFnc: (index: number) => {
        set((state) => ({
            sequenceState: { ...state.sequenceState, currentTemplateIndex: index }
        }));
    },

    setDeclareVariable: (key: string, val: string) => {
        const { clearFieldError } = get();

        set((state) => ({
            sequenceState: {
                ...state.sequenceState,
                declareVariables: {
                    ...state.sequenceState?.declareVariables,
                    [key]: val,
                },
            },
        }));
        clearFieldError(key)

    },

    handleConditionData: (key: string, val: any, index: number) => {
        const { clearFieldError, getConditionData } = get();
        set((state) => {
            const conditions = [...state.sequenceState.conditions];
            if (typeof index === 'number') {
                conditions[index] = { ...conditions[index], [key]: val };
            }
            return {
                sequenceState: {
                    ...state.sequenceState,
                    conditions
                }
            };
        });
        if (key === 'condition_type' && val?.value) {
            getConditionData(val?.value, index);
        }
        clearFieldError(key);
    },

    addCondition: () => {
        set((state) => ({
            sequenceState: {
                ...state.sequenceState,
                conditions: [...state.sequenceState.conditions, {
                    condition_type: '',
                    condition_logic: '',
                    condition_value: ''

                }]
            }
        }));
    },


    handleDeleteCondition: (index: number) => {
        const { clearFieldError } = get();
        set((state) => {
            const conditions = [...state.sequenceState.conditions];
            conditions.splice(index, 1);
            return {
                sequenceState: {
                    ...state.sequenceState,
                    conditions
                }
            };
        });
        clearFieldError(`condition_${index}`);
    },


    handleBasicInfo: (key: any, val: any) => {
        const { clearFieldError } = get();
        if (key === 'days') {
            set((state: any) => ({
                sequenceState: {
                    ...state.sequenceState,
                    basicInfo: { ...state.sequenceState.basicInfo, [key]: val }
                },
            }));
            clearFieldError(key)
        }
        else {
            set((state) => ({
                sequenceState: {
                    ...state.sequenceState,
                    basicInfo: { ...state.sequenceState.basicInfo, [key]: val }
                }
            }));
            clearFieldError(key)
        }
    },

    handleTemplateData: (key: any, val: any, index: string | number) => {
        const { clearFieldError } = get();

        set((state) => {
            const templateData = [...state.sequenceState.templateData];
            if (typeof index === 'number') {
                templateData[index] = { ...templateData[index], [key]: val };
            }
            return {
                sequenceState: {
                    ...state.sequenceState,
                    templateData
                }
            };
        });
        clearFieldError(key)
    },

    addTemplate: (index?: any) => {
        set((state) => ({
            sequenceState: {
                ...state.sequenceState,
                templateData: [...state.sequenceState.templateData, {
                    template_id: '',
                    template_json: [],
                    duration_number: '',
                    duration_type: {
                        label: '',
                        value: ''
                    }
                }]
            }
        }));
    },

    handleDeleteTemplate: (index: number) => {
        const { clearFieldError } = get();
        set((state) => {
            const templateData = [...state.sequenceState.templateData];
            if (index >= 1 && index < templateData.length) {
                templateData.splice(index, 1);
            }
            return {
                sequenceState: {
                    ...state.sequenceState,
                    templateData
                }
            };
        });
        clearFieldError(`condition_${index}`);
    },

    handleDialogData: (key: any, val: any) => {
        set((state) => ({
            sequenceState: {
                ...state.sequenceState,
                dialogData: {
                    ...state.sequenceState?.dialogData,
                    [key]: val,
                },
            },
        }));
    },


    updateModalDataToStore: () => {
        const { sequenceState } = get();
        const { dialogData, templateData, currentTemplateIndex } = sequenceState;

        const copyTemplateData = JSON.parse(JSON.stringify(templateData))

        copyTemplateData[currentTemplateIndex].template_id = dialogData?.template_id
        copyTemplateData[currentTemplateIndex].template_json = dialogData?.template_json

        set({
            sequenceState: {
                ...sequenceState,
                templateData: copyTemplateData,
                currentTemplateIndex: null
            },
        });
    },




    // Get sequence data
    getSequenceData: async (val: any) => {
        const { sequenceState } = get();
        try {

            const sortItem = sequenceState?.sortValue === "A-Z" ? "asc" : sequenceState?.sortValue === "Z-A" ? "desc" : ""
            const params = queryString.stringify({
                search: val,
                sort: sortItem,
                limit: sequenceState?.limit,
                offset: sequenceState?.offset * sequenceState?.limit

            });

            const res = await httpRequest(
                "get",
                `${envConfig.api_url}/brand/sequences/get?${params}`,
                {},
                true
            );
            if (res?.data?.status === "200") {
                set({ sequenceState: { ...sequenceState, sequenceData: res?.data?.data ?? [] } });
                return res;
            }
        } catch (error: any) {
            console.log(error, "error");
            enqueueSnackbar(`${error?.response?.data?.message}`, {
                variant: "error",
                style: { fontSize: "1.2rem" },
            });
        }
    },
    // Delete sequence table data
    deleteSequenceData: async (id: string) => {
        const { getSequenceData } = get();
        try {
            const response = await httpRequest(
                "put",
                `${envConfig.api_url}/brand/sequences/delete`,
                { id: id },
                true
            )
            enqueueSnackbar(`${response?.data?.message}`, {
                variant: "success",
                style: { fontSize: "1.4rem" },
            });
            getSequenceData(null);
        } catch (error: any) {
            enqueueSnackbar(`${error?.response?.data?.message}`, {
                variant: "error",
                style: { fontSize: "1.4rem" },
            });
        }
    },


    // Get days data
    getDaysData: async () => {
        const { sequenceState } = get();
        try {

            const res = await httpRequest(
                "get",
                `${envConfig.api_url}/brand/sequences/master_days/get`,
                {},
                true
            );
            if (res?.data?.status === "200") {
                set((prev) => ({
                    sequenceState: {
                        ...prev.sequenceState,
                        daysData: res?.data?.data
                    }
                }))
            }
        } catch (error: any) {
            console.log(error, "error");
            enqueueSnackbar(`${error?.response?.data?.message}`, {
                variant: "error",
                style: { fontSize: "1.2rem" },
            });
        }
    },

    // Get duration data
    getDurationData: async () => {
        try {

            const res = await httpRequest(
                "get",
                `${envConfig.api_url}/brand/sequences/master_durations/get`,
                {},
                true
            );
            if (res?.data?.status === "200") {
                set((prev) => ({
                    sequenceState: {
                        ...prev.sequenceState,
                        durationData: res?.data?.data
                    }
                }))
                return res;
            }
        } catch (error: any) {
            console.log(error, "error");
            enqueueSnackbar(`${error?.response?.data?.message}`, {
                variant: "error",
                style: { fontSize: "1.2rem" },
            });
        }
    },

    // Get condition data
    getConditionData: async (val: any, index: number) => {
        const { sequenceState } = get();
        const { conditions } = sequenceState
        try {

            const params = queryString.stringify({
                search: '',
                type: val
            });

            const res = await httpRequest(
                "get",
                `${envConfig.api_url}/brand/sequences/master_conditions/get?${params}`,
                {},
                true
            );
            if (res?.data?.status === "200") {
                const copyConditions = JSON.parse(JSON.stringify(conditions))

                copyConditions[index].dropdownData = res?.data?.data ?? []
                set({
                    sequenceState: {
                        ...sequenceState,
                        conditions: copyConditions,
                    }
                });
                return res;
            }
        } catch (error: any) {
            console.log(error, "error");
            enqueueSnackbar(`${error?.response?.data?.message}`, {
                variant: "error",
                style: { fontSize: "1.2rem" },
            });
        }
    },

    createSequence: async () => {
        const { sequenceState } = get();
        const days = sequenceState?.basicInfo?.days?.map((val: any) => {
            return val?.value
        })

        const conditionValue = sequenceState?.conditions.map((item: any) => ({
            condition_type: item.condition_type.value,
            condition_logic: item.condition_logic.label,
            condition_value: item.condition_value.label
        }));

        const message: { template_id: any; template_json: any; duration: any; duration_type_id: any; }[] = []
        sequenceState?.templateData?.map((val: any) => {
            message?.push(
                {
                    "template_id": val?.template_id,
                    "template_json": val?.template_json?.template_json
                    ,
                    "duration": val?.duration_number,
                    "duration_type_id": val?.duration_type?.value
                }
            )
        })
        try {
            const payload = {
                name: sequenceState?.basicInfo?.name ?? '',
                delivery_days: days || [],
                is_match_all_conditions: sequenceState?.basicInfo?.is_match_all_conditions === 1 ? true : false,
                conditions: conditionValue,
                messages: message
            };
            const response = await httpRequest(
                "post",
                `${envConfig.api_url}/brand/sequences/add`,
                { ...payload },
                true
            );
            if (response) {
                enqueueSnackbar(`${response?.data?.message}`, {
                    variant: "success",
                    style: { fontSize: "1.2rem" },
                });
            }
            return response;
        } catch (error: any) {
            console.error("Error adding product:", error);
            enqueueSnackbar(`${error?.response?.data?.message}`, {
                variant: "error",
                style: { fontSize: "1.2rem" },
            });
            return error;
        }
    },



    clearField: () => {
        set((state) => ({
            sequenceState: {
                ...state.sequenceState,
                basicInfo: {
                    name: '',
                    is_match_all_conditions: 1,
                    days: {
                        label: '',
                        value: ''
                    },
                },
                messageData: {
                    template_id: '',
                    template_json: [],
                    duration_number: '',
                    duration_type: {
                        label: '',
                        value: ''
                    }
                },
                conditions: [{
                    condition_type: "",
                    condition_logic: "",
                    condition_value: ""
                }],
                declareVariables: {
                    customerName: "",
                    offerName: "",
                    maxPurchaseAmount: "",
                },
                templateData: [{
                    template_id: '',
                    template_json: [],
                    duration_number: '',
                    duration_type: {
                        label: '',
                        value: ''
                    }
                }],
            },

            error: {}
        }));
    },
    clearDialog: () => {
        set((state) => ({
            sequenceState: {
                ...state.sequenceState,
                dialogData: {
                    template_id: '',
                    template_json: [],
                },
                currentTemplateIndex: null,
                declareVariables: {
                    customerName: "",
                    offerName: "",
                    maxPurchaseAmount: "",
                },
            },

            error: {}
        }));
    }

}))