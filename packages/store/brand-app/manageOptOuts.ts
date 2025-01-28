import { envConfig } from "@core/envconfig";
import { httpRequest } from "@core/utils/api/axios";
import { enqueueSnackbar } from "notistack";
import queryString from "query-string";
import { create } from "zustand";

import { BroadCastMessage, IManageOptOuts } from "./interface";
import moment from "moment";

export const useManageOpsOuts = create<IManageOptOuts>((set, get) => ({
  manageOptsOutState: {
    offset: 0,
    limit: 5,
    search: "",
    sortValue: "",
    listData:{}
  },


  getManageOptsOut: async () => {
    const { manageOptsOutState } = get();

    try {
      const sortValue =
        manageOptsOutState?.sortValue === "A-Z" ? "asc" : manageOptsOutState?.sortValue === "Z-A" ? "desc" : "";

      const params = queryString.stringify({
        sort: sortValue,
        search: manageOptsOutState?.search,
      });
      const response = await httpRequest(
        "get",
        `${envConfig.api_url}/brand/broadcast_messages/list?${params}`,
        {},
        true
      )
      set({ manageOptsOutState: { ...manageOptsOutState, listData: response?.data?.data } });

    } catch (error: any) {
      enqueueSnackbar(`${error?.response?.data?.message}`, {
        variant: "error",
        style: { fontSize: "1.4rem" },
      });
    }
  },
}))