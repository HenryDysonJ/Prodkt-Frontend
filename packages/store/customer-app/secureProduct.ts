import { envConfig } from '@core/envconfig';
import { httpRequest } from '@core/utils';
import { create } from 'zustand';

import { SecureProductInterface } from '../interface';
const initialState = {
  nick_name: '',

  amc_details: {
    amc_provider: '',
    document_url: '',
    serial_no: '',
    amc_coverage: 0,
    purchased_on: '',
    valid_from: '',
    valid_to: '',
  },

  insurance_details: {
    document_url: '',
    insurer_name: '',
    policy_no: '',
    purchased_on: '',
    insurance_coverage: 0,
    coverage_type: '',
    valid_from: '',
    valid_to: '',
  },

  secureData:{},
  standard_warranty_details: {
    warranty_provider: '',
    document_url: '',
    coverage_type: '',
    warranty_coverage: 0,
    is_extended: false,
    valid_from: '',
    valid_to: '',
  },

  extended_warranty_details: {
    warranty_provider: '',
    document_url: '',
    coverage_type: '',
    warranty_coverage: 0,
    is_extended: false,
    valid_from: '',
    valid_to: '',
  },

  secureProductLoading: false,

  secureProductError: false,

  secureProductMessage: '',
};
export const useSecureProduct = create<SecureProductInterface>((set) => ({
  ...initialState,
  clear: () => {
    set({ ...initialState });
  },

  getSecureProduct: async (id: string) => {
    set({ secureProductLoading: true, secureProductError: true });
    try {
      await httpRequest(
        'post',
        `${envConfig.api_url}/products/secure_product_page_data`,
        {
          id: id || '',
        },
        true,
      )
        .then((res) => {
          set({
            secureData:res?.data?.data,
            nick_name: res?.data?.data?.nick_name,
            ...res?.data?.data,
          });
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({ secureProductError: true });
    } finally {
      set({ secureProductLoading: false });
    }
  },
}));
