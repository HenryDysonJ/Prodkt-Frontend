import { envConfig } from "@core/envconfig";
import { httpRequest } from "@core/utils/api/axios";
import { create } from "zustand";

import { enqueueSnackbar } from "notistack";
import queryString from "query-string";
import { IproductStore } from "./interface";

export const useProductStore = create<IproductStore>((set, get) => ({
  type: "",
  batchInfo: [],
  error: {},
  searchValue: "",
  offset: 0,
  limit: 5,
  sortItem: "",
  addNewProduct: {
    id: "",
    image: "",
    productCode: "",
    productType: { label: "", value: "" },
    mrp: "",
    productCategory: "",
    productName: "",
    description: "",
    status: false,
    batchInfo: [],
    warranty: {
      duration: "",
      kilometer: "",
      url: "",
      fileName: "",
    },
    usermanual: {
      url: "",
      fileName: "",
    },
    otherDocument: {
      url: "",
      fileName: "",
    },
  },
  addNewProductModalData: {
    warranty: {
      duration: "",
      kilometer: "",
      url: "",
      fileName: "",
      document_type: "warranty_details",
    },
    usermanual: {
      url: "",
      fileName: "",
      document_type: "user_manual",
    },
    otherDocument: {
      url: "",
      fileName: "",
      document_type: "other_documents",
    },
  },
  categoryList: {},
  productList: [],
  productView: {},
  batchInfoData: {},
  productTypeList: {},

  selectedOptions: {
    categoryType: { label: '', value: '' },
    statuses: [],
  },
  appliedSelectedOptions: {
    categoryType: { label: '', value: '' },
    statuses: [],
  },
  loading: false,

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

  // To handle filter data
  setFilterData: (type: string, value: any) => {
    // Get state
    const { selectedOptions } = get();
    // Set state
    if (type === 'categoryType') {
      set({
        selectedOptions: { ...selectedOptions, [type]: value },
      });
    } else {
      set({
        selectedOptions: { ...selectedOptions, [type]: value },
      });
    }
  },



  // To apply filter data
  applyFilterData: () => {
    // Get state
    const { getProductList, searchValue, sortItem, selectedOptions } = get();
    // Set state
    set({
      selectedOptions: { categoryType: { label: '', value: '' }, status: [] },
      appliedSelectedOptions: {
        categoryType: selectedOptions?.categoryType ? { label: selectedOptions?.categoryType?.label ?? '', value: selectedOptions?.categoryType?.value ?? '' } : { label: "", value: "" },
        status: selectedOptions?.statuses ?? [],
      },
    });

    // Call getOffersList function
    getProductList(
      0,
      5,
      searchValue,
      sortItem,
      selectedOptions?.categoryType,
      selectedOptions?.statuses
    );
  },

  // To reset filter data
  initializeFilterData: () => {
    // Get state
    const { getProductList, searchValue, sortItem } = get();
    // Set state
    set({
      selectedOptions: { categoryType: { label: '', value: '' }, statuses: [] },
      appliedSelectedOptions: { categoryType: { label: '', value: '' }, statuses: [] },
    });
    // Call getProductList function
    getProductList(0, 5, searchValue, sortItem, {}, []);
  },



  // To filter data into modal
  setFilterDataIntoModal: () => {
    // Get state
    const { appliedSelectedOptions } = get();
    // Set state
    set({
      selectedOptions: {
        categoryType: appliedSelectedOptions?.categoryType ? { label: appliedSelectedOptions?.categoryType?.label ?? '', value: appliedSelectedOptions?.categoryType?.value ?? '' } : { label: "", value: "" },
        statuses: appliedSelectedOptions?.statuses ?? [],
      },
    });
  },


  handleChangeProduct: (key: string, value: object | string) => {
    const { clearFieldError, getProductType } = get();
    if (key === "productCategory") {
      getProductType(value?.value?.id);
      set((state: any) => ({
        ...state,
        addNewProduct: {
          ...state.addNewProduct,
          productType: { label: "", value: "" },
          [key]: value?.value,
        },
      }));
      clearFieldError(key);
    } else if (key === "productType") {
      set((state: any) => ({
        ...state,
        addNewProduct: {
          ...state.addNewProduct,
          [key]: value,
        },
      }));
      clearFieldError(key);
    } else {
      set((state: any) => ({
        ...state,
        addNewProduct: {
          ...state.addNewProduct,
          [key]: value,
        },
      }));
      clearFieldError(key);
    }
  },
  // DELETE BATCH INFORMATION
  deletedBatchInfo: (rowData: any) => {
    const { addNewProduct } = get();
    let updatedBatchInfo: any;
    if (rowData?.id) {
      updatedBatchInfo = addNewProduct?.batchInfo?.filter(
        (batch: any) => batch?.id !== rowData?.id
      );
    } else if (rowData?.url) {
      updatedBatchInfo = addNewProduct?.batchInfo?.filter(
        (batch: any) => batch?.url !== rowData?.url
      );
    }

    set((state: { addNewProduct: { batchInfo: any; }; }) => ({
      addNewProduct: {
        ...state.addNewProduct,
        batchInfo: updatedBatchInfo || state?.addNewProduct?.batchInfo,
      },
    }));
  },

// HANDLE CHANGE DOCUMENT PRODUCT
  handleChangeDocumentProduct: (
    parent: string,
    key: string,
    value: object | any
  ) => {
    const { addNewProductModalData, clearFieldError } = get();
    set({
      addNewProductModalData: {
        ...addNewProductModalData,
        [parent]: {
          ...addNewProductModalData[parent],
          [key]: value,
        },
      },
    });
    clearFieldError(key);
  },

  // DELETE PRODUCT INFORMATION
  deleteProductInfo: (deleteData: any) => {

    if (deleteData === 'warranty') {
      set((state) => ({
        addNewProduct: {
          ...state.addNewProduct,
          warranty: {}
        },
      }));
    }
    else if (deleteData === 'userManual') {
      set((state) => ({
        addNewProduct: {
          ...state.addNewProduct,
          usermanual: {}
        },
      }));
    }
    else if (deleteData === 'otherDocuments') {
      set((state) => ({
        addNewProduct: {
          ...state.addNewProduct,
          otherDocument: {}
        },
      }));
    }

  },
// UPDATE BATCH INFORMATION DATA
  updateBatchInfoData: () => {
    const { addNewProduct, batchInfoData } = get();
    set((state) => ({
      addNewProduct: {
        ...state.addNewProduct,
        batchInfo: [...state.addNewProduct.batchInfo, batchInfoData],
      },
    }));
  },
  // UPDATE MODAL DATA TO STORE
  updateModalDataToStore: () => {
    const { addNewProduct, addNewProductModalData, clearModalData } = get();

    set({
      addNewProduct: {
        ...addNewProduct,
        warranty: addNewProductModalData?.warranty,
        usermanual: addNewProductModalData?.usermanual,
        otherDocument: addNewProductModalData?.otherDocument,
      },
    });
    clearModalData();
  },
// UPDATE STORE DATA TO MODAL
  updateStoreDataToModal: () => {
    const { addNewProduct } = get();
    set({
      addNewProductModalData: {
        warranty: addNewProduct?.warranty,
        usermanual: addNewProduct?.usermanual,
        otherDocument: addNewProduct?.otherDocument,
      },
    });
  },
// CLEAR MODAL DATA
  clearModalData: () => {
    set({
      addNewProductModalData: {
        warranty: {
          duration: "",
          kilometer: "",
          url: "",
          fileName: "",
        },
        usermanual: {
          url: "",
          fileName: "",
        },
        otherDocument: {
          url: "",
          fileName: "",
        },
      },
    });
  },

  
  // Handle search change function
  setHandleSearch: (val: string) => {
    // Get state
    const { getProductList, appliedSelectedOptions, sortItem } = get();
    // Set state
    set({ searchValue: val });
    // Call getProductList function
    getProductList(
      0,
      5,
      val,
      sortItem,
      appliedSelectedOptions?.categoryType,
      appliedSelectedOptions?.statuses
    );
  },

  // Handle offset / limit (or) sortItem change function
  handleOffsetLimitData: (key: string, val: any) => {
    // Get state
    const {
      getProductList,
      appliedSelectedOptions,
      searchValue,
      sortItem,
      limit,
    } = get();
    // Set state
    set({ [key]: val });
    // Call getProductList function
    if (key === "offset") {
      getProductList(
        val * limit,
        limit,
        searchValue,
        sortItem,
        appliedSelectedOptions?.categoryType,
        appliedSelectedOptions?.statuses
      );
    } else if (key === "limit") {
      getProductList(
        0,
        val,
        searchValue,
        sortItem,
        appliedSelectedOptions?.categoryType,
        appliedSelectedOptions?.statuses
      );
    } else if (key === "sortItem") {
      getProductList(
        0,
        5,
        searchValue,
        val,
        appliedSelectedOptions?.categoryType,
        appliedSelectedOptions?.statuses
      );
    }
  },
// BATCH UPLOAD 
  batchUpload: async (file: any, callback: any = () => false) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await httpRequest(
        "post",
        `${envConfig.api_url}/brand/products/batch_details`,
        formData,
        true
      );
      if (response) {
        set({ batchInfoData: response?.data?.data });

        setTimeout(() => {
          enqueueSnackbar(`${response?.data?.message}`, {
            variant: "success",
            style: { fontSize: "1.2rem" },
          });
        }, 3000);
      }
      return response
    } catch (erorr: any) {
      enqueueSnackbar(`${erorr?.response?.data?.message}`, {
        variant: "error",
        style: { fontSize: "1.2rem" },
      });
      return erorr?.response
    }
  },
// ADD PRODUCT 
  addProduct: async (status: number) => {
    const { addNewProduct } = get();
    try {
      const payload = {
        name: addNewProduct?.productName,
        type: addNewProduct?.productType?.value,
        category: addNewProduct?.productCategory?.id,
        code: addNewProduct?.productCode,
        price: addNewProduct?.mrp,
        description: addNewProduct?.description,
        image: addNewProduct?.image,
        status: status == 5 ? 5 : addNewProduct?.status === true ? 1 : 2,
        batchInfo:
          addNewProduct?.batchInfo?.map((val: any) => ({
            batchNumber: val?.batchNumber,
            ManufacturerName: val?.ManufacturerName,
            quantity: val?.quantity,
            url: val?.url,
          })) || [],

        documents: [
          addNewProduct?.warranty,
          addNewProduct?.usermanual,
          addNewProduct?.otherDocument,
        ],
      };
      const response = await httpRequest(
        "post",
        `${envConfig.api_url}/brand/products/add`,
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
// GET PRODUCT LIST 
  getProductList: async (
    offset: number,
    limit: number,
    search: string,
    sortItem: string,
    categoryType: any,
    status: any
  ) => {

    let statusId: any[] = [];
    if (Array.isArray(status) && status?.length > 0) {
      statusId = status?.map((val: any) => val?.value || []);
    }
    set({ loading: true });
    try {
      const sortValue =
        sortItem === "A-Z" ? "asc" : sortItem === "Z-A" ? "desc" : "";

      const params = queryString.stringify({
        offset: offset,
        limit: limit,
        sort: sortValue,
        search: search,
        category: categoryType?.value,
        status: [statusId],
      });
      const response = await httpRequest(
        "get",
        `${envConfig.api_url}/brand/products/list?${params}`,
        {},
        true
      )

      set((state) => ({
        ...state,
        loading: false,
        productList: response?.data,
        searchValue: search ?? "",
        offset: offset ?? 0,
        limit: limit ?? 5,
        appliedSelectedOptions: {
          categoryType: categoryType,
          statuses: status,
        },
      }));

      return response
    } catch (error: any) {
      set({ loading: false });
      enqueueSnackbar(`${error?.response?.data?.message}`, {
        variant: "error",
        style: { fontSize: "1.2rem" },
      });
    }
  },
// GET CATEGORY LIST
  getCategoryList: async () => {
    try {
      const response = await httpRequest(
        "get",
        `${envConfig.api_url}/brand/products/categories`,
        {},
        true
      );

      if (response) {
        set({ categoryList: response?.data?.data });
      }
    } catch (error: any) {
      enqueueSnackbar(`${error?.response?.data?.message}`, {
        variant: "error",
        style: { fontSize: "1.2rem" },
      });
    }
  },

  // GET PRODUCT TYPE
  getProductType: async (category_id: any) => {
    try {
      const response = await httpRequest(
        "get",
        `${envConfig.api_url}/brand/products/types?category_id=${category_id ?? 1
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
  // UPDATE PRODUCT STATUS
  updateproductStatus: async (id: string, status) => {
    try {
      const payload = {
        id: id,
        status: status,
      };
      await httpRequest(
        "put",
        `${envConfig.api_url}/brand/products/update_status`,
        { ...payload },
        true
      )
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message} `, {
            variant: "success",
            style: { fontSize: "1.4rem" },
          });
          get().getProductList(0, 5, "", "", {}, []);
        })
        .catch((err) => {
          enqueueSnackbar(`${err?.response?.data?.message} `, {
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
  },
// SET EDIT PRODUCT FORM DATA
  setEditProductForm: (editData: any) => {
    const urlWarranty = editData?.product_documents[0]?.url;
    const urlUserManual = editData?.product_documents[1]?.url;
    const urlotherdocument = editData?.product_documents[2]?.url;

    const fileNameWarranty = urlWarranty
      ?.match(/\/([^\/?#]+\.\w+)$/)?.[1]
      ?.replace(/%|\_\d+/g, "");
    const fileUserManual = urlUserManual
      ?.match(/\/([^\/?#]+\.\w+)$/)?.[1]
      ?.replace(/%|\_\d+/g, "");
    const fileOtherDocument = urlotherdocument
      ?.match(/\/([^\/?#]+\.\w+)$/)?.[1]
      ?.replace(/%|\_\d+/g, "");

    set((state) => ({
      ...state,
      addNewProduct: {
        ...state.addNewProduct,
        id: editData?.id,
        image: editData?.product_image,
        productCode: editData?.product_code,
        productType: {
          label: editData?.type?.name,
          value: editData?.type?.id,
        },
        mrp: editData?.price,
        productCategory: {
          label: editData?.category?.name,
          value: editData?.category?.id,

        },
        productName: editData?.product_name,
        description: editData?.description,
        status: editData?.status?.status === "Active" ? true : false,
        batchInfo: [...editData.product_batch_informations],
        warranty: {
          duration: editData?.product_documents[0]?.warranty_duration,
          kilometer: editData?.product_documents[0]?.kilometers,
          url: editData?.product_documents[0]?.url,
          fileName: fileNameWarranty,
          document_type: "warranty_details",
        },
        usermanual: {
          url: editData?.product_documents[1]?.url,
          fileName: fileUserManual,
          document_type: "user_manual",
        },
        otherDocument: {
          url: editData?.product_documents[2]?.url,
          fileName: fileOtherDocument,
          document_type: "other_documents",
        },
      },
      isEdit: true,
      type: "edit",
    }));
  },
// SET VIEW PRODUCT FORM DATA
  setViewproductForm: (viewData: any) => {
    const urlWarranty = viewData?.product_documents[0]?.url;
    const urlUserManual = viewData?.product_documents[1]?.url;
    const urlOtherdocument = viewData?.product_documents[2]?.url;
    const fileNameWarranty = urlWarranty
      ?.match(/\/([^\/?#]+\.\w+)$/)?.[1]
      ?.replace(/%|\_\d+/g, "");
    const fileUserManual = urlUserManual
      ?.match(/\/([^\/?#]+\.\w+)$/)?.[1]
      ?.replace(/%|\_\d+/g, "");
    const fileOtherDocument = urlOtherdocument
      ?.match(/\/([^\/?#]+\.\w+)$/)?.[1]
      ?.replace(/%|\_\d+/g, "");

    set((state) => ({
      ...state,
      addNewProduct: {
        ...state.addNewProduct,
        id: viewData?.id,
        image: viewData?.product_image,
        productCode: viewData?.product_code,
        productType: {
          label: viewData?.type?.name,
          value: viewData?.type?.name,
        },
        mrp: viewData?.price,
        productCategory: {
          label: viewData?.category?.name,
        },
        productName: viewData?.product_name,
        description: viewData?.description,
        status: viewData?.status?.status === "Active" ? true : false,
        batchInfo: [...viewData.product_batch_informations],
        warranty: {
          duration: viewData?.product_documents[0]?.warranty_duration,
          kilometer: viewData?.product_documents[0]?.kilometers,
          url: viewData?.product_documents[0]?.url,
          fileName: fileNameWarranty,
        },
        usermanual: {
          url: "",
          fileName: fileUserManual,
        },
        otherDocument: {
          url: null,
          fileName: fileOtherDocument
        },
      },
      type: "view",
    }));
  },

  // UPDATE PRODUCT 
  updateProduct: async (id: string, status: number) => {

    const { addNewProduct, getProductList, setClearAll } = get();
    try {
      const payload = {
        id: addNewProduct?.id,
        name: addNewProduct?.productName,
        type: addNewProduct?.productType?.id,
        category: addNewProduct?.productCategory?.id,
        code: addNewProduct?.productCode,
        price: addNewProduct?.mrp,
        description: addNewProduct?.description,
        image: addNewProduct?.image,
        status: status == 5 ? 5 : addNewProduct?.status ? 1 : 2,
        batchInfo:
          addNewProduct?.batchInfo?.map((val: any) => ({
            batchNumber: val?.batchNumber,
            ManufacturerName: val?.ManufacturerName,
            quantity: val?.quantity,
            url: val?.url,
          })) || [],

        documents: [
          addNewProduct?.warranty,
          addNewProduct?.usermanual,
          addNewProduct?.otherDocument,
        ],

      };
      await httpRequest(
        "put",
        `${envConfig.api_url}/brand/products/edit`,
        { ...payload },
        true
      )
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message} `, {
            variant: "success",
            style: { fontSize: "1.4rem" },
          });
          getProductList(0, 5, "", "", {}, []);
          setClearAll();
          return res;
        })
        .catch((err) => {
          enqueueSnackbar(`${err?.response?.data?.message} `, {
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
  },
// GET VIEW PRODUCT
  getproductView: async (rowData: any) => {
    try {
      const params = queryString.stringify({
        id: rowData?.id,
      });
      const res = await httpRequest(
        "get",
        `${envConfig.api_url}/brand/products/view?${params}`,
        {},
        true
      );
      if (res?.data?.status === "200") {
        set({ productView: res?.data ?? {} });
        return res;
      }
    } catch (refreshLoading) {
      console.log(refreshLoading, "refreshLoading");
      set({});
    }
  },

// BULK UPLOAD
  bulkUpload: async (file: any, callback: any = () => false) => {
    const { getProductList } = get()
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await httpRequest(
        "post",
        `${envConfig.api_url}/brand/products/bulk_upload`,
        formData,
        true
      );
      if (response) {
        setTimeout(() => {
          enqueueSnackbar(`${response?.data?.message} `, {
            variant: "success",
            style: { fontSize: "1.2rem" },
          });
        }, 1000);
        getProductList(0, 5, "", "", {}, []);
      }
      return response
    } catch (erorr: any) {
      console.log("Error", erorr);
      enqueueSnackbar(`${erorr?.response?.data?.message} `, {
        variant: "error",
        style: { fontSize: "1.2rem" },
      });
      return erorr?.response
    }
  },
  // CLEAR STATE VALUES
  setClearAll: () => {
    set({
      addNewProduct: {
        image: "",
        productCode: "",
        productType: { label: "", value: "" },
        mrp: "",
        productCategory: "",
        productName: "",
        description: "",
        status: false,
        batchInfo: [],
        warranty: {
          duration: "",
          kilometer: "",
          url: "",
        },
        usermanual: {
          url: "",
        },
        otherDocument: {
          url: "",
        },
      },
      productView: {},
      error: {},
    });
  },
  
  setClearProductModal: () => {
    set({
      addNewProductModalData: {
        warranty: {
          duration: "",
          kilometer: "",
          url: "",
          fileName: "",
          document_type: "warranty_details",
        },
        usermanual: {
          url: "",
          fileName: "",
          document_type: "user_manual",
        },
        otherDocument: {
          url: "",
          fileName: "",
          document_type: "other_documents",
        },
      },
    })
  }
}));
