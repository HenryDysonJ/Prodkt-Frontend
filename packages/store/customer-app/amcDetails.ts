import { envConfig } from '@core/envconfig';
import { RightIcon } from '@core/ui/atoms/icons/productSearchIconsLists';
import { WrongIcon } from '@core/ui/atoms/icons/productSearchIconsLists';
import { httpRequest } from '@core/utils';
import { create } from 'zustand';

import { AmcDetailsInterface } from '../interface';

export const useAmcDetails = create<AmcDetailsInterface>((set) => ({
  nick_name: '',
  provider_name: '',
  provider_logo: '',
  product_serial_no: '',
  amc_id: '',
  standard_qus_and_ans: [],
  is_chat_bot: false,
  amc_document_url: '',
  amc_serial_no: '',
  amc_purchased_on: '',
  amc_valid_from: '',
  amc_valid_to: '',
  tabData: [],

  amcDetailsLoading: false,

  amcDetailsMessage: '',

  amcDetailsError: false,

  getAmcDetails: async (id: string) => {
    set({ amcDetailsLoading: true, amcDetailsError: true });

    try {
      await httpRequest(
        'post',
        `${envConfig.api_url}/products/get_amc_details_by_product_id`,
        {
          product_id: id,
        },
        true,
      )
        .then((res) => {
          let tabData = []

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
            ...res?.data?.data?.amc_details,
            tabData: tabData || [],
          });
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({ amcDetailsError: true });
    } finally {
      set({ amcDetailsLoading: false });
    }
  },
}));
