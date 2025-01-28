import { envConfig } from '@core/envconfig';
import { httpRequest, UploadFiles } from '@core/utils';
import { create } from 'zustand';

import { addProductCategoryDetails, AddProductCategoryInterface } from '../interface';

export const useAddProductCategory = create<AddProductCategoryInterface>((set, get) => ({
  error: false,
  loading: false,
  success: false,
  currentStep: 1,
  scanType: '',
  getProductState: {
    amc: [], ext_warranty: [], insurance: [], std_warranty: []
  },
  categoryProduct: '',
  // getProductState: [],
  productNickname: [],
  userProductId: '',
  productDetails: {
    approx_years: 0,
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
    approximateAge: 0,
    product_name: '',
    brand_name: '',
    category_id: '',
    type_id: '',
    description: '',
    reference_id: '',
    location_latitude: '',
    location_longitude: '',
    specifications: undefined,
    date_of_purchase: ''
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


  // addCategoryproduct: async () => {
  //   set({ loading: true, error: false });

  //   try {
  //     const addProductData = get();

  //     const payload = {
  //       product_details: {
  //         product_id: addProductData?.productDetails?.product_id,
  //         date_of_purchase: addProductData?.productDetails?.data_of_purchase,
  //         approx_years: addProductData?.productDetails?.approx_years,
  //         serial_no: addProductData?.productDetails?.serial_no,
  //         mode_of_purchase: addProductData?.productDetails?.mode_of_purchase,
  //         imei_no: addProductData?.productDetails?.imei_no,
  //         location_name: addProductData?.productDetails?.purchase_location?.address ?? '',
  //         location_latitude: addProductData?.productDetails?.purchase_location?.latitude ?? 0,
  //         location_longitude: addProductData?.productDetails?.purchase_location?.longitude ?? 0,
  //         nick_name: addProductData?.productDetails?.nick_name,
  //         std_warranty:
  //           addProductData.documentDetails.isWarrantyApplicable === true &&
  //             addProductData.documentDetails.warranty.applied === true
  //             ? true
  //             : false,
  //         ext_warranty:
  //           addProductData.documentDetails.isWarrantyApplicable === true &&
  //             addProductData.documentDetails.extended_warranty.applied === true
  //             ? true
  //             : false,
  //         insurance: addProductData.documentDetails.isInsuranceApplicable === true ? true : false,
  //         amc: addProductData.documentDetails.isAMCApplicable,
  //         specifications: addProductData?.productDetails?.product_details?.specifications,
  //         product_name: addProductData?.productDetails?.product_details?.name,
  //         brand_name: addProductData.productDetails.brand,
  //         category_id:
  //           addProductData.productDetails.product_details?.category_id ??
  //           addProductData?.productDetails?.category?.category_id,
  //         type_id:
  //           addProductData.productDetails.product_details?.type_id
  //           ?? addProductData?.productDetails?.category?.value,
  //         description: addProductData.productDetails.product_details?.category_id,
  //       },
  //       standard_warranty_details: {
  //         warranty_coverage_type: addProductData.documentDetails.warranty.units,
  //         warranty_coverage: addProductData.documentDetails.warranty.coverage,
  //       }
  //     };

  //     await httpRequest('POST', `${envConfig.api_url}/products/add_product_details`, payload, true)
  //       .catch((err) => {
  //         console.log('Error on add product: ', err);
  //         throw err;
  //       })
  //       .then((res) => {
  //         set({ userProductId: res?.data?.data?.user_product_id });
  //       });
  //   } catch (error) {
  //     set({ error: true });
  //   } finally {
  //     set({ loading: false });
  //   }
  // },

  updateProductDetails: (key: any, value: never | any) => {
    const newProductDetails = get().productDetails;
    (newProductDetails[key] as string) = value;
    if (key === 'mode_of_purchase' && value === 'online') {
      newProductDetails.purchase_location = {};
    }
    if (key === 'category') {
      value?.specifications?.forEach((_: any) => {
        newProductDetails.product_details.specifications[_.value] = '';
      });
    }
    set({ productDetails: newProductDetails });
  },

  updateProducts: (key: keyof AddProductCategoryInterface, value: any) => {
    set({ [key]: value });
  },



  setSearchCategoryFnc: (val: string) => {
    set({
      categoryProduct: val,
    });
  },

  clearCategoryFnc: () => {
    set({
      categoryProduct: ''
    })
  }

}));