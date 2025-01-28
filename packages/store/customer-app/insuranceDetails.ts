import { envConfig } from '@core/envconfig';
import { RightIcon } from '@core/ui/atoms/icons/productSearchIconsLists';
import { WrongIcon } from '@core/ui/atoms/icons/productSearchIconsLists';
import { httpRequest } from '@core/utils';
import { create } from 'zustand';

import { InsuranceDetailsInterface } from '../interface';

export const useInsuranceDetails = create<InsuranceDetailsInterface>((set) => ({
  nick_name: '',
  product_serial_no: '',
  product_id: '',
  category_type_id: '',
  insurance_id: '',
  insurer_name: '',
  standard_qus_and_ans: [],
  is_chat_bot: false,
  insurance_document_url: '',
  insurance_start_date: '',
  insurance_policy_no: '',
  insurance_purchased_on: '',
  insurance_valid_from: '',
  insurance_valid_to: '',
  provider_name: '',
  provider_logo: '',
  tabData: [],

  insuranceDetailsLoading: false,

  insuranceDetailsMessage: '',

  insuranceDetailsError: false,

  getInsurancecDetails: async (id: string) => {
    set({ insuranceDetailsLoading: true, insuranceDetailsError: true });

    try {
      await httpRequest(
        'post',
        `${envConfig.api_url}/products/get_insurance_details_by_product_id`,
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
            ...res?.data?.data?.insurance_details,
            tabData: tabData || [],
          });
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({ insuranceDetailsError: true });
    } finally {
      set({ insuranceDetailsLoading: false });
    }
  },
}));
