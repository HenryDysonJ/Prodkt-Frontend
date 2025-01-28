
import { envConfig } from "@core/envconfig";
import { httpRequest } from "@core/utils/api/axios";
import { enqueueSnackbar } from "notistack";
import { create } from "zustand";
import { IuserManagementStore } from "./interface";
import queryString from "query-string";

export const userManagementStore = create<IuserManagementStore>((set, get) => ({
    userManagementState: {
        offset: 0,
        limit: 5,
        searchRole: '',
        repositoryData: [],
        getPermissionCheckData: [],
        selectedPermissionId: '',
        permissionData: [],
        permissionDetailData: [],
        roleData: [],
        permissionField: {
            name: '',
            description: '',
            status: false,
            permission_id: '',
            data: []
        },
        addRole: {
            roleName: '',
            description: '',
            permission: {
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
        const { getRoleData } = get()
        set((state) => ({
            userManagementState: { ...state.userManagementState, searchRole: val, offset: 0 }
        }));
        getRoleData(val)
    },
    setLimit: (val: number) => {
        set((state) => ({
            userManagementState: { ...state.userManagementState, limit: val }
        }));
    },
    setOffset: (val: number) => {
        set((state) => ({
            userManagementState: { ...state.userManagementState, offset: val }
        }));
    },
    userStateUpdate: (key: any, value: any) => {
        const { userManagementState } = get();
        set({
            userManagementState: {
                ...userManagementState,
                [key]: value,
            },
        });
    },
    setPermissionData: (key: string, val: string | boolean) => {
        const { clearFieldError } = get();
        set((state) => ({
            userManagementState: {
                ...state.userManagementState,
                permissionField: { ...state.userManagementState.permissionField, [key]: val }
            }
        }));
        clearFieldError(key)
    },

    setAddRole: (key: string, val: any) => {
        const { clearFieldError } = get();
        if (key === 'permission') {
            set((state: any) => ({
                userManagementState: {
                    ...state.userManagementState,
                    addRole: { ...state.userManagementState.addRole, [key]: val }
                },
            }));
            clearFieldError(key)
        }
        else {
            set((state) => ({
                userManagementState: {
                    ...state.userManagementState,
                    addRole: { ...state.userManagementState.addRole, [key]: val }
                }
            }));
            clearFieldError(key)
        }
    },


    setEditData: (editData: any) => {
        const { clearFieldError } = get();
        set((state) => ({
            userManagementState: {
                ...state.userManagementState,
                permissionField: {
                    name: editData?.name ?? '',
                    description: editData?.description,
                    status: editData?.is_active,
                    permission_id: editData?.id

                }
            },
            type: "edit",
        }));
        clearFieldError(editData)
    },
    // Set Role data
    setEditRoleData: (editData: any) => {

        const { clearFieldError } = get();
        const permissionId = editData?.role_permission_mappings?.map((val: any) => ({
            label: val?.permission?.name,
            value: val?.permission?.id,
        }));
        set((state) => ({
            userManagementState: {
                ...state.userManagementState,
                addRole: {
                    id: editData?.id,
                    roleName: editData?.name ?? '',
                    description: editData?.description ?? '',
                    permission: permissionId,
                    status: editData?.is_active ?? false,

                }
            },
            type: "edit",
        }));
        clearFieldError(editData)
    },

    // Set Role data
    setViewRoleData: (editData: any) => {
        const { clearFieldError } = get();
        const permissionId = editData?.role_permission_mappings?.map((val: any) => ({
            label: val?.permission?.name,
            value: val?.permission?.id,
        }));
        set((state) => ({
            userManagementState: {
                ...state.userManagementState,
                addRole: {
                    id: editData?.id,
                    roleName: editData?.name ?? '',
                    description: editData?.description ?? '',
                    permission: permissionId,
                    status: editData?.is_active ?? false,
                }
            },
            type: "view",
        }));
        clearFieldError(editData)
    },

    // Get repository
    getRepositoryData: async () => {
        const { userManagementState } = get();
        try {

            const res = await httpRequest(
                "get",
                `${envConfig.api_url}/brand/user_management/repository/get`,
                {},
                true
            );
            if (res?.data?.status === "200") {
                set({ userManagementState: { ...userManagementState, repositoryData: res?.data?.data?.data ?? [] } });
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

    // Get permisson data
    getPermissionData: async () => {
        const { userManagementState } = get();
        try {

            const res = await httpRequest(
                "get",
                `${envConfig.api_url}/brand/user_management/permission/get`,
                {},
                true
            );
            if (res?.data?.status === "200") {
                set({
                    userManagementState: {
                        ...userManagementState, permissionData: res?.data?.data?.data ?? [],
                        // permissionDetailData: res?.data?.data?.data?.[3]?.data?.data ?? []
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
    // Add permission
    addPermission: async () => {
        const { userManagementState, getPermissionData } = get();
        try {
            const payload = {
                name: userManagementState?.permissionField?.name ?? '',
                data: { data: [...userManagementState?.repositoryData?.[0]?.data] },
                description: userManagementState?.permissionField?.description ?? '',
                repoId: userManagementState?.repositoryData?.[0]?.id ?? '',
                isActive: userManagementState?.permissionField?.status
            }

            const response = await httpRequest(
                "post",
                `${envConfig.api_url}/brand/user_management/permission/add`,
                { ...payload },
                true
            );
            if (response) {
                enqueueSnackbar(`${response?.data?.message}`, {
                    variant: "success",
                    style: { fontSize: "1.2rem" },
                });
            }
            getPermissionData()
            return response;
        } catch (error: any) {
            console.error("Error adding permission:", error);
            enqueueSnackbar(`${error?.response?.data?.message}`, {
                variant: "error",
                style: { fontSize: "1.2rem" },
            });
            return error;
        }
    },
    // Update  permission access
    updatePermission: async () => {
        //   debugger
        const { userManagementState, getPermissionData } = get()
        try {
            const payload = {
                permission_id: userManagementState?.selectedPermissionId,
                data: { data: userManagementState?.permissionField?.data },
                isActive: userManagementState?.permissionField?.status
            }
            const response = await httpRequest(
                "put",
                `${envConfig.api_url}/brand/user_management/permission/update`,
                { ...payload },
                true
            );

            getPermissionData()
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


    // Add Role
    createRole: async () => {
        const { userManagementState, getRoleData } = get();
        const permissionIds = userManagementState?.addRole?.permission?.map((val: { value?: { value?: string } }) => val?.value) ?? [];

        try {
            const payload = {
                name: userManagementState?.addRole?.roleName,
                permissions: permissionIds,
                description: userManagementState?.addRole?.description,
                isActive: userManagementState?.addRole?.status
            }

            const response = await httpRequest(
                "post",
                `${envConfig.api_url}/brand/user_management/role/add`,
                { ...payload },
                true
            );
            if (response) {
                enqueueSnackbar(`${response?.data?.message}`, {
                    variant: "success",
                    style: { fontSize: "1.2rem" },
                });
            }
            getRoleData()
            return response;
        } catch (error: any) {
            console.error("Error adding permission:", error);
            enqueueSnackbar(`${error?.response?.data?.message}`, {
                variant: "error",
                style: { fontSize: "1.2rem" },
            });
            return error;
        }
    },

    // Edit permission Data
    editPermission: async () => {
        const { userManagementState, getPermissionData } = get()
        try {
            const payload = {
                permission_id: userManagementState?.permissionField?.permission_id,
                name: userManagementState?.permissionField?.name,
                description: userManagementState?.permissionField?.description,
                is_active: userManagementState?.permissionField?.status
            }
            const response = await httpRequest(
                "put",
                `${envConfig.api_url}/brand/user_management/permission/edit`,
                { ...payload },
                true
            );

            getPermissionData()
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
    // Edit Role Data
    editRole: async () => {
        const { userManagementState, getRoleData } = get()
        const permissionId = userManagementState?.addRole?.permission?.map((val: { value?: { value?: string } }) => val?.value) ?? [];

        try {
            const payload = {
                roleId: userManagementState?.addRole?.id,
                permissions: permissionId,
                name: userManagementState?.addRole?.roleName,
                description: userManagementState?.addRole?.description,
                isActive: userManagementState?.addRole?.status
            }
            const response = await httpRequest(
                "put",
                `${envConfig.api_url}/brand/user_management/role/update`,
                { ...payload },
                true
            );

            getRoleData()
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


    // Get role data
    getRoleData: async (val: any) => {

        const { userManagementState } = get();
        try {
            const params = queryString.stringify({
                search: val,
                limit: userManagementState?.limit,
                offset: userManagementState?.offset * userManagementState?.limit
            });

            const res = await httpRequest(
                "get",
                `${envConfig.api_url}/brand/user_management/role/get?${params}`,
                {},
                true
            );
            if (res?.data?.status === "200") {
                set({ userManagementState: { ...userManagementState, roleData: res?.data?.data?.data ?? [] } });
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
    // Delete permission API
    deletePermissionData: async (id: string) => {
        const { getPermissionData } = get();
        try {
            const response = await httpRequest(
                "put",
                `${envConfig.api_url}/brand/user_management/permission/delete`,
                { permissionId: id },
                true
            )
            enqueueSnackbar(`${response?.data?.message}`, {
                variant: "success",
                style: { fontSize: "1.4rem" },
            });
            getPermissionData();

        } catch (error: any) {
            enqueueSnackbar(`${error?.response?.data?.message}`, {
                variant: "error",
                style: { fontSize: "1.4rem" },
            });
        }
    },

    clearPermissionField: () => {
        set((state) => ({
            userManagementState: {
                ...state.userManagementState,
                permissionField: {
                    name: '',
                    description: '',
                    status: false,
                    permission_id: '',
                    data: []
                },
                addRole: {
                    id: '',
                    roleName: '',
                    description: '',
                    permission: {
                        label: '',
                        value: ''
                    },
                    status: false,
                },
            },

            error: {}
        }));
    }

}))