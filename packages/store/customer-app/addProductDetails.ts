import { envConfig } from '@core/envconfig';
import { httpRequest, UploadFiles } from '@core/utils';
import { create } from 'zustand';
import moment from 'moment';


import {
  AddProductDetailsInterface,
  AMCInterface,
  DocumentDetailsInterface,
  InsuranceInterface,
  InvoiceInterface,
  ProductDetailsInterface,
  WarrantyInterface,
} from '../interface';

export const addProductDetails = create<AddProductDetailsInterface>((set, get) => ({
  error: false,
  loading: false,
  success: false,
  currentStep: 1,
  scanType: '',
  getProductState: {
    amc: [], ext_warranty: [], insurance: [], std_warranty: []
  },
  // getProductState: [],
  productNickname: [],
  userProductId: '',
  whatsAppCoverage_id: null,
  whatsAppProductDetails: '',
  whats_app_media_id: null,
  productDetails: {
    approx_years: 0,
    date_of_purchase: '',
    product_serial_no: '',
    image_url: '',
    standard_qus_and_ans: [],
    is_chat_bot: false,
    location_name: '',
    nick_name: '',
    product_id: '',
    category: {
      value: '',
      label: '',
      specifications: [],
      serial_no: {
        title: 'Serial Number',
        info_text: '',
        info_image_url: '',
      },
      category_id: '',
      id: '',
      category_name: ''
    },
    brand: '',
    product_details: {
      name: '',
      brand: '',
      url: '',
      specifications: {},
      serial_no: ''
    },
    data_of_purchase: '',
    serial_no: '',
    imei_no: '',
    mode_of_purchase: 'offline',
    dateofpurchase: 'Yes',
    purchase_location: {},
    std_warranty: false,
    ext_warranty: false,
    insurance: false,
    amc: null,
    approximateAge: 0
  },
  documentDetails: {
    isWarrantyApplicable: null,
    isInsuranceApplicable: null,
    isAMCApplicable: null,
    warranty: {
      applied: true,
      start_date: null,
      coverage: null,
      units: null,
      document: [],
    },
    extended_warranty: {
      applied: null,
      start_date: null,
      coverage: null,
      units: null,
      document: [],
    },
    insurance: {
      insurer_name: null,
      policy_no: null,
      purchased_on: null,
      insurance_start_date: null,
      coverage: null,
      units: null,
      document: [],
    },
    amc: {
      serial_no: null,
      purchased_on: null,
      coverage: null,
      units: null,
      document: [],
    },
    invoice: {
      document: [],
    },
  },
  category: {
    loading: false,
    error: false,
    data: [],
  },

  standard_warranty_details: {
    warranty_coverage: null,
    warranty_coverage_type: '',
    warranty_document_url: [],
  },

  updateProducts: (key: keyof AddProductDetailsInterface, value: any) => {
    set({ [key]: value });
  },

  onScanType: (val: string) => {
    set({ scanType: val });
  },

  OnWhatsAppCoverageId: (id: string | null) => {
    set({
      whatsAppCoverage_id: id
    })
  },

  productYearIncrementDecrement: (key: any, value: any) => {
    // set((state) => ({
    //   externalDocumentProductDetails: {
    //     amc_details: {
    //       ...state?.externalDocumentProductDetails?.amc_details,
    //       [key]: val,
    //     },
    //   },
    // }));
    // const newProductDetails = get().productDetails;
    // // newProductDetails.product_details?.a[key] = value;
    // newProductDetails.productDetails.approximateAge[key] = value;
    // set({ productDetails: newProductDetails });
    // const newProductDetails: documentInvoiceInterface = get().invoiceDocument;
    // newProductDetails[key] = value;
    // set({ invoiceDocument: newProductDetails });

    const newProductDetails = get().productDetails;
    newProductDetails[key] = value;
    set({ productDetails: newProductDetails });
  },

  updateProductDetails: (key: keyof ProductDetailsInterface, value: never | any) => {
    const newProductDetails: ProductDetailsInterface = get().productDetails;
    (newProductDetails[key] as string) = value;
    if (key === 'mode_of_purchase' && value === 'online') {
      newProductDetails.purchase_location = {};
    }
    if (key === 'dateofpurchase' && value === 'Yes') {
      newProductDetails.data_of_purchase = '';
      newProductDetails.approx_years = 0;
    }
    if (key === 'dateofpurchase' && value === 'No') {
      newProductDetails.data_of_purchase = '';
      newProductDetails.approx_years = 0;
    }
    if (key === 'category') {
      value?.specifications?.forEach((_: any) => {
        newProductDetails.product_details.specifications[_.value] = '';
      });
    }
    set({ productDetails: newProductDetails });
  },

  updateProductSerialNo: (key: keyof ProductDetailsInterface, value: never) => {
    const newProductDetails: ProductDetailsInterface = get().productDetails;
    newProductDetails[key] = value;
    set({ productDetails: newProductDetails });
  },

  updateDocumentDetails: (key: keyof DocumentDetailsInterface, value: never) => {
    const newDocumentDetails: DocumentDetailsInterface = get().documentDetails;
    newDocumentDetails[key] = value;
    set({ documentDetails: newDocumentDetails });
  },

  //   onUploadCaptureFile: (val: File | string) => {
  //
  //     set((state) => ({ documentMultiple: [...state?.documentMultiple, val] }));
  // },

  updateProductDetailsSpecification: (key: string, value: any, limit?: number | string) => {
    if (limit) {
      if (value.length > limit) {
        return;
      }
    }
    const newProductDetails = get().productDetails;
    newProductDetails.product_details.specifications[key] = value;
    set({ productDetails: newProductDetails });
  },

  updateProductDetailsName: (name: string) => {
    const newProductDetails = get().productDetails;
    newProductDetails.product_details.name = name;
    set({ productDetails: newProductDetails });
  },

  updateProductDeatilsStore: (key: string, value: string) => {
    const { productDetails } = get();
    const productDetailsCopy = JSON.parse(JSON.stringify(productDetails));
    productDetailsCopy[key] = value;

    set({ productDetails: productDetailsCopy });
  },

  //  standard Warranty details

  updateWarrantyDetails: (key: keyof WarrantyInterface, value: any | never, limit?: number) => {
    if (limit) {
      if (value.length > limit) {
        return;
      }
    }
    const newProductDetails: DocumentDetailsInterface = get().documentDetails;
    newProductDetails.warranty[key] = value;
    set({ documentDetails: newProductDetails });
  },

  updateWarrantyDocumentDetails: (key: keyof WarrantyInterface, value: any | never) => {
    const newProductDetails: DocumentDetailsInterface = get().documentDetails;
    newProductDetails.warranty[key].push(value);
    set({ documentDetails: newProductDetails });
  },

  warrantyDocumentDelete: (key: keyof WarrantyInterface, index: number) => {
    const newProductDetails = get().documentDetails;
    newProductDetails.warranty[key].splice(index);
    set({ documentDetails: newProductDetails });
  },

  //  Extended Warranty details

  updateExtendedWarrantyDetails: (key: keyof WarrantyInterface, value: any | never, limit?: number) => {
    if (limit) {
      if (value.length > limit) {
        return;
      }
    }
    const newProductDetails = get().documentDetails;
    newProductDetails.extended_warranty[key] = value;
    set({ documentDetails: newProductDetails });
  },

  updateExtendedWarrantyDocument: (key: keyof WarrantyInterface, value: any | never, limit?: number) => {
    const newProductDetails = get().documentDetails;
    newProductDetails.extended_warranty[key].push(value);
    set({ documentDetails: newProductDetails });
  },

  documentDelete: (key: keyof WarrantyInterface, index: number) => {
    const newProductDetails = get().documentDetails;
    newProductDetails.extended_warranty[key].splice(index, 1);
    set({ documentDetails: newProductDetails });
  },

  //  Insurance Warranty details
  updateInsuranceDetails: (key: keyof InsuranceInterface, value: any | never, limit?: number) => {
    if (limit) {
      if (value.length > limit) {
        return;
      }
    }
    const newProductDetails = get().documentDetails;
    newProductDetails.insurance[key] = value;
    set({ documentDetails: newProductDetails });
  },

  updateInsuranceDocument: (key: keyof InsuranceInterface, value: any | never, limit?: number) => {
    const newProductDetails = get().documentDetails;
    newProductDetails.insurance[key].push(value);
    set({ documentDetails: newProductDetails });
  },

  insuranceDocumentDelete: (key: keyof InsuranceInterface, index: number) => {

    const newProductDetails = get().documentDetails;
    newProductDetails.insurance[key].splice(index);
    set({ documentDetails: newProductDetails });
  },

  //  Amc Warranty details

  updateAmcDetails: (key: keyof AMCInterface, value: any | never, limit?: number) => {
    if (limit) {
      if (value.length > limit) {
        return;
      }
    }
    const newProductDetails = get().documentDetails;
    newProductDetails.amc[key] = value;
    set({ documentDetails: newProductDetails });
  },

  updateAmcDocument: (key: keyof AMCInterface, value: any | never, limit?: number) => {
    const newProductDetails = get().documentDetails;
    newProductDetails.amc[key].push(value);
    set({ documentDetails: newProductDetails });
  },

  amcDocumentDelete: (key: keyof AMCInterface, index: number) => {

    const newProductDetails = get().documentDetails;
    newProductDetails.amc[key].splice(index);
    set({ documentDetails: newProductDetails });
  },

  //  Invoice Warranty details
  updateInvoiceDetails: (key: keyof InvoiceInterface, value: any | never) => {
    const newProductDetails = get().documentDetails;
    newProductDetails.invoice[key] = value;
    set({ documentDetails: newProductDetails });
  },

  updateInvoiceDocument: (key: keyof InvoiceInterface, value: any | never) => {
    const newProductDetails = get().documentDetails;
    newProductDetails.invoice[key].push(value);
    set({ documentDetails: newProductDetails });
  },

  invoiceDocumentDelete: (key: keyof InvoiceInterface, index: number) => {
    const newProductDetails = get().documentDetails;
    newProductDetails.invoice[key].splice(index);
    set({ documentDetails: newProductDetails });
  },

  setApproxYears: (key: string, value: any) => {
    if (key === "approx_years" && isNaN(value)) {
      set((state) => ({
        productDetails: {
          ...state?.productDetails,
          [key]: 1,
        },
      }));
    } else {
      set((state) => ({
        productDetails: {
          ...state?.productDetails,
          [key]: value,
        },
      }));
    }
  },

  getCategory: async (callback: any = () => false) => {
    const { category } = get();
    category.loading = true;
    category.error = false;
    set({ category });
    try {
      await httpRequest('get', `${envConfig.api_url}/products/display_master_product_category`, {}, true)
        .then((res) => {
          category.data = res.data?.data ?? [];
          set({ category });
          callback();
        })
        .catch((err) => {
          throw err;
        });
    } catch (error) {
      category.error = true;
      set({ category });
    } finally {
      category.loading = false;
      set({ category });
    }
  },

  addProduct: async () => {
    set({ loading: true, error: false, success: false });

    try {
      const addProductData = get();

      const document: {
        warranty_url: any;
        extended_warranty_url: any;
        insurance_url: any;
        amc_url: any;
        invoice_url: any;
      } = {
        warranty_url: [],
        extended_warranty_url: [],
        insurance_url: [],
        amc_url: [],
        invoice_url: [],
      };

      if (addProductData?.documentDetails?.warranty?.document?.length > 0) {
        document.warranty_url = await UploadFiles(addProductData.documentDetails.warranty.document);
      }
      if (addProductData?.documentDetails?.extended_warranty?.document?.length > 0) {
        document.extended_warranty_url = await UploadFiles(addProductData.documentDetails.extended_warranty.document);
      }
      if (addProductData?.documentDetails?.insurance?.document?.length > 0) {
        document.insurance_url = await UploadFiles(addProductData.documentDetails.insurance.document);
      }
      if (addProductData?.documentDetails?.amc.document?.length > 0) {
        document.amc_url = await UploadFiles(addProductData.documentDetails.amc.document);
      }
      if (addProductData.documentDetails.invoice.document) {
        document.invoice_url = await UploadFiles(addProductData.documentDetails.invoice.document);
      }

      const payload = {
        product_details: {
          product_id: addProductData.productDetails.product_id,
          invoice_document_url: document.invoice_url,
          date_of_purchase: addProductData.productDetails.data_of_purchase,
          serial_no: addProductData.productDetails.serial_no,
          mode_of_purchase: addProductData.productDetails.mode_of_purchase,
          location_name: addProductData.productDetails.purchase_location.address ?? '',
          location_latitude: addProductData.productDetails.purchase_location.latitude ?? 0,
          location_longitude: addProductData.productDetails.purchase_location.longitude ?? 0,
          nick_name: addProductData.productDetails.nick_name,
          std_warranty:
            addProductData.documentDetails.isWarrantyApplicable === true &&
              addProductData.documentDetails.warranty.applied === true
              ? true
              : false,
          ext_warranty:
            addProductData.documentDetails.isWarrantyApplicable === true &&
              addProductData.documentDetails.extended_warranty.applied === true
              ? true
              : false,
          insurance: addProductData.documentDetails.isInsuranceApplicable === true ? true : false,
          amc: addProductData.documentDetails.isAMCApplicable,
          specifications: addProductData.productDetails.product_details.specifications,
          product_name: addProductData.productDetails.product_details.name,
          brand_name: addProductData.productDetails.brand,
          category_id:
            addProductData.productDetails.product_details?.category_id ??
            addProductData?.productDetails.category.category_id,
          type_id:
            addProductData.productDetails.product_details?.type_id ?? addProductData?.productDetails.category.value,
          description: addProductData.productDetails.product_details?.category_id,
        },
        standard_warranty_details:
          addProductData.documentDetails.isWarrantyApplicable && addProductData.documentDetails.warranty.applied
            ? {
              warranty_document_url: document.warranty_url,
              warranty_coverage_type: addProductData.documentDetails.warranty.units,
              warranty_coverage: addProductData.documentDetails.warranty.coverage,
            }
            : undefined,
        extended_warranty_details:
          addProductData.documentDetails.isWarrantyApplicable &&
            addProductData.documentDetails.extended_warranty.applied
            ? {
              warranty_document_url: document.extended_warranty_url,
              warranty_coverage_type: addProductData.documentDetails.extended_warranty.units,
              warranty_coverage: addProductData.documentDetails.extended_warranty.coverage,
              extended_start_date: addProductData.documentDetails.extended_warranty.start_date,
            }
            : undefined,
        insurance_details: addProductData.documentDetails.isInsuranceApplicable
          ? {
            insurance_document_url: document.insurance_url,
            insurer_name: addProductData.documentDetails.insurance.insurer_name,
            policy_no: addProductData.documentDetails.insurance.policy_no,
            insurance_purchased_on: addProductData.documentDetails.insurance.purchased_on,
            insurance_start_date: addProductData.documentDetails.insurance.purchased_on,
            insurance_coverage: addProductData.documentDetails.insurance.coverage,
            insurance_coverage_type: addProductData.documentDetails.insurance.units,
          }
          : undefined,
        amc_details: addProductData.documentDetails.isAMCApplicable
          ? {
            amc_document_url: document.amc_url,
            amc_serial_no: addProductData.documentDetails.amc.serial_no,
            amc_coverage: addProductData.documentDetails.amc.coverage,
            amc_purchased_on: addProductData.documentDetails.amc.purchased_on,
          }
          : undefined,
      };

      await httpRequest('POST', `${envConfig.api_url}/products/add_product_details`, payload, true)
        .catch((err) => {
          console.log('Error on add product: ', err);
          throw err;
        })
        .then((res) => {
          set({ success: true, userProductId: res?.data?.data?.user_product_id });
        });
    } catch (error) {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  getWhatsAppProduct: async () => {
    const { whatsAppCoverage_id } = get()
    try {
      await httpRequest('post', `${envConfig.api_url}/products/incomplete_invoice`,
        {
          id: whatsAppCoverage_id
        }, true)
        .then((res) => {
          set({ whatsAppProductDetails: res?.data?.data });
        })
        .catch((err) => {
          throw err;
        });
    } catch (error) {
      console.log(error, 'error')
    }
  },

  // AddproductCategory
  addCategoryproduct: async () => {
    set({ loading: true, error: false, success: false });
    try {
      const addProductData = get();
      const { whatsAppProductDetails, whatsAppCoverage_id, getProductState } = get();

      const WhatsUppayload = {
        product_details: {
          invoice_document_url: whatsAppProductDetails?.product_details?.invoice_document_url ?? undefined,
          product_id: whatsAppProductDetails?.product_details?.product_id,
          date_of_purchase: whatsAppProductDetails?.product_details?.date_of_purchase,
          approx_years: addProductData?.productDetails?.approx_years ?? null,
          serial_no: whatsAppProductDetails?.product_details?.serial_no,
          mode_of_purchase: whatsAppProductDetails?.product_details?.mode_of_purchase,
          imei_no: whatsAppProductDetails?.product_details?.imei_no,
          location_name: addProductData?.productDetails?.purchase_location?.address ?? '',
          location_latitude: whatsAppProductDetails?.product_details?.location_latitude ?? 0,
          location_longitude: whatsAppProductDetails?.product_details?.location_longitude ?? 0,
          nick_name: addProductData?.productDetails?.nick_name,
          std_warranty:
            whatsAppProductDetails?.product_details?.std_warranty,
          ext_warranty:
            addProductData.documentDetails.extended_warranty.applied,
          insurance:
            addProductData.documentDetails.isInsuranceApplicable,
          amc: addProductData.documentDetails.isAMCApplicable,
          product_name: whatsAppProductDetails?.product_details?.product_name ??
            addProductData?.productDetails?.product_details?.name,
          category_id: whatsAppProductDetails?.product_details?.category_id,
          type_id: whatsAppProductDetails?.product_details?.type_id,
          description: addProductData.productDetails.product_details?.category_id,
        },
        standard_warranty_details: {
          warranty_coverage_type: whatsAppProductDetails?.standard_warranty_details?.warranty_coverage_type,
          warranty_coverage: whatsAppProductDetails?.standard_warranty_details?.warranty_coverage,
          Warranty_provider: whatsAppProductDetails?.standard_warranty_details?.Warranty_provider ?? undefined
        },
        whats_app_media_id: whatsAppCoverage_id ?? null,
      };

      const payload = {
        product_details: {
          product_id: addProductData?.productDetails?.product_id,
          date_of_purchase:
            moment().subtract(addProductData?.productDetails?.approx_years, 'year').format('YYYY-MM-DD')
            ?? addProductData.productDetails.data_of_purchase,
          approx_years: addProductData?.productDetails?.approx_years,
          serial_no: addProductData?.productDetails?.serial_no,
          mode_of_purchase: addProductData?.productDetails?.mode_of_purchase,
          imei_no: addProductData?.productDetails?.imei_no,
          location_name: addProductData?.productDetails?.purchase_location?.address ?? '',
          location_latitude: addProductData?.productDetails?.purchase_location?.latitude ?? 0,
          location_longitude: addProductData?.productDetails?.purchase_location?.longitude ?? 0,
          nick_name: addProductData?.productDetails?.nick_name,
          std_warranty:
            getProductState?.amc === false ? null :
              addProductData.documentDetails.isWarrantyApplicable === true &&
                addProductData.documentDetails.warranty.applied === true
                ? true
                : false,
          ext_warranty:
            // addProductData.documentDetails.isWarrantyApplicable === true &&
            getProductState?.ext_warranty === false ? null :
              addProductData.documentDetails.extended_warranty.applied === true
                ? true
                : false,
          insurance:
            getProductState?.insurance === false ? null :
              addProductData.documentDetails.isInsuranceApplicable === true ? true : false,
          amc:
            getProductState?.amc === false ? null :
              addProductData.documentDetails.isAMCApplicable === true ? true : false,
          specifications: addProductData?.productDetails?.product_details?.specifications,
          product_name: addProductData?.productDetails?.product_details?.name,
          brand_name: addProductData.productDetails.brand,
          category_id:
            addProductData.productDetails.product_details?.category_id ??
            addProductData?.productDetails?.category?.category_id,
          type_id:
            addProductData.productDetails.product_details?.type_id
            ?? addProductData?.productDetails?.category?.value,
          description: addProductData.productDetails.product_details?.category_id,
        },
        standard_warranty_details: {
          warranty_coverage_type: addProductData.documentDetails.warranty.units,
          warranty_coverage: addProductData.documentDetails.warranty.coverage,
        },
        whats_app_media_id: whatsAppCoverage_id ?? null,
      };


      await httpRequest('POST', `${envConfig.api_url}/products/add_product_details`,
        whatsAppCoverage_id ? WhatsUppayload : payload,
        true)
        .catch((err) => {
          console.log('Error on add product: ', err);
          throw err;
        })
        .then((res) => {
          set({ success: true, userProductId: res?.data?.data?.user_product_id });
        });
    } catch (error) {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },


  getProduct: async (id: string) => {
    set({ loading: true, error: true });
    try {
      await httpRequest(
        'post',
        `${envConfig.api_url}/products/services_eligible_by_type_id`,
        {
          type_id: id,
        },
        true,
      )
        .then((res) => {
          set({
            getProductState: {
              ...res?.data?.data,
            },
          });
        })
        .catch((err) => { });
    } catch (error) {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  getProductNicknames: async (id: string) => {
    set({ loading: true, error: false });
    try {
      await httpRequest(
        'POST',
        `${envConfig.api_url}/products/product_nick_names`,
        {
          category_type_id: id,
        },
        true,
      )
        .then((res) => {
          set({
            productNickname: res?.data?.data,
          });
        })
        .catch((err) => { });
    } catch (error) {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  getStandardWarrantyDetails: async (payload) => {
    set({ loading: true });
    try {
      httpRequest(
        'POST',
        `${envConfig.api_url}/ai/std_warranty_details`,
        {
          warranty_details: payload,
        },
        true,
      )
        .then((res) => {
          set({ standard_warranty_details: res?.data.data.standard_warranty_details });
          return res?.data?.data;
        })
        .catch((err) => {
          console.log(err, 'ProductError');
          set({});
          return true;
        });
    } catch (error) {
      set({});
    } finally {
      set({ loading: false });
    }
  },

  // CLEAR PROFILE STATE
  clearProfile: () => {
    set({
      error: false,
      loading: false,
      success: false,
      currentStep: 1,
      scanType: '',
      getProductState: {
        amc: [], ext_warranty: [], insurance: [], std_warranty: []
      },
      userProductId: '',
      productDetails: {
        date_of_purchase: '',
        product_serial_no: '',
        image_url: '',
        standard_qus_and_ans: [],
        is_chat_bot: false,
        location_name: '',
        nick_name: '',
        product_id: '',
        category: {
          value: '',
          label: '',
          specifications: [],
          serial_no: {
            title: 'Serial Number',
            info_text: '',
            info_image_url: '',
          },
          category_id: '',
          id: '',
          category_name: ''
        },
        brand: '',
        product_details: {
          name: '',
          brand: '',
          url: '',
          specifications: {},
          serial_no: ''
        },
        data_of_purchase: '',
        serial_no: '',
        imei_no: '',
        mode_of_purchase: 'offline',
        purchase_location: {},
        std_warranty: false,
        ext_warranty: false,
        insurance: false,
        amc: null,
      },
    });
  },
  clearDocumentState: () => {
    set({
      documentDetails: {
        isWarrantyApplicable: null,
        isInsuranceApplicable: null,
        isAMCApplicable: null,
        warranty: {
          applied: true,
          start_date: null,
          coverage: null,
          units: null,
          document: [],
        },
        extended_warranty: {
          applied: null,
          start_date: null,
          coverage: null,
          units: null,
          document: [],
        },
        insurance: {
          insurer_name: null,
          policy_no: null,
          purchased_on: null,
          coverage: null,
          units: null,
          document: [],
        },
        amc: {
          serial_no: null,
          purchased_on: null,
          coverage: null,
          units: null,
          document: [],
        },
        invoice: {
          document: [],
        },
      },
      category: {
        loading: false,
        error: false,
        data: [],
      },
    });
  },
}));
