
import { envConfig } from "@core/envconfig";
import { httpRequest } from "@core/utils/api/axios";
import { enqueueSnackbar } from "notistack";
import { create } from "zustand";
import { IroleMappingStore } from "./interface";
import queryString from "query-string";

export const useroleMappingStore = create<IroleMappingStore>((set, get) => ({
    roleMappingState: {
        offset: 0,
        limit: 5,
        searchRole: '',
        roleMapData: [],
        addRole: {
            name: '',
            mobileNo: {
                mobile: "",
                mobileCode: "+91",
            },
            email: '',
            role: {
                label: '',
                value: ''
            },
            status: false,
            id: ''
        }
    },
    type: '',
    loading: true,
    error: false,

    setType: (val: any) => {
        set({ type: val });
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

    setHandleSearch: (val: string) => {
        const { getRoleMapData } = get()

        set((state) => ({
            roleMappingState: { ...state.roleMappingState, searchRole: val, offset: 0 }
        }));
        getRoleMapData(val)

    },
    setLimit: (val: number) => {
        set((state) => ({
            roleMappingState: { ...state.roleMappingState, limit: val }
        }));
    },
    setOffset: (val: number) => {
        set((state) => ({
            roleMappingState: { ...state.roleMappingState, offset: val }
        }));
    },

    // view Role map data
    setViewUserData: (viewData: any) => {
        const { clearFieldError } = get();

        set((state) => ({
            roleMappingState: {
                ...state.roleMappingState,
                addRole: {
                    name: viewData?.user_name ?? '',
                    mobileNo: {
                        mobile: viewData?.mobile_no ?? '',
                        mobileCode: "+91",
                    },
                    email: viewData?.email_id,
                    role: {
                        label: viewData?.idm_role_name,
                        value: viewData?.idm_role_id
                    },
                    status: viewData?.is_active,
                    id: viewData?.id
                }
            },
            type: "view",
        }));
        clearFieldError(viewData)
    },


    setEditData: (editData: any) => {
        const { clearFieldError } = get();

        set((state) => ({
            roleMappingState: {
                ...state.roleMappingState,
                addRole: {
                    name: editData?.user_name ?? '',
                    mobileNo: {
                        mobile: editData?.mobile_no ?? '',
                        mobileCode: "+91",
                    },
                    email: editData?.email_id,
                    role: {
                        label: editData?.idm_role_name,
                        value: editData?.idm_role_id
                    },
                    status: editData?.is_active,
                    id: editData?.id
                }
            },
            type: "edit",
        }));
        clearFieldError(editData)
    },

    handleRoleData: (key: string, val: any) => {
        const { clearFieldError } = get();
        if (key === "role") {
            set((state: any) => ({
                roleMappingState: {
                    ...state.roleMappingState,
                    addRole: { ...state.roleMappingState.addRole, [key]: val?.value }
                }
            }));
            clearFieldError(key);
        } else
            set((state) => ({
                roleMappingState: {
                    ...state.roleMappingState,
                    addRole: { ...state.roleMappingState.addRole, [key]: val }
                }
            }));
        clearFieldError(key)
    },

    // Get role map data
    getRoleMapData: async (val: any) => {
        const { roleMappingState } = get();
        try {
            const params = queryString.stringify({
                search: val,
                limit: roleMappingState?.limit,
                offset: roleMappingState?.offset * roleMappingState?.limit
            });

            const res = await httpRequest(
                "get",
                `${envConfig.api_url}/brand/user_management/user/list?${params}`,
                {},
                true
            );
            if (res?.data?.status === "200") {
                set({ roleMappingState: { ...roleMappingState, roleMapData: res?.data?.data ?? [] } });
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

    // Add user
    addUser: async () => {
        const { roleMappingState, getRoleMapData } = get();
        debugger
        try {
            const payload = {
                name: roleMappingState?.addRole?.name ?? '',
                mobile_code: roleMappingState?.addRole?.mobileNo?.mobileCode ?? '',
                mobile_no: roleMappingState?.addRole?.mobileNo?.mobile,
                email_id: roleMappingState?.addRole?.email,
                idm_role_id: roleMappingState?.addRole?.role?.id,
                is_active: roleMappingState?.addRole?.status
            }

            const response = await httpRequest(
                "post",
                `${envConfig.api_url}/brand/user_management/user/add`,
                { ...payload },
                true
            );
            if (response) {
                enqueueSnackbar(`${response?.data?.message}`, {
                    variant: "success",
                    style: { fontSize: "1.2rem" },
                });
            }
            getRoleMapData()
            return response;
        } catch (error: any) {
            console.error("Error adding uset:", error);
            enqueueSnackbar(`${error?.response?.data?.message}`, {
                variant: "error",
                style: { fontSize: "1.2rem" },
            });
            return error;
        }
    },

    editRole: async () => {
        const { roleMappingState, getRoleMapData } = get();

        try {
            const payload = {
                id: roleMappingState?.addRole?.id ?? '',
                name: roleMappingState?.addRole?.name ?? '',
                // mobile_code: roleMappingState?.addRole?.mobileNo?.mobileCode ?? '',
                // mobile_no: roleMappingState?.addRole?.mobileNo?.mobile,
                email_id: roleMappingState?.addRole?.email ?? '',
                idm_role_id: roleMappingState?.addRole?.role?.id ?? '',
                is_active: roleMappingState?.addRole?.status ?? ''
            }
            const response = await httpRequest(
                "put",
                `${envConfig.api_url}/brand/user_management/user/update`,
                { ...payload },
                true
            );

            getRoleMapData()
            if (response) {
                enqueueSnackbar(`${response?.data?.message}`, {
                    variant: "success",
                    style: { fontSize: "1.2rem" },
                });
            }
            return response;
        } catch (error: any) {
            console.error("Error editing permission:", error);
            enqueueSnackbar(`${error?.response?.data?.message}`, {
                variant: "error",
                style: { fontSize: "1.2rem" },
            });
            return error;
        }
    },


    clearField: () => {
        set((state) => ({
            roleMappingState: {
                ...state.roleMappingState,

                addRole: {
                    name: '',
                    mobileNo: {
                        mobile: "",
                        mobileCode: "+91",
                    },
                    email: '',
                    role: {
                        label: '',
                        value: ''
                    },
                    status: false,
                    id: ''
                }
            },

            error: {}
        }));
    }

}))