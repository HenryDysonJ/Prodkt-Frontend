import { envConfig } from '@core/envconfig';
import { httpRequest } from '@core/utils';
import { create } from 'zustand';

import { ProductDetailsInterface, productDetailsInterface } from '../interface';

export const useProductDetails = create<productDetailsInterface>((set, get) => ({
  product_details: {
    nick_name: '',
    image_url: '',
    product_id: '',
    is_chat_bot: false,
    standard_qus_and_ans: [],
    product_serial_no: '',
    serial_no: '',
    imei_no: '',
    date_of_purchase: '',
    mode_of_purchase: 'offline',
    purchase_location: {
      address: '',
      location: '',
      latitude: '',
    },
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
    location_name: '',
    is_invoice: false,
    is_ext_warranty_applicable: false,
    is_insurance_applicable: false,
    is_amc_applicable: false,
    product_name: '',
    user_product_id: '',
    is_invoice_applicable: false,
    category_type_name: ''

  },

  edit_product_details: {
    nick_name: '',
    product_id: '',
    product_serial_no: '',
    serial_no: '',
    imei_no: '',
    date_of_purchase: '',
    mode_of_purchase: 'offline',
    purchase_location: {
      address: '',
      location: '',
      latitude: '',
    },
    category_type_name: ''
  },

  insurance_details: {
    insurance_document_url: null,
    insurer_name: '',
    insurance_policy_no: '',
    insurance_purchased_on: '',
    insurance_coverage: 0,
    insurance_coverage_type: '',
  },
  amc_details: {
    provider_logo: '',
    provider_name: '',
    amc_id: '',
    amc_serial_no: '',
    amc_valid_to: '',
    amc_document_url: null,
    amc_coverage: 0,
    amc_purchased_on: '',
    amc_valid_from: '',
    amc_service_provider_name: 'string',
    is_amc_applicable: false,
  },
  std_warranty_details: {
    is_extended: false,
    provider_logo: '',
    provider_name: '',
    warranty_coverage: 0,
    warranty_coverage_type: '',
    warranty_id: '',
    warranty_serial_no: '',
    warranty_valid_from: '',
    warranty_valid_to: '',
    warranty_document_url: null,
  },
  extended_warranty_details: {
    is_extended: false,
    provider_logo: '',
    provider_name: '',
    warranty_coverage: 0,
    warranty_coverage_type: '',
    warranty_id: '',
    warranty_serial_no: '',
    warranty_document_url: null,
    warranty_valid_from: '',
    warranty_valid_to: '',
  },
  warrantyDetailsState: {
    insurance_details: {
      insurer_name: '',
      insurance_valid_to: '',
      insurance_policy_no: '',
      insurer_id: '',
    },
    amc_details: {
      amc_id: '',
      amc_serial_no: '',
      amc_valid_to: '',

    },
    warranty_id: '',
    warranty_valid_to: '',
    is_extended: false,
    product_details: {
      product_id: '',
    }
  },
  product_specification: {
    id: '',
    name: '',
    description: '',
    brand: '',
    specifications: {},
  },
  selectCard: {
    productSpecificationCard: true,
    insuranceCard: false,
    amcCard: false,
    activityLogCard: false,
  },
  productMaintenance: [],
  user_product_id: '',
  activityState: {
    activity_logs: [],
    product_image: '',
    product_name: '',
  },
  loading: false,
  error: false,
  is_primary_service_provider: false,
  primary_service_provider: {
    is_whats_app: false,
    location_name: '',
    primary_mobile_no: null,
    provider_name: ''
  },


  getProductDetails: async (id) => {
    set({ loading: true, error: true });
    try {
      await httpRequest(
        'post',
        `${envConfig.api_url}/products/get_product_details_by_product_id`,
        {
          product_id: id,
        },
        true,
      )
        .then((res) => {
          set({
            product_details: {
              ...res?.data?.data?.product_details,
              purchase_location: {
                address: res?.data?.data?.product_details?.location_name
              }
            },
            edit_product_details: {
              ...res?.data?.data?.product_details,
              purchase_location: {
                address: res?.data?.data?.product_details?.location_name
              }
            },
            insurance_details: {
              ...res?.data?.data?.insurance_details,
            },
            amc_details: {
              ...res?.data?.data?.amc_details,
            },
            std_warranty_details: {
              ...res?.data?.data?.std_warranty_details,
            },
            extended_warranty_details: {
              ...res?.data?.data?.extended_warranty_details,
            },
            warrantyDetailsState: {
              ...res?.data?.data,
            },
            product_specification: {
              ...res?.data?.data?.product_specification,
            },
            is_primary_service_provider: res?.data?.data?.is_primary_service_provider,
            primary_service_provider: {
              ...res?.data?.data?.primary_service_provider,
            }
          });
          return res?.data?.data
        })
        .catch((err) => {
          set({ loading: true });
          console.log('err:', err);
        });
    } catch (error) {
      set({ loading: true });
    } finally {
      set({ loading: false });
    }
  },

  updateEditProductDetails: async (callback: any = () => false) => {
    set({ loading: true, error: true });
    try {
      const editProfileDetail = get();

      const payload = {
        id: editProfileDetail.edit_product_details?.product_id,
        product_details: {
          nick_name: editProfileDetail?.edit_product_details?.nick_name,
          date_of_purchase: editProfileDetail?.edit_product_details?.date_of_purchase,
          serial_no: editProfileDetail?.edit_product_details?.product_serial_no,
          imei_no: editProfileDetail?.edit_product_details?.imei_no,
          mode_of_purchase: editProfileDetail?.edit_product_details?.mode_of_purchase,
          location_name: editProfileDetail?.edit_product_details?.purchase_location?.address ?? '',
          location_latitude: editProfileDetail.edit_product_details?.purchase_location?.latitude ?? 0,
          location_longitude: editProfileDetail.edit_product_details?.purchase_location?.longitude ?? 0,
        },
      };

      await httpRequest(
        'post',
        `${envConfig.api_url}/products/update_product_detail`,
        {
          ...payload,
        },
        true,
      )
        .then((res) => {
          callback();
          console.log('res', res);
          set({});
        })
        .catch((err) => {
          set({ loading: true });
          console.log('err:', err);
        });
    } catch (error) {
      set({ loading: true });
    } finally {
      set({});
    }
  },

  getMaintenanceDetails: async (id) => {
    set({ loading: true, error: true });
    try {
      await httpRequest(
        'post',
        `${envConfig.api_url}/amc/services`,
        {
          user_product_id: id,
        },
        true,
      )
        .then((res) => {
          set({
            productMaintenance: res?.data?.data,
            user_product_id: id,
          });
        })
        .catch((err) => {
          set({ loading: true });
          console.log('err:', err);
        });
    } catch (error) {
      set({ loading: true });
    } finally {
      set({});
    }
  },

  getActivityDetails: async (id) => {
    set({ loading: true, error: true });
    try {
      await httpRequest(
        'post',
        `${envConfig.api_url}/products/activity_logs_by_product_id`,
        {
          product_id: id,
        },
        true,
      )
        .then((res) => {
          set({
            activityState: res?.data?.data,
          });
        })
        .catch((err) => {
          set({ loading: true });
          console.log('err:', err);
        });
    } catch (error) {
      set({ loading: true });
    } finally {
      set({});
    }
  },

  updateCard: (value: boolean, key: string) => {
    const { selectCard } = get();
    set({
      selectCard: {
        ...selectCard,
        [key]: value,
      },
    });
  },

  selectAllCheckBoxClick: (value: boolean) => {
    set({
      selectCard: {
        productSpecificationCard: value,
        insuranceCard: value,
        amcCard: value,
        activityLogCard: value,
      },
    });
  },


  updateEditSerialNo: (key: any, value: never | any, index: string | number) => {

    const { product_details } = get();
    set({
      product_details: {
        ...product_details,
        [key]: value
      }
    });
  },




  updateProductDetails: (key: keyof ProductDetailsInterface, value: never | any) => {
    const newProductDetails: any = get().product_details;
    newProductDetails[key] = value;

    if (key === 'mode_of_purchase' && value === 'online') {
      newProductDetails.purchase_location = {};
    }
    if (key === 'category') {
      value.specifications.forEach((_: any) => {
        newProductDetails.product_details.specifications[_.value] = '';
      });
    }
    set({ product_details: newProductDetails });
  },
  editProductDetails: (key: keyof ProductDetailsInterface, value: never | any) => {
    const newProductDetails: any = get().edit_product_details;
    newProductDetails[key] = value;

    if (key === 'mode_of_purchase' && value === 'online') {
      newProductDetails.purchase_location = {};
    }
    if (key === 'category') {
      value.specifications.forEach((_: any) => {
        newProductDetails.edit_product_details.specifications[_.value] = '';
      });
    }
    set({ edit_product_details: newProductDetails });
  },
}));
