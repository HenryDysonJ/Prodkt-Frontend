import { envConfig } from "@core/envconfig";
import { httpRequest } from "@core/utils/api/axios";
import { enqueueSnackbar } from "notistack";
import queryString from "query-string";
import { create } from "zustand";

import { ListOption, WebFormStore } from "./interface";

export const useBrandWebForm = create<WebFormStore>((set, get) => ({
  isLoading: false,

  offset: 0,

  limit: 5,

  searchValue: "",

  sortItem: "",

  changemodule: false,

  dropDownValue: "",

  statusMuduleList: [],

  drpDownOptions: [],

  webformsLists: [],

  modudlelist: [],

  selectedStatus: [],

  initialComponents: [],

  updateComponents: [],

  webFormmMaster: [],

  addComponetInfo: {
    id: 0,
    updateId: "",
    componentType: {
      label: "",
      icon: undefined,
      id: 0,
    },
    isMandatory: false,
    questions: "",
    componetVal: null,
  },

  formBasicInfo: {
    formName: "",
    formCategory: {
      label: "",
      value: "",
    },
  },

  chooseFormCategory: {
    label: "",
    value: "",
  },
  isPrimary: false,
  setLoading: (val: boolean) => {
    set({ isLoading: val });
  },

  setValueHandlePreviewForms: (key: any, i: number, val: any) => {
    const { updateComponents } = get();
    const updateIndex = updateComponents?.findIndex(
      (item) => item.updateId === i
    );
    updateComponents[updateIndex][key] = val;
    set({ updateComponents: updateComponents });
  },

  setDefaultProduct: (data: { lable: string }[]) => {
    set((state) => {
      state.drpDownOptions = data as [];
      return state;
    });
  },

  setHandleAddDropDownVal: (key: string, updateId: number) => {
    const { dropDownValue, updateComponents, drpDownOptions } = get();
    const updateIndex = updateComponents?.findIndex(
      (item) => item.updateId === updateId
    );

    const tempDrpDownOptions = [...drpDownOptions,{ label: dropDownValue }];
    updateComponents[updateIndex][key] = tempDrpDownOptions;

    set((state) => {
      state.drpDownOptions = tempDrpDownOptions;
      state.updateComponents = updateComponents;
      state.dropDownValue = "";
      return state;
    });
  },

  setHandleDeleteDropItem: (indx: number, id: any) => {
    const { updateComponents } = get();
    const updatedComponents = updateComponents?.map((item: any) => {
      if (item.updateId === id) {
        const updatedDropDownOptions = item.dropDownOption.filter(
          (item: any, i: number) => i !== indx
        );
        return {
          ...item,
          dropDownOption: updatedDropDownOptions,
        };
      }
      return item;
    });
    set({ updateComponents: updatedComponents });
  },

  setHandleAddDropVal: (val: string) => {
    set({ dropDownValue: val });
  },

  setHandleAddComponents: (item: ListOption, ids: number) => {
    set((prev) => ({
      updateComponents: [
        ...prev.updateComponents,
        {
          id: ids,
          updateId: new Date().toISOString(),
          componentType: {
            id: item?.id,
            icon: item?.icon,
            label: item?.label,
          },
          isMandatory: false,
          questions: "",
          initials: false,
        },
      ],
    }));
  },

  setHandleInitialComponents: (item: any) => {
    set({ initialComponents: item });
  },

  setHandleUpdateComponents: (item: any) => {
    set({ updateComponents: item });
  },

  setHandleDeleteComponents: (ids: number) => {
    const { updateComponents } = get();
    const deleted = updateComponents?.filter(
      (item: any, i: number) => i !== ids
    );
    set({ updateComponents: deleted });
  },

  setHandleSelectForm: (val: any) => {
    set({ chooseFormCategory: val });
  },

  setHandleAddComponetInfo: (key: any, i: number, val: any) => {
    const { updateComponents } = get();
    const updateIndex = updateComponents?.findIndex(
      (item) => item.updateId === i
    );
    updateComponents[updateIndex][key] = val;
    set({ updateComponents: updateComponents });
  },

  setLimit: (val: number) => {
    set({ limit: val, offset: 0 });
  },

  setOffset: (val: number) => {
    set({ offset: val });
  },

  setHandleSearch: (val: string) => {
    set({ searchValue: val, offset: 0 });
  },

  setSelectedStatus: (value: any) => {
    set({ selectedStatus: value });
  },

  setHandleBasicInfo: (key: string, val: any) => {
    set((prev) => ({
      formBasicInfo: {
        ...prev.formBasicInfo,
        [key]: val,
      },
    }));
  },

  sethandleSortItem: (item: string) => {
    set({ sortItem: item });
  },

  setEditBrandWebForm: (id: string) => {
    const { webformsLists } = get();
    const findEditForm = webformsLists?.data?.rows?.find(
      (item: any) => item?.id === id
    );
    set({
      formBasicInfo: {
        formCategory: {
          label: findEditForm?.category?.name,
          value: findEditForm?.category?.id,
        },
        formName: findEditForm?.name,
      },
      updateComponents: findEditForm?.webform?.listForm,
    });
  },

  getWebFormMaster: async () => {
    try {
      await httpRequest(
        "get",
        `${envConfig.api_url}/brand/webforms/master-list`,
        {},
        true
      )
        .then((res) => {
          set({ webFormmMaster: res?.data?.data });
        })
        .catch((err) => {
          console.log(err, "err");
        });
    } catch (refreshLoading) {
      console.log(refreshLoading, "refreshLoading");
      set({});
    }
  },

  getWebFormList: async () => {
    const {
      offset,
      limit,
      sortItem,
      searchValue,
      selectedStatus,
      chooseFormCategory,
    } = get();
    try {
      const status = selectedStatus?.map((item) => item?.value);
      const sortValue =
        sortItem === "A-Z" ? "asc" : sortItem === "Z-A" ? "desc" : "";

      const params = queryString.stringify(
        {
          status: status?.length ? JSON.stringify(status) : undefined,
          sort: sortValue,
          offset: offset * limit,
          limit: limit,
          search: searchValue,
          category_id: chooseFormCategory?.value,
        },
        { skipNull: true, skipEmptyString: true }
      );
      await httpRequest(
        "get",
        `${envConfig.api_url}/brand/webforms/list?${params}`,
        {},
        true
      )
        .then((res) => {
          set({ webformsLists: res?.data });
        })
        .catch((err) => {
          console.log(err, "err");
        });
    } catch (refreshLoading) {
      console.log(refreshLoading, "refreshLoading");
      set({});
    }
  },

  getWebFormModuleList: async () => {
    try {
      await httpRequest(
        "get",
        `${envConfig.api_url}/brand/modules/list`,
        {},
        true
      )
        .then((res) => {
          set({ modudlelist: res?.data?.data?.rows });
        })
        .catch((err) => {
          console.log(err, "err");
        });
    } catch (refreshLoading) {
      console.log(refreshLoading, "refreshLoading");
      set({});
    }
  },

  getWebFormStatusList: async () => {
    try {
      await httpRequest("get", `${envConfig.api_url}/status/list`, {}, true)
        .then((res) => {
          set({ statusMuduleList: res?.data?.data?.rows });
        })
        .catch((err) => {
          console.log(err, "err");
        });
    } catch (refreshLoading) {
      console.log(refreshLoading, "refreshLoading");
      set({});
    }
  },

  addBrandWebForms: async (status: number) => {
    const { formBasicInfo, updateComponents, changemodule } = get();
    let resStatus;

    try {
      const payload = {
        name: formBasicInfo?.formName,
        category_id: formBasicInfo?.formCategory?.value,
        status: status,
        form: {
          listForm: updateComponents,
        },
      };

      await httpRequest(
        "post",
        `${envConfig.api_url}/brand/webforms/add`,
        { ...payload },
        true
      )
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: "success",
            style: { fontSize: "1.2rem" },
          });
          set({ changemodule: !changemodule });
          get().clearAll();
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

  dublicateBrandWebForms: async (id: string) => {
    const { changemodule } = get();
    try {
      const payload: object = {
        id: id,
      };

      await httpRequest(
        "post",
        `${envConfig.api_url}/brand/webforms/dublicate`,
        { ...payload },
        true
      )
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: "success",
            style: { fontSize: "1.2rem" },
          });
          set({ changemodule: !changemodule });
          get().getWebFormList();
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
  },

  updateBrandWebForm: async (id: string, status: number) => {
    const { formBasicInfo, updateComponents, changemodule } = get();
    let resStats;
    try {
      const payload: any = {
        id: id,
        status: status,
      };

      if (formBasicInfo?.formName) {
        payload.name = formBasicInfo?.formName;
      }

      if (formBasicInfo?.formCategory?.value) {
        payload.category_id = formBasicInfo?.formCategory?.value;
      }

      if (updateComponents) {
        payload.form = { listForm: updateComponents };
      }

      await httpRequest(
        "put",
        `${envConfig.api_url}/brand/webforms/edit`,
        { ...payload },
        true
      )
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: "success",
            style: { fontSize: "1.4rem" },
          });
          set({ changemodule: !changemodule });
          get().getWebFormList();
          get().clearAll();
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

  deleteWebFormStatus: async (id: string, stats: number) => {
    const { changemodule } = get();
    let resStats;
    try {
      const payload = {
        id: id,
        status: stats,
      };
      await httpRequest(
        "put",
        `${envConfig.api_url}/brand/webforms/delete`,
        { ...payload },
        true
      )
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: "success",
            style: { fontSize: "1.4rem" },
          });
          set({ changemodule: !changemodule });
          get().getWebFormList();
          console.log(res);

          return (resStats = res?.data?.status);
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

  clearFIlter: () => {
    set({
      selectedStatus: [],
      chooseFormCategory: {
        label: "",
        value: "",
      },
    });
  },

  clearAll: () => {
    set({
      dropDownValue: "",
      updateComponents: [],
      formBasicInfo: {
        formName: "",
        formCategory: {
          label: "",
          value: "",
        },
      },
    });
  },
}));
