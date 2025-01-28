import { envConfig } from "@core/envconfig";
import { httpRequest } from "@core/utils/api/axios";
import moment from "moment";
import { enqueueSnackbar } from "notistack";
import queryString from "query-string";
import { create } from "zustand";

import { BroadCastMessage } from "./interface";

export const useBroadCastMessage = create<BroadCastMessage>((set, get) => ({
  broadCasteState: {
    offset: 0,
    limit: 5,
    search: "",
    sortItem: "",
    selectTags: [],
    id: '',
    statusId: {},
    sheduleAndPublish: {
      deliveryType: 'Immediate',
      startDate: "",
      startTime: ""
    },
    selectTemplates: {
      broadcastName: "",
      searchTemplate: "",
      templates: {},
      template_json: []
    },
    templateId: '',
    selectCustomer: {
      tags: {
        label: "",
        value: "",
      },
      selectedTags: [],
    },
    broadCastList: {},
    broadCastView: {},
    templatesList: []

  },
  error: {},

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

  setLimit: (val: number) => {
    set((state) => ({
      broadCasteState: { ...state.broadCasteState, limit: val }
    }));
  },
  setOffset: (val: number) => {
    set((state) => ({
      broadCasteState: { ...state.broadCasteState, offset: val }
    }));
  },
  setHandleSearch: (val: string) => {
    set((state) => ({
      broadCasteState: { ...state.broadCasteState, search: val, offset: 0 }
    }));
  },
  sethandleSortItem: (item: string) => {
    set((state) => ({
      broadCasteState: { ...state.broadCasteState, sortItem: item }
    }));
  },
  setHandleSelectTag: (key, val) => {
    const { clearFieldError } = get();

    set((state) => ({
      broadCasteState: {
        ...state.broadCasteState,
        [key]: val
      }
    }));
    clearFieldError(key);
  },

  setSelectTemplates: (key: string, val: string | boolean) => {
    // debugger
    const { clearFieldError } = get();
    if (key === 'templates' || key === 'broadcastName') {
      set((state) => ({
        broadCasteState: {
          ...state.broadCasteState,
          selectTemplates: { ...state.broadCasteState.selectTemplates, [key]: val }
        }
      }));
    } else {
      set((state) => ({
        broadCasteState: {
          ...state.broadCasteState, [key]: val
        }
      }));
    }
    clearFieldError(key)
  },

  setScheduleAndPublish: (key: string, val: string | boolean) => {
    const { clearFieldError } = get();
    set((state) => ({
      broadCasteState: {
        ...state.broadCasteState,
        sheduleAndPublish: { ...state.broadCasteState.sheduleAndPublish, [key]: val }
      }
    }));
    clearFieldError(key)
  },

  // Add broadcast API
  addBroadcast: async (status_id: number | string) => {
    const { broadCasteState } = get();
    const customerTag = broadCasteState?.selectTags?.map((val) => {
      return val ? { id: val.value, label: val.label } : null;
    }) || [];

    const customerTagIds = customerTag.map(tag => tag?.id).filter(id => id !== null);

    const templateJson = broadCasteState?.selectTemplates?.templates?.id
    const now = new Date();
    try {
      const payload = {
        name: broadCasteState?.selectTemplates?.broadcastName,
        template_id: templateJson,
        status_id: broadCasteState?.sheduleAndPublish?.deliveryType === 'Scheduled' ? 9 : status_id,
        template_json:
          [
            ...(broadCasteState?.selectTemplates?.templates?.title?.length > 0 ? [{
              "type": "HEADER",
              "format": "TEXT",
              "text": broadCasteState?.selectTemplates?.templates?.title,
              "example": {
                "header_text": [
                  broadCasteState?.selectTemplates?.templates?.title
                ]
              }
            }] : []),

            {
              type: "BODY",
              text: broadCasteState?.selectTemplates?.templates?.chats?.[0].message,
              example: {
                body_text: [
                  broadCasteState?.selectTemplates?.templates?.chats?.[0].message
                ]
              }
            },

          ],
        customer_tag_segments: customerTagIds ?? 0,
        is_immediate: broadCasteState?.sheduleAndPublish?.deliveryType === 'Immediate' ? true : false,
        start_date: broadCasteState?.sheduleAndPublish?.startDate ? moment(broadCasteState?.sheduleAndPublish?.startDate, 'DD-MM-YYYY, h:mm A').format('YYYY-MM-DD') : moment(now).format('YYYY-MM-DD'),
        start_time: broadCasteState?.sheduleAndPublish?.startTime?.length > 0 ? moment(broadCasteState?.sheduleAndPublish?.startTime, 'hh:mm A').format('HH:mm:ss') : moment(now).format('HH:mm:ss'),
      };
      const response = await httpRequest(
        "post",
        `${envConfig.api_url}/brand/broadcast_messages/add`,
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

  // Get broadcast message list API
  getBroadcastList: async () => {
    const { broadCasteState } = get();

    try {
      const sortValue =
        broadCasteState?.sortItem === "A-Z" ? "asc" : broadCasteState?.sortItem === "Z-A" ? "desc" : "";

      const params = queryString.stringify({
        sort: sortValue,
        search: broadCasteState?.search,
      });
      const response = await httpRequest(
        "get",
        `${envConfig.api_url}/brand/broadcast_messages/list?${params}`,
        {},
        true
      )
      set({ broadCasteState: { ...broadCasteState, broadCastList: response?.data?.data } });

    } catch (error: any) {
      enqueueSnackbar(`${error?.response?.data?.message}`, {
        variant: "error",
        style: { fontSize: "1.4rem" },
      });
    }
  },

  // Get template view API
  getTemplateView: async (rowData: any) => {
    const { broadCasteState } = get();
    try {
      const params = queryString.stringify({
        id: rowData?.id,
      });
      const res = await httpRequest(
        "get",
        `${envConfig.api_url}/brand/broadcast_messages/view?${params}`,
        {},
        true
      );
      if (res?.data?.status === "200") {
        set({ broadCasteState: { ...broadCasteState, broadCastView: res?.data ?? {} } });
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

  // Delete broadcast row data
  deleterowData: async (id: string) => {
    const { getBroadcastList } = get();
    try {
      const response = await httpRequest(
        "put",
        `${envConfig.api_url}/brand/broadcast_messages/delete`,
        { id: id },
        true
      )
      enqueueSnackbar(`${response?.data?.message}`, {
        variant: "success",
        style: { fontSize: "1.4rem" },
      });
      getBroadcastList();

    } catch (error: any) {
      enqueueSnackbar(`${error?.response?.data?.message}`, {
        variant: "error",
        style: { fontSize: "1.4rem" },
      });
    }
  },

  // Get template list API
  getTemplateList: async (brand_Id) => {
    const { broadCasteState } = get();
    try {
      const params = queryString.stringify(
        {
          offset: 0,
          limit: 100,
          search: broadCasteState?.search,
          brand_id: brand_Id,
          status: 7
        },
        { skipNull: true, skipEmptyString: true }
      );
      const response = await httpRequest(
        "get",
        `${envConfig.api_url}/brand/templates/list?${params}`,
        {},
        true
      );
    
      const tempArray = response?.data?.data?.rows?.map((val: any) => {
        let tempSelect;
        val.id === broadCasteState?.templateId ? tempSelect = true : tempSelect = false

        return {
          id: val?.id ?? '',
          title: val?.name ?? '',
          status: val?.status?.status === "Approved" ? true : true,
          select: tempSelect,
          chats: [
            {
              header: val?.template_json?.find((val: any) => val?.type === 'HEADER')?.text,
              message: val?.template_json?.find((val: any) => val?.type === 'BODY')?.text,
              buttons: val?.template_json?.find((val: any) => val?.type === 'BUTTONS')?.buttons
            },
          ],
        }
      })


      set({
        broadCasteState: {
          ...broadCasteState,
          templatesList: tempArray ?? []
        }
      });

    } catch (error) {
      console.error(error, "Error fetching template list");
    }
  },


  setEditBroadcastData: (editData: any) => {
    const customerTag = editData?.broadcast_customer_tags?.map((item: any) => ({
      label: item?.segment?.name,
      value: item?.segment?.id,
    }));
    set((prevState) => ({
      ...prevState,
      broadCasteState: {
        ...prevState.broadCasteState,
        id: editData?.id,
        selectTags: customerTag,
        sheduleAndPublish: {
          deliveryType: editData?.broadcastType,
          startDate: editData?.broadcastDateTime,
          startTime: editData?.schedule_start_time
        },
        selectTemplates: {
          broadcastName: editData?.broadcastName,
          searchTemplate: "",
          templates: [editData?.template_id],
          template_json: [editData?.template_json]
        },
        templateId: editData?.template_id,
        statusId: editData?.statusId?.id
      }
    }));

  },

  // Edit broadcast message API 
  editBroadcast: async (statusId?: number) => {
    const { broadCasteState } = get();
    const customerTag = broadCasteState?.selectTags?.map((val) => {
      return val ? { id: val.value, label: val.label } : null;
    }) || [];

    const customerTagIds = customerTag.map(tag => tag?.id).filter(id => id !== null);

    const templateJson = broadCasteState?.selectTemplates?.templates?.id
    let resStatus;
    const now = new Date();
    try {
      const payload = {
        name: broadCasteState?.selectTemplates?.broadcastName,
        id: broadCasteState?.id,
        template_id: templateJson,
        status_id: broadCasteState?.sheduleAndPublish?.deliveryType === 'Scheduled' ? 9 : statusId,
        // status_id: statusId ? statusId : broadCasteState?.statusId,
        template_json:
          [
            ...(broadCasteState?.selectTemplates?.templates?.title?.length > 0 ? [{
              "type": "HEADER",
              "format": "TEXT",
              "text": "<TEXT>",
              "example": {
                "header_text": [
                  broadCasteState?.selectTemplates?.templates?.title
                ]
              }
            }] : []),

            {
              type: "BODY",
              text: "<TEXT>",
              example: {
                body_text: [
                  broadCasteState?.selectTemplates?.templates?.chats?.[0].message
                ]
              }
            },

          ],
        customer_tag_segments: customerTagIds ?? 0,
        is_immediate: broadCasteState?.sheduleAndPublish?.deliveryType === 'Immediate' ? true : false,
        start_date: broadCasteState?.sheduleAndPublish?.startDate ? moment(broadCasteState?.sheduleAndPublish?.startDate, 'DD-MM-YYYY, h:mm A').format('YYYY-MM-DD') : moment(now).format('YYYY-MM-DD'),
        start_time: broadCasteState?.sheduleAndPublish?.startTime?.length > 0 ? moment(broadCasteState?.sheduleAndPublish?.startTime, 'hh:mm A').format('HH:mm:ss') : moment(now).format('HH:mm:ss'),

      };

      await httpRequest(
        "put",
        `${envConfig.api_url}/brand/broadcast_messages/edit`,
        { ...payload },
        true
      )
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: "success",
            style: { fontSize: "1.2rem" },
          });
          get().getBroadcastList();
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



  clearAll: () => {
    set({
      broadCasteState: {
        offset: 0,
        limit: 5,
        search: "",
        sortItem: "",
        selectTags: [],
        sheduleAndPublish: {
          deliveryType: 'Immediate',
          startDate: "",
          startTime: ""
        },
        selectTemplates: {
          broadcastName: "",
          searchTemplate: "",
          templates: [],
        },
        selectCustomer: {
          tags: {
            label: "",
            value: "",
          },
          selectedTags: [],
        },
      },
      error: {}
    });
  }
}));
