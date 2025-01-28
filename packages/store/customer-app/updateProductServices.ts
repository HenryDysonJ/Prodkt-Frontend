import { envConfig } from '@core/envconfig';
import { httpRequest, UploadFiles } from '@core/utils';
import { create } from 'zustand';

import { UpdateInsuranceInterface, UpdateProductServiceInterface } from '../interface';

export const useUpdateProductService = create<UpdateProductServiceInterface>((set, get) => ({
  amc_details: {
    amc_document_url: null,
    amc_serial_no: '',
    amc_coverage: null,
    amc_purchased_on: '',
    amc_service_provider_name: '',
    is_amc_applicable: false,
  },

  insurance_details: {
    insurance_document_url: null,
    insurer_name: '',
    policy_no: '',
    insurance_purchased_on: '',
    insurance_start_date: '',
    insurance_coverage: null,
    insurance_coverage_type: '',
    is_insurance_applicable: false,
  },

  standard_warranty_details: {
    warranty_document_url: null,
    warranty_coverage_type: '',
    warranty_coverage: null,
    warranty_serial_no: '',
    is_std_warranty_applicable: false,
  },

  extended_warranty_details: {
    service_provider_name: '',
    warranty_document_url: null,
    warranty_coverage_type: '',
    warranty_coverage: null,
    extended_start_date: '',
    warranty_serial_no: '',
    is_ext_warranty_applicable: false,
  },

  no_amc: false,

  no_insurance: false,

  no_extWarranty: false,

  no_warranty: false,

  success: false,
  loading: false,
  error: false,

  updateAmcDetails(key: keyof UpdateInsuranceInterface, value: any | never | string, limit?: number) {
    if (limit) {
      if (value.length > limit) {
        return;
      }
    }
    const updateProductService = get().amc_details;
    updateProductService[key] = value;
    set({ amc_details: updateProductService });
  },

  updateInsuranceDetails(key: keyof UpdateInsuranceInterface, value: any | never, limit?: number) {
    if (limit) {
      if (value.length > limit) {
        return;
      }
    }
    const updateProductService = get().insurance_details;
    updateProductService[key] = value;
    set({ insurance_details: updateProductService });
  },

  updateWarrantyDetails(key, value) {
    const updateProductService = get().standard_warranty_details;
    updateProductService[key] = value;
    set({ standard_warranty_details: updateProductService });
  },

  updateExtendedWarrantyDetails(key, value) {

    const updateProductService = get().extended_warranty_details;
    updateProductService[key] = value;
    set({ extended_warranty_details: updateProductService });
  },

  updateNoAmcCheckBox: (value) => {
    set({ no_amc: value });
  },

  updateNoInsuranceCheckBox: (value) => {
    set({ no_insurance: value });
  },

  updateNoExtWarrantyCheckBox: (value) => {
    set({ no_extWarranty: value });
  },

  updateAmcCoverage: (key: string, value: number, key1: string, value1: string, key2: string, value2: string) => {
    const updateProductServiceAmc = get().amc_details;
    updateProductServiceAmc[key] = value;
    updateProductServiceAmc[key1] = value1;
    updateProductServiceAmc[key2] = value2;
    set({ amc_details: updateProductServiceAmc });
  },

  updateInsuranceCoverage: (
    key: string,
    value: string,
    key1: string,
    value1: string,
    key2: string,
    value2: string,
    key3: string,
    value3: string,
  ) => {
    const updateProductServiceInsurance = get().insurance_details;
    updateProductServiceInsurance[key] = value;
    updateProductServiceInsurance[key1] = value1;
    updateProductServiceInsurance[key2] = value2;
    updateProductServiceInsurance[key3] = value3;
    set({ insurance_details: updateProductServiceInsurance });
  },

  updateStandardCoverage: (key: string, value: number) => {
    const updateProductServiceStandard = get().standard_warranty_details;
    updateProductServiceStandard[key] = value;
    set({ standard_warranty_details: updateProductServiceStandard });
  },

  updateAmcService: async (id: string | undefined, amc: any, callback: any = () => false) => {

    set({ loading: true, error: false, success: false });

    try {
      const updateProductData = get();

      const document: {
        amc_document_url: string;
      } = {
        amc_document_url: '',
      };

      if (typeof updateProductData?.amc_details?.amc_document_url === "string") {
        document.amc_document_url = updateProductData?.amc_details?.amc_document_url?.length > 0 ? updateProductData?.amc_details?.amc_document_url : [];
      } else if (Array.isArray(updateProductData?.amc_details?.amc_document_url)) {
        document.amc_document_url = updateProductData?.amc_details?.amc_document_url;
      } else {
        document.amc_document_url = (
          await UploadFiles([updateProductData?.amc_details?.amc_document_url])
        );
      }

      let payload: any;

      if (updateProductData?.no_amc) {
        payload = {
          user_product_id: id,
          amc_details: {
            is_amc_applicable: false,
          },
        };
      } else {
        payload = {
          user_product_id: id,
          amc_details: {
            amc_document_url: amc?.amc_details?.amc_document_url
              ?? document.amc_document_url,
            amc_serial_no: amc?.amc_details?.amc_serial_no
              ?? updateProductData?.amc_details?.amc_serial_no,
            amc_coverage: amc?.amc_details?.amc_coverage
              ?? updateProductData?.amc_details?.amc_coverage,
            amc_purchased_on: amc?.amc_details?.amc_purchased_on
              ?? updateProductData?.amc_details?.amc_purchased_on,
            amc_service_provider_name: amc?.amc_details?.amc_service_provider_name
              ?? updateProductData?.amc_details?.amc_service_provider_name,
            is_amc_applicable: true,
          },
        };
      }

      httpRequest('POST', `${envConfig.api_url}/products/add_amc_details`, payload, true)
        .catch((err) => {
          console.log('Error on add product: ', err);
          throw err;
        })
        .then(() => {
          callback();
          set({ success: true });
        });
    } catch (error) {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  updateInsuranceService: async (id: string | undefined, insurance: any, callback: any = () => false) => {
    set({ loading: true, error: false, success: false });

    try {

      const updateProductData = get();

      const document: {
        insurance_document_url: string;
      } = {
        insurance_document_url: '',
      };

      if (typeof updateProductData?.insurance_details?.insurance_document_url === "string") {
        document.insurance_document_url = updateProductData?.insurance_details?.insurance_document_url?.length > 0 ? updateProductData?.insurance_details?.insurance_document_url : [];
      } else if (Array.isArray(updateProductData?.insurance_details?.insurance_document_url)) {
        document.insurance_document_url = updateProductData?.insurance_details?.insurance_document_url;
      } else {
        document.insurance_document_url = (
          await UploadFiles([updateProductData?.insurance_details?.insurance_document_url])
        );
      }

      let payload: any;

      if (updateProductData?.no_insurance) {
        payload = {
          user_product_id: id,
          insurance_details: {
            is_insurance_applicable: false,
          },
        };
      } else {
        payload = {
          user_product_id: id,
          insurance_details: {
            insurance_document_url: insurance?.insurance_document_url
              ?? document.insurance_document_url,
            insurer_name: insurance?.insurance_details?.insurer_name
              ?? updateProductData?.insurance_details?.insurer_name,
            policy_no: insurance?.insurance_details?.policy_no
              ?? updateProductData?.insurance_details?.policy_no,
            insurance_purchased_on: insurance?.insurance_details?.insurance_purchased_on
              ?? updateProductData?.insurance_details?.insurance_purchased_on,
            insurance_start_date: insurance?.insurance_details?.insurance_start_date
              ?? updateProductData?.insurance_details?.insurance_start_date,
            insurance_coverage: insurance?.insurance_details?.insurance_coverage
              ?? updateProductData?.insurance_details?.insurance_coverage,
            insurance_coverage_type: insurance?.insurance_details?.insurance_coverage_type
              ?? updateProductData?.insurance_details?.insurance_coverage_type,
            is_insurance_applicable: true,
          },
        };
      }

      httpRequest('POST', `${envConfig.api_url}/products/create_insurance`, payload, true)
        .catch((err) => {
          console.log('Error on add product: ', err);
          throw err;
        })
        .then(() => {
          callback();
          set({ success: true });
        });
    } catch (error) {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  updateWarrantyService: async (id: string | undefined, callback: any = () => false) => {
    set({ loading: true, error: false, success: false });

    try {
      const updateProductData = get();

      const document: {
        warranty_document_url: string;
      } = {
        warranty_document_url: '',
      };

      if (typeof updateProductData.standard_warranty_details.warranty_document_url === "string" || Array.isArray(updateProductData.standard_warranty_details.warranty_document_url ?? [])) {
        document.warranty_document_url = updateProductData.standard_warranty_details.warranty_document_url;
      } else {
        document.warranty_document_url = (
          await UploadFiles([updateProductData.standard_warranty_details.warranty_document_url])
        );
      }

      const payload = {
        user_product_id: id,
        standard_warranty_details: {
          warranty_document_url: document.warranty_document_url,
          warranty_coverage_type: updateProductData?.standard_warranty_details?.warranty_coverage_type,
          warranty_coverage: updateProductData?.standard_warranty_details?.warranty_coverage,
          warranty_serial_no: updateProductData?.standard_warranty_details?.warranty_serial_no,
          is_std_warranty_applicable: true,
        },
      };

      httpRequest('POST', `${envConfig.api_url}/products/add_warranty_details`, payload, true)
        .catch((err) => {
          console.log('Error on add product: ', err);
          throw err;
        })
        .then(() => {
          callback();
          set({ success: true });
        });
    } catch (error) {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  updateExtWarrantyService: async (id: string | undefined, extended: any, callback: any = () => false) => {
    
    set({ loading: true, error: false, success: false });

    try {
      const updateProductData = get();

      const document: {
        extended_warranty_document_url: string;
      } = {
        extended_warranty_document_url: '',
      };

      if (typeof updateProductData.extended_warranty_details.warranty_document_url === "string") {
        document.extended_warranty_document_url =
          updateProductData.extended_warranty_details.warranty_document_url?.length > 0
            ? updateProductData.extended_warranty_details.warranty_document_url : [];
      } else if (Array.isArray(updateProductData.extended_warranty_details.warranty_document_url)) {
        document.extended_warranty_document_url =
          updateProductData.extended_warranty_details.warranty_document_url;
      } else {
        document.extended_warranty_document_url = (
          await UploadFiles([updateProductData.extended_warranty_details.warranty_document_url])
        );
      }

      let payload: any;

      if (updateProductData?.no_extWarranty) {
        payload = {
          user_product_id: id,
          extended_warranty_details: {
            is_ext_warranty_applicable: false,
          },
        };
      } else {
        payload = {
          user_product_id: id,
          extended_warranty_details: {
            service_provider_name: extended?.extended_warranty_details?.service_provider_name
              ?? updateProductData?.extended_warranty_details?.service_provider_name,
            warranty_document_url: extended?.extended_warranty_details?.warranty_document_url
              ?? document?.extended_warranty_document_url,
            warranty_coverage_type: extended?.extended_warranty_details?.warranty_coverage_type
              ?? updateProductData?.extended_warranty_details?.warranty_coverage_type,
            warranty_coverage: extended?.extended_warranty_details?.warranty_coverage
              ?? updateProductData?.extended_warranty_details?.warranty_coverage,
            extended_start_date: extended?.extended_warranty_details?.extended_start_date
              ?? updateProductData?.extended_warranty_details?.extended_start_date,
            warranty_serial_no: extended?.extended_warranty_details?.warranty_serial_no
              ?? updateProductData?.extended_warranty_details?.warranty_serial_no,
            is_ext_warranty_applicable: true,
          },
        };
      }

      httpRequest('POST', `${envConfig.api_url
        }/products/add_warranty_details`, payload, true)
        .catch((err) => {
          console.log('Error on add product: ', err);
          throw err;
        })
        .then(() => {
          callback();
          set({ success: true });
        });
    } catch (error) {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));

