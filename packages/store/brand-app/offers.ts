import { envConfig } from "@core/envconfig";
import { httpRequest } from "@core/utils/api/axios";
import moment from "moment";
import { enqueueSnackbar } from "notistack";
import queryString from "query-string";
import { create } from "zustand";
import { IoffersStore } from "./interface";

export const useOffersStore = create<IoffersStore>((set, get) => ({
  searchValue: "",
  offset: 0,
  limit: 5,
  sortItem: "",
  productBrandList:'',
  // Offer filter data
  selectedOptions: {
    offerTypes: [],
    statuses: [],
  },

  appliedSelectedOptions: {
    offerTypes: [],
    statuses: [],
  },

  offersList: [],
  brandList: {},
  brandCategories: {},
  productTypeList: {},
  exchangeBrandList: {},
  addOffers: {
    id: "",
    name: "",
    offer_code: "",
    description: "",
    offer_type: "Basic offer",
    minimum_purchase_is_required: true,
    minimum_purchase_amount: "",
    discount_type: "Enter percentage",
    discount_amount: "",
    start_date: "",
    end_date: "",
    start_time: "",
    end_time: "",
    status: "",
    exchange_brand_id: { label: "", value: "" },
    exchange_category_id: { label: "", value: "" },
    exchange_product_type_id: { label: "", value: "" },
    discount_brand_id: { label: "", value: "" },
    discount_category_id: { label: "", value: "" },
    discount_product_id: { label: "", value: "" },

    error: {
      name: "",
      offer_code: "",
      minimum_purchase_amount: "",
      discount_amount: "",
      exchange_brand_id: "",
      exchange_category_id: "",
      exchange_product_type_id: "",
      discount_category_id: "",
      discount_product_id: "",
      start_date: "",
      end_date: "",
      start_time: "",
      end_time: "",
    },
  },
  loading: false,

  setFieldError: (fieldName: string, error: any) => {
    set((state) => ({ error: { ...state.error, [fieldName]: error } }));
  },
  clearFieldError: (fieldName: any) => {
    set((state) => ({ error: { ...state.error, [fieldName]: undefined } }));
  },

  clearErrors: () => set(() => ({ error: {} })),

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
  applyFilterData: () => {
    // Get state
    const { getOffersList, searchValue, sortItem, selectedOptions } = get();
    // Set state
    set({
      selectedOptions: { offerTypes: [], statuses: [] },
      appliedSelectedOptions: {
        offerTypes: selectedOptions?.offerTypes ?? [],
        statuses: selectedOptions?.statuses ?? [],
      },
    });

    // Call getOffersList function
    getOffersList(
      0,
      5,
      searchValue,
      sortItem,
      selectedOptions?.offerTypes,
      selectedOptions?.statuses
    );
  },

  // To reset filter data
  initializeFilterData: () => {
    // Get state
    const { getOffersList, searchValue, sortItem } = get();
    // Set state
    set({
      selectedOptions: { offerTypes: [], statuses: [] },
      appliedSelectedOptions: { offerTypes: [], statuses: [] },
    });
    // Call getOffersList function
    getOffersList(0, 5, searchValue, sortItem, [], []);
  },

  // To filter data into modal
  setFilterDataIntoModal: () => {
    // Get state
    const { appliedSelectedOptions } = get();
    // Set state
    set({
      selectedOptions: {
        offerTypes: appliedSelectedOptions?.offerTypes ?? [],
        statuses: appliedSelectedOptions?.statuses ?? [],
      },
    });
  },

  // Update offer error
  updateOfferError: (error: any) => {
    const { addOffers } = get();
    set({
      addOffers: {
        ...addOffers,
        error: error,
      },
    });
  },
  // Handle offer form change
  handleChangeOffer: (key: string, value: any) => {
    const {
      addOffers,
      getBrandCategories,
      getProductType,
      getProductForDiscountType,
      isIamValidToSave,
    } = get();
    if (key === "exchange_brand_id") {
      set({
        addOffers: {
          ...addOffers,
          [key]: value?.value,
          exchange_category_id: { label: "", value: "" },
          exchange_product_type_id: { label: "", value: "" },
        },
      });
      getBrandCategories(value?.value?.id);
    } else if (key === "exchange_category_id") {
      set({
        addOffers: {
          ...addOffers,
          [key]: value?.value,
          exchange_product_type_id: { label: "", value: "" },
        },
      });

      getProductType(value?.value?.id);
    } else if (key === "discount_category_id") {
      set({
        addOffers: {
          ...addOffers,
          [key]: value?.value,
          discount_product_id: { label: "", value: "" },
        },
      });

      getProductForDiscountType(value?.value?.id);
    } else {
      set({
        addOffers: {
          ...addOffers,
          [key]: value,
        },
      });
    }
    isIamValidToSave();
  },

  setEditData: (editData: any) => {
    const { clearFieldError } = get();
    set((state: any) => ({
      ...state,
      addOffers: {
        ...state.addOffers,
        id: editData?.id,
        start_date: editData?.start_date,
        end_date: editData?.end_date,
        start_time: editData?.start_time,
        end_time: editData?.end_time,
        status:
          editData?.status[0]?.label === "Active" ? 2 : "Inactive" ? 1 : "",
      },
    }));
    clearFieldError(editData);
  },

  // Handle search change function
  setHandleSearch: (val: string) => {
    // Get state
    const { getOffersList, appliedSelectedOptions, sortItem } = get();
    // Set state
    set({ searchValue: val });
    // Call getOffersList function
    getOffersList(
      0,
      5,
      val,
      sortItem,
      appliedSelectedOptions?.offerTypes,
      appliedSelectedOptions?.statuses
    );
  },

  // Handle offset / limit (or) sortItem change function
  handleOffsetLimitData: (key: string, val: any) => {
    // Get state
    const {
      getOffersList,
      appliedSelectedOptions,
      searchValue,
      sortItem,
      limit,
    } = get();
    // Set state
    set({ [key]: val });
    // Call getOffersList function
    if (key === "offset") {
      getOffersList(
        val * limit,
        limit,
        searchValue,
        sortItem,
        appliedSelectedOptions?.offerTypes,
        appliedSelectedOptions?.statuses
      );
    } else if (key === "limit") {
      getOffersList(
        0,
        val,
        searchValue,
        sortItem,
        appliedSelectedOptions?.offerTypes,
        appliedSelectedOptions?.statuses
      );
    } else if (key === "sortItem") {
      getOffersList(
        0,
        5,
        searchValue,
        val,
        appliedSelectedOptions?.offerTypes,
        appliedSelectedOptions?.statuses
      );
    }
  },

  // Check field validation
  isIamValidToSave: () => {
    const { addOffers, updateOfferError } = get();
    const addOffersCopy = JSON.parse(JSON.stringify(addOffers));

    let isValid = true;
    const error = addOffersCopy?.error;

    // Checking name
    if (!addOffersCopy?.name) {
      isValid = false;
      error.name = "Offer name is required";
    } else {
      error.name = "";
    }

    // Checking offer_code
    if (!addOffersCopy?.offer_code) {
      isValid = false;
      error.offer_code = "Offer code is required";
    } else {
      error.offer_code = "";
    }

    // Checking discount_amount

    if (
      addOffersCopy?.discount_amount &&
      addOffersCopy?.discount_type === "Enter percentage" &&
      parseInt(addOffersCopy?.discount_amount) > 100
    ) {
      isValid = false;
      error.discount_amount = "Discount percentage must be less than 100";
    } else if (!addOffersCopy?.discount_amount) {
      isValid = false;
      error.discount_amount =
        addOffersCopy?.discount_type === "Enter percentage" &&
        parseInt(addOffersCopy?.discount_amount) > 99
          ? "Discount percentage must be less than 100"
          : addOffersCopy?.discount_type === "Enter percentage"
          ? "Discount percentage is required"
          : "Discount amount is required";
    } else {
      error.discount_amount = "";
    }

    // Checking start_date
    if (!addOffersCopy?.start_date) {
      isValid = false;
      error.start_date = "Start date is required";
    } else {
      error.start_date = "";
    }

    // Checking end_date
    if (!addOffersCopy?.end_date) {
      isValid = false;
      error.end_date = "End date is required";
    } else {
      error.end_date = "";
    }

    // Checking start_time
    if (!addOffersCopy?.start_time) {
      isValid = false;
      error.start_time = "Start time is required";
    } else {
      error.start_time = "";
    }

    // Checking end_time
    if (!addOffersCopy?.end_time) {
      isValid = false;
      error.end_time = "End time is required";
    } else {
      error.end_time = "";
    }

    if (addOffers?.offer_type === "Basic offer") {
      error.exchange_brand_id = "Brand is required";
      error.exchange_category_id = "Category is required";
      error.exchange_product_type_id = "Product type is required";
      error.discount_category_id = "Category is required";
      error.discount_product_id = "Product type is required";

      // Checking minimum_purchase_amount
      if (!addOffersCopy?.minimum_purchase_amount) {
        isValid = false;
        error.minimum_purchase_amount = "Minimum purchase amount is required";
      } else {
        error.minimum_purchase_amount = "";
      }
    } else if (addOffers?.offer_type === "Exchange offer") {
      error.minimum_purchase_amount = "";

      // Checking exchange_brand_id
      if (!addOffersCopy?.exchange_brand_id) {
        isValid = false;
        error.exchange_brand_id = "Brand is required";
      } else {
        error.exchange_brand_id = "";
      }

      // Checking exchange_category_id
      if (!addOffersCopy?.exchange_category_id) {
        isValid = false;
        error.exchange_category_id = "Category is required";
      } else {
        error.exchange_category_id = "";
      }

      // Checking exchange_product_type_id
      if (!addOffersCopy?.exchange_product_type_id) {
        isValid = false;
        error.exchange_product_type_id = "Product type is required";
      } else {
        error.exchange_product_type_id = "";
      }

      // Checking discount_category_id
      if (!addOffersCopy?.discount_category_id) {
        isValid = false;
        error.discount_category_id = "Category is required";
      } else {
        error.discount_category_id = "";
      }

      // Checking discount_product_id
      if (!addOffersCopy?.discount_product_id) {
        isValid = false;
        error.discount_product_id = "Product type is required";
      } else {
        error.discount_product_id = "";
      }
    }

    // UPDATE OFFER ERROR
    updateOfferError(error);
    return isValid;
  },

  // Get offer list API call
  getOffersList: async (
    offset: number,
    limit: number,
    search: string,
    sortItem: string,
    offerType: any,
    offerStatus: any
  ) => {
    set({ loading: true });
    let statusId: any[] = [];
    let offerValue: any[] = [];
    if (Array.isArray(offerStatus) && offerStatus?.length > 0) {
      statusId = offerStatus?.map((val: any) => val?.value || []);
    }
    if (Array.isArray(offerType) && offerType?.length > 0) {
      offerValue = offerType?.map((val: any) => val?.label || []);
    }

    try {
      const sortValue =
        sortItem === "A-Z" ? "asc" : sortItem === "Z-A" ? "desc" : "";

      const params = queryString.stringify({
        offset: offset,
        limit: limit,
        sort: sortValue,
        search: search,
        status: [statusId],
        offer_type: [offerValue],
      });
      const response = await httpRequest(
        "get",
        `${envConfig.api_url}/brand/offers/list?${params}`,
        {},
        true
      );

      set({
        loading: false,
        offersList: response?.data?.data,

        searchValue: search ?? "",
        offset: offset ?? 0,
        limit: limit ?? 5,
        sortItem: sortValue ?? "",
        appliedSelectedOptions: {
          offerTypes: offerType,
          statuses: offerStatus,
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

  // Get exchange brand
  getBrandList: async () => {
    try {
      // const params = queryString.stringify({
      //   // search: "",
      // });
      const response = await httpRequest(
        "get",
        `${envConfig.api_url}/brand/get_brands`,
        {},
        true
      );
      set({ brandList: response?.data?.data });
    } catch (error: any) {
      enqueueSnackbar(`${error?.response?.data?.message}`, {
        variant: "error",
        style: { fontSize: "1.4rem" },
      });
    }
  },

  // Get exchange category
  getBrandCategories: async (brand_id: number) => {
    try {
      const response = await httpRequest(
        "get",
        `${envConfig.api_url}/brand/get_brand_categories?brand_id=${
          brand_id ?? 0
        }`,
        {},
        true
      );
      set({ brandCategories: response?.data?.data });
    } catch (error: any) {
      enqueueSnackbar(`${error?.response?.data?.message}`, {
        variant: "error",
        style: { fontSize: "1.4rem" },
      });
    }
  },

  // Get exchange product type
  getProductType: async (category_id: any) => {
    try {
      const response = await httpRequest(
        "get",
        `${envConfig.api_url}/brand/products/types?category_id=${
          category_id ?? 1
        }`,
        {},
        true
      );

      if (response) {
        set({ productTypeList: response?.data?.data });
      }
    } catch (error: any) {
      enqueueSnackbar(`${error?.response?.data?.message}`, {
        variant: "error",
        style: { fontSize: "1.2rem" },
      });
    }
  },

  // Get exchange brand list
  getExchangeBrandList: async (token: any) => {
    try {
      const params = queryString.stringify({
        brand_id: token,
      });
      const response = await httpRequest(
        "get",
        `${envConfig.api_url}/brand/get_offer_exchange?${params}`,
        {},
        true
      );
      set({ exchangeBrandList: response?.data?.data });
      set((state: any) => ({
        ...state,
        addOffers: {
          ...state.addOffers,
          discount_brand_id: {
            label: response?.data?.data?.brand?.name,
            value: response?.data?.data?.brand?.id,
          },
        },
      }));
    } catch (error: any) {
      enqueueSnackbar(`${error?.response?.data?.message}`, {
        variant: "error",
        style: { fontSize: "1.4rem" },
      });
    }
  },

  // Get product (discount type)
  getProductForDiscountType: async (id: any) => {
    try {
      const params = queryString.stringify({
        category: id,
      });
      await httpRequest(
        "get",
        `${envConfig.api_url}/brand/products/list?${params}`,
        {},
        true
      )
        .then((response) => {
          set({ productBrandList: response?.data?.data });
        })
        .catch((err) => {
          console.log(err, "err");
        });
    } catch (error: any) {
      console.log(error, "error");
      enqueueSnackbar(`${error?.response?.data?.message}`, {
        variant: "error",
        style: { fontSize: "1.2rem" },
      });
    }
  },

  // Delete offer data
  deleterowData: async (id: string) => {
    const { getOffersList } = get();
    try {
      const response = await httpRequest(
        "put",
        `${envConfig.api_url}/brand/offers/delete`,
        { id: id },
        true
      );
      enqueueSnackbar(`${response?.data?.message}`, {
        variant: "success",
        style: { fontSize: "1.4rem" },
      });
      // Call getOffersList function
      getOffersList(0, 5, "", "", [], []);
    } catch (error: any) {
      enqueueSnackbar(`${error?.response?.data?.message}`, {
        variant: "error",
        style: { fontSize: "1.4rem" },
      });
    }
  },

  // Create offer data
  createOffers: async () => {
    const { addOffers } = get();
    try {
      const payload = {
        name: addOffers?.name,
        offer_code: addOffers?.offer_code,
        description: addOffers?.description,
        offer_type: addOffers?.offer_type,
        minimum_purchase_is_required: addOffers?.minimum_purchase_is_required,
        minimum_purchase_amount:
          addOffers?.minimum_purchase_amount?.length > 0
            ? addOffers?.minimum_purchase_amount
            : 0,
        discount_type: addOffers?.discount_type,
        discount_amount: addOffers?.discount_amount,
        start_date: moment(addOffers?.start_date).format("YYYY-MM-DD"),
        end_date: moment(addOffers?.end_date).format("YYYY-MM-DD"),
        start_time: moment(addOffers?.start_time, "hh:mm A").format("HH:mm:ss"),
        end_time: moment(addOffers?.end_time, "hh:mm A").format("HH:mm:ss"),
        exchange_brand_id:
          addOffers?.offer_type === "Basic offer"
            ? undefined
            : addOffers?.exchange_brand_id?.id,
        exchange_category_id:
          addOffers?.offer_type === "Basic offer"
            ? undefined
            : addOffers?.exchange_category_id?.id,
        exchange_product_type_id:
          addOffers?.offer_type === "Basic offer"
            ? undefined
            : addOffers?.exchange_product_type_id?.value?.id,
        discount_brand_id:
          addOffers?.offer_type === "Basic offer"
            ? undefined
            : addOffers?.discount_brand_id?.value,
        discount_category_id:
          addOffers?.offer_type === "Basic offer"
            ? undefined
            : addOffers?.discount_category_id?.id,
        discount_product_id:
          addOffers?.offer_type === "Basic offer"
            ? undefined
            : addOffers?.discount_product_id?.value,
      };

      const response = await httpRequest(
        "post",
        `${envConfig.api_url}/brand/offers/add`,
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

  // Get offer view data
  getOffersView: async (rowData: any) => {
    try {
      const { addOffers } = get();
      const params = queryString.stringify({
        id: rowData?.id,
      });
      const res = await httpRequest(
        "get",
        `${envConfig.api_url}/brand/offers/view?${params}`,
        {},
        true
      );
      if (res?.data?.status === "200") {
        set({
          addOffers: {
            ...addOffers,
            id: res?.data?.data?.id,
            name: res?.data?.data?.name,
            offer_code: res?.data?.data?.code,
            description: res?.data?.data?.description,
            offer_type: res?.data?.data?.offer_type,

            minimum_purchase_is_required:
              res?.data?.data?.minimum_purchase_required,
            minimum_purchase_amount: res?.data?.data?.minimum_purchase_value,
            discount_type: res?.data?.data?.discount_type,
            discount_amount: res?.data?.data?.discount_value,
            start_date: res?.data?.data?.start_date,
            end_date: res?.data?.data?.end_date,
            start_time: res?.data?.data?.start_time,
            end_time: res?.data?.data?.end_time,
            exchange_brand_id: {
              label: res?.data?.data?.exchange_brand?.name,
              value: res?.data?.data?.exchange_brand?.id,
            },
            exchange_category_id: {
              label: res?.data?.data?.exchange_category?.name,
              value: res?.data?.data?.exchange_category?.id,
            },
            exchange_product_type_id: {
              label: res?.data?.data?.exchange_product_type?.name,
              value: res?.data?.data?.exchange_product_type?.id,
            },
            discount_brand_id: {
              label: res?.data?.data?.discount_brand?.id,
              value: res?.data?.data?.discount_brand?.name,
            },
            discount_category_id: {
              label: res?.data?.data?.discount_category?.name,
              value: res?.data?.data?.discount_category?.id,
            },
            discount_product_id: {
              label: res?.data?.data?.discount_product?.product_name,
              value: res?.data?.data?.discount_product?.id,
            },
          },
        });
      }
      return res?.data?.status;
    } catch (error: any) {
      console.log(error, "error");
      enqueueSnackbar(`${error?.response?.data?.message}`, {
        variant: "error",
        style: { fontSize: "1.2rem" },
      });
    }
  },

  // Edit offer data
  editOffers: async () => {
    const { addOffers, getOffersList } = get();
    try {
      const payload = {
        id: addOffers?.id,
        start_date: moment(addOffers?.start_date).format("YYYY-MM-DD"),
        end_date: moment(addOffers?.end_date).format("YYYY-MM-DD"),
        start_time: moment(addOffers?.start_time, "hh:mm A").format("HH:mm:ss"),
        end_time: moment(addOffers?.end_time, "hh:mm A").format("HH:mm:ss"),
        status: addOffers?.status,
      };
      const response = await httpRequest(
        "put",
        `${envConfig.api_url}/brand/offers/edit`,
        { ...payload },
        true
      );
      if (response) {
        enqueueSnackbar(`${response?.data?.message}`, {
          variant: "success",
          style: { fontSize: "1.2rem" },
        });
      }
      // Call getOffersList function
      getOffersList(0, 5, "", "", [], []);
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

  // Clear offer state data
  setClearAll: () => {
    set({
      addOffers: {
        id: "",
        name: "",
        offer_code: "",
        description: "",
        offer_type: "Basic offer",
        minimum_purchase_is_required: true,
        minimum_purchase_amount: "",
        discount_type: "Enter percentage",
        discount_amount: "",
        start_date: "",
        end_date: "",
        start_time: "",
        end_time: "",
        status: "",
        exchange_brand_id: { label: "", value: "" },
        exchange_category_id: { label: "", value: "" },
        exchange_product_type_id: { label: "", value: "" },
        discount_brand_id: { label: "", value: "" },
        discount_category_id: { label: "", value: "" },
        discount_product_id: { label: "", value: "" },

        error: {
          name: "",
          offer_code: "",
          minimum_purchase_amount: "",
          discount_amount: "",
          exchange_brand_id: "",
          exchange_category_id: "",
          exchange_product_type_id: "",
          discount_category_id: "",
          discount_product_id: "",
          start_date: "",
          end_date: "",
          start_time: "",
          end_time: "",
        },
      },
    });
  },
}));
