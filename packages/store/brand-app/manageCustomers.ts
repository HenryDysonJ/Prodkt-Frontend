import { envConfig } from "@core/envconfig";
import { httpRequest } from "@core/utils/api/axios";
import { enqueueSnackbar } from "notistack";
import queryString from "query-string";
import { create } from "zustand";

import { ManageCustomers } from "./interface";
import { any } from "underscore";

export const useManageCustomers = create<ManageCustomers>((set, get) => ({
  loading: false,

  offset: 0,

  limit: 5,

  search: "",

  sortItem: "",

  segments: [],

  customersList: {
    count: 0,
    message: "",
    status: "",
    rows: [],
  },

  viewCustomersList: {
    data: {},
    message: "",
    status: "",
    api_status: "",
  },

  setLoading: (val: boolean) => {
    set({ loading: val });
  },

  // Handle offset / limit (or) sortItem change function
  handleOffsetLimitData: (key: string, val: any) => {
    // Get state
    const {
      getCustomersList,
      search,
      sortItem,
      limit,
    } = get();
    // Set state
    set({ [key]: val });
    // Call getCustomersList function
    if (key === "offset") {
      getCustomersList(
        search,
        sortItem,
        val * limit,
        limit,
      );
    } else if (key === "limit") {
      getCustomersList(
        search,
        sortItem,
        0,
        val,
      );
    } else if (key === "sortItem") {
      getCustomersList(
        search,
        val,
        0,
        5,
      );
    }
  },

  // Handle search change function
  setHandleSearch: (val: string) => {
    // Get state
    const { getCustomersList, sortItem } = get();
    // Set state
    set({ search: val });
    // Call getCustomersList function
    getCustomersList(
      val,
      sortItem,
      0,
      5,

    );
  },

  setHandleSelectTag: (val: any) => {
    set({
      segments: val,
    });
  },
  // UPLOAD CUSTOMER LIST 
  uploadCustomersList: async (file: any) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await httpRequest(
        "post",
        `${envConfig.api_url}/brand/customers/bulk_upload`,
        formData,
        true
      )
      if (response) {
        setTimeout(() => {
          enqueueSnackbar(`${response?.data?.message} `, {
            variant: "success",
            style: { fontSize: "1.2rem" },
          });
        }, 1000);
        get().getCustomersList('', '', 0, 5);
      }
      return response
    } catch (erorr: any) {

      enqueueSnackbar(`${erorr?.response?.data?.message} `, {
        variant: "error",
        style: { fontSize: "1.2rem" },
      });
      return erorr?.response
    }
  },

  // UPLOAD CUSTOMER TAG
  updateCustomersTagList: async (updateId: string) => {
    const { segments } = get();
    let resStats;
    try {
      const payload = {
        id: updateId,
        tags: segments?.map((item) => item?.value),
      };
      await httpRequest(
        "put",
        `${envConfig.api_url}/brand/customers/update_tags`,
        { ...payload },
        true
      )
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: "success",
            style: { fontSize: "1.4rem" },
          });
          get().getCustomersList('', '', 0, 5);
          get().getViewCustomersList(updateId);
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

  // GET CUSTOMER LIST 
  getCustomersList: async (
    search: string,
    sortItem: string,
    offset: number,
    limit: number

  ) => {
    set({ loading: true });
    try {
      const sortValue =
        sortItem === "A-Z" ? "asc" : sortItem === "Z-A" ? "desc" : "";

      const params = queryString.stringify(
        {
          search: search,
          offset: offset,
          limit: limit,
          sort: sortValue,
        },
        { skipNull: true, skipEmptyString: true }
      );
      const res = await httpRequest(
        "get",
        `${envConfig.api_url}/brand/customers/list?${params}`,
        {},
        true
      )
      set({
        loading: false,
        customersList: res?.data?.data,
        search: search ?? "",
        offset: offset ?? 0,
        limit: limit ?? 5,
      });

    } catch (error: any) {
      set({ loading: false });
      enqueueSnackbar(`${error?.res?.data?.message}`, {
        variant: "error",
        style: { fontSize: "1.4rem" },
      });
    }
  },

  // GET CUSTOMER VIEW LIST
  getViewCustomersList: async (id: string) => {
    try {
      await httpRequest(
        "get",
        `${envConfig.api_url}/brand/customers/view?id=${id}`,
        {},
        true
      )
        .then((res) => {
          set({ viewCustomersList: res?.data });
        })
        .catch((err) => {
          console.log(err, "err");
        });
    } catch (refreshLoading) {
      console.log(refreshLoading, "refreshLoading");
      set({});
    }
  },

  sendInvoice: async (data: any) => {
    // debugger    
    try {
      const payload = {
        customer_id: data?.customer?.id ?? '',
        product_id: data?.customer?.customer_products?.[0]?.id ?? '',
        file_url: data?.customer?.customer_products?.[0]?.invoice_url ?? '',
      }      
      const response = await httpRequest(
        "post",
        `${envConfig.api_url}/brand/customers/send_invoice`,
        { ...payload },
        true
      )
      if (response) {
      }
      return response
    } catch (erorr: any) {

      enqueueSnackbar(`${erorr?.response?.data?.message} `, {
        variant: "error",
        style: { fontSize: "1.2rem" },
      });
      return erorr?.response
    }
  },


  clearAll: () => ({
    segments: [],
  }),
}));
