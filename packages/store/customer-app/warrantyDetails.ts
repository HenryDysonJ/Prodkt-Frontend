import { envConfig } from '@core/envconfig';
import { RightIcon } from '@core/ui/atoms/icons/productSearchIconsLists';
import { WrongIcon } from '@core/ui/atoms/icons/productSearchIconsLists';
import { httpRequest } from '@core/utils';
import { create } from 'zustand';

import { WarrantyDetailsInterface } from '../interface';

export const useWarrantyDetails = create<WarrantyDetailsInterface>((set, get) => ({
  standardWarrantyState: {
    nick_name: '',
    provider_name: '',
    provider_logo: '',
    product_serial_no: '',
    is_chat_bot: false,
    standard_qus_and_ans: [],
    product_id: '',
    category_type_id: '',
    warranty_id: '',
    warranty_document_url: '',
    is_extended: false,
    warranty_valid_from: '',
    warranty_valid_to: '',
  },
  extendedWarrantyState: {
    nick_name: '',
    provider_name: '',
    provider_logo: '',
    product_serial_no: '',
    product_id: '',
    is_chat_bot: false,
    standard_qus_and_ans: [],
    category_type_id: '',
    warranty_id: '',
    warranty_document_url: '',
    is_extended: false,
    warranty_valid_from: '',
    warranty_valid_to: '',
  },
  tabData: [],

  warrantyDetailsLoading: false,

  warrantyDetailsMessage: '',

  warrantyDetailsError: false,

  getWarrantyDetails: async (id: string | undefined) => {
    set({ warrantyDetailsLoading: true, warrantyDetailsError: true });

    try {
      const { standardWarrantyState, extendedWarrantyState } = get();
      await httpRequest(
        'post',
        `${envConfig.api_url}/products/get_standard_warranty_details_by_product_id`,
        {
          product_id: id,
        },
        true,
      )
        .then((res) => {
          const tabData = [];
          if (Array.isArray(res?.data?.data?.inclusions) && res?.data?.data?.inclusions?.length > 0) {
            tabData.push({
              title: 'Inclusions',
              points: res?.data?.data?.inclusions?.map((inclusion: string) => {
                return {
                  pointIcon: RightIcon({}),
                  pointText: inclusion,
                };
              }),
            })
          }
          if (Array.isArray(res?.data?.data?.exclusions) && res?.data?.data?.exclusions?.length > 0) {
            tabData.push({
              title: 'Exclusions',
              points: res?.data?.data?.exclusions?.map((exclusion: string) => {
                return {
                  pointIcon: WrongIcon({}),
                  pointText: exclusion,
                };
              }),
            })
          }
          set({
            standardWarrantyState: {
              ...standardWarrantyState,
              ...res?.data?.data?.standard_warranty_details,
            },
            extendedWarrantyState: {
              ...extendedWarrantyState,
              ...res?.data?.data?.extended_warranty_details,
            },
            tabData: tabData || [],
          });

          return res?.data?.data
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({ warrantyDetailsError: true });
    } finally {
      set({ warrantyDetailsLoading: false });
    }
  },
}));