// import { envConfig } from '@core/envconfig';
// import { httpRequest } from '@core/utils';
import { envConfig } from '@core/envconfig';
import { httpRequest, UploadFiles } from '@core/utils';
import moment from 'moment';
import { create } from 'zustand';

import { enqueueSnackbar } from 'notistack';
import {
  documentInvoiceInterface,
  maintenancePayload,
  scanProductDetailsInterface
} from '../interface';

export const useScanproduct = create<scanProductDetailsInterface>((set, get) => ({
  product_details: {
    invoice_details: [],
    std_warrantyDetails: [],
    extd_warrantyDetails: [],
    insurance_details: [],
    amc_details: [],
  },
  product_id: '',
  warranty_details: {},
  standardWarrantyDetails: '',
  getStandardWarranty: [],

  serviceTypeOptions: [],

  checkedIndex: null,

  externalDocumentProductDetails: {
    extended_warranty_details: {
      extended_start_date: '',
      service_provider_name: '',
      warranty_coverage: null,
      warranty_coverage_type: '',
      warranty_document_url: [],
    },
    insurance_details: {
      insurance_coverage: null,
      insurance_coverage_type: '',
      insurance_document_url: [],
      insurance_purchased_on: '',
      policy_no: '',
      insurer_name: '',
      insurance_start_date: ''
    },
    amc_details: {
      amc_coverage: 0,
      amc_purchased_on: '',
      amc_document_url: [],
      amc_service_provider_name: '',
      amc_serial_no: '',
    },
    service_details: {
      service_bill: [],
      name: '',
      date_of_service: '',
      service_provider: '',
      type: '',
    },
    invoice_details: undefined
  },
  responseMessage: false,

  uploadType: '',
  amc_drawerType: '',
  insuranceDrawerType: '',
  insuranceUpdateType: '',
  extendedDrawerType: '',
  amcDrawerType: false,
  updateAmcDrawer: false,
  updateInsuranceDrawer: false,
  insuranceDrawerUpdate: false,
  updateExtendedDrawer: false,
  amcDrawerUpdate: false,
  homeType: '',
  insuranceUploadType: '',
  serviceType: '',
  amcUploadType: '',
  specifications: [],
  warrantyType: '',
  extendedType: '',
  insuranceType: '',
  amcType: '',
  serialCheckedIndex: null,

  productDetailsProductId: '',
  extWarrantyProductUploadType: '',
  insuranceProductUploadType: '',
  amcProductUploadType: '',
  serviceProductUploadType: '',

  serviceHistoryUploadType: '',

  dataURIs: [] ?? '',
  uploadFile: [] ?? '',
  // getUploadFile:[] ?? '',
  invoiceDocument: {
    linkUrl: null,
    serial_no: '',
    imei_no: '',
    nick_name: '',
  },
  currentStatus: {
    step: 0,
    status: 'enable',
    skip: [],
    isExtendedWarranty: false,
  },
  serialIndex: '',
  scanType: '',
  user_productId: '',
  active: {},
  inActive: {},
  loading: false,
  standardLoadingNew: false,
  getStandardWarrantyLoading:false,
  productLoading: false,
  ProductError: false,
  productSuccess: false,
  extWarrantyLoading: false,
  amcLoading: false,
  insuranceLoading: false,
  warrantyLoading: false,
  serviceLoading: false,
  invoiceLoading: false,

  documentDetails: {
    isInsuranceApplicable: null,
    isAMCApplicable: null,
  },
  // service
  openServiceRecordDrawer: false,
  openServiceRecordType: false,
  scheduler_id: '',

  // invoice drawer

  openInvoiceDrawer:false,
  
  updateServiceRecordDrawerState: (key: string, val: any) => {
    set((state) => ({
      ...state,
      [key]: val,
    }));
  },
  getScanProduct: async (uploadScanFiles: any, uploadFile: any) => {
    set({ loading: true, ProductError: true, productLoading: true });
    try {
      const addScanProductData = get();
      let url: any[] | undefined = [];
      if (uploadScanFiles?.length > 0) {
        url = await UploadFiles(uploadScanFiles?.map((x: { url: any }) => x?.url));
        // url = await UploadFiles(uploadScanFiles);
      }
      if (uploadFile?.length > 0) {
        url = await UploadFiles(uploadFile);
      }

      await httpRequest(
        'post',
        `${envConfig.api_url}/ai/scan_for_add_product`,
        {
          url: url ?? '',
          document_type:
            addScanProductData?.currentStatus?.step === 0
              ? 'invoice'
              : addScanProductData?.currentStatus?.step === 1
                ? 'ext_warranty'
                : addScanProductData?.currentStatus?.step === 2
                  ? 'insurance'
                  : addScanProductData?.currentStatus?.step === 3
                    ? 'amc'
                    : 'ext_warranty',
          web_url: addScanProductData?.invoiceDocument?.linkUrl ?? null,
          // serial_no: addScanProductData?.invoiceDocument?.serial_no,
        },
        true,
      )
        .then((res) => {
          const { setProductDetailResponse } = get();
          if (addScanProductData?.currentStatus?.step === 0) {
            setProductDetailResponse(
              'invoice_details',
              res?.data?.data.map((x: any) => {
                return {
                  ...x,
                  checked: false,
                };
              }),
            );
          } else if (addScanProductData?.currentStatus?.step === 1) {
            setProductDetailResponse('extd_warrantyDetails', res?.data?.data);
            // if (addScanProductData?.currentStatus?.isExtendedWarranty) {
            // } else {
            //   setProductDetailResponse('std_warrantyDetails', res?.data?.data);
            // }
          } else if (addScanProductData?.currentStatus?.step === 2) {
            setProductDetailResponse('insurance_details', res?.data?.data);
          } else if (addScanProductData?.currentStatus?.step === 3) {
            setProductDetailResponse('amc_details', res?.data?.data);
          }
          set((state) => ({
            currentStatus: {
              ...state?.currentStatus,
              status: 'enable',
              step: state?.currentStatus?.step + 1,
            },
            responseMessage: res?.data?.status
          }));
          return true;
        })
        .catch((err) => {
          console.log(err, 'ProductError');
          set((state) => ({
            ProductError: true,
            currentStatus: {
              ...state?.currentStatus,
              status: 'reject',
            },
          }));
          return true;
        });
    } catch (ProductError) {
      set((state) => ({
        ProductError: true,
        currentStatus: {
          ...state?.currentStatus,
          status: 'reject',
        },
      }));
    } finally {
      set({ loading: false, productLoading: false, ProductError: false });
    }
  },

  addScanProduct: async (documentDetails: any, standardWarantyPayloadData: any) => {

    set({ loading: true, productLoading: true, ProductError: false, productSuccess: false });
    try {
      const { product_details } = get();
      const { invoiceDocument } = get();
      const { getStandardWarranty } = get();



      const payload: any = {
        product_details: {
          product_id: product_details?.invoice_details?.[0]?.product_details?.product_id,
          invoice_document_url: product_details?.invoice_details?.[0]?.product_details?.invoice_document_url,
          date_of_purchase: product_details?.invoice_details?.[0]?.product_details?.purchase_date,
          serial_no: product_details?.invoice_details?.[0]?.product_details?.serial_no,
          mode_of_purchase: product_details?.invoice_details?.[0]?.product_details?.mode_of_purchase.toLowerCase(),
          location_name: product_details?.invoice_details?.[0]?.product_details?.location_name,
          location_latitude: 0,
          location_longitude: 0,
          nick_name: invoiceDocument?.nick_name,
          imei_no: product_details?.invoice_details?.[0]?.product_details?.imei_no ?? invoiceDocument?.imei_no,
          std_warranty: false,
          ext_warranty: documentDetails?.extended_warranty?.applied === true ? true : false,
          insurance: documentDetails?.isInsuranceApplicable === true ? true : false,
          amc: documentDetails?.isAMCApplicable === true ? true : false,
          specifications: product_details?.invoice_details?.[0]?.product_details?.specifications,
          product_name: product_details?.invoice_details?.[0]?.product_details?.product_name,
          brand_name: product_details?.invoice_details?.[0]?.product_details?.brand_name,
          category_id: product_details?.invoice_details?.[0]?.product_details?.category_id,
          type_id: product_details?.invoice_details?.[0]?.product_details?.type_id,
          description: product_details?.invoice_details?.[0]?.product_details?.description,
        },
        standard_warranty_details: {
          warranty_document_url:
            // standardWarantyPayloadData?.warranty_document_url?.length > 0 ?
            //   standardWarantyPayloadData?.warranty_document_url :
            // product_details?.invoice_details?.standard_warranty_details?.warranty_document_url,
            getStandardWarranty?.warranty_document_url,
          warranty_coverage_type:
            // standardWarantyPayloadData?.warranty_coverage_type?.length > 0 ?
            //    :
            //   getStandardWarranty?.warranty_coverage_type ??
            //   product_details?.invoice_details?.standard_warranty_details?.warranty_coverage_type ?? null,
            standardWarantyPayloadData?.warranty_coverage_type,
          warranty_coverage:
            // standardWarantyPayloadData?.warranty_coverage?.length > 0 ?
            //    :
            //   getStandardWarranty?.warranty_coverage ??
            //   product_details?.invoice_details?.standard_warranty_details?.warranty_coverage,
            standardWarantyPayloadData?.warranty_coverage,
          Warranty_provider:
            // standardWarantyPayloadData?.Warranty_provider?.length > 0 ?
            //    :
            //   getStandardWarranty?.warranty_provider ??
            //   product_details?.invoice_details?.standard_warranty_details?.warranty_provider,
            standardWarantyPayloadData?.Warranty_provider,
        },

        extended_warranty_details:
          (Array.isArray(product_details?.extd_warrantyDetails)
            && product_details?.extd_warrantyDetails?.length > 0)
            || product_details?.extd_warrantyDetails?.warranty_document_url?.length > 0
            || product_details?.extd_warrantyDetails?.extd_warrantyDetails?.warranty_document_url.length > 0
            || (typeof product_details?.extd_warrantyDetails === 'object'
              && !Array.isArray(product_details?.extd_warrantyDetails)
              && product_details?.extd_warrantyDetails !== null
              && Object.keys(product_details?.extd_warrantyDetails?.extd_warrantyDetails ?? {})?.length > 0)

            || (typeof product_details?.extd_warrantyDetails?.extd_warrantyDetails === 'object'
              && !Array.isArray(product_details?.extd_warrantyDetails?.extd_warrantyDetails)
              && product_details?.extd_warrantyDetails?.extd_warrantyDetails !== null
              && Object.keys(product_details?.extd_warrantyDetails?.extd_warrantyDetails ?? {})?.length > 0)
            ?
            {
              warranty_document_url:
                product_details?.extd_warrantyDetails?.warranty_document_url ?? null,
              warranty_coverage_type:
                product_details?.extd_warrantyDetails?.warranty_coverage_type ?? null,
              warranty_coverage:
                product_details?.extd_warrantyDetails?.warranty_coverage ??
                null,
              extended_start_date:
                product_details?.extd_warrantyDetails?.extended_start_date ??
                null,
            }
            :
            undefined,
        insurance_details:
          (Array.isArray(product_details?.insurance_details)
            && product_details?.insurance_details?.length > 0)
            || product_details?.insurance_details?.insurance_document_url?.length > 0
            || product_details?.insurance_details?.insurance_details?.insurance_document_url?.length > 0
            || (typeof product_details?.insurance_details === 'object'
              && !Array.isArray(product_details?.insurance_details)
              && product_details?.insurance_details !== null
              && Object.keys(product_details?.insurance_details?.insurance_details)?.length > 0)

            || (typeof product_details?.insurance_details?.insurance_details === 'object'
              && !Array.isArray(product_details?.insurance_details?.insurance_details)
              && product_details?.insurance_details?.insurance_details !== null
              && Object.keys(product_details?.insurance_details?.insurance_details)?.length > 0)
            ?
            {
              insurance_document_url: product_details?.insurance_details?.insurance_details?.insurance_document_url ??
                product_details?.insurance_details?.insurance_document_url ?? '',
              insurer_name: product_details?.insurance_details?.insurance_details?.insurer_name ??
                product_details?.insurance_details?.insurer_name ?? '',
              policy_no: product_details?.insurance_details?.policy_no,
              insurance_start_date:
                moment(product_details?.insurance_details?.insurance_start_date).format(
                  'YYYY-MM-DD',
                ) ??
                moment(product_details?.insurance_details?.insurance_details?.insurance_start_date).format(
                  'YYYY-MM-DD',
                ) ?? '',
              insurance_coverage: product_details?.insurance_details?.insurance_details?.insurance_coverage ??
                product_details?.insurance_details?.insurance_coverage ?? '',
              insurance_coverage_type: product_details?.insurance_details?.insurance_details?.insurance_coverage_type ??
                product_details?.insurance_details?.insurance_coverage_type ?? '',
            }
            : undefined,

        amc_details:
          (Array.isArray(product_details?.amc_details)
            && product_details?.amc_details?.length > 0)
            || product_details?.amc_details?.amc_document_url?.length > 0
            || product_details?.amc_details?.amc_details?.amc_document_url?.length > 0
            || (typeof product_details?.amc_details === 'object'
              && !Array.isArray(product_details?.amc_details)
              && product_details?.amc_details !== null
              && Object.keys(product_details?.amc_details?.amc_details)?.length > 0)

            || (typeof product_details?.amc_details?.amc_details === 'object'
              && !Array.isArray(product_details?.amc_details?.amc_details)
              && product_details?.amc_details?.amc_details !== null
              && Object.keys(product_details?.amc_details?.amc_details)?.length > 0)
            ?
            {
              amc_document_url: product_details?.amc_details?.amc_details?.amc_document_url ??
                product_details?.amc_details?.amc_document_url ?? '',
              amc_serial_no: product_details?.amc_details?.amc_details?.amc_serial_no ??
                product_details?.amc_details?.amc_serial_no ?? '',
              amc_coverage: product_details?.amc_details?.amc_details?.amc_coverage ??
                product_details?.amc_details?.amc_coverage ?? '',
              amc_purchased_on: product_details?.amc_details?.amc_details?.amc_purchased_on ??
                product_details?.amc_details?.amc_purchased_on ?? '',
            }
            : undefined,
      };

      await httpRequest(
        'post',
        `${envConfig.api_url}/products/add_product_details`,
        {
          ...payload,
        },
        true,
      )
        .then((res) => {
          set({
            productSuccess: true,
            user_productId: res?.data?.data?.user_product_id,
          });
          return res?.data;
        })
        .catch((err) => {
          console.log(err, 'ProductError');
          set({ ProductError: true });
          return true;
        });
    } catch (ProductError) {
      set({ ProductError: true });
    } finally {
      set({ loading: false, ProductError: false, productLoading: false });
    }
  },

  getSummaryProduct: async (payload: any, type: string) => {
    if (type === 'warranty') {
      set({ warrantyLoading: true, loading: true, ProductError: true, productLoading: true });
    } else if (type === 'insurance') {
      set({ loading: true, ProductError: true, insuranceLoading: true, productLoading: true });
    } else if (type === 'amc') {
      set({ loading: true, ProductError: true, amcLoading: true, productLoading: true });
    } else if (type === 'ext_warranty') {
      set({ loading: true, extWarrantyLoading: true });
    } else if (type === 'service_invoice') {
      set({ loading: true, serviceLoading: true });
    } else if (type === 'invoice') {
      set({ loading: true, invoiceLoading: true });
    }

    try {
      let url: any[] | undefined = [];
      if (payload?.uploadScanFiles?.length > 0) {
        url = await UploadFiles(payload?.uploadScanFiles?.map((x: { url: any }) => x?.url));
        // url = await UploadFiles(payload?.uploadScanFiles);
      }
      if (payload?.uploadFile?.length > 0) {
        url = await UploadFiles(payload?.uploadFile);
      }

      await httpRequest(
        'post',
        `${envConfig.api_url}/ai/scan_for_add_product`,
        {
          url: url ?? '',
          document_type: type,
          web_url: payload?.web_url ?? null,
        },
        true,
      )
        .then((res) => {
          const { setProductDetailResponse, setProductDetail } = get();
          if (type === 'insurance') {
            setProductDetailResponse('insurance_details', res?.data?.data?.insurance_details);
            setProductDetail('insurance_details', res?.data?.data?.insurance_details);
          } else if (type === 'warranty') {
            setProductDetailResponse('extd_warrantyDetails', res?.data?.data);
            setProductDetailResponse('std_warrantyDetails', res?.data?.data);
          } else if (type === 'ext_warranty') {
            setProductDetail('extended_warranty_details', res?.data?.data?.extended_warranty_details);
          } else if (type === 'amc') {
            setProductDetailResponse('amc_details', res?.data?.data?.amc_details);
            setProductDetail('amc_details', res?.data?.data?.amc_details);
          } else if (type === 'service_invoice') {
            setProductDetail('service_details', res?.data?.data);
          }
          return true;
        })
        .catch((err) => {
          console.log(err, 'ProductError');
          set({});
          return true;
        });
    } catch (ProductError) {
      console.log(ProductError, 'ProductError');
      set({
        ProductError: true,
      });
    } finally {
      if (type === 'warranty') {
        set({ warrantyLoading: false, loading: false, ProductError: false, productLoading: false });
      } else if (type === 'insurance') {
        set({ loading: false, ProductError: false, insuranceLoading: false, productLoading: false });
      } else if (type === 'amc') {
        set({ loading: false, ProductError: false, amcLoading: false, productLoading: false });
      } else if (type === 'ext_warranty') {
        set({ loading: false, extWarrantyLoading: false });
      } else if (type === 'service_invoice') {
        set({ loading: false, serviceLoading: false });
      } else if (type === 'invoice') {
        set({ loading: false, invoiceLoading: false });
      }
    }
  },

  getWarrantyDetailsInclusionExclusion: async (payload: any, type: string, callback: any = () => false) => {
    set({ loading: true, ProductError: true, productLoading: true });
    try {
      let url: any[] | undefined = [];
      if (payload?.uploadScanFiles?.length > 0) {
        url = await UploadFiles(payload?.uploadScanFiles?.map((x: { url: any }) => x?.url));
        // url = await UploadFiles(payload?.uploadScanFiles);
      }
      if (payload?.uploadFile?.length > 0) {
        url = await UploadFiles(payload?.uploadFile);
      }
      await httpRequest(
        'post',
        `${envConfig.api_url}/ai/get_inclusions_exclusions`,
        {
          url: url ?? '',
          document_type: type,
          web_url: payload?.web_url ?? null,
          user_product_id: payload?.product_id ?? '',
        },
        true,
      )
        .then((res) => {
          callback();
          const { setProductDetailResponse } = get();
          if (type === 'insurance') {
            setProductDetailResponse('insurance_details', res?.data?.data?.insurance_details);
          } else if (type === 'warranty') {
            setProductDetailResponse('extd_warrantyDetails', res?.data?.data);
            setProductDetailResponse('std_warrantyDetails', res?.data?.data);
          } else if (type === 'amc') {
            setProductDetailResponse('amc_details', res?.data?.data?.amc_details);
          }
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: 'success',
          });
          return true;
        })
        .catch((err) => {
          console.log(err);
          return true;
        });
    } catch (ProductError) {
      console.log(ProductError, 'ProductError');
      set({
        ProductError: true,
      });
    } finally {
      set({ loading: false, productLoading: false });
    }
  },

  updateExtWarrantyDocument: async (callback: any = () => false) => {
    set({ loading: true });

    try {
      const externalDocument = get();
      const productId = get();

      const payload = {
        user_product_id: productId?.product_id,
        extended_warranty_details: {
          warranty_document_url:
            externalDocument?.externalDocumentProductDetails?.extended_warranty_details?.warranty_document_url,
          warranty_coverage_type:
            externalDocument?.externalDocumentProductDetails?.extended_warranty_details?.warranty_coverage_type,
          warranty_coverage:
            externalDocument?.externalDocumentProductDetails?.extended_warranty_details?.warranty_coverage,
          extended_start_date:
            externalDocument?.externalDocumentProductDetails?.extended_warranty_details?.extended_start_date,
          service_provider_name:
            externalDocument?.externalDocumentProductDetails?.extended_warranty_details?.service_provider_name,
          is_ext_warranty_applicable: true,
        },
      };

      httpRequest('POST', `${envConfig.api_url}/products/add_warranty_details`, payload, true)
        .catch((err) => {
          console.log('Error on add product: ', err);
          throw err;
        })
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: 'success',
          });
          callback();
          set({});
        });
    } catch (error) {
      set({});
    } finally {
      set({ loading: false });
    }
  },

  updateStandardWarrantyDocument: async (callback:any =() => false) => {
    set({ standardLoadingNew: true, getStandardWarrantyLoading:true });

    try {
      const { product_details, checkedIndex } = get();
      const response = product_details?.invoice_details?.filter((v: any, i: number) => {
        return i === checkedIndex;
      });

      httpRequest(
        'POST',
        `${envConfig.api_url}/ai/std_warranty_details`,
        {
          warranty_details: response?.[0]?.product_details?.warranty_details,
        },
        true,
      )
        .then((res) => {
          product_details.invoice_details[checkedIndex].standard_warranty_details =
            res?.data?.data?.standard_warranty_details;
          const { getStandardWarrantyUpdate } = get();
          getStandardWarrantyUpdate(res?.data?.data?.standard_warranty_details);
          set({
            product_details: {
              ...product_details,
            },
            checkedIndex: null,
          });
          callback();

          return res?.data?.data;
        })
        .catch(() => {
          set({});
          return true;
        });
    } catch (error) {
      set({});
    } finally {
      set({ standardLoadingNew: false, getStandardWarrantyLoading:false });
    }
  },

  updateInsuranceDocument: async (callback: any = () => false) => {
    set({ loading: true });

    try {
      const externalInsuranceDocument = get();
      const productId = get();

      const payload = {
        user_product_id: productId?.product_id,
        insurance_details: {
          insurance_coverage:
            externalInsuranceDocument?.externalDocumentProductDetails?.insurance_details?.insurance_coverage,
          insurance_coverage_type:
            externalInsuranceDocument?.externalDocumentProductDetails?.insurance_details?.insurance_coverage_type,
          insurance_document_url:
            externalInsuranceDocument?.externalDocumentProductDetails?.insurance_details?.insurance_document_url,
          insurance_start_date:
            externalInsuranceDocument?.externalDocumentProductDetails?.insurance_details?.insurance_purchased_on,
          policy_no: externalInsuranceDocument?.externalDocumentProductDetails?.insurance_details?.policy_no,
          insurer_name: externalInsuranceDocument?.externalDocumentProductDetails?.insurance_details?.insurer_name,
        },
      };

      httpRequest('POST', `${envConfig.api_url}/external_bought_doc/add_insurance_details`, payload, true)
        .catch((err) => {
          console.log('Error on add product: ', err);
          throw err;
        })
        .then((res) => {
          set({});
          callback();
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: 'success',
          });
        });
    } catch (error) {
      set({});
    } finally {
      set({ loading: false });
    }
  },

  updateAmcDocument: async (callback: any = () => false) => {
    set({ loading: true });

    try {
      const externalAmcDocument = get();
      const productId = get();

      const payload = {
        user_product_id: productId?.product_id,
        amc_details: {
          amc_coverage: externalAmcDocument?.externalDocumentProductDetails?.amc_details?.amc_coverage,
          amc_purchased_on: externalAmcDocument?.externalDocumentProductDetails?.amc_details?.amc_purchased_on,
          amc_document_url: externalAmcDocument?.externalDocumentProductDetails?.amc_details?.amc_document_url,
          amc_service_provider_name:
            externalAmcDocument?.externalDocumentProductDetails?.amc_details?.amc_service_provider_name,
          amc_serial_no: externalAmcDocument?.externalDocumentProductDetails?.amc_details?.amc_serial_no,
        },
      };

      httpRequest('POST', `${envConfig.api_url}/external_bought_doc/add_amc_details`, payload, true)
        .catch((err) => {
          console.log('Error on add product: ', err);
          throw err;
        })
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: 'success',
          });
          callback();
          set({});
        });
    } catch (error) {
      set({});
    } finally {
      set({ loading: false });
    }
  },

  updateInvoiceDocument: async (uploadScanFiles: any, uploadFile: any, callback: any = () => false) => {
    set({ loading: true });
    try {
      const productId = get()
      let url: any[] | undefined = [];
      if (uploadScanFiles?.length > 0) {
        url = (await UploadFiles(uploadScanFiles?.map((x: { url: any }) => x?.url)));
      }
      if (uploadFile?.length > 0) {
        url = await UploadFiles(uploadFile);
      }
      httpRequest('POST', `${envConfig.api_url}/external_bought_doc/add_invoice`,
        {
          invoice: url ?? '',
          user_product_id: productId?.product_id,
        },
        true
      )
        .catch((err) => {
          console.log('Error on add product: ', err);
          throw err;
        })
        .then((res) => {
          callback();
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: 'success',
          });
          set({});
        });
    } catch (error) {
      set({});
    } finally {
      set({ loading: false });
    }
  },

  getServiceTypes: async () => {
    try {
      await httpRequest('get', `${envConfig.api_url}/schedule_service/get_service_types`, {}, true)
        .then((res) => {
          // set({ serviceTypeOptions: res?.data?.data ?? [] });


          const serviceOptions: any = [];
          if (Array.isArray(res?.data?.data) && res?.data?.data?.length > 0) {
            res?.data?.data.map((val: { id: any; type_name: any; }) => {
              serviceOptions.push({
                value: val?.id ?? '',
                label: val?.type_name ?? '',
              });
            });
          }

          return set((state) => ({
            loading: false,
            serviceTypeOptions: serviceOptions,
          }));
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
    } finally {
    }
  },

  updateServiceDocument: async (product_id: string) => {
    set({ loading: true });

    try {
      const serviceDocument = get();
      const schedulerId = get();

      const payload: maintenancePayload = {
        scheduler_id: schedulerId?.scheduler_id,
        service_bill: serviceDocument?.externalDocumentProductDetails?.service_details?.service_bill[0],
        name: serviceDocument?.externalDocumentProductDetails?.service_details?.name,
        date_of_service: serviceDocument?.externalDocumentProductDetails?.service_details?.date_of_service,
        service_provider: serviceDocument?.externalDocumentProductDetails?.service_details?.service_provider,
      };

      if (serviceDocument?.externalDocumentProductDetails?.service_details?.type) {
        payload.service_type = serviceDocument.externalDocumentProductDetails.service_details.type;
        payload.user_product_id = product_id;
      }

      httpRequest('POST', `${envConfig.api_url}/schedule_service/schedule_reminders/completed`, payload, true)
        .catch((err) => {
          console.log('Error on add product: ', err);
          throw err;
        })
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: 'success',
          });
          set({ openServiceRecordDrawer: false });
        });
    } catch (error) {
      set({});
    } finally {
      set({ loading: false });
    }
  },

  updateDocumentDetails: (key: any, value: any | never) => {
    const newDocumentDetails: any = get().documentDetails;
    newDocumentDetails[key] = value;
    set({ documentDetails: newDocumentDetails });
  },

  onUpdateCaptureImage: (val: any) => {
    set((state) => ({ dataURIs: [...state.dataURIs, val] }));
  },

  onUpdateSerialNo: (val: number) => {
    set({ serialIndex: val });
  },

  onCheckedIndexUpdate: (val: number) => {
    set({ checkedIndex: val });
  },

  getStandardWarrantyUpdate: (val: any) => {
    set({ getStandardWarranty: val });
  },

  onUpdateImeiNo: (val: number) => {
    set({ serialIndex: val });
  },

  updateNicknameDetails: (key: any, value: never) => {
    const newProductDetails: any = get().invoiceDocument;
    newProductDetails[key] = value;
    set({ invoiceDocument: newProductDetails });
  },

  onUpdateType: (val: string) => {
    set({ uploadType: val });
  },

  onAmcDrawerType: (val: string) => {
    set({ amc_drawerType: val });
  },
  onInsuranceDrawerType: (val: string) => {
    set({ insuranceDrawerType: val });
  },

  onInsuranceUpdateType: (val: string) => {
    set({ insuranceUpdateType: val });
  },

  onExtendedDrawerType: (val: string) => {
    set({ extendedDrawerType: val });
  },

  onAmcDrawerUpdate: (val: any) => {

    set({ amcDrawerType: val });
  },

  getAmcDrawerUpdate: (val: boolean) => {
    set({ updateAmcDrawer: val })
  },
  getAmcUpdate: (val: boolean) => {

    set({ amcDrawerUpdate: val })
  },
  getInsuranceDrawer: (val: boolean) => {
    set({ updateInsuranceDrawer: val })
  },

  getInsuranceDrawerUpdate: (val: boolean) => {
    set({ insuranceDrawerUpdate: val })
  },

  getExtendedDrawer: (val: boolean) => {
    set({ updateExtendedDrawer: val })
  },

  updateProductId: (val: string) => {
    set({ product_id: val });
  },

  onHomeUpdateType: (val: string) => {
    set({ homeType: val });
  },
  onInsuranceUploadType: (val: string) => {
    set({ insuranceUploadType: val });
  },
  onAmcUploadType: (val: string) => {
    set({ amcUploadType: val });
  },

  onWarrantyType: (val: string) => {
    set({ warrantyType: val });
  },
  onServiceType: (val: string) => {
    set({ serviceType: val });
  },

  onExtendedWarrantyType: (val: string) => {
    set({ extendedType: val });
  },
  onInsuranceType: (val: string) => {
    set({ insuranceType: val })
  },
  onAmcType: (val: string) => {
    set({ amcType: val })
  },

  onDeleteCaptureImage: (val: any) => {
    set({ dataURIs: val });
  },

  onScanType: (val: string) => {
    set({ scanType: val });
  },

  onUpdateSkip: (val) => {
    set((state) => ({
      currentStatus: {
        step: state?.currentStatus?.step + 1,
        status: 'enable',
        skip: val,
      },
    }));
  },

  onUploadCaptureFile: (val: any) => {
    set({ uploadFile: [...val] });
  },

  // onUploadCaptureFile: (val: object) => {
  //   set((state) => ({ uploadFile: [...state?.uploadFile, ...val] }));
  // },

  onDeleteUploadFile: (val) => {
    set({ uploadFile: val });
  },

  updateProduct: (key: keyof documentInvoiceInterface, value: never | any) => {
    const newProductDetails: documentInvoiceInterface = get().invoiceDocument;
    newProductDetails[key] = value;
    set({ invoiceDocument: newProductDetails });
  },

  updateSerialNo: (key: keyof documentInvoiceInterface, value: never | any, index) => {
    const { product_details } = get();
    product_details.invoice_details;

    const serialList = [...product_details?.invoice_details];
    serialList[index] = {
      ...serialList[index],
      product_details: {
        ...serialList[index]?.product_details,
        [key]: value,
      },
    };
    set({
      product_details: {
        ...product_details,
        invoice_details: serialList,
      },
    });
  },

  setProductDetailResponse: (key: string, val: any) => {
    set((state) => ({
      product_details: {
        ...state?.product_details,
        [key]: val,
      },
    }));
  },

  updateCheckedIndex: (key: string, val: any, index: number) => {
    set((state: { product_details: any; }) => ({
      product_details: {
        ...state?.product_details,
        [key]: val,
      },
      serialCheckedIndex: index
    }));
  },

  setProductDetail: (key: string, val: any) => {
    set((state) => ({
      externalDocumentProductDetails: {
        ...state?.externalDocumentProductDetails,
        [key]: val,
      },
    }));
  },

  externalDocumentUpdateState: (key: string, val: any, limit?: number) => {
    if (limit) {
      if (val.length > limit) {
        return;
      }
    }
    set((state) => ({
      externalDocumentProductDetails: {
        extended_warranty_details: {
          ...state?.externalDocumentProductDetails?.extended_warranty_details,
          [key]: val,
        },
      },
    }));
  },

  externalInsuranceDocumentUpdateState: (key: string, val: any, limit?: number) => {
    if (limit) {
      if (val.length > limit) {
        return;
      }
    }
    set((state) => ({
      externalDocumentProductDetails: {
        insurance_details: {
          ...state?.externalDocumentProductDetails?.insurance_details,
          [key]: val,
        },
      },
    }));
  },
  externalAmcDocumentUpdateState: (key: string, val: any, limit?: number) => {
    if (limit) {
      if (val.length > limit) {
        return;
      }
    }
    set((state) => ({
      externalDocumentProductDetails: {
        amc_details: {
          ...state?.externalDocumentProductDetails?.amc_details,
          [key]: val,
        },
      },
    }));
  },

  serviceDocumentUpdateState: (key: string, val: any, limit?: number) => {
    if (limit) {
      if (val.length > limit) {
        return;
      }
    }
    set((state) => ({
      externalDocumentProductDetails: {
        service_details: {
          ...state?.externalDocumentProductDetails?.service_details,
          [key]: val,
        },
      },
    }));
  },

  clearExternalDocumentState: () => {
    set({
      externalDocumentProductDetails: {
        extended_warranty_details: {
          extended_start_date: '',
          service_provider_name: '',
          warranty_coverage: null,
          warranty_coverage_type: '',
          warranty_document_url: [],
        },
        insurance_details: {
          insurance_coverage: null,
          insurance_coverage_type: '',
          insurance_document_url: [],
          insurance_purchased_on: '',
          policy_no: '',
          insurer_name: '',
          insurance_start_date: ''
        },
        amc_details: {
          amc_coverage: 0,
          amc_purchased_on: '',
          amc_document_url: [],
          amc_service_provider_name: '',
          amc_serial_no: '',
        },
        service_details: {
          service_bill: [],
          name: '',
          date_of_service: '',
          service_provider: '',
          type: null
        },
      },
    });
  },

  updateAmcViewDetails: (key, value) => {
    const updateProductService = { ...get().externalDocumentProductDetails };
    updateProductService[key] = value;
    set((state) => ({
      product_details: {
        ...state.product_details,
        amc_details: updateProductService,
      },
    }));
  },

  updateAmcProductViewDetails: (key, val) => {
    set((state) => ({
      externalDocumentProductDetails: {
        amc_details: {
          ...state?.externalDocumentProductDetails?.amc_details,
          [key]: val,
        },
      },
    }));
  },


  updateExtendedWarrantyViewDetails: (key, val) => {
    set((state) => ({
      externalDocumentProductDetails: {
        extended_warranty_details: {
          ...state?.externalDocumentProductDetails?.extended_warranty_details,
          [key]: val,
        },
      },
    }));
  },

  updateInsuranceViewDetails: (key, value) => {
    const updateInsuranceProductService = { ...get().product_details.insurance_details };
    updateInsuranceProductService[key] = value;
    set((state) => ({
      product_details: {
        ...state.product_details,
        insurance_details: updateInsuranceProductService,
      },
    }));
  },
  clearScan: () => {
    set({
      product_details: {},
      invoiceDocument: {},
      dataURIs: [],
      uploadFile: [],
    });
  },

  clearInvoice: () => {
    set({
      product_details: {},
      invoiceDocument: {},
      dataURIs: [],
      uploadFile: [],
      currentStatus: {
        step: 0,
        status: 'enable',
        skip: [],
        isExtendedWarranty: false,
      },
    });
  },

  clearSerialNo: () => {
    set({ invoiceDocument: '' });
  },

  // clear state
  clearUploadDocument: () => {
    set({
      currentStatus: {
        step: 0,
        status: 'enable',
        skip: [],
        isExtendedWarranty: false,
      },
    });
  },
}));
