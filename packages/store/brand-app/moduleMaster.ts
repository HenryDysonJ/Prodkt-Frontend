import { envConfig } from "@core/envconfig";
import { httpRequest } from "@core/utils/api/axios";
import { enqueueSnackbar } from "notistack";
import queryString from "query-string";
import { create } from "zustand";

import { Modulemasters } from "./interface";

export const useModuleMasters = create<Modulemasters>((set, get) => ({
  error: "",

  offset: 0,

  limit: 5,

  search: "",

  sortItem: "",

  moduleName: "",

  webFormId: "",

  formCategoryId: null,

  moduleList: {
    rows: [],
    count: 0,
  },

  moduleDatasList: {
    rows: [],
    count: 0,
  },

  WebformResponseList: {
    webformResponseData: [],
    count: 0,
  },

  exportData: '',
  importData: '',

  setWebFormId: (id: string) => {
    set({ webFormId: id });
  },

  setError: (Eror: string) => {
    set({ error: Eror });
  },

  setLimit: (val: number) => {
    set({ limit: val });
  },

  setOffset: (val: number) => {
    set({ offset: val });
  },

  setHandleSearch: (val: string) => {
    set({ search: val, offset: 0 });
  },

  sethandleSortItem: (item: string) => {
    set({ sortItem: item });
  },

  setModuleName: (val: string) => {
    set({ moduleName: val, error: "" });
  },

  addNewModule: async () => {
    const { moduleName } = get();
    let resStatus;

    try {
      const payload = {
        name: moduleName,
      };

      await httpRequest(
        "post",
        `${envConfig.api_url}/brand/modules/add`,
        { ...payload },
        true
      )
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: "success",
            style: { fontSize: "1.2rem" },
          });
          get().getModuleMasterList();
          return (resStatus = res?.status);
        })
        .catch((err) => {
          enqueueSnackbar(`${err?.response?.data?.message}`, {
            variant: "error",
            style: { fontSize: "1.2rem" },
          });
        });
    } catch (error) {
      enqueueSnackbar("Oops! Something went wrong unable to send OTP", {
        variant: "error",
        style: { fontSize: "1.2rem" },
      });
    }
    return resStatus;
  },

  deleteModule: async (delId: number) => {
    let resStats;

    try {
      const payload = {
        id: delId,
      };
      await httpRequest(
        "put",
        `${envConfig.api_url}/brand/modules/delete`,
        { ...payload },
        true
      )
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: "success",
            style: { fontSize: "1.4rem" },
          });
          get().getModuleMasterList();
          return (resStats = res?.status);
        })
        .catch((err) => {
          enqueueSnackbar(`${err?.response?.data?.message}`, {
            variant: "error",
            style: { fontSize: "1.4rem" },
          });
        });
    } catch (error) {
      enqueueSnackbar("Oops! Something went wrong unable to send OTP", {
        variant: "error",
        style: { fontSize: "1.4rem" },
      });
    }
    return resStats;
  },

  getModuleMasterList: async () => {
    const { sortItem, search } = get();
    try {
      const sortValue =
        sortItem === "A-Z" ? "asc" : sortItem === "Z-A" ? "desc" : "";

      const params = queryString.stringify(
        {
          search: search,
          sort: sortValue,
        },
        { skipNull: true, skipEmptyString: true }
      );
      await httpRequest(
        "get",
        `${envConfig.api_url}/brand/modules/list?${params}`,
        {},
        true
      )
        .then((res) => {
          set({ moduleList: res?.data?.data });
        })
        .catch((err) => {
          console.log(err, "err");
        });
    } catch (refreshLoading) {
      console.log(refreshLoading, "refreshLoading");
      set({});
    }
  },

  addModuleListDatas: async (webform_id, formCategoryId, forms) => {
    let resStatus;

    try {
      const payload = {
        module_id: formCategoryId,
        webform_id: webform_id,
        value_json: {
          formDataList: forms,
        },
      };

      await httpRequest(
        "post",
        `${envConfig.api_url}/brand/modules/add_module_data`,
        { ...payload },
        true
      )
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: "success",
            style: { fontSize: "1.2rem" },
          });
          get().getModuleListDatas(formCategoryId);
          return (resStatus = res?.status);
        })
        .catch((err) => {
          enqueueSnackbar(`${err?.response?.data?.message}`, {
            variant: "error",
            style: { fontSize: "1.2rem" },
          });
        });
    } catch (error) {
      enqueueSnackbar("Oops! Something went wrong unable to send OTP", {
        variant: "error",
        style: { fontSize: "1.2rem" },
      });
    }
    return resStatus;
  },

  getModuleListDatas: async (formCategoryId) => {
    const { sortItem, search } = get();
    try {
      const sortValue =
        sortItem === "A-Z" ? "asc" : sortItem === "Z-A" ? "desc" : "";

      const params = queryString.stringify(
        {
          module_id: formCategoryId,
        },
        { skipNull: true, skipEmptyString: true }
      );
      await httpRequest(
        "get",
        `${envConfig.api_url}/brand/modules/list_module_data?${params}`,
        {},
        true
      )
        .then((res) => {
          set({ moduleDatasList: res?.data?.data });
        })
        .catch((err) => {
          console.log(err, "err");
        });
    } catch (refreshLoading) {
      console.log(refreshLoading, "refreshLoading");
      set({});
    }
  },

  getWebformResponseList: async (formId) => {
    try {
      const params = queryString.stringify(
        {
          webform_id: formId,
          offset: 0,
          limit: 5,
        },
        { skipNull: true, skipEmptyString: true }
      );
      const res = await httpRequest(
        "get",
        `${envConfig.api_url}/brand/webforms/response-list?${params}`,
        {},
        true
      );
      if (res?.data?.status === "200") {
        set({
          WebformResponseList: {
            webformResponseData:
              Array.isArray(res.data?.data?.webformResponseData) &&
                res.data?.data?.webformResponseData?.length > 0
                ? res.data?.data?.webformResponseData
                : [],
            count: res?.data?.data?.count ?? 0,
          },
        });
      }
    } catch (refreshLoading) {
      console.log(refreshLoading, "refreshLoading");
      set({});
    }
  },

  getWebformExportModule: async (formId: any) => {
    try {
      const params = queryString.stringify(
        {
          webform_id: formId,
        },
        { skipNull: true, skipEmptyString: true }
      );
      const res = await httpRequest(
        "get",
        `${envConfig.api_url}/brand/webforms/export_module_data?${params}`,
        {},
        true
      );
      if (res?.data?.status === "200") {
        set({
          exportData: res?.data?.data?.url ?? '',
        });
      }
    } catch (refreshLoading) {
      console.log(refreshLoading, "refreshLoading");
      set({});
    }
  },

  getWebformImportModule: async (formId: any) => {
    try {
      const params = queryString.stringify(
        {
          webform_id: formId,
        },
        { skipNull: true, skipEmptyString: true }
      );
      const res = await httpRequest(
        "get",
        `${envConfig.api_url}/brand/webforms/get_download_template?${params}`,
        {},
        true
      );
      if (res?.data?.status === "200") {
        set({
          importData: res?.data?.data?.url ?? ''
          });        
      }
    } catch (refreshLoading) {
      console.log(refreshLoading, "refreshLoading");
      set({});
    }
  },

  clearAll: () => {
    set({
      search: "",
      moduleName: "",
    });
  },
}));
