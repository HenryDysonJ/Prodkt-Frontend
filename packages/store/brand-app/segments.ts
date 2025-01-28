import { envConfig } from "@core/envconfig";
import { httpRequest } from "@core/utils/api/axios";
import { enqueueSnackbar } from "notistack";
import queryString from "query-string";
import { create } from "zustand";

import { CustomerSegment } from "./interface";

export const useCustomerSegment = create<CustomerSegment>((set, get) => ({
  loading: false,

  tag: {
    tagName: "",
    id: '',
  },

  error: "",

  offset: 0,

  limit: 5,

  search: "",

  sortItem: "",

  segmentsTagLists: {
    count: 0,
    message: "",
    status: "",
    result: [],
  },
  segmentsTagListsCount: {},

  setHandleChangeTag: (Eval: string) => {
    set((prev) => ({ tag: { ...prev.tag, tagName: Eval }, error: "" }));
  },

  setLoading: (val: boolean) => {
    set({ loading: val });
  },

  setError: (Eror: string) => {
    set({ error: Eror });
  },


  // Handle search change function
  setHandleSearch: (val: string) => {
    // Get state
    const { getSegmentsList, sortItem } = get();
    // Set state
    set({ search: val });
    // Call getCustomersList function
    getSegmentsList(
      val,
      sortItem,
      0,
      5,

    );
  },

  // Handle offset / limit (or) sortItem change function
  handleOffsetLimitData: (key: string, val: any) => {
    // Get state
    const {
      getSegmentsList,
      search,
      sortItem,
      limit,
    } = get();
    // Set state
    set({ [key]: val });
    // Call getCustomersList function
    if (key === "offset") {
      getSegmentsList(
        search,
        sortItem,
        val * limit,
        limit,
      );
    } else if (key === "limit") {
      getSegmentsList(
        search,
        sortItem,
        0,
        val,
      );
    } else if (key === "sortItem") {
      getSegmentsList(
        search,
        val,
        0,
        5,
      );
    }
  },

  setEditTagName: (editVal: string, id: number) => {
    set({ tag: { tagName: editVal, id: id } });
  },

  // ADD SEGMENTS
  addSegments: async () => {
    const { tag } = get();
    let resStatus;

    try {
      const payload = {
        name: tag?.tagName,
      };

      await httpRequest(
        "post",
        `${envConfig.api_url}/brand/segments/add`,
        { ...payload },
        true
      )
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: "success",
            style: { fontSize: "1.2rem" },
          });
          get().getSegmentsList('', '', 0, 5,);
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

  // UPDATE SEGMENTS
  updateSegments: async () => {
    const { tag } = get();
    try {
      const payload = {
        id: tag?.id,
        name: tag?.tagName,
      };
      const res = await httpRequest(
        "put",
        `${envConfig.api_url}/brand/segments/edit`,
        { ...payload },
        true
      )
      enqueueSnackbar(`${res?.data?.message}`, {
        variant: "success",
        style: { fontSize: "1.4rem" },
      });
      get().getSegmentsList('', '', 0, 5,);
      return res

    } catch (error: any) {
      enqueueSnackbar(`${error?.response?.data?.message}`, {
        variant: "error",
        style: { fontSize: "1.4rem" },
      });
      return error.response
    }
  },

  // DELETE SEGMENTS
  deleteSegments: async (delId: number) => {
    let resStats;
    try {
      const payload = {
        id: delId,
      };
      await httpRequest(
        "put",
        `${envConfig.api_url}/brand/segments/delete`,
        { ...payload },
        true
      )
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: "success",
            style: { fontSize: "1.4rem" },
          });
          get().getSegmentsList('', '', 0, 5,);
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
  // GET SEGMENTS LIST
  getSegmentsList: async (
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
          sort: sortValue,
          offset: offset,
          limit: limit,
        },
        { skipNull: true, skipEmptyString: true }
      );
      const res = await httpRequest(
        "get",
        `${envConfig.api_url}/brand/segments/get?${params}`,
        {},
        true
      )

      set({
        loading: false,
        segmentsTagLists: res?.data?.data,
        search: search ?? "",
        offset: offset ?? 0,
        limit: limit ?? 5,
      });

    } catch (refreshLoading) {
      console.log(refreshLoading, "refreshLoading");
      set({});
    }
  },
  // GET SEGMENTS LIST WITH COUNT
  getSegmentsListCount: async (
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
          sort: sortValue,
          offset: offset,
          limit: limit,
        },
        { skipNull: true, skipEmptyString: true }
      );
      const res = await httpRequest(
        "get",
        `${envConfig.api_url}/brand/segments/list?${params}`,
        {},
        true
      )

      set({
        loading: false,
        segmentsTagListsCount: res?.data?.data,
        search: search ?? "",
        offset: offset ?? 0,
        limit: limit ?? 5,
      });

    } catch (refreshLoading) {
      console.log(refreshLoading, "refreshLoading");
      set({});
    }
  },

  clearAll: () => {
    set({
      tag: { tagName: "", id: 0 },
      search: "",
      error: ''
    });
  },
}));
