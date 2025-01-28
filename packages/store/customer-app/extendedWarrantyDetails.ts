import { envConfig } from '@core/envconfig';
import { RightIcon } from '@core/ui/atoms/icons/productSearchIconsLists';
import { WrongIcon } from '@core/ui/atoms/icons/productSearchIconsLists';
import { httpRequest } from '@core/utils';
import { create } from 'zustand';

import { ExtendedWarrantyDetailsInterface } from '../interface';

export const useExtendedWarrantyDetails = create<ExtendedWarrantyDetailsInterface>((set) => ({
  nick_name: '',
  product_serial_no: '',
  product_id: '',
  category_type_id: '',
  standard_qus_and_ans: [],
  is_chat_bot: false,
  provider_logo: '',
  provider_name: '',
  warranty_id: '',
  warranty_document_url: '',
  is_extended: false,
  warranty_valid_from: '',
  warranty_valid_to: '',
  tabData: [],

  extendedWarrantyDetailsLoading: false,

  extendedWarrantyDetailsMessage: '',

  extendedWarrantyDetailsError: false,

  getExtendedWarrantyDetails: async (id: string) => {
    set({ extendedWarrantyDetailsLoading: true, extendedWarrantyDetailsError: true });
    try {
      await httpRequest(
        'post',
        `${envConfig.api_url}/products/get_ext_warranty_details_by_product_id`,
        {
          product_id: id,
        },
        true,
      )
        .then((res) => {
          const tabData = []
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
            ...res?.data?.data?.extended_warranty_details,
            tabData: tabData || [],
          });
          return res?.data?.data
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({ extendedWarrantyDetailsError: true });
    } finally {
      set({ extendedWarrantyDetailsLoading: false });
    }
  },
}));
