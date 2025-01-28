import { envConfig } from "@core/envconfig";
import { httpRequest } from "@core/utils/api/axios";
import { enqueueSnackbar } from "notistack";
import queryString from "query-string";
import { create } from "zustand";
import { TemplateStore } from "./interface";

export const useTemlateStore = create<TemplateStore>((set, get) => ({
  viewType: "",

  offset: 0,

  limit: 5,

  search: "",

  sortItem: "",
  offersList: "",
  offersView: '',

  basicInfo: {
    templateName: "",
    templateCategory: {
      label: "",
      value: 0,
    },
    offerType: {
      label: "",
      value: ''
    }
  },

  templateJson: {
    header: {
      type: "",
      value: "",
    },
    messageBody: "",
    declareVariables: {
      customerName: "",
      offerName: "",
      maxPurchaseAmount: "",
      subscribe: "",
      purchaseDateOffer: "",
      customerNameOffer: "",
      discountValueOffer: "",
      minimumAmtOffer: "",
      offerCode: "",
      offerNameOffer: "",
    },
    buttons: [
      // {
      // buttonType: {
      //   label: "Phone number",
      //   value: 2
      // },
      // mobileNo: {
      //   mobile: '',
      //   mobileCode: '+91'
      // }
      // }
    ],
  },

  templatesList: {
    rows: [],
    count: 0,
  },

  filterData: {
    status: [],
  },

  templatesCategoryList: [],

  error: {},

  items: [],

  loading: false,

  selectedOptions: {
    statuses: [],
  },

  appliedSelectedOptions: {
    statuses: [],
  },

  setItemName: (newItemLabel: any) => set((state) => {
    if (state.items.includes(newItemLabel)) {
      return { items: state.items };
    }
    return { items: [...state.items, newItemLabel] };
  }),

  // To handle filter data
  setFilterData: (type: string, value: any) => {
    // Get state
    const { selectedOptions } = get();
    // Set state
    set({
      selectedOptions: { ...selectedOptions, [type]: value },
    });
  },

  // To apply filter data
  applyFilterData: (brandId: any) => {
    // Get state
    const { getTemplateList, search, sortItem, selectedOptions } = get();
    // Set state
    set({
      selectedOptions: { statuses: [] },
      appliedSelectedOptions: {
        statuses: selectedOptions?.statuses ?? [],
      },
    });
    // Call getTemplateList function
    getTemplateList(
      0,
      5,
      search,
      sortItem,
      selectedOptions?.statuses,
      brandId
    );
  },

  // To reset filter data
  initializeFilterData: (brandId: any) => {
    // Get state
    const { getTemplateList, search, sortItem } = get();
    // Set state
    set({
      selectedOptions: { statuses: [] },
      appliedSelectedOptions: { statuses: [] },
    });
    // Call getTemplateList function
    getTemplateList(0, 5, search, sortItem, [], brandId);
  },

  // To filter data into modal
  setFilterDataIntoModal: () => {
    // Get state
    const { appliedSelectedOptions } = get();
    // Set state
    set({
      selectedOptions: {
        statuses: appliedSelectedOptions?.statuses ?? [],
      },
    });
  },


  // Handle search change function
  setHandleSearch: (val: string, brandId) => {
    // Get state
    const { getTemplateList, appliedSelectedOptions, sortItem } = get();
    // Set state
    set({ search: val });
    // Call getTemplateList function
    getTemplateList(
      0,
      5,
      val,
      sortItem,
      appliedSelectedOptions?.statuses,
      brandId
    );
  },

  // Handle offset / limit (or) sortItem change function
  handleOffsetLimitData: (key: string, val: any, brandId: any) => {
    // Get state
    const {
      getTemplateList,
      appliedSelectedOptions,
      search,
      sortItem,
      limit,
    } = get();
    // Set state
    set({ [key]: val });
    // Call getTemplateList function
    if (key === "offset") {
      getTemplateList(
        val * limit,
        limit,
        search,
        sortItem,
        appliedSelectedOptions?.statuses,
        brandId
      );
    } else if (key === "limit") {
      getTemplateList(
        0,
        val,
        search,
        sortItem,
        appliedSelectedOptions?.statuses,
        brandId
      );
    } else if (key === "sortItem") {
      getTemplateList(
        0,
        5,
        search,
        val,
        appliedSelectedOptions?.statuses,
        brandId
      );
    }
  },

  setViewType: (val: any) => {
    set({ viewType: val });
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

  setAddComponetInfo: (key: any, id: string, val: string | any) => {
    const { clearFieldError } = get()
    set((prev) => {
      const updatedButtons = prev.templateJson?.buttons?.map((btn) => {
        if (btn?.id === id) {
          return { ...btn, [key]: val };
        }
        return btn;
      });
      return {
        templateJson: {
          ...prev.templateJson,
          buttons: updatedButtons,
        },
      };
    });
    clearFieldError(key)
  },

  setDeleteButtons: (id: string) => {
    set((prev) => {
      const delBtns = prev.templateJson?.buttons?.filter(
        (btn) => btn?.id !== id
      );
      return {
        templateJson: {
          ...prev.templateJson,
          buttons: delBtns,
        },
      };
    });
  },

  setSelectButtons: (key: string, buttonType: any, id: string) => {
    set((prev: any) => {
      const updateBtn = prev.templateJson?.buttons?.map((btn: any) =>
        btn?.id === id ? { ...btn, [key]: buttonType } : btn
      );
      return {
        templateJson: {
          ...prev.templateJson,
          buttons: updateBtn,
        },
      };
    });
  },

  setAddButtons: (val: string) => {
    set((prev) => ({
      templateJson: {
        ...prev.templateJson,
        buttons: [...prev.templateJson?.buttons, { id: val }],
      },
    }));
  },

  setDeclareVariable: (key: string, val: string) => {
    const { clearFieldError } = get();
    set((prev) => ({
      templateJson: {
        ...prev.templateJson,
        declareVariables: {
          ...prev.templateJson?.declareVariables,
          [key]: val,
        },
      },
    }));
    clearFieldError(key)

  },

  setMessageBody: (key: string, val: string) => {
    set((prev) => ({
      templateJson: {
        ...prev.templateJson,
        messageBody: val,
      },
    }));
  },

  setHandleTypeValue: () => {
    set((prev) => ({
      templateJson: {
        ...prev.templateJson,
        header: {
          ...prev.templateJson.header,
          value: "",
        },
      },
    }));
  },

  setHeader: (key: string, val: string) => {
    get()?.setHandleTypeValue();
    set((prev) => ({
      templateJson: {
        ...prev.templateJson,
        header: {
          ...prev.templateJson.header,
          [key]: val,
        },
      },
    }));
  },

  setBasicInfo: (key: string, val: string | { lable: string; val: number }) => {
    const { clearFieldError, getOffersView } = get();
    if (key === "offerType") {
      getOffersView(val?.value);
      set((prev) => ({
        basicInfo: {
          ...prev.basicInfo,
          [key]: val,
        },
      }))
      clearFieldError(key);
    } else {
      set((prev) => ({
        basicInfo: {
          ...prev.basicInfo,
          [key]: val,
        },
      }));
    }
    clearFieldError(key)
  },
  setViewTemplate: (viewData: any) => {

    // header and body
    const headerData = viewData?.template_json?.find((val: any) => val?.type === "HEADER") ?? 'none';
    const resultHeaderData = headerData ? {
      type: headerData.format === 'TEXT' ? 'text' : headerData.format === 'IMAGE' ? 'fileImage' : 'none',
      ...(headerData.format !== 'IMAGE' && {
        value: headerData.text || ''
      }),
      ...(headerData.format === 'IMAGE' && {
        value: headerData?.example?.header_handle?.[0]
      }),
    } : null;
    const bodyData = viewData?.template_json?.find((val: any) => val?.type === 'BODY')?.text

    // buttons data
    const buttons = viewData.template_json.find((val: any) => val.type === 'BUTTONS')?.buttons || [];

    const mappedButtons = buttons.map((val: any) => {

      function trimCountryCode(phoneNumber: string) {
        if (phoneNumber.startsWith("+91")) {
          return phoneNumber.slice(3);
        }
        return phoneNumber;
      }
      const button: any = {

        buttonType: {
          label: val.type === 'PHONE_NUMBER' ? 'Phone number' : val.type,
          value: val.type === 'PHONE_NUMBER' ? 2 : val.type === 'URL' ? 1 : 3,
        },
        ...(val?.type === 'COPY_CODE' && {
          buttonVal: val?.example
        }),
        ...(val?.type !== 'COPY_CODE' && {
          buttonVal: val?.text
        }),

      };

      if (val?.url && val.url.length > 0) {
        button.url = val?.type ?? '';
        button.websiteUrl = val?.url ?? ''
      }

      if (val.phone_number && val.phone_number.length > 0) {
        button.mobileNo = {
          mobile: trimCountryCode(val?.phone_number),
          mobileCode: '+91'
        };
      }
      return button;
    });

    set((state) => ({
      ...state,
      basicInfo: {
        templateName: viewData?.Templatename,
        templateCategory: {
          label: viewData?.category?.name,
          value: viewData?.category?.id,
        },
        offerType: {
          label: viewData?.offer?.name,
          value: viewData?.offer?.id
        }
      },
      templateJson: {
        header: resultHeaderData ?? '',
        messageBody: bodyData ?? '',
        declareVariables: {
          customerName: viewData?.declare_variable_json?.[0]?.customerName,
          offerName: viewData?.declare_variable_json?.[0]?.offerName,
          maxPurchaseAmount: viewData?.declare_variable_json?.[0]?.maxPurchaseAmount,
          subscribe: viewData?.declare_variable_json?.[0]?.subscribe,
          purchaseDateOffer: viewData?.declare_variable_json?.[0]?.purchaseDateOffer ?? '',
          customerNameOffer: viewData?.declare_variable_json?.[0]?.customerNameOffer ?? '',
          discountValueOffer: viewData?.declare_variable_json?.[0]?.discountValueOffer ?? '',
          minimumAmtOffer: viewData?.declare_variable_json?.[0]?.minimumAmtOffer ?? '',
          offerCode: viewData?.declare_variable_json?.[0]?.offerCode ?? '',
          offerNameOffer: viewData?.declare_variable_json?.[0]?.offerNameOffer ?? '',

        },
        buttons: mappedButtons,
      },
      templatesList: {
        rows: [],
        count: 0,
      },
      viewType: "view",
    }));

  },


  replacePlaceholders(template: any) {
    // Regular expression to match content inside curly braces
    let regex = /\{([^}]+)\}/g;
    let number = 1;

    // Replace each match found in the string
    let replacedString = template.replace(regex, (match: any) => {
      // Look up replacement value based on placeholder
      let replacement = `{{` + number + `}}`;
      number++
      // If replacement exists, use it; otherwise, keep original placeholder
      return replacement !== undefined ? replacement : match;
    });

    return replacedString;
  },

  // create template
  createNewTemplate: async (status: number) => {
    const { basicInfo, templateJson, replacePlaceholders } = get();
    let resStatus;
    const buttons = templateJson?.buttons?.map((val: any) => {
      let button: any = {
        type: val?.buttonType?.label === 'Phone number' ? "PHONE_NUMBER" : val?.buttonType?.label === 'Copy' ? 'COPY_CODE' : val?.buttonType?.label,
        ...(val?.buttonType?.label !== 'Copy' && {
          text: val?.buttonVal
        }),
        ...(val?.buttonType?.label === 'Copy' && {
          text: ''
        }),
        ...(val?.buttonType?.label === 'Copy' && {
          example: val?.buttonVal
        }),
      };
      if (val?.websiteUrl?.length > 0) {
        button.url = val?.websiteUrl;
      }
      if (val?.mobileNo?.mobile?.length > 0) {
        button.phone_number = val?.mobileNo?.mobileCode + val?.mobileNo.mobile;
      }

      return button;
    });

    const htmlString = templateJson?.messageBody ?? ''

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;

    // Remove <span> tags and extra spaces, and replace placeholders
    const textNodes: any = tempDiv.childNodes;
    textNodes.forEach((node: { nodeType: number; tagName: string; textContent: string; }) => {
      if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'P') {
        let text = node.textContent.trim();
        text = text.replace(/<span.*?>|<\/span>/gi, '');
        text = text.replace(/\s+/g, ' ');
        node.textContent = text;
      }
    });

    const textOnly = tempDiv.textContent || tempDiv.innerText || ""

    //text
    let replaced = replacePlaceholders(textOnly);

    //body_text
    let regex = /\{([^}]+)\}/g;
    let matches = [];
    let match;
    while ((match = regex.exec(textOnly)) !== null) {
      matches.push(match[1]);
    }

    const declareVariableBasic = [{
      customerName: templateJson?.declareVariables?.customerName ?? '',
      offerName: templateJson?.declareVariables?.offerName ?? '',
      maxPurchaseAmount: templateJson?.declareVariables?.maxPurchaseAmount ?? '',
      subscribe: templateJson?.declareVariables?.subscribe ?? '',
    }]
    const declareVariableOffer = [{
      purchaseDateOffer: templateJson?.declareVariables?.purchaseDateOffer ?? '',
      customerNameOffer: templateJson?.declareVariables?.customerNameOffer ?? '',
      discountValueOffer: templateJson?.declareVariables?.discountValueOffer ?? '',
      minimumAmtOffer: templateJson?.declareVariables?.minimumAmtOffer ?? '',
      offerCode: templateJson?.declareVariables?.offerCode ?? '',
      offerNameOffer: templateJson?.declareVariables?.offerNameOffer ?? '',
      subscribe: templateJson?.declareVariables?.subscribe ?? ''
    }]

    set({ loading: true });
    const constructedValue = templateJson?.declareVariables?.offerNameOffer?.length > 0 ? declareVariableOffer : declareVariableBasic
    try {
      const payload = {
        name: basicInfo?.templateName,
        category_id: basicInfo?.templateCategory?.value,
        status: status,
        template_json:
          [
            ...(templateJson?.header?.type === "text" ? [{
              "type": "HEADER",
              "format": "TEXT",
              "text": templateJson?.header?.value,
            }] : []),
            ...(templateJson?.header?.type === "fileImage" ? [{
              type: "HEADER",
              format: "IMAGE",
              example: {
                header_handle: [
                  templateJson?.header?.value
                ]
              }
            }] : []),
            {
              type: "BODY",
              text: replaced,
              example: {
                body_text: [
                  matches
                ]
              }
            },
            ...(templateJson?.buttons?.length > 0 ?
              [{
                type: "BUTTONS",
                buttons: buttons
              }] : [])
          ]
        ,
        declare_variable_json: constructedValue,
        reject_reason: "",
        ...(basicInfo?.offerType?.value?.length > 0 && { offer_id: basicInfo?.offerType?.value }),
      };


      await httpRequest(
        "post",
        `${envConfig.api_url}/brand/templates/add`,
        { ...payload },
        true
      )
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: "success",
            style: { fontSize: "1.2rem" },
          });
          set({ loading: false });
          get().getTemplateList(0, 5, "", "", [], '');
          return (resStatus = res?.status);
        })
        .catch((err) => {
          set({ loading: false });
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

  dublicateTemplate: async (id: string, brandId: any) => {
    let resStatus;
    try {
      const payload = {
        id: id,
      };
      await httpRequest(
        "post",
        `${envConfig.api_url}/brand/templates/dublicate`,
        { ...payload },
        true
      )
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: "success",
            style: { fontSize: "1.2rem" },
          });
          get().getTemplateList(0, 5, "", "", [], brandId)
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

  deleteTemplate: async (status: number, id: string, brandId: any) => {
    let resStatus;
    try {
      const payload = {
        id: id,
        // status: status,  
      };
      await httpRequest(
        "put",
        `${envConfig.api_url}/brand/templates/delete`,
        { ...payload },
        true
      )
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: "success",
            style: { fontSize: "1.2rem" },
          });
          get().getTemplateList(0, 5, "", "", [], brandId)
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

  getTemplateList: async (
    offset: number,
    limit: number,
    search: string,
    sortItem: string,
    templateStatus: any,
    brand_Id: any
  ) => {

    const statusId = templateStatus?.map((val: any) => val?.value || []);
    set({ loading: true });
    try {
      const sortValue =
        sortItem === "A-Z" ? "asc" : sortItem === "Z-A" ? "desc" : "";
      const params = queryString.stringify(
        {
          offset: offset,
          limit: limit,
          search: search,
          sort: sortValue,
          brand_id: brand_Id ?? '',
        },
        { skipNull: true, skipEmptyString: true }
      );

      const statusQuery = statusId && statusId.length ? `&status=${statusId}` : '';
      const fullUrl = `${envConfig.api_url}/brand/templates/list?${params}${statusQuery}`;

      const res = await httpRequest("get", fullUrl, {}, true)

      set({
        loading: false,
        templatesList: res?.data?.data,

        search: search ?? "",
        offset: offset ?? 0,
        limit: limit ?? 5,
        appliedSelectedOptions: {
          statuses: templateStatus,
        },
      });
    } catch (error: any) {
      set({ loading: false });
      enqueueSnackbar(`${error?.response?.data?.message}`, {
        variant: "error",
        style: { fontSize: "1.4rem" },
      });
    }
  },


  getTemplateCategoryList: async () => {
    try {
      await httpRequest(
        "get",
        `${envConfig.api_url}/brand/templates/category_list`,
        {},
        true
      )
        .then((res) => {
          set({ templatesCategoryList: res?.data?.data });
        })
        .catch((err) => {
          console.log(err, "err");
        });
    } catch (refreshLoading) {
      console.log(refreshLoading, "refreshLoading");
      set({});
    }
  },


  getOffersList: async () => {

    try {
      const params = queryString.stringify({
        status: [1],
      });
      const response = await httpRequest(
        "get",
        `${envConfig.api_url}/brand/offers/list?${params}`,
        {},
        true
      )
      set({ offersList: response?.data?.data });

    } catch (error: any) {
      enqueueSnackbar(`${error?.response?.data?.message}`, {
        variant: "error",
        style: { fontSize: "1.4rem" },
      });
    }
  },

  getOffersView: async (id: any) => {
    try {
      const params = queryString.stringify({
        id: id ?? '',
      });
      const res = await httpRequest(
        "get",
        `${envConfig.api_url}/brand/offers/view?${params}`,
        {},
        true
      );
      if (res?.data?.status === "200") {
        set({ offersView: res?.data?.data ?? {} });
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

  setClearAll: () => {
    set({
      search: "",

      sortItem: "",

      basicInfo: {
        templateName: "",
        templateCategory: {
          label: "",
          value: 0,
        },
      },

      templateJson: {
        header: {
          type: "",
          value: "",
        },
        messageBody: "",
        declareVariables: {
          customerName: "",
          offerName: "",
          maxPurchaseAmount: "",
          subscribe: "",
          purchaseDateOffer: "",
          customerNameOffer: "",
          discountValueOffer: "",
          minimumAmtOffer: "",
          offerCode: "",
          offerNameOffer: "",
        },
        buttons: [],
      },

      templatesList: {
        rows: [],
        count: 0,
      },

      templatesCategoryList: [],
      error: {},
      items: []
    })
  },

}));
